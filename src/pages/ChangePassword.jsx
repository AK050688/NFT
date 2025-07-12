import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api/axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill email if passed via navigation state
  React.useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmNewPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      const res = await api.put('/user/passwordChange', { email, password, confirmNewPassword });
      const data = res.data;
      if (res.status === 200 && data.responseCode === 200) {
        setMessage('Password changed successfully!');
        setTimeout(() => navigate('/NFTS-login'), 1500);
      } else {
        setMessage(data.responseMessage || 'Failed to change password.');
      }
    } catch (err) {
      setMessage(err.response?.data?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg -left-0 -top-0 z-0"></div>
      <div className="p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <label htmlFor="password" className="sr-only">New Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              className="w-full px-4 py-2 mb-4 border rounded-xl pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 focus:outline-none cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <label htmlFor="confirmNewPassword" className="sr-only">Confirm New Password</label>
          <div className="relative">
            <input
              id="confirmNewPassword"
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm New Password"
              className="w-full px-4 py-2 mb-4 border rounded-xl pr-10"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
              minLength={6}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 focus:outline-none cursor-pointer"
              onClick={() => setShowConfirm((prev) => !prev)}
              tabIndex={-1}
            >
              {showConfirm ? 'Hide' : 'Show'}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Changing...' : 'Change Password'}
          </button>
        </form>
        <button
          type="button"
          className="w-full text-blue-600 underline mt-2 mb-2 cursor-pointer"
          onClick={() => navigate('/NFTS-login')}
        >
          Back to Login
        </button>
        {message && (
          <p className="mt-4 text-center text-sm" style={{ color: message.includes('success') ? '#22c55e' : '#ef4444' }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChangePassword; 