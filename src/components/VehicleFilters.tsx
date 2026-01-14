'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { LISTING_TYPE_LABELS } from '@/types/vehicle';

interface FilterOptions {
    brands: string[];
    modelsByBrand: Record<string, string[]>;
    transmissions: string[];
    fuelTypes: string[];
    listingTypes: string[];
    priceRange: { min: number; max: number };
    mileageRange: { min: number; max: number };
    yearRange: { min: number; max: number };
}

interface VehicleFiltersProps {
    filterOptions: FilterOptions;
    isLoading?: boolean;
}

export default function VehicleFilters({ filterOptions, isLoading }: VehicleFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get current filter values from URL
    const currentBrand = searchParams.get('brand') || '';
    const currentModel = searchParams.get('model') || '';
    const currentYearMin = searchParams.get('yearMin') || '';
    const currentYearMax = searchParams.get('yearMax') || '';
    const currentPriceMin = searchParams.get('priceMin') || '';
    const currentPriceMax = searchParams.get('priceMax') || '';
    const currentTransmission = searchParams.get('transmission') || '';
    const currentFuelType = searchParams.get('fuelType') || '';
    const currentListingType = searchParams.get('listingType') || '';

    // Update URL with new filters
    const updateFilters = useCallback((updates: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            if (value === null || value === '') {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        // Reset to page 1 when filters change
        params.delete('page');

        router.push(`/vehicles-for-import?${params.toString()}`, { scroll: false });
    }, [router, searchParams]);

    // Clear all filters
    const clearFilters = () => {
        router.push('/vehicles-for-import', { scroll: false });
    };

    // Check if any filters are active
    const hasActiveFilters = currentBrand || currentModel || currentYearMin || currentYearMax ||
        currentPriceMin || currentPriceMax || currentTransmission || currentFuelType || currentListingType;

    // Get models for selected brand
    const availableModels = currentBrand ? (filterOptions.modelsByBrand[currentBrand] || []) : [];

    // Generate year options
    const yearOptions = [];
    for (let year = filterOptions.yearRange.max; year >= filterOptions.yearRange.min; year--) {
        yearOptions.push(year);
    }

    return (
        <div className="bg-gradient-to-br from-[#25614F]/10 to-[#25614F]/5 rounded-2xl p-6 border border-[#25614F]/30">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#EAE2D6] font-bold text-xl">Filter Vehicles</h3>
                {hasActiveFilters && (
                    <button
                        onClick={clearFilters}
                        className="text-sm text-[#25614F] hover:text-[#66E5C4] transition-colors flex items-center gap-1"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Clear All
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Brand */}
                <div>
                    <label className="block text-sm text-[#A9AAAE] mb-2">Brand</label>
                    <select
                        value={currentBrand}
                        onChange={(e) => updateFilters({ brand: e.target.value, model: null })}
                        disabled={isLoading}
                        className="w-full bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm disabled:opacity-50"
                    >
                        <option value="">All Brands</option>
                        {filterOptions.brands.map((brand) => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>

                {/* Model (dependent on Brand) */}
                <div>
                    <label className="block text-sm text-[#A9AAAE] mb-2">Model</label>
                    <select
                        value={currentModel}
                        onChange={(e) => updateFilters({ model: e.target.value })}
                        disabled={isLoading || !currentBrand}
                        className="w-full bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm disabled:opacity-50"
                    >
                        <option value="">All Models</option>
                        {availableModels.map((model) => (
                            <option key={model} value={model}>{model}</option>
                        ))}
                    </select>
                </div>

                {/* Year Range */}
                <div>
                    <label className="block text-sm text-[#A9AAAE] mb-2">Year</label>
                    <div className="flex gap-2">
                        <select
                            value={currentYearMin}
                            onChange={(e) => updateFilters({ yearMin: e.target.value })}
                            disabled={isLoading}
                            className="w-1/2 bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-3 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm text-sm disabled:opacity-50"
                        >
                            <option value="">From</option>
                            {yearOptions.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <select
                            value={currentYearMax}
                            onChange={(e) => updateFilters({ yearMax: e.target.value })}
                            disabled={isLoading}
                            className="w-1/2 bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-3 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm text-sm disabled:opacity-50"
                        >
                            <option value="">To</option>
                            {yearOptions.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Price Range */}
                <div>
                    <label className="block text-sm text-[#A9AAAE] mb-2">Price (AUD)</label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            placeholder="Min"
                            value={currentPriceMin}
                            onChange={(e) => updateFilters({ priceMin: e.target.value })}
                            disabled={isLoading}
                            className="w-1/2 bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-3 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm text-sm placeholder-[#A9AAAE]/50 disabled:opacity-50"
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={currentPriceMax}
                            onChange={(e) => updateFilters({ priceMax: e.target.value })}
                            disabled={isLoading}
                            className="w-1/2 bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-3 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm text-sm placeholder-[#A9AAAE]/50 disabled:opacity-50"
                        />
                    </div>
                </div>

                {/* Transmission */}
                <div>
                    <label className="block text-sm text-[#A9AAAE] mb-2">Transmission</label>
                    <select
                        value={currentTransmission}
                        onChange={(e) => updateFilters({ transmission: e.target.value })}
                        disabled={isLoading}
                        className="w-full bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm disabled:opacity-50"
                    >
                        <option value="">All</option>
                        {filterOptions.transmissions.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {/* Fuel Type */}
                <div>
                    <label className="block text-sm text-[#A9AAAE] mb-2">Fuel Type</label>
                    <select
                        value={currentFuelType}
                        onChange={(e) => updateFilters({ fuelType: e.target.value })}
                        disabled={isLoading}
                        className="w-full bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm disabled:opacity-50"
                    >
                        <option value="">All</option>
                        {filterOptions.fuelTypes.map((f) => (
                            <option key={f} value={f}>{f}</option>
                        ))}
                    </select>
                </div>

                {/* Listing Type */}
                <div>
                    <label className="block text-sm text-[#A9AAAE] mb-2">Listing Type</label>
                    <select
                        value={currentListingType}
                        onChange={(e) => updateFilters({ listingType: e.target.value })}
                        disabled={isLoading}
                        className="w-full bg-[#0F1614]/50 border border-[#25614F]/30 rounded-xl px-4 py-3 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none backdrop-blur-sm disabled:opacity-50"
                    >
                        <option value="">All Types</option>
                        <option value="Order It">Order It (Custom Import)</option>
                        <option value="Secure It">Secure It (In Transit)</option>
                        <option value="Buy It">Buy It (In Stock)</option>
                    </select>
                </div>

                {/* Active Filters Display */}
                {hasActiveFilters && (
                    <div className="flex items-end">
                        <div className="flex flex-wrap gap-2">
                            {currentBrand && (
                                <span className="bg-[#25614F] text-[#EAE2D6] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    {currentBrand}
                                    <button onClick={() => updateFilters({ brand: null, model: null })} className="hover:text-red-400">×</button>
                                </span>
                            )}
                            {currentListingType && (
                                <span className="bg-[#25614F] text-[#EAE2D6] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    {LISTING_TYPE_LABELS[currentListingType as keyof typeof LISTING_TYPE_LABELS]}
                                    <button onClick={() => updateFilters({ listingType: null })} className="hover:text-red-400">×</button>
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
