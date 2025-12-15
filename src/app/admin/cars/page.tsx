'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface CarListing {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  status: string;
}

export default function AdminCars() {
  const [cars, setCars] = useState<CarListing[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<CarListing | null>(null);
  const [form, setForm] = useState({ make: '', model: '', year: '', price: '', mileage: '', description: '', images: '', status: 'available' });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/admin/login');
    fetchCars();
  }, [router]);

  const fetchCars = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/car-listings', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setCars(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `/api/car-listings/${editing._id}` : '/api/car-listings';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...form, year: parseInt(form.year), price: parseFloat(form.price), mileage: parseInt(form.mileage) }),
    });
    if (res.ok) {
      fetchCars();
      setShowForm(false);
      setEditing(null);
      setForm({ make: '', model: '', year: '', price: '', mileage: '', description: '', images: '', status: 'available' });
    }
  };

  const handleEdit = (car: CarListing) => {
    setEditing(car);
    setForm({ make: car.make, model: car.model, year: car.year.toString(), price: car.price.toString(), mileage: '', description: '', images: '', status: car.status });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/car-listings/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchCars();
  };

  return (
    <div className="min-h-screen bg-carbon p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#66E5C4] font-heading">Car Listings</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#004B3A] hover:bg-[#66E5C4] hover:text-[#0A0A0A] text-[#F7F7F7] px-6 py-3 rounded-lg font-medium transition duration-300 btn-mirror"
          >
            Add Car
          </button>
        </div>
        <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#004B3A]">
              <tr>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Make</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Model</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Year</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Price</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Status</th>
                <th className="p-4 text-[#F7F7F7] font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car._id} className="border-t border-[#A9AAAE] hover:bg-[#0A0A0A] transition duration-200">
                  <td className="p-4 text-[#F7F7F7]">{car.make}</td>
                  <td className="p-4 text-[#F7F7F7]">{car.model}</td>
                  <td className="p-4 text-[#A9AAAE]">{car.year}</td>
                  <td className="p-4 text-[#66E5C4] font-semibold">${car.price.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      car.status === 'available' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}>
                      {car.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleEdit(car)}
                      className="bg-[#66E5C4] hover:bg-[#004B3A] text-[#0A0A0A] px-3 py-2 rounded mr-2 font-medium transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded font-medium transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-[#1C1C1C] border border-[#004B3A] p-8 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center text-[#F7F7F7] font-heading">{editing ? 'Edit Car' : 'Add Car'}</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Make"
                  value={form.make}
                  onChange={(e) => setForm({ ...form, make: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Model"
                  value={form.model}
                  onChange={(e) => setForm({ ...form, model: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                  required
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                  required
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                  required
                />
                <input
                  type="number"
                  placeholder="Mileage"
                  value={form.mileage}
                  onChange={(e) => setForm({ ...form, mileage: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent h-24"
                />
                <input
                  type="text"
                  placeholder="Images (comma separated URLs)"
                  value={form.images}
                  onChange={(e) => setForm({ ...form, images: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                />
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                >
                  <option value="available">Available</option>
                  <option value="sold">Sold</option>
                </select>
              </div>
              <div className="flex justify-end mt-6 space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-[#A9AAAE] hover:bg-[#C8C8C8] text-[#0A0A0A] rounded-lg font-medium transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#004B3A] hover:bg-[#66E5C4] hover:text-[#0A0A0A] text-[#F7F7F7] rounded-lg font-medium transition duration-300 btn-mirror"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}