import React from 'react';

const AdminHeader = () => {
  return (
    <div className="relative p-4 bg-red-200 text-red-800 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-2">Rail Madad 6S</h1>

      {/* Toll-Free Number */}
      <div className="text-center mt-4">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg font-medium">Toll-Free Number:</span>
          <span className="text-lg font-bold">139</span>
        </div>
        <span className="text-sm">for security/medical assistance</span>
      </div>
    </div>
  );
};

export default AdminHeader;
