// src/components/adminComponents/ConsideredAndResolved.jsx
import React, { useState } from 'react';

const ConsideredAndResolved = () => {
  const [selectedTab, setSelectedTab] = useState('Under Consideration');

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Considered and Resolved</h2>
      <div className="mb-4">
        <button
          onClick={() => setSelectedTab('Under Consideration')}
          className={`px-4 py-2 rounded-t-md ${selectedTab === 'Under Consideration' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
        >
          Complaints Under Consideration
        </button>
        <button
          onClick={() => setSelectedTab('Resolved')}
          className={`px-4 py-2 rounded-t-md ${selectedTab === 'Resolved' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
        >
          Complaints Resolved
        </button>
      </div>
      <div className="p-4 bg-white border border-gray-300 rounded-b-md">
        {selectedTab === 'Under Consideration' ? (
          <div>Content for Complaints Under Consideration</div>
        ) : (
          <div>Content for Complaints Resolved</div>
        )}
      </div>
    </div>
  );
};

export default ConsideredAndResolved;
