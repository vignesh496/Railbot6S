import React, { useState } from 'react';
import AdminHeader from '../components/adminComponents/AdminHeader'; // Adjust the path if necessary

const AdminLogin = ({ onSignIn, onBack }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    onSignIn();
  };

  return (
    <div className="h-screen bg-red-100">
      <AdminHeader /> {/* Include the new header here */}
      <div className="flex items-center justify-center h-full">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Admin Login</h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Admin ID or Mobile Number</label>
              <input
                type="text"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Admin ID or Mobile Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={onBack}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
