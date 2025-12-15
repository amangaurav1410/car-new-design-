'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
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
      {/* 1️⃣ HERO SECTION */}
      <section className="relative text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Japanese Import Vehicle"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              UMZE AUTOHAUS
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-[#EAE2D6] font-semibold drop-shadow-lg">
              Your Importing Experts — Transparent, Tailored, Trusted.
            </p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Melbourne-based specialists helping people import vehicles from Japan with clarity, guidance, and full process support.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {/* Primary CTA */}
            <motion.a
              href="/contact-us"
              className="bg-[#25614F] text-[#EAE2D6] px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
            
            {/* Secondary CTA */}
            <motion.a
              href="/import-now"
              className="border-2 border-[#BDB6AD] text-[#EAE2D6] px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#BDB6AD]/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Use the calculator
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ INTRODUCTION — WHO WE ARE */}
      <section className="relative py-32 overflow-hidden bg-carbon">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(234,226,214,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-6 border border-[#25614F]/30"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></div>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-[#EAE2D6]">
              About Umze Autohaus
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Image with Overlay */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-3xl border-2 border-[#25614F]/30 group-hover:border-[#25614F]/50 transition-all duration-500">
                  <img
                    src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Japanese Car Import"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                    <motion.div
                      className="bg-[#0F1614]/80 backdrop-blur-md rounded-2xl p-4 border border-[#25614F]/20"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-3xl font-bold text-[#EAE2D6] mb-1">100%</div>
                      <div className="text-sm text-[#BDB6AD]">Transparency</div>
                    </motion.div>
                    <motion.div
                      className="bg-[#0F1614]/80 backdrop-blur-md rounded-2xl p-4 border border-[#25614F]/20"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-3xl font-bold text-[#EAE2D6] mb-1">Expert</div>
                      <div className="text-sm text-[#BDB6AD]">Guidance</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content Cards */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Card 1 - Our Story */}
              <motion.div
                className="group bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#25614F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#A88F5C] transition-colors duration-300">
                      Our Story
                    </h3>
                  </div>
                </div>
                <p className="text-[#BDB6AD] leading-relaxed">
                  Umze Autohaus specialises in importing vehicles from Japan. What began as a personal passion has grown into a service built on real experience, careful research, and honest guidance.
                </p>
              </motion.div>

              {/* Card 2 - Our Service */}
              <motion.div
                className="group bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#25614F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#A88F5C] transition-colors duration-300">
                      Full Support
                    </h3>
                  </div>
                </div>
                <p className="text-[#BDB6AD] leading-relaxed">
                  We support clients through the full import process — from sourcing and inspections through to shipping, compliance coordination, and delivery — so each step is understood and managed properly.
                </p>
              </motion.div>

              {/* Card 3 - Our Mission */}
              <motion.div
                className="group bg-[#25614F]/10 rounded-2xl p-8 border-2 border-[#25614F]/40 hover:border-[#25614F]/60 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#25614F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#EAE2D6] mb-3">
                      Our Goal
                    </h3>
                  </div>
                </div>
                <p className="text-[#EAE2D6] font-semibold text-lg leading-relaxed">
                  To help people import good cars safely, transparently, and with confidence.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: 'Transparent Process',
                description: 'Clear explanation at every step'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Personalized Service',
                description: 'Tailored to your needs & budget'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Quality Assured',
                description: 'Real auction experience & checks'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-[#0F1614] rounded-xl p-6 border border-[#25614F]/20 hover:border-[#25614F]/40 transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
                variants={fadeInUp}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#25614F]/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#E AE2D6] mb-2 group-hover:text-[#A88F5C] transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[#BDB6AD] text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ CORE PRINCIPLES */}
      <section className="py-24 bg-[#0F1614]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-[#EAE2D6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What We Focus On
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Full Transparency */}
            <motion.div
              className="bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-[#EAE2D6] mb-6">FULL TRANSPARENCY</h3>
              <ul className="space-y-3 text-[#BDB6AD]">
                <li>• Clear explanation of the import process</li>
                <li>• Open cost breakdowns</li>
                <li>• No hidden fees or unclear steps</li>
              </ul>
            </motion.div>

            {/* Tailored Guidance */}
            <motion.div
              className="bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-[#EAE2D6] mb-6">TAILORED GUIDANCE</h3>
              <ul className="space-y-3 text-[#BDB6AD]">
                <li>• Vehicles sourced based on needs and budget</li>
                <li>• Support for daily drivers, performance, and collector vehicles</li>
                <li>• One-on-one guidance throughout</li>
              </ul>
            </motion.div>

            {/* Experience-Led Approach */}
            <motion.div
              className="bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-[#EAE2D6] mb-6">EXPERIENCE-LED APPROACH</h3>
              <ul className="space-y-3 text-[#BDB6AD]">
                <li>• Real auction experience</li>
                <li>• Condition checks beyond auction grades</li>
                <li>• Long-term thinking, not quick sales</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ PROCESS PREVIEW */}
      <section className="relative py-32 overflow-hidden bg-carbon">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-6 border border-[#25614F]/30"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></div>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">6-Step Process</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Our Import Process
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-[#BDB6AD] max-w-3xl mx-auto leading-relaxed">
              Importing a vehicle is a big decision. We guide you through each stage, explain things as we go, and make sure expectations are clear from the start.
            </p>
          </motion.div>

          {/* Process Steps with Connecting Lines */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-[#25614F]/30"
              style={{ top: '80px', left: '8%', right: '8%' }}
            ></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  step: '1',
                  title: 'Consultation & budget guidance',
                  icon: (
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )
                },
                {
                  step: '2',
                  title: 'Vehicle sourcing',
                  icon: (
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )
                },
                {
                  step: '3',
                  title: 'Bid approval & deposit',
                  icon: (
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  step: '4',
                  title: 'Purchase & shipping',
                  icon: (
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )
                },
                {
                  step: '5',
                  title: 'Customs & compliance support',
                  icon: (
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  step: '6',
                  title: 'Registration assistance & delivery',
                  icon: (
                    <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-500 h-full">
                    {/* Step Number Badge */}
                    <div className="absolute -top-5 -left-5 w-14 h-14 bg-[#25614F] rounded-2xl flex items-center justify-center border-4 border-[#0F1614] group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#EAE2D6] text-xl font-bold">{item.step}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#25614F]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ml-6 mt-2">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#A88F5C] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Progress Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#25614F]/20 rounded-b-2xl overflow-hidden">
                      <motion.div
                        className="h-full bg-[#25614F]"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/import-process"
              className="bg-[#25614F] text-[#EAE2D6] px-12 py-5 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] border-2 border-[#25614F]/30 hover:border-[#25614F]/50 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              <span>View full process</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5️⃣ WHY IMPORT FROM JAPAN (EDUCATIONAL) */}
      <section className="relative py-24 overflow-hidden bg-[#0F1614]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Why Import from Japan?
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Benefit 1 */}
            <motion.div
              className="group bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-[#25614F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4 group-hover:text-[#A88F5C] transition-colors duration-300">
                Lower kilometres and better condition
              </h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                Japanese vehicles are typically well-maintained with genuine low mileage due to strict inspection standards and excellent road infrastructure
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              className="group bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-[#25614F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4 group-hover:text-[#A88F5C] transition-colors duration-300">
                Transparent auction history
              </h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                Complete documentation and grading system provide clear vehicle history, allowing for informed purchasing decisions
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              className="group bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-[#25614F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4 group-hover:text-[#A88F5C] transition-colors duration-300">
                Access to vehicles not readily available in Australia
              </h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                Wide selection of models, special editions, and specifications that are rare or not imported to the local market
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              className="group bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-[#25614F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4 group-hover:text-[#A88F5C] transition-colors duration-300">
                Higher specifications compared to local market cars
              </h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                Japanese domestic market often features superior equipment, performance options, and factory specifications
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center bg-[#25614F]/10 rounded-2xl p-8 border border-[#25614F]/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-[#EAE2D6] font-semibold italic">
              Importing isn't about shortcuts — it's about making informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ COST CLARITY (CALCULATOR DIRECTION) */}
      <section className="relative py-32 overflow-hidden bg-carbon">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-[#25614F] rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Understand the Real Cost
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-[#BDB6AD] max-w-3xl mx-auto">
              Transparent pricing starts with clear expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30 hover:border-[#25614F]/50 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25614F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-2 group-hover:text-[#A88F5C] transition-colors duration-300">
                      Vehicle Price
                    </h3>
                    <p className="text-[#BDB6AD]">
                      The auction purchase price plus any applicable fees
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30 hover:border-[#25614F]/50 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25614F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-2 group-hover:text-[#A88F5C] transition-colors duration-300">
                      Shipping & Insurance
                    </h3>
                    <p className="text-[#BDB6AD]">
                      Safe transport from Japan to Australian ports
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30 hover:border-[#25614F]/50 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25614F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-2 group-hover:text-[#A88F5C] transition-colors duration-300">
                      Taxes & Compliance
                    </h3>
                    <p className="text-[#BDB6AD]">
                      Import duties, GST, and Australian compliance requirements
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30 hover:border-[#25614F]/50 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25614F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-2 group-hover:text-[#A88F5C] transition-colors duration-300">
                      Registration
                    </h3>
                    <p className="text-[#BDB6AD]">
                      Final registration and delivery to your location
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - CTA Card */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full">
                <div className="relative bg-[#0F1614] rounded-3xl p-10 border border-[#25614F]/50">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-[#25614F] rounded-2xl mb-6">
                      <svg className="w-12 h-12 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-[#EAE2D6] mb-4">
                      Import Cost Calculator
                    </h3>
                    <p className="text-[#BDB6AD] mb-8 leading-relaxed">
                      To keep expectations clear, we provide an import cost calculator that outlines estimated landed costs before you commit.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-[#BDB6AD]">
                      <div className="w-6 h-6 bg-[#25614F]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#25614F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Detailed cost breakdown</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#BDB6AD]">
                      <div className="w-6 h-6 bg-[#25614F]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#25614F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Accurate tax calculations</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#BDB6AD]">
                      <div className="w-6 h-6 bg-[#25614F]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#25614F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>No hidden fees included</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/import-now"
                      className="block w-full text-center bg-[#25614F] text-[#EAE2D6] px-8 py-5 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] border-2 border-[#25614F]/30 hover:border-[#25614F]/50 transition-all duration-300"
                    >
                      Use the calculator →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Banner */}
          <motion.div
            className="bg-[#25614F]/10 rounded-2xl p-8 border border-[#25614F]/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-[#BDB6AD]">
              <span className="text-[#25614F] font-bold">Total transparency.</span> The total cost of importing a vehicle depends on the vehicle price, shipping, taxes, compliance, and registration—we break it all down clearly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ CONTACT PROMPT */}
      <section className="py-24 bg-[#0F1614]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-8 text-[#EAE2D6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Thinking About Importing?
          </motion.h2>

          <motion.div
            className="bg-[#0F1614] rounded-2xl p-10 border border-[#25614F]/30 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-[#BDB6AD] leading-relaxed text-center">
              If you're considering importing a vehicle or want to understand whether it's the right option, get in touch. We'll talk through eligibility, timing, and realistic expectations before any commitment is made.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact-us"
              className="bg-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] border border-[#25614F]/20 hover:border-[#25614F]/40 transition-all duration-300 inline-block"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
