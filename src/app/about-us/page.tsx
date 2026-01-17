'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutUs() {
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
      {/* Hero Section - Modern Overlay */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2025-12-22 at 16.13.17.jpeg"
            alt="Japanese classic car"
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
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Our Story</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              WE HELP PEOPLE IN AUSTRALIA IMPORT QUALITY CARS FROM JAPAN
            </h1>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
            </div>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto text-[#EAE2D6] leading-relaxed drop-shadow-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Safely. Transparently. Confidently.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-[#BDB6AD]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25614F] rounded-full"></div>
              <span>Real Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25614F] rounded-full"></div>
              <span>Honest Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25614F] rounded-full"></div>
              <span>Realistic Expectations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Image-Driven Flowing Design */}
      <section id="story" className="py-32 bg-[#0F1614] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#25614F] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#25614F] to-transparent"></div>
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
              className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></div>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Our Story
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto"></div>
          </motion.div>

          {/* Main Story with Side Image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Left - Story Text */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-[#EAE2D6] leading-relaxed">
                  Umze Autohaus began long before it became a business. In <span className="text-[#25614F] font-bold">2012</span>, my dad started importing cars from Japan out of pure passion.
                </p>

                <p className="text-lg text-[#BDB6AD] leading-relaxed">
                  I grew up around that process, and in 2019, I imported my first car—a Toyota Chaser. It was a clean example that saved me thousands compared to the local market. That experience showed me the real value of buying directly from Japan.
                </p>

                <p className="text-lg text-[#BDB6AD] leading-relaxed">
                  When I saw the condition of my first import, it genuinely surprised me. The car was cleaner than anything I'd inspected locally, and the savings were real.
                </p>
              </div>

              {/* Highlighted Quote */}
              <div className="relative pl-6 border-l-4 border-[#25614F]">
                <p className="text-2xl text-[#25614F] font-semibold italic leading-relaxed">
                  "What started as a personal win slowly turned into helping others make better, safer, and more affordable choices."
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden h-[500px]">
                <img
                  src="/images/past import/WhatsApp Image 2025-11-16 at 16.32.46_f91e50e0.jpg"
                  alt="First Toyota Chaser Import"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>

                {/* Floating Stats Badge */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-[#25614F]/90 backdrop-blur-md rounded-2xl p-6 border border-[#EAE2D6]/20">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-[#EAE2D6] mb-2">2019</div>
                      <div className="text-sm text-[#EAE2D6]/80">First Toyota Chaser Import</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Continued Story */}
          <motion.div
            className="mb-32 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-center">
              <p className="text-xl text-[#BDB6AD] leading-relaxed">
                From there, things grew naturally. I began helping mates, family, and eventually their mates as well. Translating auction sheets, researching exporters, checking condition reports, and guiding people through the entire process became something I genuinely enjoyed.
              </p>

              <p className="text-xl text-[#BDB6AD] leading-relaxed">
                Over the years, I learned that an auction grade only tells part of the story. The real condition comes from checking photos, physical inspections, underbody condition, repairs, rust points, engine bay signs, and overall presentation.
              </p>

              <p className="text-2xl text-[#EAE2D6] leading-relaxed font-light mt-8">
                We've worked with more than <span className="text-[#25614F] font-bold">100 cars</span>—everything from classic JDM models and daily runabouts to modern Europeans, performance cars, hybrids, and collector vehicles.
              </p>
            </div>
          </motion.div>

          {/* Vertical Timeline Journey */}
          <div className="mb-32">
            <h3 className="text-4xl font-bold text-center text-[#EAE2D6] mb-16">The Journey</h3>

            <div className="max-w-4xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#25614F]/50 via-[#25614F] to-[#25614F]/50 hidden lg:block"></div>

              <div className="space-y-16">
                {[
                  {
                    year: "2012",
                    title: "The Beginning",
                    description: "Father started importing vehicles from Japan out of pure passion for Japanese automotive excellence.",
                    align: "left"
                  },
                  {
                    year: "2019",
                    title: "First Import",
                    description: "First personal import: Toyota Chaser. A clean example that showcased the real value of direct imports.",
                    align: "right"
                  },
                  {
                    year: "2020",
                    title: "Organic Growth",
                    description: "Helping friends and family grew naturally into a full-service import operation built on trust.",
                    align: "left"
                  },
                  {
                    year: "Today",
                    title: "Umze Autohaus",
                    description: "A passionate service built on honesty, transparency, and genuine care for every client.",
                    align: "right"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-8 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${item.align === 'right' ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                      <div className="text-5xl font-bold text-[#25614F] mb-2">{item.year}</div>
                      <h4 className="text-2xl font-bold text-[#EAE2D6] mb-3">{item.title}</h4>
                      <p className="text-lg text-[#BDB6AD] leading-relaxed">{item.description}</p>
                    </div>

                    {/* Center Circle */}
                    <div className="hidden lg:block flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full border-4 border-[#0F1614] shadow-xl flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#EAE2D6] rounded-full"></div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement with Full Width */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-[#25614F]/20 to-transparent blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-[#25614F]/20 to-transparent rounded-3xl p-12 md:p-16 border-t border-b border-[#25614F]/40 text-center">
              <p className="text-3xl md:text-5xl text-[#EAE2D6] font-bold leading-tight mb-6">
                Our mission is simple:
              </p>
              <p className="text-2xl md:text-4xl text-[#25614F] font-light leading-relaxed">
                Help people import good cars from Japan <span className="font-bold">safely, transparently, and confidently.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Japan - Image-Driven Design */}
      <section className="py-32 bg-gradient-to-br from-[#0F1614] to-[#1a2420] relative overflow-hidden">
        {/* Large Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#25614F]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-[#25614F]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Visual with Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent z-10"></div>
                <img
                  src="/images/WhatsApp Image 2025-11-16 at 16.32.46_f91e50e0.jpg"
                  alt="Japanese Import Car"
                  className="w-full h-[500px] object-cover"
                />

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="bg-[#25614F]/90 backdrop-blur-md rounded-2xl p-6 border border-[#EAE2D6]/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-5xl font-bold text-[#EAE2D6] mb-1">100+</div>
                        <div className="text-sm text-[#EAE2D6]/80">Vehicles Imported from Japan</div>
                      </div>
                      <div className="text-6xl">🇯🇵</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-[#0F1614] shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-1">⚡</div>
                  <div className="text-xs text-[#EAE2D6] font-bold">JDM</div>
                  <div className="text-xs text-[#EAE2D6]/70">Legends</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-5 h-5 text-[#25614F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Location Matters</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8 text-[#EAE2D6] leading-tight">
                Why Japan?
              </h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-2xl md:text-3xl text-[#EAE2D6] font-light leading-relaxed mb-6">
                    Japanese vehicles stand apart because of how they're <span className="text-[#25614F] font-semibold">maintained</span>, not just how they're built.
                  </p>
                </motion.div>

                <motion.div
                  className="border-l-4 border-[#25614F] pl-6 space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-lg text-[#BDB6AD] leading-relaxed">
                    Strict inspection standards, excellent road infrastructure, and a culture of regular maintenance mean Japanese cars often arrive in Australia with lower kilometres and better overall condition than their local equivalents.
                  </p>

                  <p className="text-lg text-[#BDB6AD] leading-relaxed">
                    Beyond condition, there's access. Japan offers models, specifications, and special editions that simply aren't available in the Australian market - including JDM classics, performance vehicles, and collector cars that retain their value.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Alternating Flow Design */}
      <section id="why-us" className="py-32 bg-gradient-to-br from-[#1a2420] to-[#0F1614] relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#25614F] to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></div>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Our Difference</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-[#EAE2D6]">
              What Makes UMZE Autohaus Different
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#BDB6AD] max-w-3xl mx-auto leading-relaxed">
              Our approach combines genuine experience with transparent practices
            </p>
          </motion.div>

          {/* Alternating Features */}
          <div className="space-y-24">
            {[
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'We Look Beyond Auction Grades',
                description: 'An auction grade is just a starting point. We analyse photos in detail, commission physical inspections, check underbody condition, verify rust points, assess engine bay signs, and evaluate overall presentation before recommending any vehicle.',
                align: 'left'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Real Savings, No Hidden Costs',
                description: "We help you understand exactly what you're paying for - vehicle price, shipping, taxes, compliance, and registration. No surprise fees, no unclear breakdowns. Just clear expectations from start to finish.",
                align: 'right'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Personal Guidance, Every Step',
                description: "You're not handed off to a faceless system. We translate auction sheets, review condition reports, explain what's important, and keep you informed throughout the entire import process.",
                align: 'left'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "We Don't Cut Corners",
                description: "Our focus is helping you import safely and confidently. We won't push you toward a bad deal or skip important checks to close a sale. Your long-term satisfaction matters more than a quick transaction.",
                align: 'right'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-12 ${feature.align === 'right' ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: feature.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Icon Side */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#25614F]/30 to-transparent border-2 border-[#25614F]/40 flex items-center justify-center relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-[#25614F]/10 blur-xl"></div>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 text-[#25614F]">
                      {feature.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 ${feature.align === 'right' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#EAE2D6] mb-4">
                    {feature.title}
                  </h3>
                  <div className={`w-24 h-1 bg-[#25614F] rounded-full mb-4 ${feature.align === 'right' ? 'ml-auto' : ''}`}></div>
                  <p className="text-lg text-[#BDB6AD] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Vehicle Range - Premium Redesign */}
      <section className="py-32 bg-gradient-to-br from-[#0F1614] to-[#1a2420] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#25614F]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Proven Track Record</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Experience & Vehicle Range
            </h2>
            <div className="flex justify-center gap-3 mb-8">
              <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
              <div className="w-12 h-1 bg-[#25614F]/60 rounded-full"></div>
              <div className="w-8 h-1 bg-[#25614F]/30 rounded-full"></div>
            </div>

            {/* Stats Highlight */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#25614F]/30 to-[#25614F]/10 rounded-2xl blur"></div>
                <div className="relative bg-gradient-to-br from-[#25614F]/20 to-transparent rounded-2xl px-8 py-4 border border-[#25614F]/40">
                  <p className="text-3xl md:text-4xl text-[#25614F] font-bold">
                    100+ <span className="text-[#EAE2D6] text-2xl">Vehicles Successfully Imported</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Vehicle Categories - Premium Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'JDM Classics',
                desc: 'Iconic Japanese performance vehicles',
                examples: 'Skyline, Supra, Chaser, RX-7',
                icon: '🏁',
                gradient: 'from-[#25614F]/20 to-[#1e4f3f]/10'
              },
              {
                title: 'Daily Drivers',
                desc: 'Reliable imports for everyday use',
                examples: 'Trustworthy and efficient',
                icon: '🚗',
                gradient: 'from-[#25614F]/15 to-[#1e4f3f]/5'
              },
              {
                title: 'Performance Cars',
                desc: 'High-power, driver-focused machines',
                examples: 'Built for speed and thrill',
                icon: '⚡',
                gradient: 'from-[#25614F]/20 to-[#1e4f3f]/10'
              },
              {
                title: 'European Imports',
                desc: 'Premium UK and European classics',
                examples: 'Luxury meets performance',
                icon: '🇪🇺',
                gradient: 'from-[#25614F]/15 to-[#1e4f3f]/5'
              },
              {
                title: 'Hybrids & Eco',
                desc: 'Modern efficiency meets innovation',
                examples: 'Sustainable performance',
                icon: '🌱',
                gradient: 'from-[#25614F]/20 to-[#1e4f3f]/10'
              },
              {
                title: 'Collector Vehicles',
                desc: 'Rare finds and investment pieces',
                examples: 'Timeless automotive art',
                icon: '💎',
                gradient: 'from-[#25614F]/15 to-[#1e4f3f]/5'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="group relative h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-full">
                  {/* Card Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#25614F]/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className={`relative h-full bg-gradient-to-br ${category.gradient} rounded-2xl p-8 border border-[#25614F]/20 group-hover:border-[#25614F]/50 transition-all duration-500 backdrop-blur-sm`}>
                    {/* Icon */}
                    <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-[#EAE2D6] font-bold text-xl mb-3 group-hover:text-[#25614F] transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="w-16 h-1 bg-[#25614F] mx-auto rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
                      <p className="text-[#BDB6AD] text-base leading-relaxed mb-3">
                        {category.desc}
                      </p>
                      <p className="text-[#25614F] text-sm font-semibold">
                        {category.examples}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#25614F]/30 to-[#25614F]/10 rounded-2xl blur"></div>
              <div className="relative bg-gradient-to-br from-[#1a2420] to-[#0F1614] rounded-2xl px-10 py-8 border border-[#25614F]/40">
                <p className="text-lg text-[#BDB6AD] mb-4">
                  From classic JDM legends to modern eco-friendly imports
                </p>
                <p className="text-2xl text-[#EAE2D6] font-bold">
                  We handle every type of vehicle import with expertise and care
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Circular Design */}
      <section className="py-32 bg-[#0F1614] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#25614F]/20 to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: '100+', label: 'Vehicles Imported' },
              { number: '2012', label: 'Journey Began' },
              { number: '2019', label: "Founder's First Import" },
              { number: '100%', label: 'Transparency' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 rounded-full bg-[#25614F] opacity-20 blur-xl"></div>
                    <div className="relative text-4xl font-bold text-[#EAE2D6]">{stat.number}</div>
                  </div>
                </div>
                <h4 className="text-[#BDB6AD] font-semibold text-sm">{stat.label}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement - Full Width */}
      <section className="py-32 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full mb-10 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="absolute inset-0 rounded-full bg-[#25614F] opacity-20 blur-xl"></div>
              <svg className="relative w-12 h-12 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-[#EAE2D6]">
              Our Mission
            </h2>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#25614F]/20 via-[#25614F]/30 to-[#25614F]/20 blur-xl rounded-3xl"></div>
              <p className="relative text-3xl md:text-4xl text-[#EAE2D6] leading-relaxed font-light py-12 px-8">
                Helping people import quality cars from Japan <span className="text-[#25614F] font-semibold">safely</span>, <span className="text-[#25614F] font-semibold">transparently</span>, and <span className="text-[#25614F] font-semibold">confidently</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="py-32 bg-gradient-to-br from-[#25614F] via-[#25614F]/95 to-[#1e4f3f] relative overflow-hidden">
        {/* Animated Background Elements */}
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
            Ready to Start Your Import?
          </motion.h2>
          <motion.p
            className="text-xl text-[#EAE2D6]/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your requirements and find the right vehicle for you.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact-us"
                className="bg-[#EAE2D6] text-[#25614F] px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 inline-block shadow-2xl"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/calculator"
                className="border-2 border-[#EAE2D6] text-[#EAE2D6] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#EAE2D6]/10 backdrop-blur-sm transition-all duration-300 inline-block"
              >
                View Calculator
              </Link>
            </motion.div>
          </motion.div>

          {/* Google Reviews Link */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://share.google/Ch858CdwF3raEktou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#EAE2D6] text-[#25614F] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Read Our Google Reviews
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
