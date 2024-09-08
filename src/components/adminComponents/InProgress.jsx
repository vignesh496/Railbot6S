// src/components/adminComponents/InProgress.jsx

import React, { useState } from 'react';
import UpdateProgress from './UpdateProgress';

const InProgress = ({ onBack }) => {
  const [complaintId, setComplaintId] = useState('');
  const [showUpdate, setShowUpdate] = useState(false);

  const handleStatusClick = () => {
    setShowUpdate(true);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">In Progress</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Complaint ID:</label>
          <input
            type="text"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <button
          type="button"
          onClick={handleStatusClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Check Status
        </button>
      </form>
      {showUpdate && <UpdateProgress />}
      <button
        type="button"
        onClick={onBack} // Use onBack prop here
        className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default InProgress;
