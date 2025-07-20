import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_EMAIL = 'admin@teckniv.com';
const ADMIN_PASSWORD = 'admin123';
const ADMIN_USERNAME = 'Admin';

const USERS_KEY = 'tk_users';

const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const findUserByEmail = (email) => {
  return getUsers().find(u => u.email === email);
};

const RegisterSignIn = () => {
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const [mode, setMode] = useState('signin'); // 'signin' or 'register'
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (role === 'admin') {
      if (form.email === ADMIN_EMAIL && form.password === ADMIN_PASSWORD) {
        const userObj = { name: ADMIN_USERNAME, email: ADMIN_EMAIL, role: 'admin', token: 'mock-jwt-token' };
        localStorage.setItem('tk_user', JSON.stringify(userObj));
        window.dispatchEvent(new Event('tk_user_changed'));
        navigate('/');
      } else {
        setError('Invalid admin credentials');
      }
      return;
    }
    // User sign in
    const user = findUserByEmail(form.email);
    if (!user || user.password !== form.password) {
      setError('Invalid email or password');
      return;
    }
    const userObj = { name: user.username, email: user.email, role: 'user', token: 'mock-jwt-token' };
    localStorage.setItem('tk_user', JSON.stringify(userObj));
    window.dispatchEvent(new Event('tk_user_changed'));
    navigate('/');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (findUserByEmail(form.email)) {
      setError('Email already registered');
      return;
    }
    // Save user
    saveUser({ username: form.username, email: form.email, password: form.password });
    setMode('signin');
    setForm({ username: '', email: '', password: '', confirmPassword: '' });
    setError('Registration successful! Please sign in.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-400">
      <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-2xl p-10 w-full max-w-md transition-all duration-300"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 rounded-l-lg ${role === 'user' ? 'bg-blue-500 text-white' : 'bg-white/40 text-blue-700'}`}
            onClick={() => { setRole('user'); setMode('signin'); setError(''); }}
          >
            User
          </button>
          <button
            className={`flex-1 py-2 rounded-r-lg ${role === 'admin' ? 'bg-blue-500 text-white' : 'bg-white/40 text-blue-700'}`}
            onClick={() => { setRole('admin'); setMode('signin'); setError(''); }}
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
          {role === 'user' && (
            <button
              className={`flex-1 py-2 rounded-r-lg ${mode === 'register' ? 'bg-blue-100/80 text-blue-900' : 'bg-white/40 text-blue-700'}`}
              onClick={() => setMode('register')}
            >
              Register
            </button>
          )}
        </div>
        {error && <div className="mb-4 text-red-600 text-center font-semibold">{error}</div>}
        {mode === 'signin' && (
          <form onSubmit={handleSignIn} className="space-y-4">
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
              Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>
        )}
        {mode === 'register' && role === 'user' && (
          <form onSubmit={handleRegister} className="space-y-4">
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-white/60 bg-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-blue-400 text-blue-900 backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500/80 text-white py-2 rounded-lg hover:bg-blue-600/90 shadow-md transition-all duration-200 font-semibold tracking-wide"
            >
              Register as User
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterSignIn; 