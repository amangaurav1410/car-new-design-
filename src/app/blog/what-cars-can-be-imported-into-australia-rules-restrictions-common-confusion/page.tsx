'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhatCarsCanBeImportedIntoAustraliaRulesRestrictionsCommonConfusion() {
  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/blog/thumb-1920-700305.jpg"
            alt="Australian vehicle import rules and regulations"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              What Cars Can Be Imported into Australia? Rules, Restrictions & Common Confusion
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
              Understanding vehicle import eligibility and avoiding common pitfalls
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-32 bg-[#0F1614]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                One of the most common questions people ask when considering importing a vehicle is simple: "Am I actually allowed to import this car into Australia?"
                Australia has strict vehicle import rules, and while importing from Japan is common, not every vehicle is automatically eligible. Understanding the basics early can prevent wasted time, unexpected costs, or disappointment later in the process.
                This article provides a high-level overview of how vehicle import eligibility works in Australia and highlights areas that commonly cause confusion.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Why Australia Has Strict Import Rules
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Australia's import regulations exist to ensure vehicles meet local standards for safety, emissions, and environmental impact. These standards differ from those in Japan and other countries, which is why eligibility and compliance checks are an important part of the import process.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Who Can Import a Vehicle into Australia
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                There are several pathways under which a vehicle may be imported. Eligibility depends on factors such as:
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>the vehicle's age</li>
                <li>model and specifications</li>
                <li>how the vehicle is being imported</li>
                <li>intended use</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Not all vehicles fall neatly into the same category, which is why eligibility should always be confirmed before purchase.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Common Types of Vehicles That May Be Eligible
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                While rules can change over time, vehicles commonly imported into Australia include:
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>specialist or enthusiast vehicles</li>
                <li>older vehicles that meet age-based criteria</li>
                <li>models not originally sold in the Australian market</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Eligibility is assessed on a case-by-case basis, and assumptions should be avoided.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Checking Eligibility Through the SEVS Register
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                For many specialist and enthusiast vehicles, eligibility is assessed through Australia's Specialist and Enthusiast Vehicle Scheme (SEVS).
                The official SEVS Register lists vehicles that may be eligible for import and compliance under approved model reports. Buyers can use this register to check whether a specific make, model, and year has an approved pathway.
              </p>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                <strong>SEVS Register (Department of Infrastructure):</strong><br />
                <a href="https://www.rover.infrastructure.gov.au/PublishedApprovals/SEVApprovals/" className="text-[#25614F] hover:text-[#1e4f3f] underline" target="_blank" rel="noopener noreferrer">
                  https://www.rover.infrastructure.gov.au/PublishedApprovals/SEVApprovals/
                </a>
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Important Note About SEVS Listings and Model Reports
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                It's important to understand that appearing on the SEVS Register does not automatically guarantee compliance.
                Some vehicles:
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>may be listed but still awaiting a published model report</li>
                <li>may have limited approval conditions</li>
                <li>may only be eligible for certain build dates or specifications</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                In these cases, a vehicle may be approved for import but cannot yet be complied or registered until the relevant model report is finalised.
                This is a common area of confusion and one of the reasons eligibility should always be confirmed before purchase.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Import Approval vs Compliance
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Import approval and compliance are two separate steps.
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li><strong>Import approval</strong> determines whether the vehicle is allowed to enter Australia.</li>
                <li><strong>Compliance</strong> ensures the vehicle meets Australian standards before registration.</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                A vehicle may be approved for import but still require compliance work or may be unable to be registered until requirements are met.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Modifications and Australian Standards
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Some vehicles require modifications to meet Australian requirements. These may involve:
              </p>
              <ul className="text-[#BDB6AD] leading-relaxed mb-8 list-disc list-inside">
                <li>lighting changes</li>
                <li>emissions-related adjustments</li>
                <li>safety-related components</li>
              </ul>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                The extent of compliance work varies depending on the vehicle and its original specification.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Why Eligibility Should Be Checked Early
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                One of the most common mistakes buyers make is confirming eligibility after purchasing a vehicle. This can result in unexpected costs, delays, or difficulty registering the vehicle.
                Checking eligibility early helps avoid unnecessary risk and allows for informed decision-making.
              </p>

              <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/20 mt-12">
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                  Final Thoughts
                </h3>
                <p className="text-[#BDB6AD] leading-relaxed">
                  Australia's vehicle import rules are detailed for a reason, and while they may seem complex, they are manageable with the right understanding and preparation.
                  Approaching importing with clarity, patience, and realistic expectations helps ensure the process runs smoothly and avoids avoidable setbacks.
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
            Let us help you navigate the import process and find the right vehicle for you.
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
              href="/calculator"
              className="border-2 border-[#EAE2D6] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#EAE2D6]/10 transition-all duration-300 inline-block"
            >
              View Calculator
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}