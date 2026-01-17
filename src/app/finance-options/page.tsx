'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinanceOptions() {
    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Finance Options"
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
                            <div className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></div>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Third-Party Finance</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Finance Options
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto mb-8"></div>

                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-[#EAE2D6] leading-relaxed drop-shadow-lg font-light">
                            Connecting you with trusted finance partners for your vehicle purchase
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction with Image */}
            <section className="py-32 bg-[#0F1614] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(37,97,79,0.15) 1px, transparent 0)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-3xl overflow-hidden h-[500px]">
                                <img
                                    src="/images/WhatsApp Image 2026-01-07 at 16.11.32.jpeg"
                                    alt="Vehicle Finance"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>

                                {/* Floating Badge */}
                                <motion.div
                                    className="absolute bottom-8 left-8 right-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="bg-[#25614F]/90 backdrop-blur-md rounded-2xl p-6 border border-[#EAE2D6]/20">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-[#EAE2D6] mb-2">Trusted Partners</div>
                                            <div className="text-sm text-[#EAE2D6]/80">Independent finance providers</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-[#EAE2D6]">
                                Flexible Finance Solutions
                            </h2>
                            <div className="w-24 h-1 bg-[#25614F]"></div>

                            <p className="text-lg text-[#BDB6AD] leading-relaxed">
                                Purchasing or importing a vehicle doesn't always mean paying the full amount upfront. Depending on your circumstances, finance may be available through trusted third-party providers.
                            </p>

                            <p className="text-lg text-[#BDB6AD] leading-relaxed">
                                At Umze Autohaus, we do not provide finance directly. Instead, we assist clients by connecting them with reputable, independent finance partners who are familiar with both locally sourced and imported vehicles.
                            </p>

                            <div className="bg-[#25614F]/10 border-l-4 border-[#25614F] rounded-r-xl p-6">
                                <p className="text-[#EAE2D6] font-semibold">
                                    We make the connection—you get the options
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works - Circular Steps */}
            <section className="py-32 bg-carbon relative overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#EAE2D6] mb-6">How Finance Assistance Works</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto mb-6"></div>
                        <p className="text-xl text-[#BDB6AD] max-w-2xl mx-auto">
                            A straightforward process to connect you with the right finance partner
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: '01',
                                title: 'You Enquire',
                                description: 'Let us know finance is required',
                                icon: '💬'
                            },
                            {
                                number: '02',
                                title: 'We Connect',
                                description: 'Introduction to trusted finance partner',
                                icon: '🤝'
                            },
                            {
                                number: '03',
                                title: 'Assessment',
                                description: 'Finance partner reviews your situation',
                                icon: '📋'
                            },
                            {
                                number: '04',
                                title: 'Approval',
                                description: 'Options provided directly to you',
                                icon: '✅'
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="text-center">
                                    {/* Large Circle */}
                                    <div className="relative mx-auto mb-6 w-40 h-40">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full blur-xl opacity-50"></div>
                                        <div className="relative w-full h-full bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full border-4 border-[#0F1614] flex items-center justify-center">
                                            <div className="text-6xl">{step.icon}</div>
                                        </div>
                                        {/* Number Badge */}
                                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#EAE2D6] rounded-full flex items-center justify-center border-4 border-[#0F1614]">
                                            <span className="text-[#25614F] font-bold text-sm">{step.number}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">{step.title}</h3>
                                    <p className="text-[#BDB6AD] leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="bg-green-600/10 border border-green-600/30 rounded-2xl p-6 inline-block">
                            <p className="text-[#EAE2D6] font-semibold flex items-center gap-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Same-day pre-approval may be available, subject to lender assessment
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What Finance Covers - Box Grid */}
            <section className="py-32 bg-[#0F1614] relative overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#EAE2D6] mb-6">What Finance May Cover</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#25614F] to-transparent mx-auto mb-6"></div>
                        <p className="text-xl text-[#BDB6AD]">
                            Finance options available for various vehicle types
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'Imported Vehicles',
                                subtitle: 'From Japan',
                                icon: '🚗',
                                color: 'from-blue-600 to-blue-700'
                            },
                            {
                                title: 'Local Stock',
                                subtitle: 'In Australia',
                                icon: '🏪',
                                color: 'from-green-600 to-green-700'
                            },
                            {
                                title: 'Auction Sourced',
                                subtitle: 'Direct purchase',
                                icon: '🏆',
                                color: 'from-purple-600 to-purple-700'
                            },
                            {
                                title: 'Landed & Complied',
                                subtitle: 'Ready to register',
                                icon: '✓',
                                color: 'from-amber-600 to-amber-700'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative h-full bg-gradient-to-br from-[#1a2420] to-[#0F1614] rounded-2xl p-8 border border-[#25614F]/30 group-hover:border-[#25614F] transition-all duration-300">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl`}>
                                        <span className="text-4xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-2 text-center">{item.title}</h3>
                                    <p className="text-[#BDB6AD] text-sm text-center">{item.subtitle}</p>

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#25614F]/0 via-[#25614F]/10 to-[#25614F]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p className="text-[#BDB6AD] italic">
                            All finance approvals, terms, and conditions are handled directly by the lender
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Our Partners - Split Design */}
            <section className="py-32 bg-carbon relative overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-[#EAE2D6] mb-8">Why Use Our Finance Partners</h2>
                            <div className="w-24 h-1 bg-[#25614F] mb-8"></div>

                            <div className="space-y-4">
                                {[
                                    { icon: '🚢', title: 'Vehicle Import Expertise', desc: 'Understanding of import processes and timelines' },
                                    { icon: '🏁', title: 'Auction Experience', desc: 'Familiar with auction purchases and settlements' },
                                    { icon: '⏱️', title: 'Compliance Knowledge', desc: 'Aware of compliance timeframes and requirements' },
                                    { icon: '🤝', title: 'Settlement Coordination', desc: 'Coordinate with delivery and registration' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20 hover:border-[#25614F]/50 transition-all duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-[#EAE2D6] mb-2">{item.title}</h4>
                                            <p className="text-[#BDB6AD] text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-3xl overflow-hidden h-[600px]">
                                <img
                                    src="/images/WhatsApp Image 2025-12-22 at 15.54.59.jpeg"
                                    alt="Finance Benefits"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-[#25614F] via-[#25614F]/95 to-[#1e4f3f] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Interested in Finance?
                        </h2>
                        <p className="text-xl text-[#EAE2D6]/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Get in touch and let us know:
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
                            {[
                                { icon: '🚗', text: 'The vehicle you\'re considering' },
                                { icon: '📍', text: 'Imported or local stock' },
                                { icon: '📅', text: 'Your preferred timeframe' }
                            ].map((item, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <p className="text-[#EAE2D6] text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="/contact-us"
                            className="inline-block bg-[#EAE2D6] text-[#25614F] px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.a>

                        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
                            <p className="text-[#EAE2D6] text-sm leading-relaxed">
                                <span className="font-semibold">Disclaimer:</span> Finance is provided by independent third-party lenders. Approval is subject to assessment, terms, and conditions set by the lender.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
