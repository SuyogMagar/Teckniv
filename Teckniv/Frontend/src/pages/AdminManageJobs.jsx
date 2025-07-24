import React, { useEffect, useState } from 'react';

const AdminManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '', location: '', postedDate: '', salary: '' });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    setLoading(true);
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
    fetchJobs();
  };

  const handleEditClick = (job) => {
    setEditingJob(job.id);
    setEditForm({
      title: job.title,
      description: job.description,
      location: job.location,
      postedDate: job.postedDate,
      salary: job.salary || ''
    });
    setStatus(null);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSave = async (id) => {
    setStatus(null);
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editForm)
    });
    if (res.ok) {
      setEditingJob(null);
      fetchJobs();
    } else {
      setStatus('Error updating job');
    }
  };

  return (
    <div className="pt-32 px-4 max-w-4xl mx-auto mb-24">
      <h1 className="text-3xl font-bold mb-6">Manage Jobs</h1>
      {loading ? (
        <div>Loading jobs...</div>
      ) : jobs.length === 0 ? (
        <div>No jobs found.</div>
      ) : (
        <div className="flex flex-col gap-6">
          {jobs.map(job => (
            <div key={job.id} className="card w-full p-6 shadow-lg border border-gray-200 rounded-xl relative">
              {editingJob === job.id ? (
                <>
                  <input name="title" value={editForm.title} onChange={handleEditChange} className="input mb-2 w-full" placeholder="Job Title" />
                  <input name="location" value={editForm.location} onChange={handleEditChange} className="input mb-2 w-full" placeholder="Location" />
                  <input name="postedDate" value={editForm.postedDate} onChange={handleEditChange} className="input mb-2 w-full" placeholder="Posted Date" />
                  <input name="salary" value={editForm.salary} onChange={handleEditChange} className="input mb-2 w-full" placeholder="Salary" />
                  <textarea name="description" value={editForm.description} onChange={handleEditChange} className="input mb-2 w-full" placeholder="Description" />
                  <div className="flex gap-2 mt-2">
                    <button className="btn-primary" onClick={() => handleEditSave(job.id)}>Save</button>
                    <button className="btn-secondary" onClick={() => setEditingJob(null)}>Cancel</button>
                  </div>
                  {status && <div className="text-red-600 mt-1">{status}</div>}
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-1">{job.title}</h2>
                  <div className="text-gray-600 mb-1">{job.location} • {job.postedDate}</div>
                  <div className="text-primary-700 font-semibold mb-2">{job.salary}</div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
                  <div className="flex gap-2 justify-end mt-2">
                    <button className="btn-primary" onClick={() => handleEditClick(job)}>Edit</button>
                    <button className="btn-danger" onClick={() => handleDelete(job.id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminManageJobs; 