'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
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

  const differentiators = [
    {
      icon: '🔍',
      title: 'Sourcing from Japanese Auctions',
      description: 'Direct access to Japan\'s premier auction houses with expert bidding'
    },
    {
      icon: '⚙️',
      title: 'Inspection & Verification',
      description: 'Thorough condition checks and documentation verification'
    },
    {
      icon: '🚢',
      title: 'Shipping & Logistics',
      description: 'Complete shipping coordination from Japan to Australia'
    },
    {
      icon: '📄',
      title: 'Customs Clearance',
      description: 'Full customs brokerage and import documentation handling'
    },
    {
      icon: '💰',
      title: 'GST & Compliance',
      description: 'Australian compliance workshop and GST management'
    },
    {
      icon: '🌏',
      title: 'Worldwide Sourcing',
      description: 'Can source vehicles from USA, UK, and other global markets'
    }
  ];

  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos-170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Umze Autohaus founder story"
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
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-white drop-shadow-2xl">
              Built From Passion. Driven By Experience.
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.a
              href="#story"
              className="btn-mirror bg-gradient-to-r from-accent to-accent/80 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Story
            </motion.a>

            <motion.a
              href="#why-us"
              className="btn-mirror border-2 border-white/80 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-white/20 backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Why Choose Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section id="story" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold font-heading mb-8 text-white">
              Our Founder Story
            </h2>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto md:mx-0 shadow-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl font-bold text-white">U</span>
                </motion.div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Umer</h3>
                  <p className="text-primary font-semibold">Founder & CEO</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    "Umze Autohaus is a Melbourne-based car import agency specialising in bringing vehicles from Japan to Australia. We handle the full process — from sourcing to your driveway."
                  </p>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    We source cars from Japanese auctions, inspect and verify their condition, handle bidding, organise shipping, customs clearance, GST, and compliance.
                  </p>
                  <p>
                    If you're interested in a vehicle from other parts of the world, we can help you source that too — whether it's from the USA, UK, or anywhere else.
                  </p>
                  <p>
                    Our service focuses on three key principles: <strong className="text-white">transparency</strong>, <strong className="text-white">value</strong>, and making the import process <strong className="text-white">simple</strong> for customers.
                  </p>
                  <p className="text-white font-semibold text-lg">
                    The primary goal? To build trust, show that we are a legitimate and professional import service, educate customers about the importing process, and generate leads through quality service.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section id="why-us" className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Makes Us Different
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-primary/50 transition-all duration-500 group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-carbon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-6xl font-bold text-primary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                100+
              </motion.div>
              <h4 className="text-white font-bold text-xl mb-2">Cars Imported</h4>
              <p className="text-gray-300 text-sm">Successfully delivered to Australian buyers</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-6xl font-bold text-secondary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                2012
              </motion.div>
              <h4 className="text-white font-bold text-xl mb-2">Founded</h4>
              <p className="text-gray-300 text-sm">Started with passion for Japanese imports</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-6xl font-bold text-primary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                15+
              </motion.div>
              <h4 className="text-white font-bold text-xl mb-2">Years Experience</h4>
              <p className="text-gray-300 text-sm">Combined automotive import expertise</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-6xl font-bold text-secondary mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                100%
              </motion.div>
              <h4 className="text-white font-bold text-xl mb-2">Transparency</h4>
              <p className="text-gray-300 text-sm">No hidden fees, clear communication</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join hundreds of satisfied customers who've imported their dream cars with our expert guidance.
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
              className="btn-mirror bg-white text-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 relative group inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Import</span>
            </motion.a>
            <motion.a
              href="/contact-us"
              className="btn-mirror border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl hover:shadow-white/20 inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Speak With Umer
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}