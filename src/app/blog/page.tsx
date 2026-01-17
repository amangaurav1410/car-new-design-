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
      title: 'Japanese Auction Grading System Explained',
      excerpt: 'Learn how to decode Japanese auction sheets, understand grading codes, and avoid costly mistakes when importing from Japan.',
      date: 'December 24, 2025',
      readTime: '12 min read',
      category: 'Buyer Education',
      image: '/images/blog/wp12190157.webp'
    },
    {
      id: 'how-to-read-auction-sheet',
      title: 'How to Read a Japanese Auction Sheet',
      excerpt: 'A step-by-step guide to understanding auction sheets. We break down the four key sections and explain what every first-time importer needs to know.',
      date: 'December 24, 2025',
      readTime: '10 min read',
      category: 'Beginner Guide',
      image: '/images/blog/wp9328703.jpg'
    },
    {
      id: 'benefits-of-importing-from-japan',
      title: 'Benefits of Importing from Japan',
      excerpt: 'Discover the advantages of importing vehicles from Japan, including better condition, unique models, and transparent history.',
      date: 'January 9, 2026',
      readTime: '8 min read',
      category: 'Buyer Education',
      image: '/images/blog/wp3486288.jpg'
    },
    {
      id: 'common-mistakes-people-make-when-importing-cars-from-japan',
      title: 'Common Mistakes People Make When Importing',
      excerpt: 'Learn about the most common pitfalls and mistakes first-time importers make, and how to avoid them for a smoother experience.',
      date: 'January 9, 2026',
      readTime: '10 min read',
      category: 'Buyer Education',
      image: '/images/blog/wp3159130.jpg'
    },
    {
      id: 'what-cars-can-be-imported-into-australia-rules-restrictions-common-confusion',
      title: 'What Cars Can Be Imported into Australia?',
      excerpt: 'Understanding vehicle import eligibility, SEVS requirements, and avoiding common misconceptions about Australian import rules.',
      date: 'January 9, 2026',
      readTime: '12 min read',
      category: 'Import Rules',
      image: '/images/blog/thumb-1920-700305.jpg'
    }
  ];

  return (
    <div className="bg-carbon">
      {/* Hero Section */}
      <section className="relative text-white h-[60vh] flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-07 at 17.02.55 (5).jpeg"
            alt="Japanese vehicle import"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
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
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={fadeInUp}
                className="bg-[#0F1614] rounded-3xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500 group shadow-lg hover:shadow-[#66E5C4]/5"
              >
                <div className="grid md:grid-cols-2 gap-0 md:gap-8 lg:gap-12">
                  {/* Image */}
                  <div className={`relative h-64 md:h-auto overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-[#25614F]/90 backdrop-blur-sm text-[#EAE2D6] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-4 text-[#BDB6AD] text-sm mb-4">
                      <span className="font-medium text-[#66E5C4]">{blog.date}</span>
                      <span className="w-1 h-1 bg-[#A9AAAE] rounded-full"></span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#EAE2D6] mb-4 group-hover:text-[#66E5C4] transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-[#A9AAAE] leading-relaxed mb-8 text-lg">
                      {blog.excerpt}
                    </p>

                    <Link
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-3 text-[#EAE2D6] font-semibold group/link"
                    >
                      <span className="group-hover/link:text-[#66E5C4] transition-colors">Read Article</span>
                      <div className="w-8 h-8 rounded-full bg-[#25614F] flex items-center justify-center group-hover/link:bg-[#66E5C4] group-hover/link:text-[#0A0A0A] transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#004B3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
            className="text-lg md:text-xl text-[#A9AAAE] mb-12 max-w-2xl mx-auto"
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
              className="bg-[#66E5C4] text-[#0A0A0A] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#EAE2D6] transition-all duration-300 shadow-lg shadow-[#66E5C4]/20"
            >
              Get in Touch
            </Link>
            <Link
              href="/finance"
              className="border-2 border-[#66E5C4] text-[#66E5C4] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#66E5C4]/10 transition-all duration-300"
            >
              View Calculator
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
