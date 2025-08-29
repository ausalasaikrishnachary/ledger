
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../../../Shared/Sidebar/Sidebar';
// import Header from '../../../Shared/Header/Header';
// import DebitNote from '../DebitNote/DebitNote';
// import PurchaseOrder from '../PurchaseOrder/PurchaseOrder';
// import Voucher from '../Voucher/Voucher';

// // Receivables sub-tabs
// import PuchaseAgeing from '../Payables/Ageing';
// import OverduePayables from '../Payables/OverduePayables';
// import PartyWisePayables from '../Payables/PartyWisePayables';
// import UpcomingPayables from '../Payables/UpcomingPayables';
// import '../../Sales/Sales.css';

// const AddPurchaseForm = ({ user }) => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [activeTab, setActiveTab] = useState('invoices');
//   const [activeReceivablesTab, setActiveReceivablesTab] = useState('outstanding');
  
//   // Invoices state
//   const [month, setMonth] = useState('July');
//   const [year, setYear] = useState('2025');
//   const [startDate, setStartDate] = useState('2025-06-08');
//   const [endDate, setEndDate] = useState('2025-07-08');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleReceivablesTabClick = (tab) => {
//     setActiveReceivablesTab(tab);
//   };

//   // Invoices component
//   const PurchaseInvoice = () => (
//     <div className="quotation-container p-3">
//       <h5 className="mb-3 fw-bold">View Purchase Invoice Details
// </h5>

//       <div className="row align-items-end g-3 mb-3">
//         <div className="col-md-auto">
//           <label className="form-label mb-1">Select Month and Year Data:</label>
//           <div className="d-flex">
//             <select className="form-select me-2" value={month} onChange={(e) => setMonth(e.target.value)}>
//               <option>July</option>
//               <option>June</option>
//               <option>May</option>
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
//               <th>
// Supplier</th>
//               <th>PInvoice</th>
//               <th>Total Amount</th>
//               <th>Payment</th>
//               <th>Created</th>
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

//   // Receivables component with nested tabs
//   const Payables = () => (
//     <div className="quotation-container p-3">
//       <div className="receivables-tabs mb-4">
//           <div 
//           className={`receivables-subtab ${activeReceivablesTab === 'partyWisePayables' ? 'active' : ''}`}
//           onClick={() => handleReceivablesTabClick('partyWisePayables')}
//         >
//           Party-Wise Payables
//         </div>
//         <div 
//           className={`receivables-subtab ${activeReceivablesTab === 'puchaseAgeing' ? 'active' : ''}`}
//           onClick={() => handleReceivablesTabClick('puchaseAgeing')}
//         >
//           Ageing
//         </div>
//         <div 
//           className={`receivables-subtab ${activeReceivablesTab === 'overduePayables' ? 'active' : ''}`}
//           onClick={() => handleReceivablesTabClick('overduePayables')}
//         >
//           Over-due Payables
//         </div>
      
//         <div 
//           className={`receivables-subtab ${activeReceivablesTab === 'upcomingPayables' ? 'active' : ''}`}
//           onClick={() => handleReceivablesTabClick('upcomingPayables')}
//         >
//           Upcoming Payables
//         </div>
//       </div>

//       <div className="receivables-content">
//         {activeReceivablesTab === 'puchaseAgeing' && <PuchaseAgeing />}
//         {activeReceivablesTab === 'overduePayables' && <OverduePayables />}
//         {activeReceivablesTab === 'partyWisePayables' && <PartyWisePayables />}
//         {activeReceivablesTab === 'upcomingPayables' && <UpcomingPayables />}
//       </div>
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       <Header 
//         user={user} 
//         toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
//       />
//       <div className="content-wrapper">
//         <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
//           <Sidebar 
//             user={user} 
//             collapsed={sidebarCollapsed} 
//           />
//         </div>
//         <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
//           <div className="container Sales-form-container">
//             <div className="Sales-form-tabs">
              
//               <div 
//                 className={`Sales-tab ${activeTab === 'purchaseInvoice' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('purchaseInvoice')}
//               >
//                 Purchase Invoice
//               </div>
//               <div 
//                 className={`Sales-tab ${activeTab === 'purchaseOrder' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('purchaseOrder')}
//               >
//                 Purchase Order
//               </div>
//               <div 
//                 className={`Sales-tab ${activeTab === 'voucher' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('voucher')}
//               >
//                 Voucher
//               </div>
//               <div 
//                 className={`Sales-tab ${activeTab === 'debitNote' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('debitNote')}
//               >
//                 Debit Note
//               </div>
//               <div 
//                 className={`Sales-tab ${activeTab === 'payables' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('payables')}
//               >
//                 Payables
//               </div>
//             </div>
            
//             {activeTab === 'purchaseInvoice' && <PurchaseInvoice />}
//             {activeTab === 'purchaseOrder' && <PurchaseOrder />}
//             {activeTab === 'voucher' && <Voucher />}
//             {activeTab === 'debitNote' && <DebitNote />}
//             {activeTab === 'payables' && <Payables />}
       
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddPurchaseForm;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import Header from '../../../Shared/Header/Header';
import DebitNote from '../DebitNote/DebitNote';
import PurchaseOrder from '../PurchaseOrder/PurchaseOrder';
import Voucher from '../Voucher/Voucher';
import PayablesPage from '../../Purchases/Payables/Payable';
import PurchaseInvoicePage from '../../Purchases/PurchaseInvoicePage';
import '../../Sales/Sales.css';

const AddPurchaseForm = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('purchaseInvoice');

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="dashboard-container">
      <Header user={user} toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="content-wrapper">
        <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
          <Sidebar user={user} collapsed={sidebarCollapsed} />
        </div>
        <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="container Sales-form-container">
            <div className="Sales-form-tabs">
              <div className={`Sales-tab ${activeTab === 'purchaseInvoice' ? 'active' : ''}`} onClick={() => handleTabClick('purchaseInvoice')}>Purchase Invoice</div>
              <div className={`Sales-tab ${activeTab === 'purchaseOrder' ? 'active' : ''}`} onClick={() => handleTabClick('purchaseOrder')}>Purchase Order</div>
              <div className={`Sales-tab ${activeTab === 'voucher' ? 'active' : ''}`} onClick={() => handleTabClick('voucher')}>Voucher</div>
              <div className={`Sales-tab ${activeTab === 'debitNote' ? 'active' : ''}`} onClick={() => handleTabClick('debitNote')}>Debit Note</div>
              <div className={`Sales-tab ${activeTab === 'payables' ? 'active' : ''}`} onClick={() => handleTabClick('payables')}>Payables</div>
            </div>

            {activeTab === 'purchaseInvoice' && <PurchaseInvoicePage />}
            {activeTab === 'purchaseOrder' && <PurchaseOrder />}
            {activeTab === 'voucher' && <Voucher />}
            {activeTab === 'debitNote' && <DebitNote />}
            {activeTab === 'payables' && <PayablesPage />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPurchaseForm;



