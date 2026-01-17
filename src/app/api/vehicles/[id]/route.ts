import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
    return [];
}

import connectDB from '@/lib/db';
import Vehicle from '@/lib/models/Vehicle';
import { verifyToken } from '@/lib/auth';

interface RouteParams {
    params: Promise<{ id: string }>;
}

// GET /api/vehicles/[id] - Get single vehicle by ID
export async function GET(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        await connectDB();

        const { id } = await params;

        // Find by ID
        const vehicle = await Vehicle.findById(id).lean();

        if (!vehicle) {
            return NextResponse.json(
                { error: 'Vehicle not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(vehicle);
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        return NextResponse.json(
            { error: 'Failed to fetch vehicle' },
            { status: 500 }
        );
    }
}

// PUT /api/vehicles/[id] - Update vehicle (admin only)
export async function PUT(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        // Verify admin auth
        // Verify admin auth
        const authHeader = request.headers.get('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.warn('PUT /api/vehicles/[id] - Missing or invalid auth header:', authHeader);
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            console.warn('PUT /api/vehicles/[id] - Token verification failed. Token suffix:', token.slice(-6));
            return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
        }

        await connectDB();

        const { id } = await params;
        const body = await request.json();

        // Remove fields that shouldn't be updated directly
        delete body._id;
        delete body.createdAt;

        // Update the vehicle
        const vehicle = await Vehicle.findByIdAndUpdate(
            id,
            { ...body, updatedAt: new Date() },
            { new: true, runValidators: true }
        ).lean();

        if (!vehicle) {
            return NextResponse.json(
                { error: 'Vehicle not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(vehicle);
    } catch (error) {
        console.error('Error updating vehicle:', error);
        return NextResponse.json(
            { error: 'Failed to update vehicle' },
            { status: 500 }
        );
    }
}

// DELETE /api/vehicles/[id] - Delete vehicle (admin only)
export async function DELETE(
    request: NextRequest,
    { params }: RouteParams
) {
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

        const { id } = await params;

        const vehicle = await Vehicle.findByIdAndDelete(id);

        if (!vehicle) {
            return NextResponse.json(
                { error: 'Vehicle not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        return NextResponse.json(
            { error: 'Failed to delete vehicle' },
            { status: 500 }
        );
    }
}
