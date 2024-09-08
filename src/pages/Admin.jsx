import React, { useState } from 'react';
import A_Sidebar from '../components/adminComponents/A_Sidebar';
import AdminHome from '../components/adminComponents/AdminHome';
import AdminComplaintPortal from '../components/adminComponents/AdminComplaintPortal';
import AdminHeader from '../components/adminComponents/AdminHeader'; // Import AdminHeader
import ScheduledComplaint from '../components/adminComponents/ScheduledComplaint'; // Import ScheduledComplaint

const Admin = ({ onBack }) => {
  const [adminSelectedOption, setAdminSelectedOption] = useState('Home');

  const renderAdminContent = () => {
    switch (adminSelectedOption) {
      case 'Home':
        return <AdminHome />;
      case 'Complaint Portal':
        return <AdminComplaintPortal />;
      case 'Scheduled Complaints':
        return <ScheduledComplaint />;
      case 'Considered and Resolved':
        return <div>Admin Considered and Resolved Content</div>;
      case 'Employees':
        return <div>Admin Employees Content</div>;
      case 'Feedback':
        return <div>Admin Feedback Content</div>;
      case 'Settings':
        return <div>Admin Settings Content</div>;
      default:
        return <div>Select an option from the menu</div>;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <A_Sidebar onSelectOption={setAdminSelectedOption} />
      <div className="flex-1 flex flex-col">
        <AdminHeader /> {/* Use AdminHeader component */}
        <main className="flex-1 p-6 bg-red-100">
          {renderAdminContent()}
        </main>
      </div>
    </div>
  );
};

export default Admin;
