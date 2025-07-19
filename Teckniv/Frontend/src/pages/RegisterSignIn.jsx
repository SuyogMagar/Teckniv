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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-400">
      <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-2xl p-10 w-full max-w-md transition-all duration-300"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 rounded-l-lg ${role === 'user' ? 'bg-blue-500 text-white' : 'bg-white/40 text-blue-700'}`}
            onClick={() => setRole('user')}
          >
            User
          </button>
          <button
            className={`flex-1 py-2 rounded-r-lg ${role === 'admin' ? 'bg-blue-500 text-white' : 'bg-white/40 text-blue-700'}`}
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
        </div>
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 rounded-l-lg ${mode === 'signin' ? 'bg-blue-100/80 text-blue-900' : 'bg-white/40 text-blue-700'}`}
            onClick={() => setMode('signin')}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 rounded-r-lg ${mode === 'register' ? 'bg-blue-100/80 text-blue-900' : 'bg-white/40 text-blue-700'}`}
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
            className="w-full px-3 py-2 border border-white/60 bg-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-blue-400 text-blue-900 backdrop-blur-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-white/60 bg-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-blue-400 text-blue-900 backdrop-blur-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-white/60 bg-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-blue-400 text-blue-900 backdrop-blur-sm"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500/80 text-white py-2 rounded-lg hover:bg-blue-600/90 shadow-md transition-all duration-200 font-semibold tracking-wide"
          >
            {mode === 'register' ? 'Register' : 'Sign In'} as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterSignIn; 