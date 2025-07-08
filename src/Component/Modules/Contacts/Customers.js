import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';


const Customers= ({ user }) => {
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
        </div>
        </div>
  )
}

export default Customers
