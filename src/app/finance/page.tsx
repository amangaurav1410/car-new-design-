'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Finance() {
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
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
            alt="Finance options for vehicle imports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Finance Options</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              Finance Options
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
            Flexible financing solutions for your vehicle import needs.
          </motion.p>
        </div>
      </section>

      {/* Finance Content */}
      <section className="py-24 bg-[#0F1614]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Purchasing or importing a vehicle doesn't always mean paying the full amount upfront. Depending on your circumstances, finance may be available through trusted third-party providers.
                At Umze Autohaus, we do not provide finance directly. Instead, we assist clients by connecting them with reputable, independent finance partners who are familiar with both locally sourced and imported vehicles.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                How Finance Assistance Works
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                If you're interested in finance, the process is straightforward:
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>You let us know that finance is required</li>
                <li>We introduce you to one of our trusted finance partners</li>
                <li>The finance partner assesses your individual situation</li>
                <li>If approved, finance options are provided directly to you</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                In many cases, same-day pre-approval may be available, subject to lender assessment.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                What Finance May Be Used For
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Depending on eligibility and lender criteria, finance may be available for:
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>Imported vehicles from Japan</li>
                <li>Locally available stock</li>
                <li>Auction-sourced vehicles</li>
                <li>Landed and complied vehicles</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                All finance approvals, terms, and conditions are handled directly by the lender.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Important Information
              </h2>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>Finance approval is subject to lender criteria</li>
                <li>Interest rates, terms, and conditions vary</li>
                <li>Umze Autohaus does not provide financial advice</li>
                <li>All finance agreements are between you and the lender</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Our role is limited to making an introduction and assisting with coordination alongside your vehicle purchase.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Why Use Our Finance Partners
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Our finance partners are experienced with:
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>Vehicle imports</li>
                <li>Auction purchases</li>
                <li>Compliance timeframes</li>
                <li>Coordinating settlement with delivery</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                This helps reduce delays and confusion during the purchase or import process.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Interested in Finance?
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                If you'd like to explore finance options, get in touch and let us know:
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>The vehicle you're considering</li>
                <li>Whether it's imported or local stock</li>
                <li>Your preferred timeframe</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                We'll guide you through the next steps.
              </p>

              <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/20 mt-12">
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                  Disclaimer
                </h3>
                <p className="text-[#BDB6AD] leading-relaxed">
                  Finance is provided by independent third-party lenders. Approval is subject to assessment, terms, and conditions set by the lender.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25614F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Import?
          </motion.h2>
          <motion.p
            className="text-lg text-[#EAE2D6]/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let us help you navigate the import process and explore finance options.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact-us"
              className="bg-[#EAE2D6] text-[#25614F] px-10 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 inline-block"
            >
              Get in Touch
            </Link>
            <Link
              href="/finance"
              className="border-2 border-[#EAE2D6] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#EAE2D6]/10 transition-all duration-300 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
