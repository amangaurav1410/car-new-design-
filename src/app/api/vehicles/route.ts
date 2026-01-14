import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import connectDB from '@/lib/db';
import Vehicle from '@/lib/models/Vehicle';
import { verifyToken } from '@/lib/auth';
import { getVehicles } from '@/lib/vehicle-service';

// GET /api/vehicles - List vehicles with filtering and pagination
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;

        // Extract parameters
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '12');
        const search = searchParams.get('search') || undefined;
        const brand = searchParams.get('brand') || undefined;
        const model = searchParams.get('model') || undefined;
        const yearMin = searchParams.get('yearMin') ? parseInt(searchParams.get('yearMin')!) : undefined;
        const yearMax = searchParams.get('yearMax') ? parseInt(searchParams.get('yearMax')!) : undefined;
        const priceMin = searchParams.get('priceMin') ? parseInt(searchParams.get('priceMin')!) : undefined;
        const priceMax = searchParams.get('priceMax') ? parseInt(searchParams.get('priceMax')!) : undefined;
        const mileageMin = searchParams.get('mileageMin') ? parseInt(searchParams.get('mileageMin')!) : undefined;
        const mileageMax = searchParams.get('mileageMax') ? parseInt(searchParams.get('mileageMax')!) : undefined;
        const transmission = searchParams.get('transmission') || undefined;
        const fuelType = searchParams.get('fuelType') || undefined;
        const listingType = searchParams.get('listingType') || undefined;
        const status = searchParams.get('status') || undefined;
        const featured = searchParams.get('featured') === 'true';
        const includeAll = searchParams.get('includeAll') === 'true'; // For admin
        const sortBy = searchParams.get('sortBy') || 'createdAt';
        const sortOrder = (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc';

        const result = await getVehicles({
            page,
            limit,
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
            includeAll,
            sortBy,
            sortOrder
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        return NextResponse.json(
            { error: 'Failed to fetch vehicles' },
            { status: 500 }
        );
    }
}

// POST /api/vehicles - Create new vehicle (admin only)
export async function POST(request: NextRequest) {
    try {
        // Verify admin auth
        const authHeader = request.headers.get('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
        }

        await connectDB();

        const body = await request.json();

        // Validate required fields
        if (!body.brand || !body.model || !body.year || !body.listingType || !body.title) {
            return NextResponse.json(
                { error: 'Missing required fields: brand, model, year, listingType, title' },
                { status: 400 }
            );
        }

        // Create the vehicle
        const vehicle = await Vehicle.create(body);

        return NextResponse.json(vehicle, { status: 201 });
    } catch (error) {
        console.error('Error creating vehicle:', error);
        return NextResponse.json(
            { error: 'Failed to create vehicle' },
            { status: 500 }
        );
    }
}
