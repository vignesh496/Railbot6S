import React from 'react';

const BottomMenu = ({onAdminLogin}) => {
  return (
    <div className="fixed bottom-0 right-0 flex space-x-4 p-4">
      <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">FAQs</a>
      <a href="#" onClick={onAdminLogin} className="text-gray-600 hover:text-blue-600">Admin Login</a>
    </div>
  );
};

export default BottomMenu;
