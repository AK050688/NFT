import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api/axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const OtpVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
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
    setLoading(true);
    setMessage('');
    try {
      const res = await api.put('/user/otpVerification', { email, otp });
      const data = res.data;
      if (res.status === 200 && data.responseCode === 200) {
        setMessage('OTP verified successfully!');
        navigate('/change-password', { state: { email } });
      } else {
        setMessage(data.responseMessage || 'OTP verification failed.');
      }
    } catch (err) {
      setMessage(err.response?.data?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    if (!email) {
      setMessage('Please enter your email to resend OTP.');
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      const res = await api.put('/user/resendOtp', { email });
      const data = res.data;
      if (res.status === 200 && data.responseCode === 200) {
        setMessage('OTP resent successfully!');
      } else {
        setMessage(data.responseMessage || 'Failed to resend OTP.');
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
        <h2 className="text-2xl font-bold mb-6 text-center">OTP Verification</h2>
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
          <label htmlFor="otp" className="sr-only">OTP</label>
          <input
            id="otp"
            type="text"
            placeholder="Enter OTP"
            className="w-full px-4 py-2 mb-4 border rounded-xl"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            minLength={4}
            maxLength={8}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
        <button
          type="button"
          className="w-full text-blue-600 underline mt-2 mb-2 cursor-pointer"
          onClick={handleResendOtp}
        >
          Resend OTP
        </button>
        <button
          type="button"
          className="w-full text-blue-600 underline mb-2 cursor-pointer"
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

export default OtpVerification; 