'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PastImport {
    image: string;
    title: string;
}

const pastImports: PastImport[] = [
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 15.49.04.jpeg',
        title: 'Past Import 1'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 15.49.59.jpeg',
        title: 'Past Import 2'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 15.51.42.jpeg',
        title: 'Past Import 3'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 15.52.54.jpeg',
        title: 'Past Import 4'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 16.04.14.jpeg',
        title: 'Past Import 5'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 16.08.41.jpeg',
        title: 'Past Import 6'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 16.09.29.jpeg',
        title: 'Past Import 7'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 16.12.18.jpeg',
        title: 'Past Import 8'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-12-22 at 16.13.17.jpeg',
        title: 'Past Import 9'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-11-16 at 16.24.40_d9f92f32.jpg',
        title: 'Past Import 10'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-11-16 at 16.25.52_33e250fd.jpg',
        title: 'Past Import 11'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-11-16 at 16.28.29_0a8aaebb.jpg',
        title: 'Past Import 12'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-11-16 at 16.32.46_251a4e1d.jpg',
        title: 'Past Import 13'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-11-16 at 16.32.46_aa168ade.jpg',
        title: 'Past Import 14'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-11-16 at 16.32.46_f91e50e0.jpg',
        title: 'Past Import 15'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-11-16 at 16.50.22_332ef392.jpg',
        title: 'Past Import 16'
    },
    {
        image: '/images/past import/WhatsApp Image 2025-11-17 at 13.03.09_cd7fc052.jpg',
        title: 'Past Import 17'
    },
    {
        image: '/images/past import/IMG_5719.JPG',
        title: 'Past Import 18'
    },
    {
        image: '/images/past import/1994-Mercedes-Benx-G-Class-G320-LWB-Collecting-Cars-14-05-2025-Ari-Gelgec58.avif',
        title: 'Past Import 19'
    },
    {
        image: '/images/past import/2012-Mercedes-Benz-S63-AMG-Collecting-Cars-26-05-2025-Ari-Gelgec25.avif',
        title: 'Past Import 20'
    },
    {
        image: '/images/past import/Mercedes-Benz-E53-Wagon-Collecting-Cars-25-11-2025-Ari-Gelgec72.avif',
        title: 'Past Import 21'
    }
];

export default function PastImportsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of items to show at once
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(pastImports.length / itemsPerSlide);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Get visible items based on current index
    const getVisibleItems = () => {
        const startIdx = currentIndex * itemsPerSlide;
        const endIdx = startIdx + itemsPerSlide;
        return pastImports.slice(startIdx, endIdx);
    };

    return (
        <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {getVisibleItems().map((vehicle, index) => (
                            <motion.div
                                key={`${currentIndex}-${index}`}
                                className="group relative bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-[#25614F] rounded-full flex items-center justify-center text-white hover:bg-[#1e4f3f] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-[#25614F] rounded-full flex items-center justify-center text-white hover:bg-[#1e4f3f] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Progress Dots */}
            <div className="flex justify-center mt-8 space-x-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-[#25614F] w-8'
                            : 'bg-[#25614F]/30 hover:bg-[#25614F]/50 w-3'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
