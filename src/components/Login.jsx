import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const navigate= useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
   
    if (username === 'user' && password === '1234',email === 'user@gmail.com') {
        alert('Login Succesfull')
      setMessage(' Login successful!');
      navigate('/dash')

    } else {
      setMessage(' Invalid credentials');
        alert('Inalid')

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="bg -left-0 -top-0 z-0"></div>
      <div className=" p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 mb-4 border rounded-xl"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
            <input
            type="text"
            placeholder="email"
            className="w-full px-4 py-2 mb-4 border rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 cursor-pointer text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
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
