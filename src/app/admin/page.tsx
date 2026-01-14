'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-carbon p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#66E5C4] font-heading">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 btn-mirror"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/admin/vehicles" className="bg-[#1C1C1C] border border-[#004B3A] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:border-[#66E5C4] group">
            <h2 className="text-2xl font-semibold mb-4 text-[#F7F7F7] group-hover:text-[#66E5C4] transition duration-300">🚗 Vehicle Listings</h2>
            <p className="text-[#A9AAAE] group-hover:text-[#F7F7F7] transition duration-300">Manage vehicle imports</p>
          </Link>
          <Link href="/admin/blogs" className="bg-[#1C1C1C] border border-[#004B3A] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:border-[#66E5C4] group">
            <h2 className="text-2xl font-semibold mb-4 text-[#F7F7F7] group-hover:text-[#66E5C4] transition duration-300">Blog Management</h2>
            <p className="text-[#A9AAAE] group-hover:text-[#F7F7F7] transition duration-300">View and manage blog posts</p>
          </Link>
          <Link href="/admin/forms" className="bg-[#1C1C1C] border border-[#004B3A] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:border-[#66E5C4] group">
            <h2 className="text-2xl font-semibold mb-4 text-[#F7F7F7] group-hover:text-[#66E5C4] transition duration-300">Form Submissions</h2>
            <p className="text-[#A9AAAE] group-hover:text-[#F7F7F7] transition duration-300">View and manage user submissions</p>
          </Link>
          <Link href="/admin/cars" className="bg-[#1C1C1C] border border-[#004B3A] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:border-[#66E5C4] group">
            <h2 className="text-2xl font-semibold mb-4 text-[#F7F7F7] group-hover:text-[#66E5C4] transition duration-300">Car Listings (Legacy)</h2>
            <p className="text-[#A9AAAE] group-hover:text-[#F7F7F7] transition duration-300">View and manage car listings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}