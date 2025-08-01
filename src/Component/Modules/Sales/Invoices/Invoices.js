// import React, { useState } from 'react';
// import './Invoices.css';

// const Invoices = () => {
//   const [month, setMonth] = useState('July');
//   const [year, setYear] = useState('2025');
//   const [startDate, setStartDate] = useState('2025-06-08');
//   const [endDate, setEndDate] = useState('2025-07-08');

//   return (
//     <div className="quotation-container p-3">
//       <h5 className="mb-3 fw-bold">View Invoices Details</h5>

//       <div className="row align-items-end g-3 mb-3">
//         <div className="col-md-auto">
//           <label className="form-label mb-1">Select Month and Year Data:</label>
//           <div className="d-flex">
//             <select className="form-select me-2" value={month} onChange={(e) => setMonth(e.target.value)}>
//               <option>July</option>
//               <option>June</option>
//               <option>May</option>
//               {/* Add more months if needed */}
//             </select>
//             <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
//               <option>2025</option>
//               <option>2024</option>
//             </select>
//           </div>
//         </div>

//         <div className="col-md-auto">
//           <button className="btn btn-success mt-4">
//             <i className="bi bi-download me-1"></i> Download
//           </button>
//         </div>

//         <div className="col-md-auto">
//           <label className="form-label mb-1">Select Date Range:</label>
//           <div className="d-flex">
//             <input type="date" className="form-control me-2" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//             <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//           </div>
//         </div>

//         <div className="col-md-auto">
//           <button className="btn btn-success mt-4">
//             <i className="bi bi-download me-1"></i> Download Range
//           </button>
//         </div>

//         <div className="col-md-auto">
//           <button className="btn btn-info text-white mt-4">Create</button>
//         </div>
//       </div>

//       <div className="table-responsive">
//         <div className="d-flex justify-content-between mb-2">
//           <div>
//             Show
//             <select className="form-select d-inline-block mx-2" style={{ width: '80px' }}>
//               <option>10</option>
//               <option>25</option>
//               <option>50</option>
//             </select>
//             entries
//           </div>
//           <div>
//             <input type="text" className="form-control" placeholder="Search" />
//           </div>
//         </div>

//         <table className="table table-bordered table-hover text-center">
//           <thead className="table-light">
//             <tr>
//               <th>CUSTOMER NAME</th>
//               <th>NUMBER</th>
//               <th>TOTAL AMOUNT</th>
//               <th>PAYMENT</th>
//               <th>CREATED</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td colSpan="5">No data available in table</td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="d-flex justify-content-between">
//           <div>Showing 0 to 0 of 0 entries</div>
//           <div>
//             <button className="btn btn-link">Previous</button>
//             <button className="btn btn-link">Next</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Invoices;










import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import Header from '../../../Shared/Header/Header';
import Receipts from '../Receipts/Receipts';
import Quotations from '../Quotation/Quotations';
import BillOfSupply from '../BillOfSupply/BillOfSupply';
import CreditNote from '../CreditNote/CreditNote';
import DeliveryChallan from '../DeliveryChallan/DeliveryChallan';
// Receivables sub-tabs
import Ageing from '../Receivables/Ageing';
import OverdueReceivables from '../Receivables/OverdueReceivables';
import PartyWiseReceivables from '../Receivables/PartyWiseReceivables';
import UpcomingReveivables from '../Receivables/UpcomingReveivables';
import '../Sales.css';
// import Receivables from '../Receivables/Receivables';
import Receivables from '../Receivables/Receivables';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const AddSales = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // const [activeTab, setActiveTab] = useState('invoices');
  const navigate = useNavigate();

  const location = useLocation();

  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path.includes('/invoices')) return 'invoices';
    if (path.includes('/receipts')) return 'receipts';
    if (path.includes('/quotations')) return 'quotations';
    if (path.includes('/billOfSupply')) return 'billOfSupply';
    if (path.includes('/creditNote')) return 'creditNote';
    if (path.includes('/deliveryChallan')) return 'deliveryChallan';
    if (path.includes('/receivables')) return 'receivables';
    return 'invoices'; // default fallback
  };


  const activeTab = getActiveTabFromPath();

  const [activeReceivablesTab, setActiveReceivablesTab] = useState('outstanding');

  // Invoices state
  const [month, setMonth] = useState('July');
  const [year, setYear] = useState('2025');
  const [startDate, setStartDate] = useState('2025-06-08');
  const [endDate, setEndDate] = useState('2025-07-08');



  const handleReceivablesTabClick = (tab) => {
    setActiveReceivablesTab(tab);
  };

  const handleCreateClick = () => {
    navigate("/createinvoice");
  };

  // Invoices component
  const Invoices = () => (
    <div className="quotation-container p-3">
      <h5 className="mb-3 fw-bold">View Invoices Details</h5>

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
          <button className="btn btn-info text-white mt-4" onClick={handleCreateClick}>
            Create
          </button>
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
            <input type="text" className="form-control searchbarr" placeholder="Search" />
          </div>
        </div>

        <table className="table table-bordered table-hover text-center">
          <thead className="table-light">
            <tr>
              <th>CUSTOMER NAME</th>
              <th>NUMBER</th>
              <th>TOTAL AMOUNT</th>
              <th>PAYMENT</th>
              <th>CREATED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">No data available in table</td>
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
    </div>
  );

  // Receivables component with nested tabs
  // const Receivables = () => (
  //   <div className="quotation-container p-3">
  //     <div className="receivables-tabs mb-4">
  //       <div 
  //         className={`receivables-subtab ${activeReceivablesTab === 'ageing' ? 'active' : ''}`}
  //         onClick={() => handleReceivablesTabClick('ageing')}
  //       >
  //         Ageing
  //       </div>
  //       <div 
  //         className={`receivables-subtab ${activeReceivablesTab === 'overdue' ? 'active' : ''}`}
  //         onClick={() => handleReceivablesTabClick('overdue')}
  //       >
  //         OverdueReceivables
  //       </div>
  //       <div 
  //         className={`receivables-subtab ${activeReceivablesTab === 'partyWise' ? 'active' : ''}`}
  //         onClick={() => handleReceivablesTabClick('partyWise')}
  //       >
  //         PartyWiseReceivables
  //       </div>
  //       <div 
  //         className={`receivables-subtab ${activeReceivablesTab === 'upcoming' ? 'active' : ''}`}
  //         onClick={() => handleReceivablesTabClick('upcoming')}
  //       >
  //         UpcomingReveivables
  //       </div>
  //     </div>

  //     <div className="receivables-content">
  //       {activeReceivablesTab === 'ageing' && <Ageing />}
  //       {activeReceivablesTab === 'overdue' && <OverdueReceivables />}
  //       {activeReceivablesTab === 'partyWise' && <PartyWiseReceivables />}
  //       {activeReceivablesTab === 'upcoming' && <UpcomingReveivables />}
  //     </div>
  //   </div>
  // );

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
              <Link to="/invoices" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'invoices' ? 'active' : ''}`}>Invoices</Link>
              <Link to="/receipts" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'receipts' ? 'active' : ''}`}>Receipts</Link>
              <Link to="/quotations" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'quotations' ? 'active' : ''}`}>Quotations</Link>
              <Link to="/billOfSupply" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'billOfSupply' ? 'active' : ''}`}>BillOfSupply</Link>
              <Link to="/creditNote" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'creditNote' ? 'active' : ''}`}>CreditNote</Link>
              <Link to="/deliveryChallan" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'deliveryChallan' ? 'active' : ''}`}>DeliveryChallan</Link>
              <Link to="/receivables" style={{ textDecoration: 'none' }} className={`Sales-tab ${activeTab === 'receivables' ? 'active' : ''}`}>Receivables</Link>
            </div>



            {activeTab === 'invoices' && <Invoices />}
            {activeTab === 'receipts' && <Receipts />}
            {activeTab === 'quotations' && <Quotations />}
            {activeTab === 'billOfSupply' && <BillOfSupply />}
            {activeTab === 'creditNote' && <CreditNote />}
            {activeTab === 'deliveryChallan' && <DeliveryChallan />}
            {activeTab === 'receivables' && <Receivables />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSales;