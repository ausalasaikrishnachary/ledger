import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DeliveryChallan.css';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import Header from '../../../Shared/Header/Header';

const DeliveryChallan = ({ user }) => {
  const [month, setMonth] = useState('July');
  const [year, setYear] = useState('2025');
  const [startDate, setStartDate] = useState('2025-06-08');
  const [endDate, setEndDate] = useState('2025-07-08');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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

  return (
    <div className="dashboard-container">
      <Header user={user} toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="content-wrapper">
        <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
          <Sidebar user={user} collapsed={sidebarCollapsed} />
        </div>

        <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="container Sales-form-container">

            {/* Tabs */}
           <div className="Sales-form-tabs">
  <Link to="/invoices" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'invoices' ? 'active' : ''}`}>Invoices</Link>
  <Link to="/receipts" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'receipts' ? 'active' : ''}`}>Receipts</Link>
  <Link to="/quotations" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'quotations' ? 'active' : ''}`}>Quotations</Link>
  <Link to="/billOfSupply" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'billOfSupply' ? 'active' : ''}`}>BillOfSupply</Link>
  <Link to="/creditNote" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'creditNote' ? 'active' : ''}`}>CreditNote</Link>
  <Link to="/deliveryChallan" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'deliveryChallan' ? 'active' : ''}`}>DeliveryChallan</Link>
  <Link to="/receivables" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'receivables' ? 'active' : ''}`}>Receivables</Link>
</div>

            {/* Main Content */}
            <div className="quotation-container p-3">
              <h5 className="mb-3 fw-bold">View Delivery Challan Details</h5>

              <div className="row align-items-end g-3 mb-3">
                <div className="col-md-auto">
                  <label className="form-label mb-1">Select Month and Year Data:</label>
                  <div className="d-flex">
                    <select className="form-select me-2" value={month} onChange={(e) => setMonth(e.target.value)}>
                      <option>July</option>
                      <option>June</option>
                      <option>May</option>
                    </select>
                    <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
                      <option>2025</option>
                      <option>2024</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-auto">
                  <button className="btn btn-success mt-4">
                    <i className="bi bi-download me-1"></i> Download
                  </button>
                </div>

                <div className="col-md-auto">
                  <label className="form-label mb-1">Select Date Range:</label>
                  <div className="d-flex">
                    <input type="date" className="form-control me-2" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                  </div>
                </div>

                <div className="col-md-auto">
                  <button className="btn btn-success mt-4">
                    <i className="bi bi-download me-1"></i> Download Range
                  </button>
                </div>

                <div className="col-md-auto">
                  <button className="btn btn-info text-white mt-4">Create</button>
                </div>
              </div>

              <div className="table-responsive">
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    Show
                    <select className="form-select d-inline-block mx-2" style={{ width: '80px' }}>
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                    entries
                  </div>
                  <div>
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </div>

                <table className="table table-bordered table-hover text-center">
                  <thead className="table-light">
                    <tr>
                      <th>CUSTOMER</th>
                      <th>DELIVERY CHALLAN</th>
                      <th>DC AMOUNT</th>
                      <th>DISPATCHED / VEHICLE</th>
                      <th>CREATED</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6">No records found</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex justify-content-between">
                  <div>Showing 0 to 0 of 0 entries</div>
                  <div>
                    <button className="btn btn-link">Previous</button>
                    <button className="btn btn-link">Next</button>
                  </div>
                </div>
              </div>
            </div> {/* End quotation-container */}

          </div> {/* End Sales-form-container */}
        </div>
      </div>
    </div>
  );
};

export default DeliveryChallan;
