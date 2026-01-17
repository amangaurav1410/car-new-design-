'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    // Check if we are on the login page
    const isLoginPage = pathname?.startsWith('/admin/login');

    useEffect(() => {
        if (isLoginPage) {
            setIsAuthorized(true);
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
        } else {
            setIsAuthorized(true);
        }
    }, [pathname, isLoginPage, router]);

    // Don't render anything until auth check is done (prevent flash)
    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-[#0F1614] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#25614F] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // Login page renders full screen without sidebar
    if (isLoginPage) {
        return <>{children}</>;
    }

    // Admin dashboard layout with sidebar
    return (
        <div className="min-h-screen bg-[#0F1614] flex">
            <AdminSidebar />
            <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen bg-[#0F1614] text-[#EAE2D6]">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
