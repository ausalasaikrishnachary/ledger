import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import './Sales.css';

const Sales = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [activeTab, setActiveTab] = useState('invoices');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
            {/* <h1 className="Sales-form-title">Add Sales</h1> */}
            
            <div className="Sales-form-tabs">
              <div 
                className={`Sales-tab ${activeTab === 'invoices' ? 'active' : ''}`}
                onClick={() => handleTabClick('invoices')}
              >
                Invoices
              </div>
              <div 
                className={`Sales-tab ${activeTab === 'receipts' ? 'active' : ''}`}
                onClick={() => handleTabClick('receipts')}
              >
                Receipts
              </div>
              <div 
                className={`Sales-tab ${activeTab === 'quotations' ? 'active' : ''}`}
                onClick={() => handleTabClick('quotations')}
              >
                Quotations
              </div>
              <div 
                className={`Sales-tab ${activeTab === 'billOfSupply' ? 'active' : ''}`}
                onClick={() => handleTabClick('billOfSupply')}
              >
                BillOfSupply
              </div>
               <div 
                className={`Sales-tab ${activeTab === 'creditNote' ? 'active' : ''}`}
                onClick={() => handleTabClick('creditNote')}
              >
                CreditNote
              </div> <div 
                className={`Sales-tab ${activeTab === 'deliveryChallan' ? 'active' : ''}`}
                onClick={() => handleTabClick('deliveryChallan')}
              >
                DeliveryChallan
              </div>
            </div>
            <div className={`card Sales-form-card ${activeTab === 'invoices' ? 'active-section' : ''}`}>
              <div className="Sales-form-section">
                <h2 className="Sales-section-title">Invoices</h2>
               
              </div>
            </div>
            <div className={`card Sales-form-card ${activeTab === 'receipts' ? 'active-section' : ''}`}>
              <div className="Sales-form-section">
                <h2 className="Sales-section-title">Receipts</h2>
              </div>
            </div>
            <div className={`card Sales-form-card ${activeTab === 'quotations' ? 'active-section' : ''}`}>
             
  <div className="Sales-form-section">
                <h2 className="Sales-section-title">Quotations</h2>
              </div>
            </div>

            <div className={`card Sales-form-card ${activeTab === 'billOfSupply' ? 'active-section' : ''}`}>
              <div className="Sales-form-section">
                <h2 className="Sales-section-title">BillOfSupply</h2>
              </div>
            </div>
                 <div className={`card Sales-form-card ${activeTab === 'creditNote' ? 'active-section' : ''}`}>
              <div className="Sales-form-section">
                <h2 className="Sales-section-title">Credit Note</h2>
              </div>
            </div>     <div className={`card Sales-form-card ${activeTab === 'deliveryChallan' ? 'active-section' : ''}`}>
              <div className="Sales-form-section">
                <h2 className="Sales-section-title">DeliveryChallan</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;