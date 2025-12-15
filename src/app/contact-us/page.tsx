'use client';

import { motion } from 'framer-motion';

export default function ContactUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Contact Umze Autohaus"
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
              Contact Umze Autohaus
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Ready to import your dream car from Japan? Let's discuss your requirements.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold font-heading mb-8 text-white">
                Contact Form
              </h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="+61 XXX XXX XXX"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-white font-semibold mb-2">
                    Vehicle You Want
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="e.g., Toyota Supra, Nissan GTR"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white font-semibold mb-2">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select your budget range</option>
                    <option value="0-20000">$0 - $20,000</option>
                    <option value="20000-35000">$20,000 - $35,000</option>
                    <option value="35000-50000">$35,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your import requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn-mirror w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-primary/60 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary text-xl">✉️</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-300">info@umzeautohaus.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-secondary text-xl">📍</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Location</p>
                        <p className="text-gray-300">Melbourne, Australia</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary text-xl">📞</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <a href="tel:+61404312508" className="text-gray-300 hover:text-white transition-colors">
                          +61 404 312 508
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.a
                      href="https://facebook.com/umzeautohaus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl hover:bg-primary/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-2xl">📘</span>
                      <span className="text-white font-semibold group-hover:text-primary">Facebook</span>
                    </motion.a>

                    <motion.a
                      href="https://instagram.com/umzeautohaus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl hover:bg-secondary/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-2xl">📷</span>
                      <span className="text-white font-semibold group-hover:text-secondary">Instagram</span>
                    </motion.a>

                    <motion.a
                      href="https://tiktok.com/@umzeautohaus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl hover:bg-primary/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-2xl">🎥</span>
                      <span className="text-white font-semibold group-hover:text-primary">TikTok</span>
                    </motion.a>

                    <motion.a
                      href="mailto:info@umzeautohaus.com"
                      className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl hover:bg-secondary/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-2xl">✉️</span>
                      <span className="text-white font-semibold group-hover:text-secondary">Email</span>
                    </motion.a>
                  </div>
                </div>

                {/* Map Thumbnail */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>

                  <div className="bg-gray-700/50 rounded-xl h-48 flex items-center justify-center border border-gray-600">
                    <div className="text-center">
                      <span className="text-4xl mb-4 block">🗺️</span>
                      <p className="text-white font-semibold mb-2">Melbourne Office</p>
                      <p className="text-gray-300 text-sm">Serving all of Victoria</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
            Ready to Start Your Import?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fill out our contact form or call us directly to begin your car import journey.
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
              <span className="relative z-10">Start Import Process</span>
            </motion.a>
            <motion.a
              href="tel:+61404312508"
              className="btn-mirror border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl hover:shadow-white/20 inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now: +61 404 312 508
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}