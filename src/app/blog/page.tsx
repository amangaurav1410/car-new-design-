'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Blog() {
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

  const blogs = [
    {
      id: 'japanese-auction-grading-system',
      title: 'Japanese Auction Grading System Explained: How to Read an Auction Sheet Before You Buy',
      excerpt: 'Learn how to decode Japanese auction sheets, understand grading codes, and avoid costly mistakes when importing from Japan.',
      date: 'December 24, 2025',
      readTime: '12 min read',
      category: 'Buyer Education'
    },
    {
      id: 'how-to-read-auction-sheet',
      title: 'How to Read a Japanese Auction Sheet: A Beginner is Guide for First-Time Importers',
      excerpt: 'A step-by-step guide to understanding auction sheets. We break down the four key sections and explain what every first-time importer needs to know.',
      date: 'December 24, 2025',
      readTime: '10 min read',
      category: 'Beginner Guide'
    },
    {
      id: 'benefits-of-importing-from-japan',
      title: 'Benefits of Importing from Japan: Why Japanese Imports Are the Smart Choice',
      excerpt: 'Discover the advantages of importing vehicles from Japan, including better condition, unique models, and transparent history.',
      date: 'January 9, 2026',
      readTime: '8 min read',
      category: 'Buyer Education'
    },
    {
      id: 'common-mistakes-people-make-when-importing-cars-from-japan',
      title: 'Common Mistakes People Make When Importing Cars from Japan',
      excerpt: 'Learn about the most common pitfalls and mistakes first-time importers make, and how to avoid them for a smoother experience.',
      date: 'January 9, 2026',
      readTime: '10 min read',
      category: 'Buyer Education'
    },
    {
      id: 'what-cars-can-be-imported-into-australia-rules-restrictions-common-confusion',
      title: 'What Cars Can Be Imported into Australia? Rules, Restrictions & Common Confusion',
      excerpt: 'Understanding vehicle import eligibility, SEVS requirements, and avoiding common misconceptions about Australian import rules.',
      date: 'January 9, 2026',
      readTime: '12 min read',
      category: 'Import Rules'
    }
  ];

  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1920&q=80"
            alt="Japanese vehicle import"
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
              UMZE Autohaus Blog
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
              Expert insights on Japanese vehicle imports, auction guides, and buying advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-[#0F1614]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Blog 1 */}
            <motion.article
              variants={fadeInUp}
              className="bg-[#0F1614] rounded-3xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1519996409143-03b5428835b7?auto=format&fit=crop&w=800&q=80"
                    alt="Japanese auction sheet"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#25614F] text-[#EAE2D6] px-4 py-2 rounded-full text-sm font-semibold">
                      Buyer Education
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[#BDB6AD] text-sm mb-4">
                    <span>{blogs[0].date}</span>
                    <span className="w-1 h-1 bg-[#25614F] rounded-full"></span>
                    <span>{blogs[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#EAE2D6] mb-4">
                    {blogs[0].title}
                  </h2>
                  
                  <p className="text-[#BDB6AD] leading-relaxed mb-6">
                    {blogs[0].excerpt}
                  </p>
                  
                  <Link
                    href="/blog/japanese-auction-grading-system"
                    className="inline-flex items-center gap-2 text-[#25614F] font-semibold hover:text-[#1e4f3f] transition-colors"
                  >
                    <span>Read Article</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Blog 2 */}
            <motion.article
              variants={fadeInUp}
              className="bg-[#0F1614] rounded-3xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
                    alt="First-time importer guide"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#25614F] text-[#EAE2D6] px-4 py-2 rounded-full text-sm font-semibold">
                      Beginner Guide
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center md:order-1">
                  <div className="flex items-center gap-4 text-[#BDB6AD] text-sm mb-4">
                    <span>{blogs[1].date}</span>
                    <span className="w-1 h-1 bg-[#25614F] rounded-full"></span>
                    <span>{blogs[1].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#EAE2D6] mb-4">
                    {blogs[1].title}
                  </h2>
                  
                  <p className="text-[#BDB6AD] leading-relaxed mb-6">
                    {blogs[1].excerpt}
                  </p>
                  
                  <Link
                    href="/blog/how-to-read-auction-sheet"
                    className="inline-flex items-center gap-2 text-[#25614F] font-semibold hover:text-[#1e4f3f] transition-colors"
                  >
                    <span>Read Article</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
            
            {/* Blog 3 */}
            <motion.article
              variants={fadeInUp}
              className="bg-[#0F1614] rounded-3xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"
                    alt="Benefits of importing from Japan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#25614F] text-[#EAE2D6] px-4 py-2 rounded-full text-sm font-semibold">
                      Buyer Education
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[#BDB6AD] text-sm mb-4">
                    <span>{blogs[2].date}</span>
                    <span className="w-1 h-1 bg-[#25614F] rounded-full"></span>
                    <span>{blogs[2].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#EAE2D6] mb-4">
                    {blogs[2].title}
                  </h2>
                  
                  <p className="text-[#BDB6AD] leading-relaxed mb-6">
                    {blogs[2].excerpt}
                  </p>
                  
                  <Link
                    href="/blog/benefits-of-importing-from-japan"
                    className="inline-flex items-center gap-2 text-[#25614F] font-semibold hover:text-[#1e4f3f] transition-colors"
                  >
                    <span>Read Article</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Blog 4 */}
            <motion.article
              variants={fadeInUp}
              className="bg-[#0F1614] rounded-3xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"
                    alt="Common mistakes in importing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#25614F] text-[#EAE2D6] px-4 py-2 rounded-full text-sm font-semibold">
                      Buyer Education
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center md:order-1">
                  <div className="flex items-center gap-4 text-[#BDB6AD] text-sm mb-4">
                    <span>{blogs[3].date}</span>
                    <span className="w-1 h-1 bg-[#25614F] rounded-full"></span>
                    <span>{blogs[3].readTime}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#EAE2D6] mb-4">
                    {blogs[3].title}
                  </h2>

                  <p className="text-[#BDB6AD] leading-relaxed mb-6">
                    {blogs[3].excerpt}
                  </p>

                  <Link
                    href="/blog/common-mistakes-people-make-when-importing-cars-from-japan"
                    className="inline-flex items-center gap-2 text-[#25614F] font-semibold hover:text-[#1e4f3f] transition-colors"
                  >
                    <span>Read Article</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Blog 5 */}
            <motion.article
              variants={fadeInUp}
              className="bg-[#0F1614] rounded-3xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"
                    alt="Australian import rules"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#25614F] text-[#EAE2D6] px-4 py-2 rounded-full text-sm font-semibold">
                      Import Rules
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[#BDB6AD] text-sm mb-4">
                    <span>{blogs[4].date}</span>
                    <span className="w-1 h-1 bg-[#25614F] rounded-full"></span>
                    <span>{blogs[4].readTime}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#EAE2D6] mb-4">
                    {blogs[4].title}
                  </h2>

                  <p className="text-[#BDB6AD] leading-relaxed mb-6">
                    {blogs[4].excerpt}
                  </p>

                  <Link
                    href="/blog/what-cars-can-be-imported-into-australia-rules-restrictions-common-confusion"
                    className="inline-flex items-center gap-2 text-[#25614F] font-semibold hover:text-[#1e4f3f] transition-colors"
                  >
                    <span>Read Article</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          </motion.div>
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
              href="/finance"
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
