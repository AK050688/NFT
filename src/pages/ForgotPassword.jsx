import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post(`${API_BASE_URL}/user/forgotPassword`, { email });
      const data = res.data;
      if (res.status === 200 && data.responseCode === 200) {
        setMessage('OTP sent successfully!');
        navigate('/otp-verification', { state: { email } });
      } else {
        setMessage(data.responseMessage || 'Failed to send OTP.');
      }
    } catch (err) {
      setMessage(err.response?.data?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg -left-0 -top-0 z-0"></div>
      <div className="p-8 rounded shadow-md w-full max-w-sm ">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 border rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
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

export default ForgotPassword; 