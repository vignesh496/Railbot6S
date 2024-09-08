import React from 'react';

const Sidebar = ({ onSelectOption }) => {
  return (
    <div className="w-full sm:w-64 bg-gray-800 text-white h-screen flex flex-col p-4">
      <h2 className="text-xl font-semibold mb-6">Menu</h2>
      <ul className="flex flex-col space-y-4">
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onSelectOption('Grievance Services'); }}
            className="hover:text-blue-400"
          >
            Grievance Services
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onSelectOption('Train Complaint Portal'); }}
            className="hover:text-blue-400"
          >
            Train Complaint Portal
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onSelectOption('Track Your Concern'); }}
            className="hover:text-blue-400"
          >
            Track Your Concern
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onSelectOption('Railbot'); }}
            className="hover:text-blue-400"
          >
            Railbot
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onSelectOption('Feedback'); }}
            className="hover:text-blue-400"
          >
            Feedback
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onSelectOption('Other Services'); }}
            className="hover:text-blue-400"
          >
            Other Services
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
