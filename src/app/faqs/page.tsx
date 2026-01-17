'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FAQs() {
  const faqs = [
    {
      question: 'What is the process for importing a car from Japan?',
      answer: 'The process involves several steps: consultation and budget guidance, vehicle sourcing, bid approval and deposit, purchase and shipping, customs and compliance, and finally registration and delivery. We handle everything from start to finish.'
    },
    {
      question: 'How long does it take to import a car from Japan?',
      answer: 'The entire process typically takes between 8 to 12 weeks, depending on the vehicle availability, shipping schedules, and compliance inspections.'
    },
    {
      question: 'What are the costs involved in importing a car?',
      answer: 'The costs include the vehicle price, shipping, import duties, GST, compliance costs, and our service fee. You can use our calculator to get an estimate based on your budget.'
    },
    {
      question: 'Do you handle all the paperwork and compliance?',
      answer: 'Yes, we manage all legal responsibilities including customs clearance, GST payment, import approvals, Australian compliance certification, and roadworthy arrangements.'
    },
    {
      question: 'Can I import any car from Japan?',
      answer: 'Most vehicles can be imported, but there are restrictions based on Australian regulations. We can help you determine if your desired vehicle is eligible for import.'
    },
    {
      question: 'What is the difference between Japanese and local cars?',
      answer: 'Japanese vehicles often have lower kilometers, better maintenance records, and unique specifications that are not available in the local market. They are also typically in better condition due to strict inspection standards.'
    }
  ];

  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="FAQs"
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
              Get answers to common questions about importing cars from Japan
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-32 bg-[#0F1614]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#1a2420] rounded-xl border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold font-heading text-[#EAE2D6] mb-4">
                    {faq.question}
                  </h2>
                  <p className="text-[#BDB6AD] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
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
            Have More Questions?
          </motion.h2>
          <motion.p
            className="text-lg text-[#EAE2D6]/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact us for personalized assistance with your import needs.
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