'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUploader from '@/components/admin/ImageUploader';
import { VehicleFormData, VehicleImage, ListingType, VehicleStatus, Transmission, FuelType, Drivetrain } from '@/types/vehicle';

const defaultFormData: VehicleFormData = {
    title: '',
    brand: '',
    model: '',
    variant: '',
    year: new Date().getFullYear(),
    price: '',
    priceMin: '',
    priceMax: '',
    mileage: '',
    mileageMin: '',
    mileageMax: '',
    transmission: undefined,
    fuelType: undefined,
    drivetrain: undefined,
    exteriorColor: '',
    importSource: 'Japan',
    auctionGrade: '',
    eta: '',
    listingType: 'Buy It',
    status: 'Available',
    description: '',
    images: [],
    featured: false,
    published: false,
};

export default function NewVehicle() {
    const [formData, setFormData] = useState<VehicleFormData>(defaultFormData);
    const [saving, setSaving] = useState(false);
    const [priceType, setPriceType] = useState<'exact' | 'range'>('exact');
    const [mileageType, setMileageType] = useState<'exact' | 'range'>('exact');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
        }
    }, [router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleImagesChange = (images: VehicleImage[]) => {
        setFormData(prev => ({ ...prev, images }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        const token = localStorage.getItem('token');

        // Prepare data - convert strings to numbers where needed
        const submitData = {
            ...formData,
            year: parseInt(formData.year as string) || new Date().getFullYear(),
            price: priceType === 'exact' && formData.price ? parseFloat(formData.price as string) : undefined,
            priceMin: priceType === 'range' && formData.priceMin ? parseFloat(formData.priceMin as string) : undefined,
            priceMax: priceType === 'range' && formData.priceMax ? parseFloat(formData.priceMax as string) : undefined,
            mileage: mileageType === 'exact' && formData.mileage ? parseInt(formData.mileage as string) : undefined,
            mileageMin: mileageType === 'range' && formData.mileageMin ? parseInt(formData.mileageMin as string) : undefined,
            mileageMax: mileageType === 'range' && formData.mileageMax ? parseInt(formData.mileageMax as string) : undefined,
            eta: formData.eta ? new Date(formData.eta).toISOString() : undefined,
        };

        try {
            const res = await fetch('/api/vehicles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(submitData),
            });

            if (res.ok) {
                router.push('/admin/vehicles');
            } else {
                const error = await res.json();
                alert(`Failed to create vehicle: ${error.error}`);
            }
        } catch (error) {
            console.error('Error creating vehicle:', error);
            alert('Error creating vehicle');
        }

        setSaving(false);
    };

    return (
        <div className="min-h-screen bg-carbon p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/admin/vehicles" className="text-[#66E5C4] hover:underline mb-2 inline-block">
                        ← Back to Vehicles
                    </Link>
                    <h1 className="text-4xl font-bold text-[#66E5C4] font-heading">Add New Vehicle</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Information */}
                    <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-[#F7F7F7] mb-4">Basic Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Listing Title * (e.g., 2018 Toyota Supra MK5 RZ)</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter a descriptive title"
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Brand *</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g., Toyota, Nissan"
                                        className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Model *</label>
                                    <input
                                        type="text"
                                        name="model"
                                        value={formData.model}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g., Supra, Silvia"
                                        className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Variant</label>
                                    <input
                                        type="text"
                                        name="variant"
                                        value={formData.variant}
                                        onChange={handleChange}
                                        placeholder="e.g., MK4 Twin Turbo, GTS-T"
                                        className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Year *</label>
                                    <input
                                        type="number"
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        required
                                        min="1960"
                                        max={new Date().getFullYear() + 1}
                                        className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-[#F7F7F7] mb-4">Pricing</h2>
                        <div className="mb-4">
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setPriceType('exact')}
                                    className={`px-4 py-2 rounded-lg font-medium transition ${priceType === 'exact'
                                        ? 'bg-[#66E5C4] text-[#0A0A0A]'
                                        : 'bg-[#0A0A0A] text-[#A9AAAE] border border-[#A9AAAE]'
                                        }`}
                                >
                                    Exact Price
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPriceType('range')}
                                    className={`px-4 py-2 rounded-lg font-medium transition ${priceType === 'range'
                                        ? 'bg-[#66E5C4] text-[#0A0A0A]'
                                        : 'bg-[#0A0A0A] text-[#A9AAAE] border border-[#A9AAAE]'
                                        }`}
                                >
                                    Price Range
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {priceType === 'exact' ? (
                                <div>
                                    <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Price (AUD)</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        min="0"
                                        placeholder="e.g., 35000"
                                        className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                    />
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Min Price (AUD)</label>
                                        <input
                                            type="number"
                                            name="priceMin"
                                            value={formData.priceMin}
                                            onChange={handleChange}
                                            min="0"
                                            placeholder="e.g., 30000"
                                            className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Max Price (AUD)</label>
                                        <input
                                            type="number"
                                            name="priceMax"
                                            value={formData.priceMax}
                                            onChange={handleChange}
                                            min="0"
                                            placeholder="e.g., 40000"
                                            className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mileage */}
                    <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-[#F7F7F7] mb-4">Mileage</h2>
                        <div className="mb-4">
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setMileageType('exact')}
                                    className={`px-4 py-2 rounded-lg font-medium transition ${mileageType === 'exact'
                                        ? 'bg-[#66E5C4] text-[#0A0A0A]'
                                        : 'bg-[#0A0A0A] text-[#A9AAAE] border border-[#A9AAAE]'
                                        }`}
                                >
                                    Exact Mileage
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMileageType('range')}
                                    className={`px-4 py-2 rounded-lg font-medium transition ${mileageType === 'range'
                                        ? 'bg-[#66E5C4] text-[#0A0A0A]'
                                        : 'bg-[#0A0A0A] text-[#A9AAAE] border border-[#A9AAAE]'
                                        }`}
                                >
                                    Mileage Range
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mileageType === 'exact' ? (
                                <div>
                                    <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Mileage (km)</label>
                                    <input
                                        type="number"
                                        name="mileage"
                                        value={formData.mileage}
                                        onChange={handleChange}
                                        min="0"
                                        placeholder="e.g., 85000"
                                        className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                    />
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Min Mileage (km)</label>
                                        <input
                                            type="number"
                                            name="mileageMin"
                                            value={formData.mileageMin}
                                            onChange={handleChange}
                                            min="0"
                                            placeholder="e.g., 50000"
                                            className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Max Mileage (km)</label>
                                        <input
                                            type="number"
                                            name="mileageMax"
                                            value={formData.mileageMax}
                                            onChange={handleChange}
                                            min="0"
                                            placeholder="e.g., 100000"
                                            className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Vehicle Specs */}
                    <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-[#F7F7F7] mb-4">Vehicle Specifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Transmission</label>
                                <select
                                    name="transmission"
                                    value={formData.transmission || ''}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                >
                                    <option value="">Select...</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>
                                    <option value="CVT">CVT</option>
                                    <option value="DCT">DCT</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Fuel Type</label>
                                <select
                                    name="fuelType"
                                    value={formData.fuelType || ''}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                >
                                    <option value="">Select...</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="EV">EV</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Drivetrain</label>
                                <select
                                    name="drivetrain"
                                    value={formData.drivetrain || ''}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                >
                                    <option value="">Select...</option>
                                    <option value="RWD">RWD</option>
                                    <option value="FWD">FWD</option>
                                    <option value="AWD">AWD</option>
                                    <option value="4WD">4WD</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Exterior Color</label>
                                <input
                                    type="text"
                                    name="exteriorColor"
                                    value={formData.exteriorColor}
                                    onChange={handleChange}
                                    placeholder="e.g., Pearl White"
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Import Details */}
                    <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-[#F7F7F7] mb-4">Import Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Import Source</label>
                                <input
                                    type="text"
                                    name="importSource"
                                    value={formData.importSource}
                                    onChange={handleChange}
                                    placeholder="e.g., Japan"
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Auction Grade</label>
                                <input
                                    type="text"
                                    name="auctionGrade"
                                    value={formData.auctionGrade}
                                    onChange={handleChange}
                                    placeholder="e.g., 4.5, Grade A"
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">ETA (for In-Transit)</label>
                                <input
                                    type="date"
                                    name="eta"
                                    value={formData.eta}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Listing Type & Status */}
                    <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-[#F7F7F7] mb-4">Listing Settings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Listing Type *</label>
                                <select
                                    name="listingType"
                                    value={formData.listingType}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                >
                                    <option value="Order It">Order It</option>
                                    <option value="Secure It">Secure It</option>
                                    <option value="Buy It">Buy It</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#A9AAAE] mb-2">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4]"
                                >
                                    <option value="Available">Available</option>
                                    <option value="In Transit">In Transit</option>
                                    <option value="Sold">Sold</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-4 pt-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="published"
                                        checked={formData.published}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded border-[#A9AAAE] bg-[#0A0A0A] text-[#66E5C4] focus:ring-[#66E5C4] focus:ring-offset-0"
                                    />
                                    <span className="text-[#F7F7F7] font-medium">Published (Visible to public)</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="featured"
                                        checked={formData.featured}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded border-[#A9AAAE] bg-[#0A0A0A] text-[#66E5C4] focus:ring-[#66E5C4] focus:ring-offset-0"
                                    />
                                    <span className="text-[#F7F7F7] font-medium">Featured Listing ⭐</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-[#F7F7F7] mb-4">Description</h2>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={6}
                            placeholder="Enter a detailed description of the vehicle. You can use markdown formatting."
                            className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE]/50 focus:outline-none focus:ring-2 focus:ring-[#66E5C4] resize-none"
                        />
                        <p className="text-sm text-[#A9AAAE] mt-2">Supports markdown formatting</p>
                    </div>

                    {/* Images */}
                    <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-[#F7F7F7] mb-4">Images</h2>
                        <ImageUploader
                            images={formData.images}
                            onChange={handleImagesChange}
                            maxImages={20}
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 justify-end">
                        <Link
                            href="/admin/vehicles"
                            className="px-6 py-3 bg-[#A9AAAE] hover:bg-[#C8C8C8] text-[#0A0A0A] rounded-lg font-medium transition duration-300"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={saving}
                            className={`px-8 py-3 rounded-lg font-medium transition duration-300 ${saving
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-[#004B3A] hover:bg-[#66E5C4] hover:text-[#0A0A0A] text-[#F7F7F7]'
                                }`}
                        >
                            {saving ? 'Saving...' : 'Create Vehicle'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
