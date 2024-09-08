// src/components/adminComponents/ProgressOut.jsx

import React from 'react';

const ProgressOut = ({ onBack }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Progress Out</h3>
      <p>Details for Progress Out will be displayed here.</p>
      <button
        type="button"
        onClick={onBack} // Trigger the onBack prop to return to the ScheduledComplaint component
        className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default ProgressOut;
