import { Suspense } from 'react';
import { Metadata } from 'next';
import VehicleListingClient from './VehicleListingClient';
import { getVehicles } from '@/lib/vehicle-service';
import { getFilterOptions } from '@/lib/vehicle-data';

export const metadata: Metadata = {
  title: 'Vehicles for Import | UMZE Autohaus',
  description: 'Browse premium JDM, US, and UK import vehicles. Filter by brand, model, year, price, and more. Order custom imports, secure in-transit vehicles, or buy in-stock cars.',
  openGraph: {
    title: 'Vehicles for Import | UMZE Autohaus',
    description: 'Browse premium JDM imports - verified, inspected, and sourced from trusted global auctions.',
    type: 'website',
  },
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function VehiclesForImportPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;

  // Parse params for service
  const serviceParams = {
    page: resolvedParams.page ? parseInt(resolvedParams.page as string) : 1,
    limit: 12,
    search: resolvedParams.search as string,
    brand: resolvedParams.brand as string,
    model: resolvedParams.model as string,
    yearMin: resolvedParams.yearMin ? parseInt(resolvedParams.yearMin as string) : undefined,
    yearMax: resolvedParams.yearMax ? parseInt(resolvedParams.yearMax as string) : undefined,
    priceMin: resolvedParams.priceMin ? parseInt(resolvedParams.priceMin as string) : undefined,
    priceMax: resolvedParams.priceMax ? parseInt(resolvedParams.priceMax as string) : undefined,
    mileageMin: resolvedParams.mileageMin ? parseInt(resolvedParams.mileageMin as string) : undefined,
    mileageMax: resolvedParams.mileageMax ? parseInt(resolvedParams.mileageMax as string) : undefined,
    transmission: resolvedParams.transmission as string,
    fuelType: resolvedParams.fuelType as string,
    listingType: resolvedParams.listingType as string,
    status: resolvedParams.status as string,
    featured: resolvedParams.featured === 'true',
    sortBy: resolvedParams.sortBy as string,
    sortOrder: (resolvedParams.sortOrder as 'asc' | 'desc') || 'desc',
    includeAll: false
  };

  const [vehicles, filters] = await Promise.all([
    getVehicles(serviceParams),
    getFilterOptions()
  ]);

  return (
    <Suspense fallback={<LoadingState />}>
      <VehicleListingClient
        initialVehicles={vehicles}
        filterOptions={filters}
      />
    </Suspense>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-carbon flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin h-12 w-12 border-4 border-[#25614F] border-t-transparent rounded-full mx-auto"></div>
        <p className="text-[#A9AAAE] mt-4">Loading vehicles...</p>
      </div>
    </div>
  );
}