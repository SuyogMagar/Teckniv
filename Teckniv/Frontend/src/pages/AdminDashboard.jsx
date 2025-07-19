import React from 'react';

const AdminDashboard = () => {
  // In a real app, fetch stats and data from API
  return (
    <div className="pt-32 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Example stat cards, replace with dynamic data */}
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold">--</div>
          <div className="text-gray-500">Total Jobs</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold">--</div>
          <div className="text-gray-500">Applicants</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-2xl font-bold">--</div>
          <div className="text-gray-500">Employers</div>
        </div>
      </div>
      {/* Placeholder for charts, recent activity, etc. */}
      <div className="card p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
        <div className="text-gray-400">No recent activity.</div>
      </div>
    </div>
  );
};

export default AdminDashboard; 