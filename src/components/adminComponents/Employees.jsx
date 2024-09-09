// src/components/adminComponents/Employees.jsx
import React from 'react';

const departments = [
  { name: 'Medical Assistance' },
  { name: 'Security and Safety' },
  { name: 'Railway Department' }
];

const Employees = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Departments</h2>
      <div className="space-y-4">
        {departments.map((department, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded-md">
            <span className="text-lg font-medium">{department.name}</span>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => alert(`Viewing details for ${department.name}`)} // Replace with actual view functionality
            >
              View Employee Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
