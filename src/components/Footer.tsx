'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0F1614] text-[#EAE2D6] relative overflow-hidden">
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#25614F] to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Company Info with CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo Image */}
            <div className="mb-6">
              <img
                src="/images/PNG.png"
                alt="UMZE AUTOHAUS Logo"
                className="h-24 w-auto"
              />
            </div>
            
            <p className="text-[#BDB6AD] mb-8 leading-relaxed text-lg max-w-xl">
              Melbourne-based specialists in Japanese vehicle imports. Transparent, tailored, and trusted.
            </p>
            
            {/* CTA Button */}
            <Link 
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#25614F] text-[#EAE2D6] px-8 py-4 rounded-lg font-bold hover:bg-[#1e4f3f] transition-all duration-300 group"
            >
              <span>Start Your Import Journey</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Right - Contact Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Location Card */}
            <div className="bg-[#0F1614] border border-[#25614F]/20 rounded-xl p-6 hover:border-[#25614F]/50 transition-all duration-300">
              <div className="w-10 h-10 bg-[#25614F]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h5 className="text-[#EAE2D6] font-semibold mb-2 uppercase text-sm">Location</h5>
              <p className="text-[#BDB6AD] text-sm">Melbourne, Australia</p>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0F1614] border border-[#25614F]/20 rounded-xl p-6 hover:border-[#25614F]/50 transition-all duration-300">
              <div className="w-10 h-10 bg-[#25614F]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h5 className="text-[#EAE2D6] font-semibold mb-2 uppercase text-sm">Phone</h5>
              <a href="tel:+61404312508" className="text-[#BDB6AD] hover:text-[#25614F] transition-colors text-sm">
                +61 404 312 508
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-[#0F1614] border border-[#25614F]/20 rounded-xl p-6 hover:border-[#25614F]/50 transition-all duration-300 sm:col-span-2">
              <div className="w-10 h-10 bg-[#25614F]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h5 className="text-[#EAE2D6] font-semibold mb-2 uppercase text-sm">Email</h5>
              <a href="mailto:info@umzeautohaus.com" className="text-[#BDB6AD] hover:text-[#25614F] transition-colors text-sm">
                info@umzeautohaus.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Middle Section - Links Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-[#25614F]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Services */}
          <div>
            <h4 className="text-[#EAE2D6] font-bold font-heading mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Import Process', href: '/import-process' },
                { label: 'Import Catalogue', href: '/vehicles-for-import' },
                { label: 'Calculator', href: '/calculator' },
                { label: 'In Stock', href: '/view-auctions' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-[#BDB6AD] hover:text-[#25614F] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#25614F]/50 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#EAE2D6] font-bold font-heading mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about-us' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Contact Us', href: '/contact-us' },
                { label: 'Resources', href: '/resources' },
                { label: 'Get Started', href: '/import-now' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#BDB6AD] hover:text-[#25614F] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#25614F]/50 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-[#EAE2D6] font-bold font-heading mb-6 uppercase tracking-wider text-sm">Why Choose Us</h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Professional Import Service', icon: '✓' },
                { label: '100+ Cars Sourced', icon: '✓' },
                { label: 'Transparent Pricing', icon: '✓' },
                { label: 'Full Process Support', icon: '✓' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#25614F]/5 rounded-lg p-3 border border-[#25614F]/10">
                  <div className="w-6 h-6 bg-[#25614F] rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#EAE2D6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#BDB6AD] text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Social & Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Copyright */}
          <div className="text-[#BDB6AD] text-sm text-center md:text-left">
            <p>© 2025 Umze Autohaus. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 justify-center md:justify-start">
              <Link href="/privacy-policy" className="hover:text-[#25614F] transition-colors text-xs">
                Privacy Policy
              </Link>
              <span className="text-[#25614F]/30">•</span>
              <Link href="/terms-of-service" className="hover:text-[#25614F] transition-colors text-xs">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-[#BDB6AD] text-sm mr-2 uppercase tracking-wider">Follow Us</span>
            {[
              {
                name: 'Instagram',
                href: 'https://instagram.com/umzeautohaus',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )
              },
              {
                name: 'TikTok',
                href: 'https://tiktok.com/@umzeautohaus',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                )
              },
              {
                name: 'Facebook',
                href: 'https://facebook.com/umzeautohaus',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#25614F]/30 rounded-lg flex items-center justify-center text-[#25614F] hover:bg-[#25614F] hover:text-[#EAE2D6] hover:scale-110 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(234,226,214,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </footer>
  );
};

export default Footer;
