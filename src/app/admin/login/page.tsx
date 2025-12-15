'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      router.push('/admin');
    } else {
      setError(data.error);
    }
  };

  return (
    <div className="min-h-screen bg-carbon flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#004B3A] via-[#0A0A0A] to-[#004B3A] opacity-90"></div>
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#66E5C4] mb-2 font-heading">Umze Autohaus</h1>
          <p className="text-[#F7F7F7] text-lg">Admin Panel Access</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-[#1C1C1C] p-8 rounded-lg shadow-2xl border border-[#004B3A] backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#F7F7F7] font-heading">Admin Login</h2>
          {error && <p className="text-red-400 mb-4 text-center bg-red-900/20 p-3 rounded border border-red-800">{error}</p>}
          <div className="mb-4">
            <label className="block text-[#F7F7F7] text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#F7F7F7] text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#004B3A] hover:bg-[#66E5C4] hover:text-[#0A0A0A] text-[#F7F7F7] p-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 btn-mirror"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}