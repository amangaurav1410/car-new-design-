'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80"
            alt="Terms of Service"
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
              Please read these terms carefully
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service Content */}
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
                These Terms of Service govern your use of Umze Autohaus services. By using our services, you agree to these terms.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Our Services
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                We provide vehicle import services from Japan to Australia. Our services include vehicle sourcing, bidding, shipping, customs clearance, compliance, and delivery.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Your Responsibilities
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                You are responsible for providing accurate information, making timely payments, and complying with all applicable laws and regulations.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Payment Terms
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                Payment is due as specified in our agreement. Late payments may incur additional fees.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Limitation of Liability
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                We are not liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
              </p>

              <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Changes to These Terms
              </h2>
              <p className="text-[#BDB6AD] leading-relaxed mb-8">
                We may update these Terms of Service from time to time. If we make changes, we will notify you by revising the date at the top of the terms.
              </p>

              <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/20 mt-12">
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                  Contact Us
                </h3>
                <p className="text-[#BDB6AD] leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at info@umzeautohaus.com.
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