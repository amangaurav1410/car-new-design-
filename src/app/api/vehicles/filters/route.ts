import { NextResponse } from 'next/server';
export const dynamic = 'force-static';
import connectDB from '@/lib/db';
import Vehicle from '@/lib/models/Vehicle';

// GET /api/vehicles/filters - Get unique filter values from database
export async function GET() {
    try {
        await connectDB();

        // Get unique values for all filterable fields (only from published vehicles)
        const [
            brands,
            transmissions,
            fuelTypes,
            listingTypes,
            priceStats,
            mileageStats,
            yearStats
        ] = await Promise.all([
            // Unique brands
            Vehicle.distinct('brand', { published: true }),

            // Unique transmissions
            Vehicle.distinct('transmission', { published: true, transmission: { $ne: null } }),

            // Unique fuel types
            Vehicle.distinct('fuelType', { published: true, fuelType: { $ne: null } }),

            // Unique listing types
            Vehicle.distinct('listingType', { published: true }),

            // Price range
            Vehicle.aggregate([
                { $match: { published: true } },
                {
                    $group: {
                        _id: null,
                        minPrice: {
                            $min: {
                                $cond: [
                                    { $ifNull: ['$price', false] },
                                    '$price',
                                    '$priceMin'
                                ]
                            }
                        },
                        maxPrice: {
                            $max: {
                                $cond: [
                                    { $ifNull: ['$price', false] },
                                    '$price',
                                    '$priceMax'
                                ]
                            }
                        }
                    }
                }
            ]),

            // Mileage range
            Vehicle.aggregate([
                { $match: { published: true } },
                {
                    $group: {
                        _id: null,
                        minMileage: {
                            $min: {
                                $cond: [
                                    { $ifNull: ['$mileage', false] },
                                    '$mileage',
                                    '$mileageMin'
                                ]
                            }
                        },
                        maxMileage: {
                            $max: {
                                $cond: [
                                    { $ifNull: ['$mileage', false] },
                                    '$mileage',
                                    '$mileageMax'
                                ]
                            }
                        }
                    }
                }
            ]),

            // Year range
            Vehicle.aggregate([
                { $match: { published: true } },
                {
                    $group: {
                        _id: null,
                        minYear: { $min: '$year' },
                        maxYear: { $max: '$year' }
                    }
                }
            ])
        ]);

        // Get models grouped by brand
        const modelsByBrand = await Vehicle.aggregate([
            { $match: { published: true } },
            {
                $group: {
                    _id: '$brand',
                    models: { $addToSet: '$model' }
                }
            },
            {
                $project: {
                    brand: '$_id',
                    models: { $sortArray: { input: '$models', sortBy: 1 } },
                    _id: 0
                }
            }
        ]);

        // Transform to a map for easier frontend access
        const modelsMap: Record<string, string[]> = {};
        modelsByBrand.forEach(item => {
            modelsMap[item.brand] = item.models;
        });

        return NextResponse.json({
            brands: brands.sort(),
            modelsByBrand: modelsMap,
            transmissions: transmissions.sort(),
            fuelTypes: fuelTypes.sort(),
            listingTypes: listingTypes.sort(),
            priceRange: {
                min: priceStats[0]?.minPrice || 0,
                max: priceStats[0]?.maxPrice || 100000
            },
            mileageRange: {
                min: mileageStats[0]?.minMileage || 0,
                max: mileageStats[0]?.maxMileage || 300000
            },
            yearRange: {
                min: yearStats[0]?.minYear || 1990,
                max: yearStats[0]?.maxYear || new Date().getFullYear()
            }
        });
    } catch (error) {
        console.error('Error fetching filter options:', error);
        return NextResponse.json(
            { error: 'Failed to fetch filter options' },
            { status: 500 }
        );
    }
}
