'use client';

import { motion } from 'framer-motion';

export default function ViewAuctions() {
  const auctions = [
    {
      name: 'USS Auctions',
      description: "Japan's largest auction network with over 200 locations",
      logo: 'USS',
      url: 'https://www.uss-auction.jp',
      features: ['Live bidding', 'English support', 'Grade A vehicles', 'Global shipping']
    },
    {
      name: 'TAA Auctions',
      description: 'Trusted auction house with premium vehicle selection',
      logo: 'TAA',
      url: 'https://www.taauctions.com',
      features: ['Quality assurance', 'Detailed reports', 'Competitive pricing', 'Export services']
    },
    {
      name: 'JU Auctions',
      description: 'Specialized in JDM vehicles and performance cars',
      logo: 'JU',
      url: 'https://www.ju-auction.jp',
      features: ['JDM specialists', 'Performance vehicles', 'Expert inspection', 'Fast processing']
    },
    {
      name: 'Aucnet Auctions',
      description: 'Comprehensive auction platform with extensive inventory',
      logo: 'Aucnet',
      url: 'https://www.aucnet.co.jp',
      features: ['Wide selection', 'Real-time updates', 'Professional service', 'International shipping']
    },
    {
      name: 'CAA Auctions',
      description: 'Reliable auction house with strong export network',
      logo: 'CAA',
      url: 'https://www.caa-auction.jp',
      features: ['Export focused', 'Quality vehicles', 'Documentation support', 'Global reach']
    }
  ];

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

  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Japanese auction houses"
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
              View Live Japanese Auctions
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Browse vehicles currently available across Japan's major auction networks.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.a
              href="/import-now"
              className="btn-mirror bg-gradient-to-r from-accent to-accent/80 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Auction Access
            </motion.a>

            <motion.a
              href="/vehicles-for-import"
              className="btn-mirror border-2 border-white/80 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-white/20 backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Our Selection
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Auction Platforms */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Major Japanese Auction Houses
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {auctions.map((auction, index) => (
              <motion.div
                key={auction.name}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 border border-gray-700 hover:border-primary/50 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="p-8">
                  {/* Logo */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-bold text-white">{auction.logo}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {auction.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    {auction.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {auction.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-400">
                        <span className="text-primary text-sm">✓</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={auction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mirror w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-primary/60 border border-primary/20 hover:border-primary/40 transition-all duration-300 inline-block"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Visit {auction.logo} Auctions →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-y border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold font-heading mb-6 text-white">
              How We Help With Auctions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate Japan's complex auction system with our expert guidance and support
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-primary/50 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">🔍</span>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">Auction Research</h3>
              <p className="text-gray-300 text-sm">We identify the best vehicles across all auction houses</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-secondary/50 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">📋</span>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">Condition Reports</h3>
              <p className="text-gray-300 text-sm">Detailed analysis of auction vehicle conditions</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-primary/50 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">💰</span>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">Bidding Strategy</h3>
              <p className="text-gray-300 text-sm">Expert bidding to get you the best possible price</p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-secondary/50 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">🚢</span>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">Export Coordination</h3>
              <p className="text-gray-300 text-sm">Seamless export and shipping arrangements</p>
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
            Ready to Start Bidding?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let our experts handle the auction process while you focus on driving your dream car.
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
              Speak With Expert
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}