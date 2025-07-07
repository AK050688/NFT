import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      const res = await axios.post(`${API_BASE_URL}/user/userSignup`, form);
      const data = res.data;
      if (res.status === 200 && data.responseCode === 200) {
        setMessage('Signup successful! Redirecting to login...');
        setTimeout(() => navigate('/NFTS-login'), 1500);
      } else {
        setMessage(data.responseMessage || 'Signup failed.');
      }
    } catch (err) {
      setMessage(err.response?.data?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen mt-12 flex items-center justify-center">
      <div className="p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input name="firstName" type="text" placeholder="First Name" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.firstName} onChange={handleChange} />
          <input name="lastName" type="text" placeholder="Last Name" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.lastName} onChange={handleChange} />
          <input name="userName" type="text" placeholder="Username*" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.userName} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email*" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password*" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.password} onChange={handleChange} required />
          <input name="mobileNumber" type="text" placeholder="Mobile Number*" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.mobileNumber} onChange={handleChange} required />
          <input name="addressLine" type="text" placeholder="Address Line" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.addressLine} onChange={handleChange} />
          <input name="city" type="text" placeholder="City" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.city} onChange={handleChange} />
          <input name="state" type="text" placeholder="State" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.state} onChange={handleChange} />
          <input name="zipCode" type="text" placeholder="Zip Code" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.zipCode} onChange={handleChange} />
          <input name="countryCode" type="text" placeholder="Country Code" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.countryCode} onChange={handleChange} />
          <input name="dateOfBirth" type="date" placeholder="Date of Birth" className="w-full px-4 py-2 mb-2 border rounded-xl" value={form.dateOfBirth} onChange={handleChange} />
          <button type="submit" className="w-full bg-blue-500 cursor-pointer text-white py-2 rounded hover:bg-blue-600 mt-2" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
        </form>
        <button className="w-full bg-gray-200 text-blue-700 py-2 rounded mt-2" onClick={() => navigate('/NFTS-login')}>Already have an account? Login</button>
        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
      </div>
    </div>
  );
}

export default Signup;
