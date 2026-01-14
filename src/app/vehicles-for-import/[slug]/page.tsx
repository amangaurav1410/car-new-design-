import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VehicleDetailClient from './VehicleDetailClient';
import { Vehicle } from '@/types/vehicle';

export async function generateStaticParams() {
    return [];
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getVehicle(slug: string): Promise<Vehicle | null> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    try {
        const res = await fetch(`${baseUrl}/api/vehicles/${slug}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            return null;
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        return null;
    }
}

async function getRelatedVehicles(vehicle: Vehicle): Promise<Vehicle[]> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    try {
        const params = new URLSearchParams({
            brand: vehicle.brand,
            limit: '3',
        });

        const res = await fetch(`${baseUrl}/api/vehicles?${params}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            return [];
        }

        const data = await res.json();
        // Filter out the current vehicle
        return data.vehicles.filter((v: Vehicle) => v._id !== vehicle._id).slice(0, 3);
    } catch (error) {
        console.error('Error fetching related vehicles:', error);
        return [];
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const vehicle = await getVehicle(slug);

    if (!vehicle) {
        return {
            title: 'Vehicle Not Found | UMZE Autohaus',
        };
    }

    const title = `${vehicle.year} ${vehicle.brand} ${vehicle.model}${vehicle.variant ? ` ${vehicle.variant}` : ''} | UMZE Autohaus`;
    const description = vehicle.description?.slice(0, 160) ||
        `Import this ${vehicle.year} ${vehicle.brand} ${vehicle.model} from ${vehicle.importSource}. Premium JDM import with full inspection and compliance.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: vehicle.images?.[0]?.url ? [vehicle.images[0].url] : [],
        },
    };
}

export default async function VehicleDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const vehicle = await getVehicle(slug);

    if (!vehicle) {
        notFound();
    }

    const relatedVehicles = await getRelatedVehicles(vehicle);

    return <VehicleDetailClient vehicle={vehicle} relatedVehicles={relatedVehicles} />;
}
