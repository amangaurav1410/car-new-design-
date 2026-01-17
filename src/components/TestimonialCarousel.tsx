'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Vineet Verma',
    testimonial: 'Imported a vehicle from Japan through Umze Autohaus and the process was smooth. Got me the car to exact specs I wanted it. Clear communication, transparent costs, and the car arrived exactly as described. Kept updated from auction to delivery. Very happy with the service and the quality of the car. Would happily use again and recommend.',
    rating: 5
  },
  {
    name: 'Thomas Emmanouilidis',
    testimonial: 'Excellent communication throughout the entire process and always available to answer any questions. Extremely knowledgeable about the Japanese auction and vehicle import process, and completely transparent about the car\'s condition. With the help of Umze Auothaus I was able to import a beautiful Toyota Alphard Executive Lounge from Japan at a very reasonable price. I highly recommend Umze Autohaus. Thanks Umer from Thomas and family :)',
    rating: 5
  },
  {
    name: 'Jono Fung',
    testimonial: 'Umze Autohaus were very helpful and transparent in assisting me in buying my Evo 9. The process was easy to follow and the fees i had to pay were upfront with nothing hidden. The vehicle itself arrived in the advertised condition . If you are in the market to import something special without the fuss i would highly recommend speaking to the team here about your options!',
    rating: 5
  },
  {
    name: 'Akshay Mahajan',
    testimonial: 'Best Guys in Business! Umer was very helpful and professional in getting the right car for me that too under budget!! Would highly recommend. I\'ll be a returning customer!!',
    rating: 5
  },
  {
    name: 'Thang Do',
    testimonial: 'For a long time I wanted to import a car from Japan but always put it in the "too hard" basket as I didn\'t really understand the process. I was recommended Umze Autohaus through a friend and Umze super helpful from start to finish, helping source the car, handle all the paperwork, and explaining everything clearly so I understood how it all worked. I was kept updated when the car arrived and compliance was taken care of as well. I\'m extremely happy with my Century and the condition was even better than what the report showed. Highly recommended.',
    rating: 5
  },
  {
    name: 'Luke L.M',
    testimonial: 'Was interested in buying a Lexus from Japan. Wasn\'t really sure as the whole process was quite daunting and I don\'t know how to speak Japanese. The process that Umze Auto help me with was fantastic, super easy to speak with, responsive and obviously experts in their field. When the wife needs an upgrade, you know who I\'m calling!',
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
      {/* Main Testimonial Card */}
      <div className="bg-[#1a2420] rounded-2xl p-6 sm:p-8 border border-[#25614F]/20 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-6 h-6 text-[#25614F] fill-current"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#BDB6AD] leading-relaxed mb-8 italic font-medium"
            >
              "{currentTestimonial.testimonial}"
            </motion.blockquote>

            {/* Author */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#EAE2D6] font-semibold text-xl"
            >
              - {currentTestimonial.name}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-[#25614F] rounded-full flex items-center justify-center text-white hover:bg-[#1e4f3f] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-[#25614F] rounded-full flex items-center justify-center text-white hover:bg-[#1e4f3f] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-[#25614F] w-8'
              : 'bg-[#25614F]/30 hover:bg-[#25614F]/50'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}