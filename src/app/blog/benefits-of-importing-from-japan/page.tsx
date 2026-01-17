'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BenefitsOfImportingFromJapan() {
  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/blog/wp3486288.jpg"
            alt="Japanese luxury import vehicle"
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
              Benefits of Importing from Japan
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
              Why Japanese imports are the smart choice for Australian buyers
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
                Importing vehicles from Japan offers numerous advantages for Australian buyers. From better condition to unique models, Japanese imports provide excellent value and quality.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Lower Kilometers and Better Condition
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Japanese vehicles are known for their low mileage and excellent maintenance. Strict inspection standards and a culture of regular servicing ensure that cars from Japan are often in better condition than their local equivalents.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Transparent Auction History
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                The Japanese auction system provides complete documentation and grading, giving buyers clear information about a vehicle's history. This transparency helps in making informed purchasing decisions.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Access to Unique Models
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Japan offers a wide selection of models, special editions, and specifications that are rare or not available in the Australian market. This includes JDM classics, performance vehicles, and collector cars.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Higher Specifications
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Japanese domestic market vehicles often feature superior equipment, performance options, and factory specifications compared to their local counterparts.
              </p>

              <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/20 mt-12">
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                  Conclusion
                </h3>
                <p className="text-[#BDB6AD] leading-relaxed">
                  Importing from Japan is not just about getting a car; it's about making a smart investment. With better condition, unique models, and transparent history, Japanese imports offer excellent value for Australian buyers.
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