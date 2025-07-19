import React, { useState } from 'react';

const AdminApplicants = () => {
  // In a real app, fetch applicants from API
  const [applicants, setApplicants] = useState([]); // Empty array for now

  return (
    <div className="pt-32 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">View Applicants</h1>
      <div className="card p-6">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Job Applied</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.length === 0 ? (
              <tr><td colSpan="5" className="text-center text-gray-400 py-4">No applicants found.</td></tr>
            ) : applicants.map(applicant => (
              <tr key={applicant.id}>
                <td>{applicant.name}</td>
                <td>{applicant.email}</td>
                <td>{applicant.jobTitle}</td>
                <td>{applicant.status}</td>
                <td>
                  <button className="btn-secondary text-xs mr-2">View</button>
                  <button className="btn-secondary text-xs">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminApplicants; 