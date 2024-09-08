// src/components/adminComponents/ToSchedule.jsx

import React, { useState } from 'react';

const ToSchedule = ({ onBack }) => {
  const [timeline, setTimeline] = useState('');

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">To Schedule</h3>
      <form>
        <div>
          <label className="block mb-2">Stage 1</label>
          <input type="checkbox" id="stage1" className="mr-2" />
          <label htmlFor="stage1">Complete Stage 1</label>
        </div>
        <div>
          <label className="block mb-2">Stage 2</label>
          <input type="checkbox" id="stage2" className="mr-2" />
          <label htmlFor="stage2">Complete Stage 2</label>
        </div>
        <div>
          <label className="block mb-2">Stage 3</label>
          <input type="checkbox" id="stage3" className="mr-2" />
          <label htmlFor="stage3">Complete Stage 3</label>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Timeline Date:</label>
          <input 
            type="date" 
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            type="button"
            onClick={onBack} // Use onBack prop here
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Back
          </button>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToSchedule;
