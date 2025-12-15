'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function CarListing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const vehicleImages = [
    'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3972754/pexels-photo-3972754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const specifications = [
    { label: 'Mileage', value: '131,000 KM' },
    { label: 'Drive Type', value: 'All Wheel Drive' },
    { label: 'Transmission', value: 'Manual' },
    { label: 'Induction', value: 'Turbo' },
    { label: 'Fuel Type', value: 'Petrol' },
  ];

  const dealerStock = [
    {
      name: '1992 Mitsuoka Dore',
      price: '$74,990',
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    },
    {
      name: '2023 Lexus IS500 F Sport',
      price: '$88,300',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    },
    {
      name: '2006 Subaru Impreza WRX WR-Limited',
      price: '$26,500',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    },
    {
      name: '2003 Honda Accord CL7 Euro R',
      price: '$18,500',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section - Vehicle Name + Key Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#0A0A0A] mb-4">
            2003 MITSUBISHI EVOLUTION 8 GSR
          </h1>

          {/* Price and Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="text-3xl md:text-4xl font-bold text-[#66E5C4]">
              $43,000
            </div>
            <span className="text-[#A9AAAE] text-lg">— Landed & Complied</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-[#004B3A] text-white px-4 py-2 rounded-full text-sm font-semibold">
              ➤ Finance Available
            </span>
            <span className="bg-[#004B3A] text-white px-4 py-2 rounded-full text-sm font-semibold">
              ➤ Compliance Included
            </span>
          </div>

          {/* Image Gallery */}
          <div className="relative bg-[#1C1C1C] rounded-2xl overflow-hidden mb-8 border-4 border-[#1C1C1C]">
            <div className="relative h-[400px] md:h-[600px]">
              <img
                src={vehicleImages[currentImageIndex]}
                alt="2003 Mitsubishi Evolution 8 GSR"
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {vehicleImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-[#66E5C4] w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sticky CTAs */}
            <div className="absolute top-4 right-4 flex flex-col gap-3">
              <a
                href="tel:+61404312508"
                className="bg-[#0A0A0A] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1C1C1C] transition-all shadow-lg"
              >
                ⬛ Call: +61 404 312 508
              </a>
              <button className="bg-[#004B3A] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003829] transition-all shadow-lg">
                🟩 Enquire Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Vehicle Specifications Grid */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#0A0A0A] mb-6">Vehicle Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-[#1C1C1C] border border-[#A9AAAE] rounded-lg p-4 text-center"
              >
                <div className="text-[#A9AAAE] text-sm mb-2">{spec.label}</div>
                <div className="text-white font-bold">{spec.value}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Description Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6">DESCRIPTION</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-[#A9AAAE]/30">
            <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">
              Now Available to Order – 2003 Mitsubishi Evolution 8 GSR, Imported from Japan
            </h3>
            <p className="text-[#0A0A0A] leading-relaxed mb-6">
              A true JDM icon is now available — a clean, Grade 4B example with a solid underbody, 
              great paint condition, and full scan records. Perfect for enthusiasts seeking performance, 
              reliability, and authenticity.
            </p>

            <h4 className="text-lg font-bold text-[#0A0A0A] mb-4">Key Highlights</h4>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {[
                'Authentic Japanese import',
                'Grade 4B with clean underbody',
                'Clear history & accident-free',
                'Excellent paint condition',
                'Full scans and records',
                'Legendary Evo 8 performance',
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#66E5C4] font-bold">✅</span>
                  <span className="text-[#0A0A0A]">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#004B3A] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#003829] transition-all">
                🟩 Enquire Now
              </button>
              <button className="bg-[#1C1C1C] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0A0A0A] transition-all">
                ⬛ Request Auction Sheet
              </button>
              <button className="bg-[#1C1C1C] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0A0A0A] transition-all">
                ⬛ Import This Car
              </button>
            </div>
          </div>
        </motion.section>

        {/* Additional Details Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#0A0A0A] mb-6">Why This Car?</h2>
          <div className="bg-[#004B3A]/5 border border-[#004B3A]/20 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#66E5C4] mt-1">•</span>
                <span className="text-[#0A0A0A]">Imported directly from trusted Japanese auction houses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#66E5C4] mt-1">•</span>
                <span className="text-[#0A0A0A]">Verified by specialists</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#66E5C4] mt-1">•</span>
                <span className="text-[#0A0A0A]">Perfect for enthusiasts/collectors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#66E5C4] mt-1">•</span>
                <span className="text-[#0A0A0A]">Ready to secure before landing</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Compliance & Licensing Notice */}
        <div className="mb-12 p-4 bg-gray-100 rounded-lg border border-[#A9AAAE]/30">
          <p className="text-xs text-[#A9AAAE] text-center">
            ⚠️ All vehicles listed are for advertising purposes only. Cars are owned by private clients 
            or our partnered LMCT licence holder. We do not own or directly sell vehicles.
          </p>
        </div>

        {/* More Vehicles From Dealer Stock */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8">More Vehicles From Dealer Stock</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealerStock.map((vehicle, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#A9AAAE]/20 group"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#0A0A0A] mb-2">{vehicle.name}</h3>
                  <p className="text-2xl font-bold text-[#66E5C4] mb-4">{vehicle.price}</p>
                  <Link
                    href="/car-listing"
                    className="text-[#004B3A] hover:text-[#66E5C4] font-semibold transition-colors inline-flex items-center"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Looking For Something Specific */}
        <motion.section
          className="mb-12 bg-gradient-to-br from-[#004B3A] to-[#003829] rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Looking For Something Specific?
          </h2>
          <p className="text-xl text-center mb-8 text-white/90">
            Let Us Find Your Dream Car
          </p>
          <p className="text-center mb-8 text-white/80">
            Submit your requirements. We'll locate and import it.
          </p>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#66E5C4]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#66E5C4]"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#66E5C4]"
              />
              <textarea
                placeholder="Tell us about your dream car... (Make, Model, Year, Budget, etc.)"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#66E5C4]"
              />
              <button
                type="submit"
                className="w-full bg-[#66E5C4] text-[#0A0A0A] px-8 py-4 rounded-lg font-bold hover:bg-[#4dc5a4] transition-all shadow-lg"
              >
                🟩 Submit Enquiry / Import Request
              </button>
            </form>
          </div>
        </motion.section>

        {/* Social Media Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4">
            Stay Updated With New Arrivals
          </h2>
          <p className="text-[#A9AAAE] mb-6">
            Follow us for new arrivals, builds & promotions
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/umzeautohaus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#004B3A] text-white px-6 py-3 rounded-lg hover:bg-[#66E5C4] hover:text-[#0A0A0A] transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
            <a
              href="https://tiktok.com/@umzeautohaus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#004B3A] text-white px-6 py-3 rounded-lg hover:bg-[#66E5C4] hover:text-[#0A0A0A] transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              TikTok
            </a>
            <a
              href="https://facebook.com/umzeautohaus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#004B3A] text-white px-6 py-3 rounded-lg hover:bg-[#66E5C4] hover:text-[#0A0A0A] transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
          </div>
        </motion.section>
      </section>
    </div>
  );
}