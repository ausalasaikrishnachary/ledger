// import React, { useState } from 'react';
// import { FaCalendarAlt, FaTrash, FaEdit } from 'react-icons/fa';
// import { Button, Table, Form, Container } from 'react-bootstrap';
// // import './ViewCustomers.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../../Shared/Sidebar/Sidebar';
// import Header from '../../Shared/Header/Header';
// import DateRangeDropdown from './DateRangeDropdown';
// import { useNavigate } from 'react-router-dom';

// const ViewSuppliers = ({ user }) => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//     const navigate = useNavigate();
  
//     const handleAddCustomer = () => {
//       navigate('/add-supplier');
//     };

//   const customers = [
//     {
//       name: 'santosh',
//       company: 'Wipro Limited',
//       phone: '6360395837',
//       email: 'sumukhurs7@gmail.com',
//       pan: 'Update PAN',
//       gstin: '33GSPTN1882G1Z3',
//       createdBy: 'iiiQbets',
//       createdDate: '2025-07-07'
//     }
//   ];

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
//           <Container fluid className="p-3">
//       <h2 className="mb-3">View Suppliers</h2>

//       <div className="d-flex align-items-center mb-3 view-customers-controls">
//         <div className="me-3">
//   <DateRangeDropdown onChange={(range) => console.log('Selected Range:', range)} />
// </div>
//         <Button variant="info" className="me-auto text-white">Download Report</Button>
//         <Button variant="success"  onClick={handleAddCustomer} >Add Supplier</Button>
//       </div>

//       <Table bordered striped responsive className="text-center view-customers-table">
//         <thead className="table-dark">
//           <tr>
//             <th>NAME</th>
//             <th>CONTACT INFO</th>
//             <th>TAX INFORMATION</th>
//             <th>CREATED BY</th>
//             <th>ACTION</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer, index) => (
//             <tr key={index}>
//               <td>
//                 <a href="#" className="customer-link">{customer.name}</a>
//                 <div>{customer.company}</div>
//               </td>
//               <td>
//                 <div>{customer.phone}</div>
//                 <div>{customer.email}</div>
//               </td>
//               <td>
//                 <div>PAN: <a href="#" className="update-pan-link">{customer.pan}</a></div>
//                 <div>GSTIN: {customer.gstin}</div>
//               </td>
//               <td>
//                 <div>{customer.createdBy}</div>
//                 <div>{customer.createdDate}</div>
//               </td>
//               <td>
//                 <Button variant="link" className="p-1 text-primary">
//                   <FaEdit />
//                 </Button>
//                 <Button variant="link" className="p-1 text-danger">
//                   <FaTrash />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//         </Container>
//         </div>
//     </div>
//     </div>
//   );
// };

// export default ViewSuppliers;







import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import { FaEdit, FaTrash } from 'react-icons/fa';
import TableLayout from '../../Layout/TableLayout/TableLayout';
import axios from 'axios';

const ViewSuppliers = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSuppliers();
  }, []);

 const fetchSuppliers = async () => {
  try {
    const res = await axios.get("http://localhost:5000/accounts");

    const formatted = res.data
      .filter((supplier) => supplier.group === "supplier") // ✅ Only include suppliers
      .map((supplier) => ({
        name: (
          <>
            <a href="#" className="customer-link">{supplier.name}</a>
            <div>{supplier.business_name}</div>
          </>
        ),
        contact: (
          <>
            <div>{supplier.mobile_number}</div>
            <div>{supplier.email}</div>
          </>
        ),
        taxInfo: (
          <>
            <div>PAN: <a href="#" className="update-pan-link">Update PAN</a></div>
            <div>GSTIN: {supplier.gstin}</div>
          </>
        ),
        created: (
          <>
            <div>{supplier.created_by || 'Admin'}</div>
            <div>{supplier.created_at ? new Date(supplier.created_at).toISOString().split('T')[0] : 'N/A'}</div>
          </>
        )
      }));

    setSuppliers(formatted);
  } catch (err) {
    console.error("Error fetching suppliers:", err);
  }
};


  const handleAddSupplier = () => {
    navigate('/add-supplier');
  };

  const handleEditSupplier = (supplier) => {
    console.log('Editing supplier:', supplier);
  };

  const handleDeleteSupplier = (supplier) => {
    console.log('Deleting supplier:', supplier);
  };

  const handleDownloadReport = () => {
    console.log('Downloading report');
  };

  const handleDateRangeChange = (range) => {
    console.log('Selected Range:', range);
  };

  const columns = ['NAME', 'CONTACT INFO', 'TAX INFORMATION', 'CREATED BY', 'ACTION'];

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
          <TableLayout
            title="View Suppliers"
            addButtonText="Add Supplier"
            onAddClick={handleAddSupplier}
            columns={columns}
            data={suppliers}
            onEdit={handleEditSupplier}
            onDelete={handleDeleteSupplier}
            onDownload={handleDownloadReport}
            onDateRangeChange={handleDateRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewSuppliers;
