// src/components/adminComponents/ScheduledComplaint.jsx

import React, { useState } from 'react';
import ToSchedule from './ToSchedule';
import InProgress from './InProgress';
import ProgressOut from './ProgressOut'; // Import the ProgressOut component

const ScheduledComplaint = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleBack = () => {
    setSelectedOption(null); // This will return to the tabs
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'To Schedule':
        return <ToSchedule onBack={handleBack} />;
      case 'In Progress':
        return <InProgress onBack={handleBack} />;
      case 'Progress Out':
        return <ProgressOut onBack={handleBack} />; // Pass onBack here
      default:
        return (
          <div className="p-4">
            <button
              onClick={() => setSelectedOption('To Schedule')}
              className="bg-red-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-700"
            >
              To Schedule
            </button>
            <button
              onClick={() => setSelectedOption('In Progress')}
              className="bg-red-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-700"
            >
              In Progress
            </button>
          </div>
        );
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Scheduled Complaints</h2>
      {renderContent()}
    </div>
  );
};

export default ScheduledComplaint;
