'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Vehicle, LISTING_TYPE_LABELS, LISTING_TYPE_DESCRIPTIONS, STATUS_LABELS } from '@/types/vehicle';
import VehicleCard from '@/components/VehicleCard';

interface VehicleDetailClientProps {
    vehicle: Vehicle;
    relatedVehicles: Vehicle[];
}

export default function VehicleDetailClient({ vehicle, relatedVehicles }: VehicleDetailClientProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Get display price
    const getDisplayPrice = () => {
        if (vehicle.price) {
            return `AUD $${vehicle.price.toLocaleString()}`;
        }
        if (vehicle.priceMin && vehicle.priceMax) {
            return `AUD $${vehicle.priceMin.toLocaleString()} – $${vehicle.priceMax.toLocaleString()}`;
        }
        if (vehicle.priceMin) {
            return `From AUD $${vehicle.priceMin.toLocaleString()}`;
        }
        if (vehicle.priceMax) {
            return `Up to AUD $${vehicle.priceMax.toLocaleString()}`;
        }
        return 'Price on Request';
    };

    // Get display mileage
    const getDisplayMileage = () => {
        if (vehicle.mileage) {
            return `${vehicle.mileage.toLocaleString()} km`;
        }
        if (vehicle.mileageMin && vehicle.mileageMax) {
            return `${vehicle.mileageMin.toLocaleString()} - ${vehicle.mileageMax.toLocaleString()} km`;
        }
        return 'N/A';
    };

    // Get listing type badge styles
    const getListingTypeBadge = () => {
        switch (vehicle.listingType) {
            case 'Order It':
                return { bg: 'bg-purple-600', text: 'Order It' };
            case 'Secure It':
                return { bg: 'bg-blue-600', text: 'Secure It' };
            case 'Buy It':
                return { bg: 'bg-green-600', text: 'Buy It' };
            default:
                return { bg: 'bg-gray-600', text: vehicle.listingType };
        }
    };

    const listingBadge = getListingTypeBadge();
    const currentImage = vehicle.images?.[selectedImageIndex];

    return (
        <div className="bg-carbon min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-[#0F1614] py-4 border-b border-[#25614F]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-[#A9AAAE]">
                        <Link href="/" className="hover:text-[#25614F] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/vehicles-for-import" className="hover:text-[#25614F] transition-colors">Stock</Link>
                        <span>/</span>
                        <span className="text-[#EAE2D6]">{vehicle.brand} {vehicle.model}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <motion.div
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0F1614] cursor-pointer"
                            onClick={() => setIsLightboxOpen(true)}
                            whileHover={{ scale: 1.01 }}
                        >
                            {currentImage ? (
                                <img
                                    src={currentImage.url}
                                    alt={`${vehicle.brand} ${vehicle.model}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <svg className="w-24 h-24 text-[#25614F]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            )}

                            {/* Badges */}
                            <div className={`absolute top-4 left-4 ${listingBadge.bg} text-white px-4 py-2 rounded-full font-bold shadow-lg`}>
                                {listingBadge.text}
                            </div>

                            {vehicle.featured && (
                                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold shadow-lg">
                                    ⭐ Featured
                                </div>
                            )}

                            {/* Click to enlarge hint */}
                            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                Click to enlarge
                            </div>
                        </motion.div>

                        {/* Thumbnail Grid */}
                        {vehicle.images && vehicle.images.length > 1 && (
                            <div className="grid grid-cols-6 gap-2">
                                {vehicle.images.map((img, index) => (
                                    <button
                                        key={img.url}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${index === selectedImageIndex
                                            ? 'border-[#25614F] ring-2 ring-[#25614F]/30'
                                            : 'border-transparent hover:border-[#25614F]/50'
                                            }`}
                                    >
                                        <img
                                            src={img.url}
                                            alt={`${vehicle.brand} ${vehicle.model} - Image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Vehicle Details */}
                    <div className="space-y-8">
                        {/* Title Section */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[#25614F] font-medium">{vehicle.year}</span>
                                <span className="text-[#A9AAAE]">•</span>
                                <span className="text-[#A9AAAE]">{vehicle.importSource}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#EAE2D6] font-heading mb-2">
                                {vehicle.brand} {vehicle.model}
                            </h1>
                            {vehicle.variant && (
                                <p className="text-xl text-[#BDB6AD]">{vehicle.variant}</p>
                            )}
                        </div>

                        {/* Price */}
                        <div className="bg-gradient-to-r from-[#25614F]/20 to-transparent p-6 rounded-2xl border border-[#25614F]/30">
                            <p className="text-sm text-[#A9AAAE] mb-1">Price</p>
                            <p className="text-4xl font-bold text-[#25614F]">{getDisplayPrice()}</p>
                            <p className="text-sm text-[#A9AAAE] mt-2">
                                {LISTING_TYPE_DESCRIPTIONS[vehicle.listingType]}
                            </p>
                        </div>

                        {/* ETA for Secure It */}
                        {vehicle.listingType === 'Secure It' && vehicle.eta && (
                            <div className="bg-blue-600/10 p-4 rounded-xl border border-blue-600/30">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🚢</span>
                                    <div>
                                        <p className="text-blue-400 font-medium">Expected Arrival</p>
                                        <p className="text-[#EAE2D6] text-lg">
                                            {new Date(vehicle.eta).toLocaleDateString('en-AU', {
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Quick Specs */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0F1614] p-4 rounded-xl border border-[#25614F]/30">
                                <p className="text-[#A9AAAE] text-sm mb-1">Mileage</p>
                                <p className="text-[#EAE2D6] font-semibold">{getDisplayMileage()}</p>
                            </div>
                            <div className="bg-[#0F1614] p-4 rounded-xl border border-[#25614F]/30">
                                <p className="text-[#A9AAAE] text-sm mb-1">Transmission</p>
                                <p className="text-[#EAE2D6] font-semibold">{vehicle.transmission || 'N/A'}</p>
                            </div>
                            <div className="bg-[#0F1614] p-4 rounded-xl border border-[#25614F]/30">
                                <p className="text-[#A9AAAE] text-sm mb-1">Fuel Type</p>
                                <p className="text-[#EAE2D6] font-semibold">{vehicle.fuelType || 'N/A'}</p>
                            </div>
                            <div className="bg-[#0F1614] p-4 rounded-xl border border-[#25614F]/30">
                                <p className="text-[#A9AAAE] text-sm mb-1">Drivetrain</p>
                                <p className="text-[#EAE2D6] font-semibold">{vehicle.drivetrain || 'N/A'}</p>
                            </div>
                            {vehicle.exteriorColor && (
                                <div className="bg-[#0F1614] p-4 rounded-xl border border-[#25614F]/30">
                                    <p className="text-[#A9AAAE] text-sm mb-1">Exterior Color</p>
                                    <p className="text-[#EAE2D6] font-semibold">{vehicle.exteriorColor}</p>
                                </div>
                            )}
                            {vehicle.auctionGrade && (
                                <div className="bg-[#0F1614] p-4 rounded-xl border border-[#25614F]/30">
                                    <p className="text-[#A9AAAE] text-sm mb-1">Auction Grade</p>
                                    <p className="text-[#EAE2D6] font-semibold">{vehicle.auctionGrade}</p>
                                </div>
                            )}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="/import-now"
                                className="flex-1 bg-[#25614F] text-[#EAE2D6] px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-[#1e4f3f] transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Enquire Now
                            </motion.a>
                            <motion.a
                                href="/contact-us"
                                className="flex-1 border-2 border-[#25614F] text-[#25614F] px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-[#25614F] hover:text-[#EAE2D6] transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contact Us
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Description */}
                {vehicle.description && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-[#EAE2D6] mb-6">Description</h2>
                        <div className="bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30">
                            <div className="prose prose-invert max-w-none text-[#BDB6AD]">
                                {vehicle.description.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Related Vehicles */}
                {relatedVehicles.length > 0 && (
                    <div className="mt-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#EAE2D6] mb-4">Similar Vehicles</h2>
                            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedVehicles.map((v) => (
                                <VehicleCard key={v._id} vehicle={v} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && currentImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-[#25614F] transition-colors"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation arrows */}
                    {vehicle.images && vehicle.images.length > 1 && (
                        <>
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#25614F] transition-colors p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImageIndex((prev) =>
                                        prev === 0 ? vehicle.images!.length - 1 : prev - 1
                                    );
                                }}
                            >
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#25614F] transition-colors p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImageIndex((prev) =>
                                        prev === vehicle.images!.length - 1 ? 0 : prev + 1
                                    );
                                }}
                            >
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    <img
                        src={currentImage.url}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="max-w-full max-h-[90vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Image counter */}
                    {vehicle.images && vehicle.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                            {selectedImageIndex + 1} / {vehicle.images.length}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
