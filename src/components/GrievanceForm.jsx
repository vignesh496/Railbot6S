import React, { useState } from 'react';

const GrievanceForm = ({ onSubmit }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [pnrNumber, setPnrNumber] = useState('');
  const [incidentDateTime, setIncidentDateTime] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      mobileNumber,
      pnrNumber,
      incidentDateTime,
      incidentDescription,
      file
    };
    onSubmit(formData); // Pass data to parent component
  };

  const handleReset = () => {
    setMobileNumber('');
    setPnrNumber('');
    setIncidentDateTime('');
    setIncidentDescription('');
    setFile(null);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Grievance Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col sm:flex-row items-center sm:items-start">
          <label className="block text-sm font-medium mb-2 sm:mb-0 w-full sm:w-1/3">Mobile Number</label>
          <div className="w-full sm:w-2/3 flex items-center">
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="p-2 border border-gray-300 rounded-md flex-1"
              placeholder="Enter mobile number"
            />
            <button
              type="button"
              className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed"
              disabled
            >
              Get OTP
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">PNR Number</label>
          <input
            type="text"
            value={pnrNumber}
            onChange={(e) => setPnrNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter PNR number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Incident Date and Time</label>
          <input
            type="datetime-local"
            value={incidentDateTime}
            onChange={(e) => setIncidentDateTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Incident</label>
          <textarea
            value={incidentDescription}
            onChange={(e) => setIncidentDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Describe the incident"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Upload Image/Video</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default GrievanceForm;
