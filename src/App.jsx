import React, { useState } from 'react';
import User from './pages/User';
import Admin from './pages/Admin';
import AdminLogin from './components/AdminLogin';
import BottomMenu from './components/BottomMenu';

const App = () => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleAdminSignIn = () => {
    setIsAdminLoggedIn(true);
    setIsAdminLogin(false);
  };

  const handleAdminLogin = () => {
    setIsAdminLogin(true);
  };

  const handleBackToForm = () => {
    setIsAdminLoggedIn(false);
    setIsAdminLogin(false);
  };

  const renderContent = () => {
    if (isAdminLogin) {
      return <AdminLogin onSignIn={handleAdminSignIn} onBack={handleBackToForm} />;
    }

    if (isAdminLoggedIn) {
      return <Admin onBack={handleBackToForm} />;
    }

    return <User onAdminLogin={handleAdminLogin} />;
  };

  return (
    <div className={`flex flex-col sm:flex-row h-screen ${isAdminLoggedIn ? 'bg-red-100' : 'bg-gray-100'}`}>
      {!isAdminLoggedIn && <BottomMenu onAdminLogin={handleAdminLogin} />}
      <div className="flex-1 flex flex-col">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
