import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import Header from '../../../Shared/Header/Header';
import Ageing from '../Receivables/Ageing';
import OverdueReceivables from '../Receivables/OverdueReceivables';
import PartyWiseReceivables from '../Receivables/PartyWiseReceivables';
import UpcomingReveivables from '../Receivables/UpcomingReveivables';
import '../Sales.css';

const Receivables = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeReceivablesTab, setActiveReceivablesTab] = useState('ageing');

  const location = useLocation();
  const path = location.pathname;

  const getActiveTab = () => {
    if (path.startsWith('/invoices')) return 'invoices';
    if (path.startsWith('/receipts')) return 'receipts';
    if (path.startsWith('/quotations')) return 'quotations';
    if (path.startsWith('/billOfSupply')) return 'billOfSupply';
    if (path.startsWith('/creditNote')) return 'creditNote';
    if (path.startsWith('/deliveryChallan')) return 'deliveryChallan';
    if (path.includes('/receivables')) return 'receivables';
    return '';
  };

  const activeTab = getActiveTab();

  const handleReceivablesTabClick = (tab) => {
    setActiveReceivablesTab(tab);
  };

  return (
    <div className="dashboard-container">
      <Header user={user} toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="content-wrapper">
        <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
          <Sidebar user={user} collapsed={sidebarCollapsed} />
        </div>

        <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="container Sales-form-container p-3">
            {/* Top Tabs */}
            <div className="Sales-form-tabs">
              <Link to="/invoices" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'invoices' ? 'active' : ''}`}>Invoices</Link>
              <Link to="/receipts" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'receipts' ? 'active' : ''}`}>Receipts</Link>
              <Link to="/quotations" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'quotations' ? 'active' : ''}`}>Quotations</Link>
              <Link to="/billOfSupply" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'billOfSupply' ? 'active' : ''}`}>BillOfSupply</Link>
              <Link to="/creditNote" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'creditNote' ? 'active' : ''}`}>CreditNote</Link>
              <Link to="/deliveryChallan" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'deliveryChallan' ? 'active' : ''}`}>DeliveryChallan</Link>
              <Link to="/receivables" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'receivables' ? 'active' : ''}`}>Receivables</Link>
            </div>


            {/* Sub Tabs */}
            <div className="receivables-tabs mb-4">
              <div
                className={`receivables-subtab ${activeReceivablesTab === 'ageing' ? 'active' : ''}`}
                onClick={() => handleReceivablesTabClick('ageing')}
              >
                Ageing
              </div>
              <div
                className={`receivables-subtab ${activeReceivablesTab === 'overdue' ? 'active' : ''}`}
                onClick={() => handleReceivablesTabClick('overdue')}
              >
                OverdueReceivables
              </div>
              <div
                className={`receivables-subtab ${activeReceivablesTab === 'partyWise' ? 'active' : ''}`}
                onClick={() => handleReceivablesTabClick('partyWise')}
              >
                PartyWiseReceivables
              </div>
              <div
                className={`receivables-subtab ${activeReceivablesTab === 'upcoming' ? 'active' : ''}`}
                onClick={() => handleReceivablesTabClick('upcoming')}
              >
                UpcomingReveivables
              </div>
            </div>

            {/* Tab Content */}
            <div className="receivables-content">
              {activeReceivablesTab === 'ageing' && <Ageing />}
              {activeReceivablesTab === 'overdue' && <OverdueReceivables />}
              {activeReceivablesTab === 'partyWise' && <PartyWiseReceivables />}
              {activeReceivablesTab === 'upcoming' && <UpcomingReveivables />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receivables;
