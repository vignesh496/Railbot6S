import React from 'react';

const Output = ({ formData, onBack }) => {
  const renderFile = () => {
    if (!formData.file) return null;

    const fileURL = URL.createObjectURL(formData.file);
    if (formData.file.type.startsWith('image/')) {
      return <img src={fileURL} alt="Uploaded" className="max-w-full h-auto" />;
    } else if (formData.file.type.startsWith('video/')) {
      return (
        <video controls className="max-w-full h-auto">
          <source src={fileURL} type={formData.file.type} />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full sm:max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Submitted Grievance Details</h2>
      <div className="space-y-4">
        <div><strong>Mobile Number:</strong> {formData.mobileNumber}</div>
        <div><strong>PNR Number:</strong> {formData.pnrNumber}</div>
        <div><strong>Incident Date and Time:</strong> {formData.incidentDateTime}</div>
        <div><strong>Incident Description:</strong> {formData.incidentDescription}</div>
        <div>
          <strong>Uploaded File:</strong>
          {renderFile()}
        </div>
      </div>
      <button
        onClick={onBack}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
      >
        Back
      </button>
    </div>
  );
};

export default Output;
