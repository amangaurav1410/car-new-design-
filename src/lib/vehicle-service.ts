import connectDB from '@/lib/db';
import Vehicle from '@/lib/models/Vehicle';
import { Vehicle as VehicleType } from '@/types/vehicle';

export interface GetVehiclesOptions {
    page?: number;
    limit?: number;
    search?: string;
    brand?: string;
    model?: string;
    yearMin?: number;
    yearMax?: number;
    priceMin?: number;
    priceMax?: number;
    mileageMin?: number;
    mileageMax?: number;
    transmission?: string;
    fuelType?: string;
    listingType?: string;
    status?: string;
    featured?: boolean;
    includeAll?: boolean; // For admin (includes drafts)
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

export interface VehicleResponse {
    vehicles: VehicleType[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export async function getVehicles(options: GetVehiclesOptions): Promise<VehicleResponse> {
    await connectDB();

    const {
        page = 1,
        limit = 12,
        search,
        brand,
        model,
        yearMin,
        yearMax,
        priceMin,
        priceMax,
        mileageMin,
        mileageMax,
        transmission,
        fuelType,
        listingType,
        status,
        featured,
        includeAll = false,
        sortBy = 'createdAt',
        sortOrder = 'desc'
    } = options;

    const skip = (page - 1) * limit;
    const query: any = {};

    // Text search
    if (search) {
        query.$text = { $search: search };
    }

    // Exact matches
    if (brand) query.brand = brand;
    if (model) query.model = model;
    if (transmission) query.transmission = transmission;
    if (fuelType) query.fuelType = fuelType;
    if (listingType) query.listingType = listingType;
    if (status) query.status = status;
    if (featured) query.featured = true;

    // Published status
    if (!includeAll) {
        query.published = true;
    }

    // Ranges
    if (yearMin || yearMax) {
        query.year = {};
        if (yearMin) query.year.$gte = yearMin;
        if (yearMax) query.year.$lte = yearMax;
    }

    // Price Logic (Handling both single price and range)
    if (priceMin || priceMax) {
        const min = priceMin || 0;
        const max = priceMax || Number.MAX_SAFE_INTEGER;

        query.$or = [
            { price: { $gte: min, $lte: max } },
            {
                $and: [
                    { priceMin: { $lte: max } },
                    { priceMax: { $gte: min } }
                ]
            }
        ];
    }

    // Mileage Logic (Handling both single mileage and range)
    if (mileageMin || mileageMax) {
        const min = mileageMin || 0;
        const max = mileageMax || Number.MAX_SAFE_INTEGER;

        const mileageCondition = {
            $or: [
                { mileage: { $gte: min, $lte: max } },
                {
                    $and: [
                        { mileageMin: { $lte: max } },
                        { mileageMax: { $gte: min } }
                    ]
                }
            ]
        };

        if (query.$or) {
            query.$and = [{ $or: query.$or }, mileageCondition];
            delete query.$or;
        } else {
            query.$or = mileageCondition.$or;
        }
    }

    const sort: Record<string, 1 | -1> = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };

    const [vehicles, total] = await Promise.all([
        Vehicle.find(query)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .lean(),
        Vehicle.countDocuments(query)
    ]);

    return {
        vehicles: JSON.parse(JSON.stringify(vehicles)), // Serialize for Next.js
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
    };
}
