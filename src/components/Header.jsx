import React from 'react';

const Header = () => {
  return (
    <div className="relative p-4 bg-gray-100 shadow-md flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-2">Rail Madad 6S</h1>

      {/* Icons */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <span className="material-icons text-gray-600 hover:text-blue-600 cursor-pointer">account_circle</span>
        <span className="material-icons text-gray-600 hover:text-blue-600 cursor-pointer">notifications</span>
        <span className="material-icons text-gray-600 hover:text-blue-600 cursor-pointer">help_outline</span>
      </div>

      {/* Toll-Free Number */}
      <div className="text-center mt-8">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg font-medium">Toll-Free Number:</span>
          <span className="text-lg font-bold text-red-600">139</span>
        </div>
        <span className="text-sm">for security/medical assistance</span>
      </div>
    </div>
  );
};

export default Header;
