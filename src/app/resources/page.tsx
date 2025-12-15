'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Resources() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const guides = [
    {
      title: "How Japanese Auctions Work",
      description: "Complete guide to understanding the Japanese auction system",
      icon: "🏛️",
      category: "Basics"
    },
    {
      title: "Understanding Auction Grades",
      description: "Learn what Grade A, B, and C mean for vehicle condition",
      icon: "📊",
      category: "Grades"
    },
    {
      title: "How Import Costs Are Calculated",
      description: "Breakdown of all fees, taxes, and charges involved",
      icon: "💰",
      category: "Costs"
    },
    {
      title: "Common JDM Models to Import in 2025",
      description: "Popular Japanese models and their market values",
      icon: "🚗",
      category: "Models"
    }
  ];

  const eligibilityTools = [
    {
      name: "SEVIS Eligibility Check",
      description: "Check if your vehicle qualifies for import",
      link: "#",
      icon: "✅"
    },
    {
      name: "RAWS Approval Tool",
      description: "Roadworthy approval requirements",
      link: "#",
      icon: "🛣️"
    },
    {
      name: "Vehicle Compliance Check",
      description: "Australian standards compliance",
      link: "#",
      icon: "📋"
    }
  ];

  const formatBlogs = (blogs: any[]) => {
    return blogs.map(blog => ({
      title: blog.title,
      excerpt: blog.content.substring(0, 150) + '...', // Truncate content for excerpt
      date: new Date(blog.publicationDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      readTime: `${Math.ceil(blog.content.split(' ').length / 200)} min read`, // Estimate read time
      image: blog.images && blog.images.length > 0 ? blog.images[0] : "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
    }));
  };

  const blogPosts = formatBlogs(blogs);

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
            src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Resources and knowledge base"
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
              Resources, Guides & Import Knowledgebase
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Everything you need to understand the import process, auctions, eligibility, and regulations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.a
              href="#guides"
              className="btn-mirror bg-gradient-to-r from-accent to-accent/80 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Guides
            </motion.a>

            <motion.a
              href="#tools"
              className="btn-mirror border-2 border-white/80 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-white/20 backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Eligibility Tools
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Import Guides */}
      <section id="guides" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold font-heading text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Import Guides
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-primary/50 transition-all duration-500 group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{guide.icon}</span>
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {guide.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Read Guide</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility Tools */}
      <section id="tools" className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-y border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold font-heading text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Eligibility Tools
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {eligibilityTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-primary/50 transition-all duration-500 group text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl">{tool.icon}</span>
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                <motion.a
                  href={tool.link}
                  className="btn-mirror bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-primary/60 border border-primary/20 hover:border-primary/40 transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check Eligibility →
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sample Auction Sheets */}
      <section className="py-20 bg-carbon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold font-heading text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sample Auction Sheets
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Vehicle Details</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Auction Grade:</span>
                    <span className="text-primary font-bold">A (Excellent)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Odometer:</span>
                    <span className="font-bold">45,000 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engine:</span>
                    <span className="font-bold">2.0L Turbo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmission:</span>
                    <span className="font-bold">6-Speed Manual</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drive Type:</span>
                    <span className="font-bold">All-Wheel Drive</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mt-8 mb-4">Condition Report</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>Exterior:</span>
                    <span className="text-primary">A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interior:</span>
                    <span className="text-secondary">B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engine:</span>
                    <span className="text-primary">A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmission:</span>
                    <span className="text-primary">A</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                  <h4 className="text-lg font-bold text-white mb-4">Additional Notes</h4>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>• No accident history</p>
                    <p>• Regular maintenance records</p>
                    <p>• Non-smoker vehicle</p>
                    <p>• All original parts</p>
                    <p>• Service history available</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    * Sample data for demonstration purposes
                  </p>
                  <motion.a
                    href="/vehicles-for-import"
                    className="btn-mirror bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Real Vehicles
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold font-heading text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Latest Articles
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 border border-gray-700 hover:border-primary/50 transition-all duration-500 group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Read Article</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
            Need More Help?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our experts are here to guide you through every step of your import journey.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/contact-us"
              className="btn-mirror bg-white text-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 relative group inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Us</span>
            </motion.a>
            <motion.a
              href="/import-now"
              className="btn-mirror border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl hover:shadow-white/20 inline-block"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Import
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}