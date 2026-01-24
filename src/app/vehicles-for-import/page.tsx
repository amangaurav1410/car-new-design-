import { Suspense } from 'react';
import { Metadata } from 'next';
import VehicleListingClient from './VehicleListingClient';
import { getVehicles } from '@/lib/vehicle-service';
import { getFilterOptions } from '@/lib/vehicle-data';

export const metadata: Metadata = {
  title: 'Stock | UMZE Autohaus',
  description: 'Browse in-stock vehicles, secure incoming arrivals, or order a custom import. Premium Japanese and European vehicles curated for Australian buyers.',
  openGraph: {
    title: 'Stock | UMZE Autohaus',
    description: 'Browse BUY IT, SECURE IT, and ORDER IT vehicles from UMZE Autohaus.',
    type: 'website',
  },
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function VehiclesForImportPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;

  return (
    <Suspense fallback={<LoadingState />}>
      <VehicleListingData searchParams={resolvedParams} />
    </Suspense>
  );
}

async function VehicleListingData({ searchParams }: { searchParams: any }) {
  // Parse params for service
  const serviceParams = {
    page: searchParams.page ? parseInt(searchParams.page as string) : 1,
    limit: 12,
    search: searchParams.search as string,
    brand: searchParams.brand as string,
    model: searchParams.model as string,
    yearMin: searchParams.yearMin ? parseInt(searchParams.yearMin as string) : undefined,
    yearMax: searchParams.yearMax ? parseInt(searchParams.yearMax as string) : undefined,
    priceMin: searchParams.priceMin ? parseInt(searchParams.priceMin as string) : undefined,
    priceMax: searchParams.priceMax ? parseInt(searchParams.priceMax as string) : undefined,
    mileageMin: searchParams.mileageMin ? parseInt(searchParams.mileageMin as string) : undefined,
    mileageMax: searchParams.mileageMax ? parseInt(searchParams.mileageMax as string) : undefined,
    transmission: searchParams.transmission as string,
    fuelType: searchParams.fuelType as string,
    listingType: searchParams.listingType as string,
    status: searchParams.status as string,
    featured: searchParams.featured === 'true',
    sortBy: searchParams.sortBy as string,
    sortOrder: (searchParams.sortOrder as 'asc' | 'desc') || 'desc',
    includeAll: false
  };

  const [vehicles, filters] = await Promise.all([
    getVehicles(serviceParams),
    getFilterOptions()
  ]);

  return (
    <VehicleListingClient
      initialVehicles={vehicles}
      filterOptions={filters}
    />
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