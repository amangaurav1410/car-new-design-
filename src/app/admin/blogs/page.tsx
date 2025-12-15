'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Blog {
  _id: string;
  title: string;
  author: string;
  publicationDate: string;
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [form, setForm] = useState({ title: '', content: '', author: '', images: '', tags: '' });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/admin/login');
    fetchBlogs();
  }, [router]);

  const fetchBlogs = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/blogs', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setBlogs(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `/api/blogs/${editing._id}` : '/api/blogs';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      fetchBlogs();
      setShowForm(false);
      setEditing(null);
      setForm({ title: '', content: '', author: '', images: '', tags: '' });
    }
  };

  const handleEdit = async (blog: Blog) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`/api/blogs/${blog._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const fullBlog = await res.json();
      setEditing(fullBlog);
      setForm({
        title: fullBlog.title,
        content: fullBlog.content,
        author: fullBlog.author,
        images: fullBlog.images ? fullBlog.images.join(', ') : '',
        tags: fullBlog.tags ? fullBlog.tags.join(', ') : ''
      });
      setShowForm(true);
    }
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBlogs();
  };

  return (
    <div className="min-h-screen bg-carbon p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#66E5C4] font-heading">Blog Management</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#004B3A] hover:bg-[#66E5C4] hover:text-[#0A0A0A] text-[#F7F7F7] px-6 py-3 rounded-lg font-medium transition duration-300 btn-mirror"
          >
            Add Blog
          </button>
        </div>
        <div className="bg-[#1C1C1C] border border-[#004B3A] rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#004B3A]">
              <tr>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Title</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Author</th>
                <th className="p-4 text-left text-[#F7F7F7] font-semibold">Date</th>
                <th className="p-4 text-[#F7F7F7] font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-t border-[#A9AAAE] hover:bg-[#0A0A0A] transition duration-200">
                  <td className="p-4 text-[#F7F7F7]">{blog.title}</td>
                  <td className="p-4 text-[#F7F7F7]">{blog.author}</td>
                  <td className="p-4 text-[#A9AAAE]">{new Date(blog.publicationDate).toLocaleDateString()}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="bg-[#66E5C4] hover:bg-[#004B3A] text-[#0A0A0A] px-3 py-2 rounded mr-2 font-medium transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
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
              <h2 className="text-2xl font-semibold mb-6 text-center text-[#F7F7F7] font-heading">{editing ? 'Edit Blog' : 'Add Blog'}</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                  required
                />
                <textarea
                  placeholder="Content"
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent h-32"
                  required
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Images (comma separated URLs)"
                  value={form.images}
                  onChange={(e) => setForm({ ...form, images: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                  className="w-full p-3 bg-[#0A0A0A] border border-[#A9AAAE] rounded-lg text-[#F7F7F7] placeholder-[#A9AAAE] focus:outline-none focus:ring-2 focus:ring-[#66E5C4] focus:border-transparent"
                />
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