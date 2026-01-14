'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Vehicle, STATUS_LABELS, STATUS_COLORS, LISTING_TYPE_LABELS } from '@/types/vehicle';

export default function AdminVehicles() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [listingTypeFilter, setListingTypeFilter] = useState('');
    const router = useRouter();

    const fetchVehicles = useCallback(async () => {
        setLoading(true);
        const token = localStorage.getItem('token');

        const params = new URLSearchParams({
            page: currentPage.toString(),
            limit: '10',
            includeAll: 'true', // Include drafts for admin
        });

        if (search) params.set('search', search);
        if (statusFilter) params.set('status', statusFilter);
        if (listingTypeFilter) params.set('listingType', listingTypeFilter);

        try {
            const res = await fetch(`/api/vehicles?${params}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                const data = await res.json();
                setVehicles(data.vehicles);
                setTotalPages(data.totalPages);
            }
        } catch (error) {
            console.error('Error fetching vehicles:', error);
        }
        setLoading(false);
    }, [currentPage, search, statusFilter, listingTypeFilter]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
            return;
        }
        fetchVehicles();
    }, [router, fetchVehicles]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this vehicle?')) return;

        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`/api/vehicles/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                fetchVehicles();
            } else {
                alert('Failed to delete vehicle');
            }
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            alert('Error deleting vehicle');
        }
    };

    const handleToggleFeatured = async (vehicle: Vehicle) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`/api/vehicles/${vehicle._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ featured: !vehicle.featured }),
            });

            if (res.ok) {
                fetchVehicles();
            }
        } catch (error) {
            console.error('Error updating vehicle:', error);
        }
    };

    const handleStatusChange = async (vehicle: Vehicle, newStatus: string) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`/api/vehicles/${vehicle._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.ok) {
                fetchVehicles();
            }
        } catch (error) {
            console.error('Error updating vehicle:', error);
        }
    };

    const getDisplayPrice = (vehicle: Vehicle) => {
        if (vehicle.price) {
            return `$${vehicle.price.toLocaleString()}`;
        }
        if (vehicle.priceMin && vehicle.priceMax) {
            return `$${vehicle.priceMin.toLocaleString()} - $${vehicle.priceMax.toLocaleString()}`;
        }
        if (vehicle.priceMin) {
            return `From $${vehicle.priceMin.toLocaleString()}`;
        }
        if (vehicle.priceMax) {
            return `Up to $${vehicle.priceMax.toLocaleString()}`;
        }
        return 'N/A';
    };

    return (
        <div className="min-h-screen bg-carbon p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <Link href="/admin" className="text-[#66E5C4] hover:underline mb-2 inline-block">
                            ← Back to Dashboard
                        </Link>
                        <h1 className="text-4xl font-bold text-[#66E5C4] font-heading">Vehicle Listings</h1>
                    </div>
                    <Link
                        href="/admin/vehicles/new"
                        className="bg-[#004B3A] hover:bg-[#66E5C4] hover:text-[#0A0A0A] text-[#F7F7F7] px-6 py-3 rounded-lg font-medium transition duration-300"
                    >
                        + Add Vehicle
                    </Link>
                </div>

                {/* Filters */}
                <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input
                            type="text"
                            placeholder="Search vehicles..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && fetchVehicles()}
                            className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                        />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                        >
                            <option value="">All Statuses</option>
                            <option value="Available">Available</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Sold">Sold</option>
                        </select>
                        <select
                            value={listingTypeFilter}
                            onChange={(e) => setListingTypeFilter(e.target.value)}
                            className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                        >
                            <option value="">All Listing Types</option>
                            <option value="Order It">Order It</option>
                            <option value="Secure It">Secure It</option>
                            <option value="Buy It">Buy It</option>
                        </select>
                        <button
                            onClick={fetchVehicles}
                            className="bg-[#66E5C4] text-[#0A0A0A] px-6 py-3 rounded-lg font-medium hover:bg-[#004B3A] hover:text-[#F7F7F7] transition duration-300"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg shadow-lg overflow-hidden">
                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="animate-spin h-10 w-10 border-4 border-[#66E5C4] border-t-transparent rounded-full mx-auto"></div>
                            <p className="text-[#A9AAAE] mt-4">Loading vehicles...</p>
                        </div>
                    ) : vehicles.length === 0 ? (
                        <div className="p-12 text-center">
                            <p className="text-[#A9AAAE]">No vehicles found</p>
                            <Link
                                href="/admin/vehicles/new"
                                className="inline-block mt-4 text-[#66E5C4] hover:underline"
                            >
                                Add your first vehicle →
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#004B3A]">
                                    <tr>
                                        <th className="p-4 text-left text-[#F7F7F7] font-semibold">Image</th>
                                        <th className="p-4 text-left text-[#F7F7F7] font-semibold">Vehicle</th>
                                        <th className="p-4 text-left text-[#F7F7F7] font-semibold">Type</th>
                                        <th className="p-4 text-left text-[#F7F7F7] font-semibold">Price</th>
                                        <th className="p-4 text-left text-[#F7F7F7] font-semibold">Status</th>
                                        <th className="p-4 text-left text-[#F7F7F7] font-semibold">Visibility</th>
                                        <th className="p-4 text-left text-[#F7F7F7] font-semibold">Featured</th>
                                        <th className="p-4 text-[#F7F7F7] font-semibold text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicles.map((vehicle) => (
                                        <tr
                                            key={vehicle._id}
                                            className="border-t border-[#A9AAAE]/20 hover:bg-[#0A0A0A] transition duration-200"
                                        >
                                            <td className="p-4">
                                                {vehicle.images?.[0] ? (
                                                    <img
                                                        src={vehicle.images[0].url}
                                                        alt={vehicle.title}
                                                        className="w-16 h-12 object-cover rounded"
                                                    />
                                                ) : (
                                                    <div className="w-16 h-12 bg-[#A9AAAE]/20 rounded flex items-center justify-center">
                                                        <span className="text-xs text-[#A9AAAE]">No img</span>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-4">
                                                <div className="text-[#F7F7F7] font-medium max-w-xs truncate">
                                                    {vehicle.title}
                                                </div>
                                                <div className="text-sm text-[#A9AAAE]">
                                                    {vehicle.year} • {vehicle.brand} {vehicle.model}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="px-2 py-1 bg-[#004B3A] text-[#66E5C4] rounded text-sm">
                                                    {LISTING_TYPE_LABELS[vehicle.listingType]}
                                                </span>
                                            </td>
                                            <td className="p-4 text-[#66E5C4] font-semibold">
                                                {getDisplayPrice(vehicle)}
                                            </td>
                                            <td className="p-4">
                                                <select
                                                    value={vehicle.status}
                                                    onChange={(e) => handleStatusChange(vehicle, e.target.value)}
                                                    className={`${STATUS_COLORS[vehicle.status]} text-white text-xs px-2 py-1 rounded cursor-pointer border-none focus:outline-none focus:ring-1 focus:ring-[#66E5C4]`}
                                                >
                                                    <option value="Available">Available</option>
                                                    <option value="In Transit">In Transit</option>
                                                    <option value="Sold">Sold</option>
                                                </select>
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs ${vehicle.published ? 'bg-green-600/20 text-green-400' : 'bg-gray-600/20 text-gray-400'}`}>
                                                    {vehicle.published ? 'Published' : 'Draft'}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <button
                                                    onClick={() => handleToggleFeatured(vehicle)}
                                                    className={`px-3 py-1 rounded text-xs font-medium transition-all ${vehicle.featured
                                                        ? 'bg-yellow-500 text-black'
                                                        : 'bg-[#A9AAAE]/20 text-[#A9AAAE] hover:bg-[#A9AAAE]/40'
                                                        }`}
                                                >
                                                    {vehicle.featured ? '★ Featured' : '☆ Feature'}
                                                </button>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex gap-2 justify-center">
                                                    <Link
                                                        href={`/admin/vehicles/${vehicle._id}/edit`}
                                                        className="bg-[#66E5C4] hover:bg-[#004B3A] text-[#0A0A0A] hover:text-[#F7F7F7] px-3 py-2 rounded font-medium transition duration-300 text-xs"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(vehicle._id)}
                                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded font-medium transition duration-300 text-xs"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-[#1C1C1C] border border-[#004B3A] rounded text-[#F7F7F7] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#66E5C4] transition"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 text-[#A9AAAE]">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-[#1C1C1C] border border-[#004B3A] rounded text-[#F7F7F7] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#66E5C4] transition"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
