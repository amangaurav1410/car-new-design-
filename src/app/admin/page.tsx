'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, Send, FileText, Plus, ArrowUpRight, Search, RefreshCw } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    vehicles: 0,
    enquiries: 0,
    blogs: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      // Fetch Vehicles Count
      const vRes = await fetch('/api/vehicles?limit=1', { headers });
      if (vRes.ok) {
        const vData = await vRes.json();
        setStats(prev => ({ ...prev, vehicles: vData.total || 0 }));
      }

      // Fetch Enquiries (Try calling form-submissions if it exists)
      try {
        const fRes = await fetch('/api/form-submissions', { headers });
        if (fRes.ok) {
          const fData = await fRes.json();
          setStats(prev => ({ ...prev, enquiries: Array.isArray(fData) ? fData.length : 0 }));
        }
      } catch (e) {
        // Ignore API missing
      }

    } catch (error) {
      console.error("Error fetching admin stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const dashboardStats = [
    { label: 'Total Stock', value: stats.vehicles, icon: Car, color: 'text-[#66E5C4]', bg: 'bg-[#66E5C4]/10' },
    { label: 'Enquiries', value: stats.enquiries, icon: Send, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { label: 'Published Blogs', value: stats.blogs, icon: FileText, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-[#EAE2D6]">Dashboard</h1>
          <p className="text-[#A9AAAE] mt-1">Overview of your inventory and activities.</p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={fetchData} className="p-2 text-[#25614F] hover:text-[#66E5C4] transition-colors rounded-lg border border-[#25614F]/20 hover:bg-[#25614F]/10" title="Refresh Data">
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <Link href="/admin/vehicles/new" className="group bg-[#25614F] hover:bg-[#1e4f3f] text-[#EAE2D6] px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg shadow-[#25614F]/20 hover:shadow-[#25614F]/40 hover:-translate-y-0.5">
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            Add Vehicle
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboardStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-[#151C1A] border border-[#25614F]/10 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <ArrowUpRight className="w-5 h-5 text-[#2F3A37] group-hover:text-[#25614F] transition-colors" />
            </div>

            <div className="flex flex-col h-full justify-between">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#EAE2D6] mb-1 tracking-tight">
                  {loading ? '...' : stat.value}
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-[#A9AAAE] text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#25614F]/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* No Static Activity Table - Placeholder State */}
      <div className="bg-[#151C1A] border border-[#25614F]/10 rounded-3xl p-12 shadow-sm text-center flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-20 h-20 bg-[#25614F]/5 rounded-full flex items-center justify-center mb-6 text-[#25614F]">
          <Search className="w-10 h-10 opacity-50" />
        </div>
        <h2 className="text-2xl font-bold text-[#EAE2D6] mb-2 font-heading">Recent Activity</h2>
        <p className="text-[#A9AAAE] max-w-md mx-auto mb-8">
          No recent activity to display. New enquiries and system logs will appear here.
        </p>
        <Link href="/admin/vehicles" className="text-[#66E5C4] hover:text-[#EAE2D6] font-medium transition-colors border-b border-[#66E5C4] hover:border-[#EAE2D6] pb-0.5">
          View All Vehicles &rarr;
        </Link>
      </div>
    </div>
  );
}