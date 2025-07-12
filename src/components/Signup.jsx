import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    mobileNumber: '',
    addressLine: '',
    city: '',
    state: '',
    zipCode: '',
    countryCode: '',
    dateOfBirth: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const data = await signup(form);
      if (data.responseCode === 200) {
        setMessage('Signup successful! Redirecting to login...');
        setTimeout(() => navigate('/NFTS-login'), 1500);
      } else {
        setMessage(data.responseMessage || 'Signup failed.');
      }
    } catch (err) {
      setMessage(err?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden py-8">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      
      {/* Signup form container */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 md:p-8 mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Sign Up</h2>
        
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-1">
                First Name
              </label>
              <input 
                name="firstName" 
                type="text" 
                placeholder="First Name" 
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
                value={form.firstName} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-1">
                Last Name
              </label>
              <input 
                name="lastName" 
                type="text" 
                placeholder="Last Name" 
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
                value={form.lastName} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-white/80 mb-1">
              Username <span className="text-red-400">*</span>
            </label>
            <input 
              name="userName" 
              type="text" 
              placeholder="Username" 
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
              value={form.userName} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
              Email <span className="text-red-400">*</span>
            </label>
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
              Password <span className="text-red-400">*</span>
            </label>
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
              value={form.password} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-white/80 mb-1">
              Mobile Number <span className="text-red-400">*</span>
            </label>
            <input 
              name="mobileNumber" 
              type="tel" 
              placeholder="Mobile Number" 
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
              value={form.mobileNumber} 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Address Information */}
          <div>
            <label htmlFor="addressLine" className="block text-sm font-medium text-white/80 mb-1">
              Address Line
            </label>
            <input 
              name="addressLine" 
              type="text" 
              placeholder="Address Line" 
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
              value={form.addressLine} 
              onChange={handleChange} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-white/80 mb-1">
                City
              </label>
              <input 
                name="city" 
                type="text" 
                placeholder="City" 
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
                value={form.city} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-white/80 mb-1">
                State
              </label>
              <input 
                name="state" 
                type="text" 
                placeholder="State" 
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
                value={form.state} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-white/80 mb-1">
                Zip Code
              </label>
              <input 
                name="zipCode" 
                type="text" 
                placeholder="Zip Code" 
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
                value={form.zipCode} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label htmlFor="countryCode" className="block text-sm font-medium text-white/80 mb-1">
                Country Code
              </label>
              <input 
                name="countryCode" 
                type="text" 
                placeholder="Country Code" 
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
                value={form.countryCode} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-white/80 mb-1">
              Date of Birth
            </label>
            <input 
              name="dateOfBirth" 
              type="date" 
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm" 
              value={form.dateOfBirth} 
              onChange={handleChange} 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-4" 
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="mt-6">
          <button 
            className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50" 
            onClick={() => navigate('/NFTS-login')}
          >
            Already have an account? Login
          </button>
        </div>
        
        {message && (
          <div className="mt-4 p-4 rounded-xl text-center text-sm" 
               style={{ 
                 backgroundColor: message.includes('success') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                 color: message.includes('success') ? '#22c55e' : '#ef4444',
                 border: `1px solid ${message.includes('success') ? '#22c55e' : '#ef4444'}`
               }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
