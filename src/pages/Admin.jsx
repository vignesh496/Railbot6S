import React, { useState } from 'react';
import A_Sidebar from '../components/adminComponents/A_Sidebar';
import AdminHome from '../components/adminComponents/AdminHome';
import AdminComplaintPortal from '../components/adminComponents/AdminComplaintPortal';
import AdminHeader from '../components/adminComponents/AdminHeader'; // Import AdminHeader
import ScheduledComplaint from '../components/adminComponents/ScheduledComplaint'; // Import ScheduledComplaint
import ConsideredAndResolved from '../components/adminComponents/ConsideredAndResolved'; // Import ConsideredAndResolved
import Employees from '../components/adminComponents/Employees'; // Import Employees

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
        return <ConsideredAndResolved />;
      case 'Employees':
        return <Employees />; // Render Employees component
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
