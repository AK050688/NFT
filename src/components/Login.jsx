import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../redux/slices/authSlice';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post(`${API_BASE_URL}/user/userLogin`, { email, password });
      const data = res.data;
      if (res.status === 200 && data.responseCode === 200) {
        localStorage.setItem('token', data.result.token);
        localStorage.setItem('user', JSON.stringify(data.result));
        dispatch(loginSuccess({ token: data.result.token, user: data.result }));
        setMessage('Login Successful! Redirecting...');
        setLoading(false);
        // Direct admin check
        if (email === 'admin@gmail.com' && password === 'admin@123') {
          navigate('/admin/dashboard');
        } else if (data.result.userType === 'ADMIN') {
          navigate('/admin');
        } else {
          navigate('/profile');
        }
        return;
      } else {bg-purple-500
        setMessage(data.responseMessage || 'Login Failed');
      }
    } catch (err) {
      console.error('Login error:', err, err?.response);
      setMessage(err.response?.data?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-8 mt-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              autoFocus
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-purple-300 hover:text-white focus:outline-none cursor-pointer transition-colors duration-200"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-6 space-y-3">
          <button 
            className="w-full text-purple-300 hover:text-white underline text-sm transition-colors duration-200 focus:outline-none" 
            type="button" 
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </button>
          
          <button 
            className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50" 
            onClick={() => navigate('/NFTS-signup')}
          >
            Don't have an account? Sign Up
          </button>
        </div>
        
        {message && (
          <div className="mt-6 p-4 rounded-xl text-center text-sm" 
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

export default LoginPage;
