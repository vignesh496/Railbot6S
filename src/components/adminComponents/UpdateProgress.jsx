// src/components/adminComponents/UpdateProgress.jsx

import React, { useState } from 'react';

const UpdateProgress = ({ onSubmit, onBack }) => {
  const [currentProgram, setCurrentProgram] = useState('');
  const [updateDetails, setUpdateDetails] = useState('');
  const [status, setStatus] = useState('Under Consideration');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ currentProgram, updateDetails, status });
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Update Progress</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="currentProgram" className="block text-sm font-medium mb-1">Current Program</label>
          <input
            type="text"
            id="currentProgram"
            value={currentProgram}
            onChange={(e) => setCurrentProgram(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="updateDetails" className="block text-sm font-medium mb-1">Update Details</label>
          <textarea
            id="updateDetails"
            value={updateDetails}
            onChange={(e) => setUpdateDetails(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
            required
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          >
            <option value="Under Consideration">Under Consideration</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProgress;
