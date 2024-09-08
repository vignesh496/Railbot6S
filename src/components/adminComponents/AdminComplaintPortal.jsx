import React from 'react';

const categories = [
  { name: 'Medical Assistance' },
  { name: 'Security and Safety' },
  { name: 'Railway Department' }
];

const AdminComplaintPortal = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Department wise Complaint</h2>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded-md">
            <span className="text-lg font-medium">{category.name}</span>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => alert(`Viewing ${category.name}`)} // Replace with actual view functionality
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminComplaintPortal;
