import React, { useState } from 'react';

const FeedbackForm = () => {
  const [complaintId, setComplaintId] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    alert('Feedback Submitted');
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    // Add update logic here
    alert('Feedback Updated');
  };

  return (
    <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Feedback Form</h2>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Complaint ID</label>
          <input
            type="text"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Complaint ID"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter your feedback"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
