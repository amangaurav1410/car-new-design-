'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JapaneseAuctionGradingSystem() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/blog/wp12190157.webp"
            alt="Japanese auction grading system"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Buyer Education</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              Japanese Auction Grading System Explained: How to Read an Auction Sheet Before You Buy
            </h1>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-[#BDB6AD]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>December 24, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-[#0F1614]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-[#BDB6AD] leading-relaxed mb-8">
              Japanese auctions can feel confusing to first-time importers. Auction sheets look complex with codes, grades, and diagrams that seem like a foreign language. However, understanding these documents is crucial before you bid on any vehicle.
            </p>
            <p className="text-lg text-[#BDB6AD] leading-relaxed mb-8">
              At UMZE Autohaus, we've helped hundreds of buyers navigate Japanese auctions. We've seen costly mistakes made when people bid without properly reading auction sheets. This guide will help you understand what you're looking at and avoid those expensive errors.
            </p>

            <div className="bg-gradient-to-r from-[#25614F]/20 to-[#25614F]/10 rounded-2xl p-8 border border-[#25614F]/30">
              <h2 className="text-2xl font-bold text-[#EAE2D6] mb-4">What You'll Learn in This Blog</h2>
              <ul className="space-y-3 text-[#BDB6AD]">
                <li className="flex items-start gap-3">
                  <span className="text-[#25614F] font-bold">•</span>
                  <span>What an auction sheet is and how it works</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25614F] font-bold">•</span>
                  <span>How overall grading works from S to R</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25614F] font-bold">•</span>
                  <span>Interior grades explained (A to D)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25614F] font-bold">•</span>
                  <span>How to read the exterior diagram and codes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25614F] font-bold">•</span>
                  <span>Red flags to watch for</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25614F] font-bold">•</span>
                  <span>How UMZE Autohaus verifies auction sheets</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* What Is a Japanese Auction Sheet */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">What Is a Japanese Auction Sheet?</h2>
            <div className="space-y-6 text-[#BDB6AD] leading-relaxed">
              <p>
                An auction sheet is a one-page inspection report created by independent auction house inspectors. It provides a standardised assessment of a vehicle's condition, covering mechanical aspects, interior wear, exterior damage, and accident history.
              </p>
              <p>
                Every major Japanese auction house uses this system - whether it's USS, TAA, or HAA. The consistency means you can compare vehicles across different auctions using the same criteria.
              </p>
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Key Points:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#25614F] mt-1">•</span>
                    <span>Created by independent inspectors (not sellers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#25614F] mt-1">•</span>
                    <span>Standardised across all auction houses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#25614F] mt-1">•</span>
                    <span>Covers condition, history, and visible defects</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Understanding Overall Grades */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Understanding Overall Grades</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              The overall grade is the first thing people look at, and it's important. But it's only one piece of the puzzle.
            </p>

            <div className="grid gap-4 mb-8">
              {[
                { grade: 'S / 6 / 5', desc: 'Near-new condition. Minimal wear, often low kilometres.' },
                { grade: '4.5 / 4 / 3.5', desc: 'Good used condition. Normal wear for age and kilometres.' },
                { grade: '3', desc: 'Heavily used. Significant wear but still driveable.' },
                { grade: 'RA', desc: 'Minor accident repair. Structural work completed to standard.' },
                { grade: 'R', desc: 'Major accident or structural damage. Requires careful assessment.' }
              ].map((item, index) => (
                <div key={index} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-[#25614F]">{item.grade}</span>
                    <span className="text-[#BDB6AD]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-[#BDB6AD] leading-relaxed">
                <strong className="text-[#EAE2D6]">Important:</strong> Grades alone don't tell the full story. A grade 4 car with good maintenance can be better than a grade 4.5 car that was poorly maintained. Always read the detailed notes and look at photos.
              </p>
            </div>
          </motion.div>

          {/* Interior Grades */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Interior Grades Explained</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Interior condition is graded separately from the overall grade. This is crucial because interior wear affects your daily experience more than most buyers initially realise.
            </p>

            <div className="grid gap-4 mb-8">
              {[
                { grade: 'Grade A', desc: 'Like new. Minimal wear, clean, no stains or damage.' },
                { grade: 'Grade B', desc: 'Good condition. Normal wear for kilometres, minor scuffs.' },
                { grade: 'Grade C', desc: 'Noticeable wear. Some stains, worn seats, but functional.' },
                { grade: 'Grade D', desc: 'Heavy wear. Significant damage, tears, or smells.' }
              ].map((item, index) => (
                <div key={index} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-[#25614F]">{item.grade}</span>
                    <span className="text-[#BDB6AD]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/30">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Buying Advice:</h3>
              <p className="text-[#BDB6AD] leading-relaxed mb-4">
                For daily drivers, aim for Grade B or better. For project cars or track vehicles, Grade C might be acceptable if the price reflects the condition.
              </p>
              <p className="text-[#BDB6AD] leading-relaxed">
                <strong className="text-[#EAE2D6]">Red flag:</strong> If the interior grade is significantly lower than the overall grade, ask why. It might indicate hidden issues.
              </p>
            </div>
          </motion.div>

          {/* Reading the Exterior Diagram */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Reading the Exterior Diagram</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              The exterior diagram shows a car viewed from above with codes indicating specific damage locations. Learning to read these codes helps you understand the vehicle's condition beyond the overall grade.
            </p>

            <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4">Common Codes:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { code: 'A1–A3', desc: 'Scratches (A1 light, A3 noticeable)' },
                { code: 'U1–U3', desc: 'Dents (U1 small, U3 larger dents)' },
                { code: 'W', desc: 'Paint waves or panel misalignment' },
                { code: 'S', desc: 'Rust spots or rust-related issues' },
                { code: 'X', desc: 'Panel replacement' },
                { code: 'XX', desc: 'Multiple panel replacements' }
              ].map((item, index) => (
                <div key={index} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-[#25614F] min-w-[80px]">{item.code}</span>
                    <span className="text-[#BDB6AD]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Pattern Recognition:</h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                Look for clusters of codes on one side. This might indicate a side impact. Multiple codes on both front corners could suggest parking incidents. Understanding these patterns helps you assess accident severity.
              </p>
            </div>
          </motion.div>

          {/* Structural & Accident Flags */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Structural & Accident Flags</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              The difference between RA and R grades is crucial for your safety and the vehicle's value.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-xl font-bold text-[#25614F] mb-3">RA - Minor Accident Repair</h3>
                <ul className="space-y-2 text-[#BDB6AD]">
                  <li>• Structural work completed to Japanese standards</li>
                  <li>• Repairs verified by certified technicians</li>
                  <li>• Often acceptable for registration</li>
                  <li>• May affect resale value</li>
                </ul>
              </div>
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-xl font-bold text-red-400 mb-3">R - Major Accident / Structural</h3>
                <ul className="space-y-2 text-[#BDB6AD]">
                  <li>• Significant structural damage</li>
                  <li>• Requires detailed inspection</li>
                  <li>• May not meet Australian compliance</li>
                  <li>• Affects insurance and registration</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Critical Areas to Check:</h3>
              <p className="text-[#BDB6AD] leading-relaxed mb-4">
                The auction sheet will include notes about rails, pillars, aprons, and underbody condition. These structural elements are essential for safety. If you see terms like "frame bent" or "structural repair," proceed with extreme caution.
              </p>
              <p className="text-[#BDB6AD] leading-relaxed">
                <strong className="text-[#EAE2D6]">UMZE Autohaus approach:</strong> We always commission additional independent inspections for any vehicle with RA or R grades. The extra cost is worth the peace of mind.
              </p>
            </div>
          </motion.div>

          {/* Mileage & Consistency Checks */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Mileage & Consistency Checks</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Auction sheets include mileage records, but it's important to verify consistency and look for warning signs.
            </p>

            <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4">What to Look For:</h3>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Service Stickers',
                  desc: 'Maintenance records on the engine bay or door frames. These help verify genuine kilometres.'
                },
                {
                  title: 'Auction History',
                  desc: 'Previous auction appearances. Frequent re-listings might indicate issues.'
                },
                {
                  title: 'Cluster Replacement',
                  desc: 'If noted, verify why the instrument cluster was replaced. Could indicate tampering.'
                },
                {
                  title: 'Condition vs Kilometres',
                  desc: "Does the wear match the stated kilometres? A car with 50,000km shouldn't look like 200,000km."
                }
              ].map((item, index) => (
                <div key={index} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                  <h4 className="text-lg font-bold text-[#EAE2D6] mb-2">{item.title}</h4>
                  <p className="text-[#BDB6AD]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Decoding Handwritten Comments */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Decoding Handwritten Comments</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Inspectors add handwritten notes for issues that don't fit the standard codes. These comments often reveal the most important information.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-lg font-bold text-[#25614F] mb-3">Smells & Interior</h3>
                <ul className="space-y-2 text-sm text-[#BDB6AD]">
                  <li>• "Smoke smell" - Engine issues likely</li>
                  <li>• "Pet smell" - Extensive cleaning needed</li>
                  <li>• "Mold" - Water damage concerns</li>
                </ul>
              </div>
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-lg font-bold text-[#25614F] mb-3">Mechanical Notes</h3>
                <ul className="space-y-2 text-sm text-[#BDB6AD]">
                  <li>• "Engine noise" - Requires investigation</li>
                  <li>• "AC not cold" - Air conditioning issues</li>
                  <li>• "Oil leak" - Maintenance required</li>
                </ul>
              </div>
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-lg font-bold text-[#25614F] mb-3">Rust & Underbody</h3>
                <ul className="space-y-2 text-sm text-[#BDB6AD]">
                  <li>• "Surface rust" - Cosmetic only</li>
                  <li>• "Underbody rust" - Structural concern</li>
                  <li>• "Rust through" - Major repair needed</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* UMZE Autohaus Verification Process */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">UMZE Autohaus Verification Process</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              We don't just translate auction sheets - we verify them. Our process adds extra layers of protection for our clients.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Auction Sheet Translation',
                  desc: "Every code and comment is translated and explained in plain English. We ensure you understand exactly what you're looking at."
                },
                {
                  title: 'Additional Photos',
                  desc: 'We request extra photos based on auction sheet findings. If the diagram shows front damage, we want detailed photos of that area.'
                },
                {
                  title: 'Auction History Checks',
                  desc: "We research the vehicle's auction history. Previous listings can reveal persistent issues or pricing trends."
                },
                {
                  title: 'Independent Inspections',
                  desc: 'For higher-value or concerning vehicles, we commission independent Japanese inspections. This adds a completely objective assessment.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-[#25614F]/20 to-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/30">
                  <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">{item.title}</h3>
                  <p className="text-[#BDB6AD] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/30">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Our Promise:</h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                We focus on transparency and risk reduction. Every potential issue is highlighted before you commit. Our goal is to ensure you're completely comfortable with your purchase.
              </p>
            </div>
          </motion.div>

          {/* Buyer Checklist */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Buyer Checklist – Before You Bid</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Run through this checklist before placing any bid:
            </p>

            <div className="grid gap-4">
              {[
                'Check overall grade vs interior grade - significant gaps need explanation',
                'Look for code clusters on the exterior diagram - these indicate accident patterns',
                'Read all handwritten comments carefully - they often reveal important issues',
                'Verify mileage consistency - do service stickers and wear match the kilometres?',
                'Understand RA vs R grades - know the implications for registration and safety',
                'Compare auction history - multiple listings might indicate persistent issues'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                  <div className="w-6 h-6 bg-[#25614F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#EAE2D6] text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-[#BDB6AD]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final Takeaway */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Final Takeaway</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Understanding Japanese auction sheets takes time, but it's an essential skill for successful importing. The grading system exists to protect buyers, but only if you know how to use it properly.
            </p>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Remember: grades are a starting point, not the end of your assessment. The most important information is often found in the detailed notes, diagrams, and comments.
            </p>
            <div className="bg-gradient-to-r from-[#25614F]/20 to-[#25614F]/10 rounded-2xl p-8 border border-[#25614F]/30">
              <p className="text-lg text-[#EAE2D6] font-semibold mb-4">
                Ready to import but want expert guidance?
              </p>
              <p className="text-[#BDB6AD] leading-relaxed mb-6">
                Don't navigate Japanese auctions alone. UMZE Autohaus provides complete auction sheet translation, verification, and risk assessment for every vehicle we source.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-[#25614F] text-[#EAE2D6] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
              >
                Get Expert Review
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-carbon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold font-heading text-center mb-12 text-[#EAE2D6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Continue Reading
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blog/how-to-read-auction-sheet"
              className="group bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
            >
              <div className="relative h-48">
                <img
                  src="/images/2007-Mercedes-Benz-S63-AMG-Collecting-Cars-06-08-2025-Ari-Gelgec20.avif"
                  alt="Beginner's guide to auction sheets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#25614F] transition-colors">
                  How to Read a Japanese Auction Sheet: A Beginner's Guide
                </h3>
                <p className="text-[#BDB6AD] text-sm">
                  Perfect for first-time importers. Step-by-step breakdown of every section.
                </p>
              </div>
            </Link>

            <Link
              href="/import-process"
              className="group bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#25614F]/20 to-[#25614F]/10 flex items-center justify-center">
                <svg className="w-20 h-20 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#25614F] transition-colors">
                  Our Import Process
                </h3>
                <p className="text-[#BDB6AD] text-sm">
                  See how we handle everything from sourcing to delivery.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
