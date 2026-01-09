'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Calculator() {
  // User-editable fields
  const [fobPrice, setFobPrice] = useState<number>(30000);
  const [importDuty, setImportDuty] = useState<number>(0);

  // Fixed values
  const SHIPPING_CHARGES = 2750;
  const LOCAL_TRANSPORT = 280;
  const COMPLIANCE_COST = 1800;
  const SERVICE_FEE = 1250;

  // Auto-calculated values
  const calculations = useMemo(() => {
    const dutyAmount = fobPrice * (importDuty / 100);
    const gst = 0.10 * (fobPrice + SHIPPING_CHARGES + dutyAmount);
    const totalCost = fobPrice + dutyAmount + SHIPPING_CHARGES + gst + LOCAL_TRANSPORT + COMPLIANCE_COST + SERVICE_FEE;

    return {
      dutyAmount,
      gst,
      totalCost
    };
  }, [fobPrice, importDuty]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-carbon">
      {/* Hero Section - Modern */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Import Cost Calculator"
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
              <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Cost Calculator</span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              Import Cost Calculator
            </h1>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-[#EAE2D6] leading-relaxed drop-shadow-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Full transparency on your vehicle import costs. Calculate your total landed cost before you commit.
          </motion.p>
        </div>
      </section>

      {/* Calculator Section - Modern Layout */}
      <section id="calculator" className="py-32 bg-[#0F1614] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Calculator Intro */}
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-[#25614F] rounded-full mb-8 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <svg className="w-10 h-10 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Interactive Calculator
              </h2>
              <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
              <div className="w-16 h-1 bg-[#25614F]/50 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {/* Left Column - Input Fields (2 cols) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Editable Fields */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#EAE2D6]">Your Inputs</h3>
                  </div>

                  {/* FOB Price */}
                  <div className="mb-6">
                    <label className="block text-[#EAE2D6] font-semibold mb-2">
                      FOB Price (AUD)
                    </label>
                    <p className="text-sm text-[#BDB6AD] mb-3">Base vehicle price in AUD</p>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BDB6AD] text-lg">$</span>
                      <input
                        type="number"
                        value={fobPrice}
                        onChange={(e) => {
                          const value = e.target.value.replace(/^0+/, ''); // Remove leading zeros
                          setFobPrice(Math.max(0, Number(value || 0)));
                        }}
                        className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl pl-10 pr-4 py-4 text-[#EAE2D6] text-xl font-semibold placeholder-[#BDB6AD]/50 focus:border-[#25614F] focus:outline-none focus:ring-2 focus:ring-[#25614F]/30 transition-all"
                        placeholder="30000"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* Import Duty */}
                  <div>
                    <label className="block text-[#EAE2D6] font-semibold mb-2">
                      Import Duty (%)
                    </label>
                    <p className="text-sm text-[#BDB6AD] mb-3">Select origin of manufacture</p>
                    <p className="text-xs text-[#BDB6AD]/80 mb-3 italic">Duty is based on country of manufacture, not where the car is purchased or shipped from.</p>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.button
                        onClick={() => setImportDuty(0)}
                        className={`py-5 px-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                          importDuty === 0
                            ? 'bg-gradient-to-br from-[#25614F] to-[#1e4f3f] text-[#EAE2D6] border-2 border-[#25614F] shadow-lg'
                            : 'bg-[#1a2420] text-[#BDB6AD] border-2 border-[#25614F]/30 hover:border-[#25614F]/60'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        0%
                        <span className="block text-sm font-normal mt-1 opacity-80">Japanese built</span>
                      </motion.button>
                      <motion.button
                        onClick={() => setImportDuty(5)}
                        className={`py-5 px-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                          importDuty === 5
                            ? 'bg-gradient-to-br from-[#25614F] to-[#1e4f3f] text-[#EAE2D6] border-2 border-[#25614F] shadow-lg'
                            : 'bg-[#1a2420] text-[#BDB6AD] border-2 border-[#25614F]/30 hover:border-[#25614F]/60'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        5%
                        <span className="block text-sm font-normal mt-1 opacity-80">European/UK</span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Fixed Values Section */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#25614F]/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#EAE2D6]">Fixed Costs</h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'Shipping + Charges (RoRo)', value: SHIPPING_CHARGES },
                      { label: 'Local Transport Cost', value: LOCAL_TRANSPORT },
                      { label: 'Compliance Cost', value: COMPLIANCE_COST },
                      { label: 'UMZE Autohaus Service Fee', value: SERVICE_FEE }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center py-4 px-5 bg-[#1a2420]/50 rounded-xl border border-[#25614F]/20 hover:border-[#25614F]/40 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <span className="text-[#BDB6AD] text-sm">{item.label}</span>
                        <span className="text-[#EAE2D6] font-semibold">{formatCurrency(item.value)}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Results (3 cols) */}
              <div className="lg:col-span-3">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#25614F]/20 to-[#25614F]/10 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-[#1a2420] to-[#0F1614] rounded-3xl p-8 border border-[#25614F]/40">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#EAE2D6]">Cost Breakdown</h3>
                    </div>

                    <div className="space-y-4 mb-8">
                      {/* FOB Price */}
                      <motion.div
                        className="flex justify-between items-center py-4 border-b border-[#25614F]/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-[#BDB6AD]">FOB Price</span>
                        <span className="text-[#EAE2D6] font-bold text-xl">{formatCurrency(fobPrice)}</span>
                      </motion.div>

                      {/* Duty Amount */}
                      <motion.div
                        className="flex justify-between items-start py-4 border-b border-[#25614F]/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div>
                          <span className="text-[#BDB6AD]">Import Duty ({importDuty}%)</span>
                          <p className="text-xs text-[#BDB6AD]/60 mt-1">FOB × {importDuty}%</p>
                        </div>
                        <span className="text-[#EAE2D6] font-bold text-xl">{formatCurrency(calculations.dutyAmount)}</span>
                      </motion.div>

                      {/* Shipping */}
                      <motion.div
                        className="flex justify-between items-center py-4 border-b border-[#25614F]/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <span className="text-[#BDB6AD]">Shipping + Charges</span>
                        <span className="text-[#EAE2D6] font-bold text-xl">{formatCurrency(SHIPPING_CHARGES)}</span>
                      </motion.div>

                      {/* GST */}
                      <motion.div
                        className="flex justify-between items-start py-4 border-b border-[#25614F]/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div>
                          <span className="text-[#BDB6AD]">GST on Import (10%)</span>
                          <p className="text-xs text-[#BDB6AD]/60 mt-1">10% × (FOB + Shipping + Duty)</p>
                        </div>
                        <span className="text-[#EAE2D6] font-bold text-xl">{formatCurrency(calculations.gst)}</span>
                      </motion.div>

                      {/* Local Transport */}
                      <motion.div
                        className="flex justify-between items-center py-4 border-b border-[#25614F]/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <span className="text-[#BDB6AD]">Local Transport</span>
                        <span className="text-[#EAE2D6] font-bold text-xl">{formatCurrency(LOCAL_TRANSPORT)}</span>
                      </motion.div>

                      {/* Compliance */}
                      <motion.div
                        className="flex justify-between items-center py-4 border-b border-[#25614F]/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <span className="text-[#BDB6AD]">Compliance Cost</span>
                        <span className="text-[#EAE2D6] font-bold text-xl">{formatCurrency(COMPLIANCE_COST)}</span>
                      </motion.div>

                      {/* Service Fee */}
                      <motion.div
                        className="flex justify-between items-center py-4 border-b border-[#25614F]/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <span className="text-[#BDB6AD]">UMZE Autohaus Service Fee</span>
                        <span className="text-[#EAE2D6] font-bold text-xl">{formatCurrency(SERVICE_FEE)}</span>
                      </motion.div>
                    </div>

                    {/* Total - Prominent Display */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#25614F] to-[#1e4f3f] rounded-2xl blur opacity-30"></div>
                      <div className="relative bg-gradient-to-br from-[#25614F]/30 to-[#1e4f3f]/20 rounded-2xl p-6 border-2 border-[#25614F]/60">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-[#EAE2D6] font-bold text-2xl">Total Car Cost</span>
                            <p className="text-sm text-[#BDB6AD] mt-1">Landed & Complied</p>
                          </div>
                          <span className="text-[#25614F] font-bold text-4xl">{formatCurrency(calculations.totalCost)}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Disclaimer */}
                    <p className="text-xs text-[#BDB6AD]/60 mt-6 text-center leading-relaxed">
                      * This is an estimate. Actual costs may vary based on vehicle specifics and current rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formula Breakdown Section - Modern Flow */}
      <section className="py-32 bg-carbon relative overflow-hidden">
        {/* Background Pattern */}
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
              How We Calculate Your Costs
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
            <div className="w-16 h-1 bg-[#25614F]/50 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-[#BDB6AD] max-w-2xl mx-auto">
              Transparent formulas, no hidden calculations
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Duty Amount',
                formula: 'Duty = FOB × (Duty% ÷ 100)'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                  </svg>
                ),
                title: 'GST on Import (10%)',
                formula: 'GST = 10% × (FOB + Shipping + Duty)'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Total Landed Cost',
                formula: 'Total = FOB + Duty + Shipping + GST + Transport + Compliance + Fee'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative">
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-[#25614F] opacity-20 blur-xl"></div>
                      <div className="relative text-[#EAE2D6]">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-4">{item.title}</h3>
                    <div className="w-16 h-1 bg-[#25614F] mx-auto rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
                    <div className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20 group-hover:border-[#25614F]/40 transition-all">
                      <p className="font-mono text-sm text-[#BDB6AD] break-words">
                        {item.formula}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            Get in touch with us to discuss your import requirements and get a personalized quote.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/contact-us"
              className="bg-[#EAE2D6] text-[#25614F] px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/import-process"
              className="border-2 border-[#EAE2D6] text-[#EAE2D6] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#EAE2D6]/10 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Import Process
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}