'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CommonMistakesPeopleMakeWhenImportingCarsFromJapan() {
  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544829099-b9a0c6fd3a04?auto=format&fit=crop&w=1920&q=80"
            alt="Japanese vehicle import mistakes"
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
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              Common Mistakes People Make When Importing Cars from Japan
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
              Avoid these pitfalls for a smoother import experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
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
                Importing a car from Japan can be a rewarding experience, but it's also an area where small misunderstandings can lead to frustration, delays, or unexpected costs.
                Most problems don't occur because importing is inherently risky — they happen because buyers don't fully understand what to look for, what questions to ask, or where assumptions can be misleading. Below are some of the most common mistakes people make when importing cars from Japan, and why avoiding them matters.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Relying Only on Auction Grades
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Auction grades are often treated as the final word on a vehicle's condition. While they provide a useful snapshot, they are only one part of the assessment.
                Grades don't always reflect underbody condition, early rust, mechanical wear, paint history, or ageing interiors. Two cars with the same grade can be in very different condition, which is why context matters more than the number itself.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Chasing the Cheapest Quote
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Low upfront quotes can be appealing, especially for first-time buyers. However, the cheapest option often excludes important elements such as inspections, compliance work, or realistic allowances for condition-related issues.
                A clear and transparent approach explains what is included, what is estimated, and where costs may change.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Ignoring Underbody and Rust Risks
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Rust is one of the most common and costly issues overlooked by buyers. Climate, storage conditions, and regional use in Japan all affect underbody condition.
                Surface presentation alone doesn't tell the full story, which is why underbody checks are so important.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Not Understanding Compliance Requirements Early
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Not all vehicles are equally straightforward to comply in Australia. Some models require additional work, parts, or time to meet local standards.
                Failing to consider compliance early can lead to unexpected costs, delays, or registration complications.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Underestimating Timeframes
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Importing a vehicle is not instant. Timelines can be affected by auction schedules, shipping availability, port processing times, and compliance workloads.
                Allowing realistic timeframes helps avoid rushed decisions and poor outcomes.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Buying Emotionally or Rushing Decisions
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                It's easy to become attached to a specific car once you see it listed. Emotional decisions can override sensible checks and due diligence.
                Sometimes the best decision is to wait for the right example rather than proceeding with a car that doesn't fully meet expectations.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Assuming All Exporters and Agents Are the Same
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Experience and attention to detail can vary significantly between exporters and agents. Differences often appear in how listings are interpreted, how inspections are handled, and how risks are communicated.
                Clear explanations and realistic guidance make a noticeable difference throughout the process.
              </p>

              <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/20 mt-12">
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                  Final Thoughts
                </h3>
                <p className="text-[#BDB6AD] leading-relaxed">
                  Most import issues are avoidable. They come down to understanding what matters, asking the right questions, and setting realistic expectations from the beginning.
                  Importing a car from Japan works best when decisions are informed, patient, and guided by experience rather than assumptions.
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