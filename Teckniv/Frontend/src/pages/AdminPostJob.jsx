import React, { useState } from 'react';

const AdminPostJob = () => {
  const [form, setForm] = useState({ title: '', department: '', location: '', type: '', description: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, send form to API
    setStatus('Job posted (mock)');
    setForm({ title: '', department: '', location: '', type: '', description: '' });
  };

  return (
    <div className="pt-32 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Post New Job</h1>
      <form className="card p-6 space-y-4" onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" className="input w-full" required />
        <input name="department" value={form.department} onChange={handleChange} placeholder="Department" className="input w-full" required />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="input w-full" required />
        <input name="type" value={form.type} onChange={handleChange} placeholder="Job Type" className="input w-full" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Job Description" className="input w-full" required />
        <button type="submit" className="btn-primary w-full">Post Job</button>
        {status && <div className="text-green-600 mt-2">{status}</div>}
      </form>
    </div>
  );
};

export default AdminPostJob; 