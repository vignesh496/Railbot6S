import React from 'react';

const A_Sidebar = ({ onSelectOption }) => {
  return (
    <div className="w-full sm:w-64 bg-red-800 text-white h-screen flex flex-col p-4">
      <h2 className="text-xl font-semibold mb-6">Admin Menu</h2>
      <ul className="flex flex-col space-y-4">
        <li onClick={() => onSelectOption('Home')} className="cursor-pointer hover:underline">Home</li>
        <li onClick={() => onSelectOption('Complaint Portal')} className="cursor-pointer hover:underline">Complaint Portal</li>
        <li onClick={() => onSelectOption('Scheduled Complaints')} className="cursor-pointer hover:underline">Scheduled Complaints</li>
        <li onClick={() => onSelectOption('Considered and Resolved')} className="cursor-pointer hover:underline">Considered and Resolved</li>
        <li onClick={() => onSelectOption('Employees')} className="cursor-pointer hover:underline">Employees</li>
        <li onClick={() => onSelectOption('Feedback')} className="cursor-pointer hover:underline">Feedback</li>
        <li onClick={() => onSelectOption('Settings')} className="cursor-pointer hover:underline">Settings</li>
      </ul>
    </div>
  );
};

export default A_Sidebar;
