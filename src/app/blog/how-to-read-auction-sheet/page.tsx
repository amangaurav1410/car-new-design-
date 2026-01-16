'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HowToReadAuctionSheet() {
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
            src="/images/WhatsApp Image 2025-12-22 at 16.04.14.jpeg"
            alt="How to read Japanese auction sheet"
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
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Beginner Guide</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              How to Read a Japanese Auction Sheet: A Beginner's Guide for First-Time Importers
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
              <span>10 min read</span>
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
              If you're new to importing cars from Japan, auction sheets can look intimidating. The codes, grades, and diagrams seem like a foreign language designed to confuse rather than inform. But here's the good news: once you understand the system, it becomes straightforward.
            </p>
            <p className="text-lg text-[#BDB6AD] leading-relaxed mb-8">
              This guide will walk you through reading a Japanese auction sheet step-by-step. We'll break down the four key sections, explain what each part means, and show you how to spot potential issues before you bid. By the end, you'll feel confident reviewing auction sheets on your own.
            </p>
            <p className="text-lg text-[#BDB6AD] leading-relaxed mb-8">
              At UMZE Autohaus, we've helped hundreds of first-time importers navigate Japanese auctions. We know what questions buyers have and what mistakes to avoid. This guide shares that experience with you.
            </p>
          </motion.div>

          {/* The 4 Key Sections */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">The 4 Key Sections of an Auction Sheet</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-8">
              Every auction sheet follows the same structure. Once you know where to look, you can quickly assess a vehicle's condition.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Overall Condition', desc: "The main grade that summarises the vehicle's overall state" },
                { title: 'Interior Condition', desc: 'How the inside of the car looks and feels' },
                { title: 'Vehicle Features & Options', desc: 'What equipment and extras the car has' },
                { title: 'Vehicle Diagram', desc: 'A map showing where damage or repairs are located' }
              ].map((item, index) => (
                <div key={index} className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                  <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">{item.title}</h3>
                  <p className="text-[#BDB6AD]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Overall Condition Grades */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Overall Condition Grades Explained</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              The overall grade is the first thing you see, and it gives you a quick sense of the vehicle's condition. But remember, this is just a starting point.
            </p>

            <div className="grid gap-4 mb-8">
              {[
                { grade: 'Grade 6', desc: 'Showroom condition. Like new, often with very low kilometres.' },
                { grade: 'Grade 5', desc: 'Excellent condition. Minimal wear, well-maintained.' },
                { grade: 'Grade 4', desc: 'Good used condition. Normal wear for age and kilometres.' },
                { grade: 'Grade 3', desc: 'Heavily used. Significant wear but still driveable.' },
                { grade: 'Grade 2', desc: 'Poor condition. Major issues, likely needs significant work.' },
                { grade: 'Grade 1', desc: 'Very poor. May not be roadworthy or require extensive repairs.' },
                { grade: 'Grade 0', desc: 'Not roadworthy. Often used for parts only.' }
              ].map((item, index) => (
                <div key={index} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-[#25614F]">{item.grade}</span>
                    <span className="text-[#BDB6AD]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Modified Vehicles:</h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                Modified vehicles often have grades like "M5" or "M4" (M = Modified). These cars may have aftermarket parts, engine upgrades, or suspension modifications. The grade reflects the overall condition, not the modifications themselves.
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mt-6">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Accident and Repair Grades:</h3>
              <p className="text-[#BDB6AD] leading-relaxed mb-4">
                Vehicles with accident history use different grading:
              </p>
              <ul className="space-y-2 text-[#BDB6AD]">
                <li>• <strong className="text-[#EAE2D6]">RA:</strong> Minor accident repair. Structural work completed to standard.</li>
                <li>• <strong className="text-[#EAE2D6]">R:</strong> Major accident or structural damage. Requires careful assessment.</li>
                <li>• <strong className="text-[#EAE2D6]">A:</strong> Accident damage, not repaired.</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mt-4">
                <strong className="text-[#EAE2D6]">Important:</strong> Lower grades may still be acceptable if you understand what you're getting. A Grade 3 car might be perfect for a project car if the price reflects its condition.
              </p>
            </div>
          </motion.div>

          {/* Interior Condition Grades */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Interior Condition Grades</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              The interior grade tells you about the car's inside condition. This is important because interior wear affects your daily experience more than you might think.
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

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">What's Normal Wear?</h3>
              <p className="text-[#BDB6AD] leading-relaxed mb-4">
                For a car with 100,000 kilometres, you'd expect:
              </p>
              <ul className="space-y-2 text-[#BDB6AD]">
                <li>• Slight wear on driver's seat</li>
                <li>• Minor scuffs on door panels</li>
                <li>• Some fading on steering wheel</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mt-4">
                <strong className="text-[#EAE2D6]">Red flag:</strong> If the interior grade is significantly lower than the overall grade, ask why. This could indicate hidden issues or poor maintenance.
              </p>
            </div>
          </motion.div>

          {/* Vehicle Features & Options */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Vehicle Features & Options</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              This section lists what equipment and extras the car has. It's important to understand what you're getting, but remember: features don't equal condition.
            </p>

            <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20 mb-8">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Common Feature Codes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { code: 'AT', desc: 'Automatic transmission' },
                  { code: 'MT', desc: 'Manual transmission' },
                  { code: '4WD', desc: 'Four-wheel drive' },
                  { code: 'A/C', desc: 'Air conditioning' },
                  { code: 'PS', desc: 'Power steering' },
                  { code: 'PB', desc: 'Power brakes' },
                  { code: 'CD', desc: 'CD player' },
                  { code: 'DVD', desc: 'DVD navigation' },
                  { code: 'L', desc: 'Leather seats' },
                  { code: 'SRS', desc: 'Airbags' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-lg font-bold text-[#25614F] min-w-[60px]">{item.code}</span>
                    <span className="text-[#BDB6AD]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/30">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">Important Note:</h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                Just because a car has lots of features doesn't mean it's in good condition. Always focus on the condition grades first, then look at features. A Grade 4 car with basic features is often a better buy than a Grade 3 car loaded with options.
              </p>
            </div>
          </motion.div>

          {/* Vehicle Diagram Codes */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Vehicle Diagram Codes</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              The diagram shows the car from above with codes indicating where damage or repairs are located. This is one of the most important sections to understand.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-lg font-bold text-[#25614F] mb-3">Cosmetic Issues:</h3>
                <ul className="space-y-2 text-sm text-[#BDB6AD]">
                  <li>• A1–A3: Scratches (light to severe)</li>
                  <li>• U1–U3: Dents (small to large)</li>
                  <li>• W: Paint waves or panel misalignment</li>
                  <li>• S: Rust spots</li>
                </ul>
              </div>
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-lg font-bold text-[#25614F] mb-3">Repair Indicators:</h3>
                <ul className="space-y-2 text-sm text-[#BDB6AD]">
                  <li>• X: Panel replacement</li>
                  <li>• XX: Multiple panel replacements</li>
                  <li>• Y: Welding or structural repair</li>
                  <li>• Z: Paint repair</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">What's Cosmetic vs Serious:</h3>
              <p className="text-[#BDB6AD] leading-relaxed mb-4">
                <strong className="text-[#EAE2D6]">Cosmetic:</strong> Scratches, dents, and paint issues. These affect appearance but not safety or functionality.
              </p>
              <p className="text-[#BDB6AD] leading-relaxed mb-4">
                <strong className="text-[#EAE2D6]">Serious:</strong> Panel replacements (X, XX), welding (Y), and structural repairs. These indicate accident damage that may affect safety and resale value.
              </p>
              <p className="text-[#BDB6AD] leading-relaxed">
                <strong className="text-[#EAE2D6]">Inspectors may differ:</strong> Different inspectors might interpret damage differently. Always look at photos and ask for clarification if something seems unclear.
              </p>
            </div>
          </motion.div>

          {/* Real-World Examples */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Real-World Examples</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Two cars with similar grades can look very different on paper. Here's why it's important to look at all sections together.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-lg font-bold text-[#25614F] mb-3">Car A: Grade 4</h3>
                <ul className="space-y-2 text-sm text-[#BDB6AD]">
                  <li>• Interior: Grade B</li>
                  <li>• Diagram: A1 (front bumper), U1 (hood)</li>
                  <li>• Notes: "Minor front end damage, repainted"</li>
                </ul>
                <p className="text-[#BDB6AD] text-sm mt-4">
                  <strong className="text-[#EAE2D6]">Assessment:</strong> Good condition with minor cosmetic front damage. Good value for the grade.
                </p>
              </div>
              <div className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                <h3 className="text-lg font-bold text-[#25614F] mb-3">Car B: Grade 4</h3>
                <ul className="space-y-2 text-sm text-[#BDB6AD]">
                  <li>• Interior: Grade D</li>
                  <li>• Diagram: X (front fender), X (hood), U3 (roof)</li>
                  <li>• Notes: "Multiple panel replacements, interior stains"</li>
                </ul>
                <p className="text-[#BDB6AD] text-sm mt-4">
                  <strong className="text-[#EAE2D6]">Assessment:</strong> Poor interior, multiple structural repairs. Price should reflect these issues.
                </p>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">The Importance of Photos:</h3>
              <p className="text-[#BDB6AD] leading-relaxed">
                Always request additional photos based on the auction sheet. If the diagram shows front damage, ask for detailed photos of that area. Photos + notes + diagrams together give you the complete picture.
              </p>
            </div>
          </motion.div>

          {/* Common Mistakes */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Common Mistakes Buyers Make</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Even experienced buyers make these mistakes. Learn from them to avoid costly errors.
            </p>

            <div className="space-y-6">
              {[
                {
                  mistake: 'Bidding on Grade Alone',
                  desc: 'Seeing a Grade 4 car and bidding without checking interior, diagram, or notes. The overall grade is just one piece of the puzzle.'
                },
                {
                  mistake: 'Ignoring Comments',
                  desc: "Skipping the handwritten notes. These often reveal important issues that aren't in the standard codes."
                },
                {
                  mistake: 'Underestimating Repair Costs',
                  desc: 'Assuming minor damage will be cheap to fix. What looks like a simple dent might require panel replacement and painting.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">{item.mistake}</h3>
                  <p className="text-[#BDB6AD] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How UMZE Autohaus Helps */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">How UMZE Autohaus Helps</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              We understand that reading auction sheets can be overwhelming, especially for first-time importers. That's why we offer complete support throughout the process.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Complete Auction Sheet Translation',
                  desc: "Every code, comment, and diagram is explained in plain English. We ensure you understand exactly what you're looking at."
                },
                {
                  title: 'Additional Photo Requests',
                  desc: 'Based on the auction sheet, we request extra photos of concerning areas. This gives you a complete picture before bidding.'
                },
                {
                  title: 'Risk Assessment',
                  desc: "We highlight potential issues and provide our professional assessment. You'll know exactly what you're getting into."
                },
                {
                  title: 'Peace of Mind',
                  desc: "Our goal is to help you make informed decisions. With our support, you can bid with confidence knowing you've seen the full picture."
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
                We focus on transparency and informed decisions. Every potential issue is highlighted before you commit. Our goal is to ensure you're completely comfortable with your purchase.
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mb-6">Conclusion</h2>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Reading Japanese auction sheets might seem complex at first, but it becomes straightforward once you understand the system. The key is to look at all sections together - overall grade, interior grade, features, and the diagram.
            </p>
            <p className="text-[#BDB6AD] leading-relaxed mb-6">
              Remember: grades are a starting point, not the final word. The most important information is often in the detailed notes and diagrams. Take your time, ask questions, and don't rush into a bid.
            </p>
            <p className="text-[#BDB6AD] leading-relaxed mb-8">
              If you're still unsure, that's completely normal. Japanese auctions are complex, and there's a reason experienced importers rely on experts. UMZE Autohaus is here to help you navigate the process with confidence.
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
              href="/blog/japanese-auction-grading-system"
              className="group bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
            >
              <div className="relative h-48">
                <img
                  src="/images/2011-Mercedes-Benz-S63-AMG-L-Collecting-Cars-01-11-2025-Ari-Gelgec23.avif"
                  alt="Japanese auction grading system"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#25614F] transition-colors">
                  Japanese Auction Grading System Explained
                </h3>
                <p className="text-[#BDB6AD] text-sm">
                  Deep dive into grading codes, interior grades, and how to spot red flags.
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
