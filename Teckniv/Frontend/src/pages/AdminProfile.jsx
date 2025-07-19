import React, { useState } from 'react';

const AdminProfile = () => {
  // In a real app, fetch profile from API
  const [profile, setProfile] = useState({ name: '', email: '', company: '', phone: '' });

  return (
    <div className="pt-32 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Employer Profile</h1>
      <div className="card p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input className="input w-full" value={profile.name} readOnly />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input className="input w-full" value={profile.email} readOnly />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Company</label>
          <input className="input w-full" value={profile.company} readOnly />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Phone</label>
          <input className="input w-full" value={profile.phone} readOnly />
        </div>
        {/* Add edit functionality in the future */}
      </div>
    </div>
  );
};

export default AdminProfile; 