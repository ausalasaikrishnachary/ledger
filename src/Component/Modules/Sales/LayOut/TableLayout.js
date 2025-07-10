// Layout/Layout.js
import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Sales.css';

const Layout = ({ user, children, activeTab, onTabChange, tabs }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard-container">
      <Header 
        user={user} 
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <div className="content-wrapper">
        <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
          <Sidebar 
            user={user} 
            collapsed={sidebarCollapsed} 
          />
        </div>
        <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="container Sales-form-container">
            <div className="Sales-form-tabs">
              {tabs.map((tab) => (
                <div 
                  key={tab.id}
                  className={`Sales-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => onTabChange(tab.id)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;