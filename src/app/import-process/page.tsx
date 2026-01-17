'use client';

import { motion } from 'framer-motion';

export default function ImportProcess() {
  const steps = [
    {
      number: 1,
      title: "Tell Us What You Want",
      description: "Describe your budget, model preferences, and vehicle purpose.",
      details: "We source options from Japan auctions and UK/Hong Kong local markets.",
      icon: "🎯"
    },
    {
      number: 2,
      title: "Live Auction Access",
      description: "We shortlist suitable cars and review:",
      details: "Auction grade, Body condition, Underbody images, Rust points, Maintenance history. We share recent sold data on your chosen car before we go ahead.",
      icon: "🔍"
    },
    {
      number: 3,
      title: "Condition Report & Verification",
      description: "You receive a full breakdown including:",
      details: "Photos, Repair markings, Engine bay signs, Frame integrity, Odometer verification",
      icon: "📋"
    },
    {
      number: 4,
      title: "Bidding & Purchase",
      description: "We bid on your behalf with your approved maximum budget.",
      details: "",
      icon: "💰"
    },
    {
      number: 5,
      title: "Shipping to Australia",
      description: "We handle:",
      details: "Export paperwork, Shipping booking, Container/RoRo management",
      icon: "🚢"
    },
    {
      number: 6,
      title: "Customs, GST & Compliance",
      description: "We manage all legal responsibilities including:",
      details: "Customs clearance, GST payment, Import approvals, Australian Compliance, Roadworthy arrangements",
      icon: "✓"
    },
    {
      number: 7,
      title: "Final Delivery",
      description: "Car is delivered to you or picked up in Australia",
      details: "Includes post-delivery support.",
      icon: "🏁"
    }
  ];

  const costBreakdown = {
    auctionPrice: 30000, // AUD (FOB)
    importDuty: 0, // No duty (Japanese vehicle)
    shipping: 2750, // AUD
    gst: 3275, // AUD (10% of FOB + Shipping)
    localTransport: 280, // AUD
    compliance: 1800, // AUD
    serviceFee: 1250, // AUD
    total: 39355 // AUD
  };

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
      {/* Hero Section - Modern */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-07 at 16.11.44 (3).jpeg"
            alt="Import process workflow"
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
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Complete Process Guide</span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              A Seamless, Transparent Import Process
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
            From vehicle search to delivery in Australia we handle everything.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.a
              href="/import-now"
              className="bg-[#25614F] text-[#EAE2D6] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Import
            </motion.a>

            {/* Second button removed as requested */}
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process - Flowing Timeline */}
      <section className="py-32 bg-[#0F1614] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
              7-Step Process Breakdown
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
            <div className="w-16 h-1 bg-[#25614F]/50 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-[#BDB6AD] max-w-3xl mx-auto">
              Crystal clear process from start to finish
            </p>
          </motion.div>

          {/* Steps - Alternating Layout */}
          <div className="max-w-6xl mx-auto space-y-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-center gap-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Icon Circle */}
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative w-32 h-32 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-2xl">
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-full bg-[#25614F] opacity-20 blur-xl"></div>

                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#EAE2D6] rounded-full flex items-center justify-center shadow-lg border-4 border-[#0F1614]">
                        <span className="text-[#25614F] font-bold text-lg">{step.number}</span>
                      </div>

                      {/* Emoji Icon */}
                      <div className="relative text-5xl">
                        {step.icon}
                      </div>
                    </div>

                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className={`hidden md:block absolute top-32 ${isEven ? 'left-1/2' : 'right-1/2'} w-px h-20 bg-gradient-to-b from-[#25614F]/50 to-transparent`}></div>
                    )}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-3xl font-bold text-[#EAE2D6] mb-4">
                      {step.title}
                    </h3>
                    <div className={`w-20 h-1 bg-[#25614F] rounded-full mb-4 ${isEven ? 'md:mx-0 mx-auto' : 'md:ml-auto mx-auto'}`}></div>
                    <p className="text-[#BDB6AD] text-lg leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.details && (
                      <div className={`inline-block bg-[#25614F]/10 border border-[#25614F]/30 rounded-xl px-6 py-4 ${isEven ? 'md:text-left' : 'md:text-right'} text-left`}>
                        <p className="text-[#BDB6AD] leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Breakdown -  Split Design */}
      <section className="py-32 bg-carbon relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(37,97,79,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30">
                <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Example Breakdown</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#EAE2D6]">
                Import Cost Breakdown
              </h3>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-6"></div>
              <p className="text-[#BDB6AD] text-lg">
                Sample vehicle: Toyota Chaser
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left - Cost Details */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  {[
                    { label: 'FOB Price', value: `AUD $${costBreakdown.auctionPrice.toLocaleString()}` },
                    { label: 'Import Duty', value: `AUD $${costBreakdown.importDuty.toLocaleString()}` },
                    { label: 'Shipping + Charges', value: `AUD $${costBreakdown.shipping.toLocaleString()}` },
                    { label: 'GST (10%)', value: `AUD $${costBreakdown.gst.toLocaleString()}` },
                    { label: 'Local Transport', value: `AUD $${costBreakdown.localTransport.toLocaleString()}` },
                    { label: 'Compliance', value: `AUD $${costBreakdown.compliance.toLocaleString()}` },
                    { label: 'UMZE Autohaus Service Fee', value: `AUD $${costBreakdown.serviceFee.toLocaleString()}` }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center py-4 border-b border-[#25614F]/20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-[#BDB6AD] text-lg">{item.label}:</span>
                      <span className="text-[#EAE2D6] font-bold text-xl">{item.value}</span>
                    </motion.div>
                  ))}

                  {/* Total */}
                  <motion.div
                    className="flex justify-between items-center py-6 border-t-2 border-[#25614F]/50 mt-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-[#EAE2D6] font-bold text-2xl">Total Landed Cost:</span>
                    <span className="text-[#25614F] font-bold text-3xl">AUD ${costBreakdown.total.toLocaleString()}</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - What's Included */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-[#25614F]/10 to-[#25614F]/5 rounded-2xl p-8 border border-[#25614F]/30">
                  <h4 className="text-2xl font-bold text-[#EAE2D6] mb-6">What's Included</h4>
                  <div className="space-y-4">
                    {[
                      'Full auction bidding service',
                      'Professional condition inspection',
                      'Complete shipping coordination',
                      'Customs clearance & GST',
                      'Australian compliance certification',
                      'Australia delivery & support'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-[#25614F] rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#BDB6AD] leading-relaxed pt-1">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="py-32 bg-gradient-to-br from-[#25614F] via-[#25614F]/95 to-[#1e4f3f] relative overflow-hidden">
        {/* Animated Background */}
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
            Get your personalized import plan and cost estimate today.
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
              <span className="relative z-10">Start Your Import</span>
            </motion.a>
            {/* Second button removed as requested */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
