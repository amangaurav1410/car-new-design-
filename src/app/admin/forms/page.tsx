'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormSubmission {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  submittedAt: string;
}

export default function AdminForms() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [viewing, setViewing] = useState<FormSubmission | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/admin/login');
    fetchSubmissions();
  }, [router]);

  const fetchSubmissions = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/form-submissions', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setSubmissions(data);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/form-submissions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status }),
    });
    fetchSubmissions();
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/form-submissions/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchSubmissions();
  };

  return (
    <div className="min-h-screen bg-carbon p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#66E5C4] font-heading">Form Submissions</h1>
        <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#004B3A]">
              <tr>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Name</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Email</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Status</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Date</th>
                <th className="p-4 text-[#F7F7F7] font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub._id} className="border-t border-[#A9AAAE] hover:bg-[#0A0A0A] transition duration-200">
                  <td className="p-4 text-[#F7F7F7]">{sub.name}</td>
                  <td className="p-4 text-[#A9AAAE]">{sub.email}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      sub.status === 'unread' ? 'bg-red-600 text-white' :
                      sub.status === 'read' ? 'bg-yellow-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="p-4 text-[#A9AAAE]">{new Date(sub.submittedAt).toLocaleDateString()}</td>
                  <td className="p-4 space-x-2">
                    <button
                      onClick={() => setViewing(sub)}
                      className="bg-[#66E5C4] hover:bg-[#004B3A] text-[#0A0A0A] px-3 py-2 rounded font-medium transition duration-300"
                    >
                      View
                    </button>
                    <select
                      value={sub.status}
                      onChange={(e) => handleStatusChange(sub._id, e.target.value)}
                      className="bg-[#0A0A0A] border border-[#A9AAAE] text-[#F7F7F7] px-2 py-2 rounded"
                    >
                      <option value="unread">Unread</option>
                      <option value="read">Read</option>
                      <option value="responded">Responded</option>
                    </select>
                    <button
                      onClick={() => handleDelete(sub._id)}
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
        {viewing && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-[#1C1C1C] border border-[#004B3A] p-8 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center text-[#F7F7F7] font-heading">Submission Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#A9AAAE] text-sm font-medium mb-1">Name</label>
                  <p className="text-[#F7F7F7] bg-[#0A0A0A] p-3 rounded border border-[#A9AAAE]">{viewing.name}</p>
                </div>
                <div>
                  <label className="block text-[#A9AAAE] text-sm font-medium mb-1">Email</label>
                  <p className="text-[#F7F7F7] bg-[#0A0A0A] p-3 rounded border border-[#A9AAAE]">{viewing.email}</p>
                </div>
                <div>
                  <label className="block text-[#A9AAAE] text-sm font-medium mb-1">Message</label>
                  <p className="text-[#F7F7F7] bg-[#0A0A0A] p-3 rounded border border-[#A9AAAE] whitespace-pre-wrap">{viewing.message}</p>
                </div>
                <div>
                  <label className="block text-[#A9AAAE] text-sm font-medium mb-1">Status</label>
                  <p className="text-[#F7F7F7] bg-[#0A0A0A] p-3 rounded border border-[#A9AAAE]">{viewing.status}</p>
                </div>
                <div>
                  <label className="block text-[#A9AAAE] text-sm font-medium mb-1">Submitted Date</label>
                  <p className="text-[#F7F7F7] bg-[#0A0A0A] p-3 rounded border border-[#A9AAAE]">{new Date(viewing.submittedAt).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setViewing(null)}
                  className="px-6 py-3 bg-[#A9AAAE] hover:bg-[#C8C8C8] text-[#0A0A0A] rounded-lg font-medium transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}