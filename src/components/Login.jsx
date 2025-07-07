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
      } else {
        setMessage(data.responseMessage || 'Login Failed');
      }
    } catch (err) {
      console.error('Login error:', err, err?.response);
      setMessage(err.response?.data?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg -left-0 -top-0 z-0"></div>
      <div className=" p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            autoFocus
          />
          <label htmlFor="password" className="sr-only">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
          <button
            type="submit"
            className="w-full bg-blue-500 cursor-pointer text-white py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <button className="w-full text-blue-600 underline mt-2 mb-2 cursor-pointer" type="button" onClick={() => navigate('/forgot-password')}>
          Forgot Password?
        </button>
        <button className="w-full bg-gray-200 text-blue-700 py-2 rounded mt-2 cursor-pointer" onClick={() => navigate('/NFTS-signup')}>Don't have an account? Sign Up</button>
        {message && (
          <p className="mt-4 text-center text-sm text-red-500">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
