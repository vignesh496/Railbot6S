import React from 'react';
import AdminHeader from '../adminComponents/AdminHeader'; // Adjust the path as necessary

const AdminHome = () => {
  return (
    <div>
      <div className="p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto mt-6">
        <h2 className="text-xl font-semibold mb-4">Admin Home</h2>
        <p>Welcome to the admin home page. Here you can manage and oversee the various aspects of the application.</p>
        {/* Add more admin-specific content here */}
      </div>
    </div>
  );
};

export default AdminHome;
