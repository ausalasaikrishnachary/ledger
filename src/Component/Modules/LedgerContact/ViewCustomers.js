// import React, { useState } from 'react';
// import { FaCalendarAlt, FaTrash, FaEdit } from 'react-icons/fa';
// import { Button, Table, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../../Shared/Sidebar/Sidebar';
// import Header from '../../Shared/Header/Header';
// import './ViewCustomers.css';
// import DateRangeDropdown from './DateRangeDropdown';
// import { useNavigate } from 'react-router-dom';

// const ViewCustomers = ({ user }) => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const navigate = useNavigate();

//   const handleAddCustomer = () => {
//     navigate('/add-customer');
//   };

//   const customers = [
//     {
//       name: 'uma',
//       company: 'MORGAN STANLEY INDIA COMPANY PRIVATE LIMITED',
//       phone: '1122334455',
//       email: 'uma@gmail.com',
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
//             <h2 className="mb-3">View Customers</h2>

//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <div className="d-flex align-items-center">
//                 <div className="me-3">
//                   <DateRangeDropdown onChange={(range) => console.log('Selected Range:', range)} />
//                 </div>
//                 <Button variant="info" className="me-3 text-white">Download Report</Button>
//               </div>
//                <Button variant="success" onClick={handleAddCustomer}>
//       Add Customer
//     </Button>
//             </div>

//             <Table bordered striped responsive className="text-center">
//               <thead className="table-dark">
//                 <tr>
//                   <th>NAME</th>
//                   <th>CONTACT INFO</th>
//                   <th>TAX INFORMATION</th>
//                   <th>CREATED BY</th>
//                   <th>ACTION</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {customers.map((customer, index) => (
//                   <tr key={index}>
//                     <td>
//                       <a href="#" className="customer-link">{customer.name}</a>
//                       <div>{customer.company}</div>
//                     </td>
//                     <td>
//                       <div>{customer.phone}</div>
//                       <div>{customer.email}</div>
//                     </td>
//                     <td>
//                       <div>PAN: <a href="#" className="update-pan-link">{customer.pan}</a></div>
//                       <div>GSTIN: {customer.gstin}</div>
//                     </td>
//                     <td>
//                       <div>{customer.createdBy}</div>
//                       <div>{customer.createdDate}</div>
//                     </td>
//                     <td>
//                       <Button variant="link" className="p-1 text-primary">
//                         <FaEdit />
//                       </Button>
//                       <Button variant="link" className="p-1 text-danger">
//                         <FaTrash />
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Container>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewCustomers;







import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import './ViewCustomers.css';
import TableLayout from '../../Layout/TableLayout/TableLayout';
import axios from 'axios';


const ViewCustomers = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleAddCustomer = () => {
    navigate('/add-customer');
  };

  const handleEditCustomer = (customer) => {
    // Handle edit logic here
    console.log('Editing customer:', customer);
  };

  const handleDeleteCustomer = (customer) => {
    // Handle delete logic here
    console.log('Deleting customer:', customer);
  };

  const handleViewCustomer = (customer) => {
    // Handle view logic here
    console.log('Viewing customer:', customer);
  };

  const handleDownloadReport = () => {
    // Handle download logic here
    console.log('Downloading report');
  };

  const handleDateRangeChange = (range) => {
    // Handle date range change logic here
    console.log('Selected Range:', range);
  };

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
  try {
    const response = await axios.get("http://localhost:5001/accounts");

    const formattedCustomers = response.data
      .filter((cust) => cust.group === "customer") // ✅ Filter by group
      .map((cust) => ({
        name: (
          <>
            <a href="#" className="customer-link">{cust.name}</a>
            <div>{cust.business_name}</div>
          </>
        ),
        contact: (
          <>
            <div>{cust.mobile_number}</div>
            <div>{cust.email}</div>
          </>
        ),
        taxInfo: (
          <>
            <div>PAN: <a href="#" className="update-pan-link">Update PAN</a></div>
            <div>GSTIN: {cust.gstin}</div>
          </>
        ),
        created: (
          <>
            <div>{cust.created_by || 'Admin'}</div>
            <div>{cust.created_at ? new Date(cust.created_at).toISOString().split('T')[0] : 'N/A'}</div>
          </>
        )
      }));

    setCustomers(formattedCustomers);
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
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
            title="View Customers"
            addButtonText="Add Customer"
            onAddClick={handleAddCustomer}
            columns={columns}
            data={customers}
            onEdit={handleEditCustomer}
            onDelete={handleDeleteCustomer}
            onView={handleViewCustomer}
            onDownload={handleDownloadReport}
            onDateRangeChange={handleDateRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewCustomers;