'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import VehicleCard from '@/components/VehicleCard';
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
    const [isLoading, setIsLoading] = useState(false);

    // Fetch vehicles when search params change
    const fetchVehicles = useCallback(async () => {
        setIsLoading(true);

        try {
            const res = await fetch(`/api/vehicles?${searchParams.toString()}`);
            if (res.ok) {
                const data: VehicleListResponse = await res.json();
                setVehicles(data.vehicles);
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

    // Group vehicles by listing type
    const buyItVehicles = vehicles.filter(v => v.listingType === 'IN_STOCK');
    const secureItVehicles = vehicles.filter(v => v.listingType === 'IN_TRANSIT');
    const orderItVehicles = vehicles.filter(v => v.listingType === 'AVAILABLE_TO_ORDER');

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
            <section className="relative text-white min-h-[70vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="UMZE Autohaus Stock"
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10 py-20">
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
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Curated Collection</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Stock
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto mb-8"></div>

                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-[#EAE2D6] leading-relaxed drop-shadow-lg font-light">
                            Browse in-stock vehicles, secure incoming arrivals, or order a custom import.
                        </p>

                        {/* Listing Type Explanation */}
                        <motion.div
                            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <div className="bg-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-600/40">
                                <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">BUY IT</div>
                                <p className="text-[#EAE2D6] text-sm leading-relaxed">Vehicles in stock and ready to purchase</p>
                            </div>
                            <div className="bg-amber-600/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-600/40">
                                <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">SECURE IT</div>
                                <p className="text-[#EAE2D6] text-sm leading-relaxed">Vehicles already purchased and currently in transit</p>
                            </div>
                            <div className="bg-slate-600/20 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/40">
                                <div className="inline-block bg-slate-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">ORDER IT</div>
                                <p className="text-[#EAE2D6] text-sm leading-relaxed">Custom imports sourced on request (indicative pricing)</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* BUY IT Section */}
            <section className="py-24 bg-[#0F1614] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34,197,94,0.15) 1px, transparent 0)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-green-600 text-white px-6 py-2 rounded-full text-lg font-bold">BUY IT</div>
                            <div className="flex-1 h-px bg-gradient-to-r from-green-600/50 to-transparent"></div>
                        </div>
                        <p className="text-[#BDB6AD] text-lg">Vehicles physically in Australia • Final pricing shown</p>
                    </motion.div>

                    {buyItVehicles.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {buyItVehicles.map((vehicle) => (
                                <motion.div key={vehicle._id} variants={fadeInUp}>
                                    <VehicleCard vehicle={vehicle} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-12 bg-green-600/5 rounded-2xl border border-green-600/20">
                            <p className="text-[#BDB6AD] text-lg">No vehicles currently in stock. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* SECURE IT Section */}
            <section className="py-24 bg-carbon relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245,158,11,0.15) 1px, transparent 0)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-amber-600 text-white px-6 py-2 rounded-full text-lg font-bold">SECURE IT</div>
                            <div className="flex-1 h-px bg-gradient-to-r from-amber-600/50 to-transparent"></div>
                        </div>
                        <p className="text-[#BDB6AD] text-lg">Vehicles already purchased overseas • Pre-arrival pricing shown</p>
                    </motion.div>

                    {secureItVehicles.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {secureItVehicles.map((vehicle) => (
                                <motion.div key={vehicle._id} variants={fadeInUp}>
                                    <VehicleCard vehicle={vehicle} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-12 bg-amber-600/5 rounded-2xl border border-amber-600/20">
                            <p className="text-[#BDB6AD] text-lg">No vehicles currently in transit.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ORDER IT Section */}
            <section className="py-24 bg-[#0F1614] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(100,116,139,0.15) 1px, transparent 0)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-slate-600 text-white px-6 py-2 rounded-full text-lg font-bold">ORDER IT</div>
                            <div className="flex-1 h-px bg-gradient-to-r from-slate-600/50 to-transparent"></div>
                        </div>
                        <p className="text-[#BDB6AD] text-lg">Vehicles not yet purchased • Indicative pricing only</p>
                        <div className="mt-4 bg-slate-600/10 border-l-4 border-slate-600 rounded-r-lg p-4">
                            <p className="text-[#BDB6AD] text-sm italic">
                                <span className="font-semibold">Disclaimer:</span> Pricing is indicative only and subject to auction result, exchange rate, and availability.
                            </p>
                        </div>
                    </motion.div>

                    {orderItVehicles.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {orderItVehicles.map((vehicle) => (
                                <motion.div key={vehicle._id} variants={fadeInUp}>
                                    <VehicleCard vehicle={vehicle} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-12 bg-slate-600/5 rounded-2xl border border-slate-600/20">
                            <p className="text-[#BDB6AD] text-lg">No custom import options available at the moment.</p>
                        </div>
                    )}
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
