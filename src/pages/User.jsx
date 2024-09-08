import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import GrievanceForm from '../components/GrievanceForm';
import Output from '../components/Output';
import FeedbackForm from '../components/FeedbackForm';
import OtherServices from '../components/OtherServices';

const User = ({ onAdminLogin }) => {
  const [selectedOption, setSelectedOption] = useState('Grievance Services');
  const [formData, setFormData] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsFormSubmitted(true);
  };

  const handleBackToForm = () => {
    setIsFormSubmitted(false);
  };

  const renderContent = () => {
    if (isFormSubmitted) {
      return <Output formData={formData} onBack={handleBackToForm} />;
    }

    switch (selectedOption) {
      case 'Feedback':
        return <FeedbackForm />;
      case 'Grievance Services':
        return <GrievanceForm onSubmit={handleFormSubmit} />;
      case 'Other Services':
        return <OtherServices />;
      default:
        return <div>Select an option from the menu</div>;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Sidebar onSelectOption={setSelectedOption} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default User;
