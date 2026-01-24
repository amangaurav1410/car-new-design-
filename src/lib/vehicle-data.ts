import { unstable_cache } from 'next/cache';
import connectDB from './db';
import Vehicle from './models/Vehicle';

import { getVehicles as getVehiclesService } from './vehicle-service';

export async function getVehicles(searchParams: Record<string, string | string[] | undefined> = {}) {
    return getVehiclesService({
        published: true, // Default to published only
        limit: 12,
        page: 1
    } as any);
}

// Internal function to fetch data from DB
async function fetchFilterOptions() {
    await connectDB();

    const [
        brands,
        transmissions,
        fuelTypes,
        listingTypes,
        priceStats,
        mileageStats,
        yearStats
    ] = await Promise.all([
        Vehicle.distinct('brand', { published: true }),
        Vehicle.distinct('transmission', { published: true, transmission: { $ne: null } }),
        Vehicle.distinct('fuelType', { published: true, fuelType: { $ne: null } }),
        Vehicle.distinct('listingType', { published: true }),
        Vehicle.aggregate([
            { $match: { published: true } },
            {
                $group: {
                    _id: null,
                    minPrice: { $min: { $cond: [{ $ifNull: ['$price', false] }, '$price', '$priceMin'] } },
                    maxPrice: { $max: { $cond: [{ $ifNull: ['$price', false] }, '$price', '$priceMax'] } }
                }
            }
        ]),
        Vehicle.aggregate([
            { $match: { published: true } },
            {
                $group: {
                    _id: null,
                    minMileage: { $min: { $cond: [{ $ifNull: ['$mileage', false] }, '$mileage', '$mileageMin'] } },
                    maxMileage: { $max: { $cond: [{ $ifNull: ['$mileage', false] }, '$mileage', '$mileageMax'] } }
                }
            }
        ]),
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

    const modelsByBrand = await Vehicle.aggregate([
        { $match: { published: true } },
        { $group: { _id: '$brand', models: { $addToSet: '$model' } } },
        { $project: { brand: '$_id', models: { $sortArray: { input: '$models', sortBy: 1 } }, _id: 0 } }
    ]);

    const modelsMap: Record<string, string[]> = {};
    modelsByBrand.forEach(item => { modelsMap[item.brand] = item.models; });

    return {
        brands: brands.sort(),
        modelsByBrand: modelsMap,
        transmissions: transmissions.sort(),
        fuelTypes: fuelTypes.sort(),
        listingTypes: listingTypes.sort(),
        priceRange: { min: priceStats[0]?.minPrice || 0, max: priceStats[0]?.maxPrice || 100000 },
        mileageRange: { min: mileageStats[0]?.minMileage || 0, max: mileageStats[0]?.maxMileage || 300000 },
        yearRange: { min: yearStats[0]?.minYear || 1990, max: yearStats[0]?.maxYear || new Date().getFullYear() }
    };
}

// Cached version of filter options
export const getFilterOptions = unstable_cache(
    async () => fetchFilterOptions(),
    ['filter-options'],
    { revalidate: 3600, tags: ['vehicles', 'filters'] }
);
