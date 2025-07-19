import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterSignIn = () => {
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const [mode, setMode] = useState('signin'); // 'signin' or 'register'
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user info to localStorage
    const userObj = {
      name: form.username,
      email: form.email,
      role,
      token: 'mock-jwt-token',
    };
    localStorage.setItem('tk_user', JSON.stringify(userObj));
    // Dispatch custom event so Header updates in same tab
    window.dispatchEvent(new Event('tk_user_changed'));
    // Redirect to home
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 ${role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setRole('user')}
          >
            User
          </button>
          <button
            className={`flex-1 py-2 ${role === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
        </div>
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 ${mode === 'signin' ? 'bg-blue-100' : 'bg-gray-100'}`}
            onClick={() => setMode('signin')}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 ${mode === 'register' ? 'bg-blue-100' : 'bg-gray-100'}`}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {mode === 'register' ? 'Register' : 'Sign In'} as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterSignIn; 