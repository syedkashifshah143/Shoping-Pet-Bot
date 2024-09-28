import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to='/login' className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
