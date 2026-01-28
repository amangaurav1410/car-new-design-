'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Car, FileText, Send, LogOut, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/admin' && pathname === '/admin') return true;
        if (path !== '/admin' && pathname.startsWith(path)) return true;
        return false;
    };

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
        { icon: Car, label: 'Stock', href: '/admin/vehicles' },
        { icon: Send, label: 'Enquiries', href: '/admin/forms' },
    ];


    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-[#0F1614] to-[#080C0B] border-r border-[#25614F]/20 flex flex-col z-50 shadow-2xl">
            {/* Logo Area */}
            <div className="p-8 border-b border-[#25614F]/10 flex items-center gap-3">
                <Link href="/admin" className="block w-full">
                    <img src="/images/PNG.png" alt="UMZE Admin" className="h-12 w-auto object-contain" />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative ${isActive(item.href)
                            ? 'bg-[#25614F] text-[#EAE2D6] shadow-lg shadow-[#25614F]/25 font-semibold translate-x-1'
                            : 'text-[#A9AAAE] hover:bg-[#25614F]/10 hover:text-[#EAE2D6] hover:translate-x-1'
                            }`}
                    >
                        <item.icon className={`w-5 h-5 transition-colors ${isActive(item.href) ? 'text-[#EAE2D6]' : 'text-[#5d6865] group-hover:text-[#66E5C4]'}`} />
                        <span className="tracking-wide text-sm">{item.label}</span>

                        {isActive(item.href) && (
                            <motion.div
                                layoutId="active"
                                className="absolute left-0 w-1 h-6 bg-[#66E5C4] rounded-r-full"
                            />
                        )}
                    </Link>
                ))}
            </nav>

            {/* Footer Actions */}
            <div className="p-4 border-t border-[#25614F]/10 bg-[#0F1614]/50">
                <div className="mb-4 px-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#25614F] to-[#66E5C4] p-[2px]">
                        <div className="w-full h-full rounded-full bg-[#0F1614] flex items-center justify-center">
                            <span className="text-[#EAE2D6] font-bold text-xs">AD</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#EAE2D6]">Administrator</p>
                        <p className="text-xs text-[#5d6865]">admin@umze.com</p>
                    </div>
                </div>
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/admin/login';
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-[#A9AAAE] hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all duration-200"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
}
