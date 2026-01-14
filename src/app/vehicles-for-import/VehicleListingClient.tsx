'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import VehicleCard from '@/components/VehicleCard';
import VehicleFilters from '@/components/VehicleFilters';
import { Vehicle, VehicleListResponse } from '@/types/vehicle';

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

interface VehicleListingClientProps {
    initialVehicles: VehicleListResponse;
    filterOptions: FilterOptions;
}

export default function VehicleListingClient({ initialVehicles, filterOptions }: VehicleListingClientProps) {
    const searchParams = useSearchParams();
    const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles.vehicles);
    const [total, setTotal] = useState(initialVehicles.total);
    const [totalPages, setTotalPages] = useState(initialVehicles.totalPages);
    const [currentPage, setCurrentPage] = useState(initialVehicles.page);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch vehicles when search params change
    const fetchVehicles = useCallback(async () => {
        setIsLoading(true);

        try {
            const res = await fetch(`/api/vehicles?${searchParams.toString()}`);
            if (res.ok) {
                const data: VehicleListResponse = await res.json();
                setVehicles(data.vehicles);
                setTotal(data.total);
                setTotalPages(data.totalPages);
                setCurrentPage(data.page);
            }
        } catch (error) {
            console.error('Error fetching vehicles:', error);
        }

        setIsLoading(false);
    }, [searchParams]);

    // Refetch when search params change (after initial render)
    useEffect(() => {
        // Skip initial fetch since we have SSR data
        if (searchParams.toString() !== '') {
            fetchVehicles();
        }
    }, [searchParams, fetchVehicles]);

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Japanese sports cars collection"
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30 backdrop-blur-sm"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></div>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Premium Imports</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Browse Vehicles Ready for Import to Australia
                        </h1>
                        <div className="flex justify-center gap-4 mb-8">
                            <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
                            <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
                            <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
                        </div>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-[#EAE2D6] leading-relaxed drop-shadow-lg font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Premium JDM, US, and UK imports — verified, inspected, and sourced from trusted global auctions.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <motion.a
                            href="/view-auctions"
                            className="bg-[#25614F] text-[#EAE2D6] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300 shadow-xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Live Auctions
                        </motion.a>

                        <motion.a
                            href="/import-now"
                            className="border-2 border-[#EAE2D6]/80 text-[#EAE2D6] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#EAE2D6] hover:text-[#25614F] transition-all duration-300 shadow-xl backdrop-blur-sm bg-[#EAE2D6]/5"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Import Assistance
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-16 bg-[#0F1614] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <VehicleFilters filterOptions={filterOptions} isLoading={isLoading} />
                    </motion.div>
                </div>
            </section>

            {/* Vehicle Grid */}
            <section className="py-32 bg-carbon relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(37,97,79,0.15) 1px, transparent 0)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Available Vehicles
                        </h2>
                        <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
                        <div className="w-16 h-1 bg-[#25614F]/50 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-[#BDB6AD] max-w-3xl mx-auto">
                            {total > 0 ? `${total} premium vehicles ready for Australian import` : 'No vehicles found matching your criteria'}
                        </p>
                    </motion.div>

                    {/* Loading Overlay */}
                    {isLoading && (
                        <div className="flex justify-center py-12">
                            <div className="animate-spin h-10 w-10 border-4 border-[#25614F] border-t-transparent rounded-full"></div>
                        </div>
                    )}

                    {/* Vehicle Grid */}
                    {!isLoading && vehicles.length > 0 && (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {vehicles.map((vehicle) => (
                                <motion.div key={vehicle._id} variants={fadeInUp}>
                                    <VehicleCard vehicle={vehicle} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Empty State */}
                    {!isLoading && vehicles.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-6 bg-[#25614F]/20 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4">No vehicles found</h3>
                            <p className="text-[#BDB6AD] mb-6">Try adjusting your filters or clearing them to see all vehicles.</p>
                            <a
                                href="/vehicles-for-import"
                                className="inline-flex items-center gap-2 text-[#25614F] hover:text-[#66E5C4] font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Clear all filters
                            </a>
                        </div>
                    )}

                    {/* Pagination */}
                    {!isLoading && totalPages > 1 && (
                        <div className="flex justify-center gap-2 mt-16">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <a
                                    key={page}
                                    href={`/vehicles-for-import?${new URLSearchParams({ ...Object.fromEntries(searchParams), page: page.toString() }).toString()}`}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${page === currentPage
                                        ? 'bg-[#25614F] text-[#EAE2D6]'
                                        : 'bg-[#0F1614] text-[#A9AAAE] border border-[#25614F]/30 hover:border-[#25614F] hover:text-[#EAE2D6]'
                                        }`}
                                >
                                    {page}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Why Import With Us */}
            <section className="py-32 bg-[#0F1614] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAE2D6]">
                            Why Import With Us
                        </h3>
                        <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
                        <div className="w-16 h-1 bg-[#25614F]/50 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-[#BDB6AD] max-w-2xl mx-auto">
                            Experience the difference with our premium import service
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {[
                            'Transparent landed cost',
                            'Full inspection report',
                            'Photos, underbody checks & rust inspection',
                            'Shipping, customs, GST & compliance included'
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 text-[#BDB6AD] bg-gradient-to-br from-[#25614F]/10 to-[#25614F]/5 rounded-xl p-6 border border-[#25614F]/30"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-[#25614F] rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="leading-relaxed pt-1">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-[#25614F] via-[#25614F]/95 to-[#1e4f3f] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Can&apos;t find the car you want?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-[#EAE2D6]/90 mb-12 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We can source it directly for you from our extensive network of global auctions and suppliers.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.a
                            href="/import-now"
                            className="bg-[#EAE2D6] text-[#25614F] px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Request Custom Search</span>
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
