'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', vehicle: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-carbon">
      {/* Hero Section - Modern */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-07 at 16.11.44.jpeg"
            alt="Contact Umze Autohaus"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30 backdrop-blur-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              Contact Umze Autohaus
            </h1>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-[#EAE2D6] leading-relaxed drop-shadow-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Ready to import your dream car from Japan? Let's discuss your requirements.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section - Modern Split Layout */}
      <section className="py-32 bg-[#0F1614] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - 3 cols */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-heading text-[#EAE2D6]">
                    Send Us a Message
                  </h2>
                  <p className="text-[#BDB6AD]">We'll respond within 24 hours</p>
                </div>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#1a2420] border-2 border-[#25614F] p-12 rounded-2xl text-center"
                >
                  <div className="w-20 h-20 bg-[#25614F] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-[#EAE2D6] mb-4">Message Sent!</h3>
                  <p className="text-[#BDB6AD] text-lg mb-8">Thank you for contacting UMZE Autohaus. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-[#25614F] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[#EAE2D6] font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6] placeholder-[#BDB6AD]/50 focus:border-[#25614F] focus:outline-none focus:ring-2 focus:ring-[#25614F]/30 transition-all"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#EAE2D6] font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6] placeholder-[#BDB6AD]/50 focus:border-[#25614F] focus:outline-none focus:ring-2 focus:ring-[#25614F]/30 transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#EAE2D6] font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6] placeholder-[#BDB6AD]/50 focus:border-[#25614F] focus:outline-none focus:ring-2 focus:ring-[#25614F]/30 transition-all"
                      placeholder="+61 XXX XXX XXX"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicle" className="block text-[#EAE2D6] font-semibold mb-2">
                      Vehicle You Want
                    </label>
                    <input
                      type="text"
                      id="vehicle"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6] placeholder-[#BDB6AD]/50 focus:border-[#25614F] focus:outline-none focus:ring-2 focus:ring-[#25614F]/30 transition-all"
                      placeholder="e.g., Toyota Supra, Nissan Skyline GTR"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-[#EAE2D6] font-semibold mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6] focus:border-[#25614F] focus:outline-none focus:ring-2 focus:ring-[#25614F]/30 transition-all"
                    >
                      <option value="">Select your budget range</option>
                      <option value="0-20000">$0 - $20,000</option>
                      <option value="20000-35000">$20,000 - $35,000</option>
                      <option value="35000-50000">$35,000 - $50,000</option>
                      <option value="50000+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#EAE2D6] font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-[#1a2420] border-2 border-[#25614F]/40 rounded-xl px-4 py-4 text-[#EAE2D6] placeholder-[#BDB6AD]/50 focus:border-[#25614F] focus:outline-none focus:ring-2 focus:ring-[#25614F]/30 transition-all resize-none"
                      placeholder="Tell us about your import requirements, preferred models, timeline, etc..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-[#25614F] to-[#1e4f3f] text-[#EAE2D6] px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </motion.button>
                  {status === 'error' && (
                    <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}

            </motion.div>

            {/* Contact Details - 2 cols */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 sticky top-8">
                {/* Quick Contact */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#25614F]/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#EAE2D6]">Contact Info</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                        title: 'Email',
                        value: 'info@umzeautohaus.com',
                        link: 'mailto:info@umzeautohaus.com'
                      },
                      {
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        ),
                        title: 'Phone',
                        value: '+61 420 790 798',
                        link: 'tel:+61420790798'
                      },
                      {
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        title: 'Location',
                        value: 'Melbourne, Victoria',
                        link: null
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-[#1a2420]/50 rounded-xl hover:bg-[#1a2420] transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <div className="text-[#EAE2D6]">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <p className="text-[#BDB6AD] text-sm mb-1">{item.title}</p>
                          {item.link ? (
                            <a href={item.link} className="text-[#EAE2D6] font-semibold hover:text-[#25614F] transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-[#EAE2D6] font-semibold">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#25614F]/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#EAE2D6]">Follow Us</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Facebook', icon: '📘', link: 'https://facebook.com/umzeautohaus' },
                      { name: 'Instagram', icon: '📷', link: 'https://instagram.com/umzeautohaus' },
                      { name: 'TikTok', icon: '🎥', link: 'https://www.tiktok.com/@umze.autohaus?_r=1&_t=ZS-92yZzPXKEum' },
                      { name: 'Email', icon: '✉️', link: 'mailto:info@umzeautohaus.com' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target={social.name !== 'Email' ? '_blank' : undefined}
                        rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 p-4 bg-[#1a2420]/50 rounded-xl hover:bg-[#25614F]/20 transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <span className="text-[#EAE2D6] font-semibold group-hover:text-[#25614F] transition-colors">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="relative overflow-hidden rounded-xl">
                  <div className="bg-[#1a2420] p-8 text-center border border-[#25614F]/20">
                    <span className="text-6xl mb-4 block">🗺️</span>
                    <p className="text-[#EAE2D6] font-bold text-xl mb-2">Melbourne Office</p>
                    <p className="text-[#BDB6AD]">Serving all of Australia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}
