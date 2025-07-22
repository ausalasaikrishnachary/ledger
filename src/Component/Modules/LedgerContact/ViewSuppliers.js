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







// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../../Shared/Sidebar/Sidebar';
// import Header from '../../Shared/Header/Header';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import TableLayout from '../../Layout/TableLayout/TableLayout';
// import axios from 'axios';

// const ViewSuppliers = ({ user }) => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [suppliers, setSuppliers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchSuppliers();
//   }, []);

// //  const fetchSuppliers = async () => {
// //   try {
// //     const res = await axios.get("http://localhost:5000/accounts");

// //     const formatted = res.data
// //       .filter((supplier) => supplier.group === "supplier") // ✅ Only include suppliers
// //       .map((supplier) => ({
// //         name: (
// //           <>
// //             <a href="#" className="customer-link">{supplier.name}</a>
// //             <div>{supplier.business_name}</div>
// //           </>
// //         ),
// //         contact: (
// //           <>
// //             <div>{supplier.mobile_number}</div>
// //             <div>{supplier.email}</div>
// //           </>
// //         ),
// //         taxInfo: (
// //           <>
// //             <div>PAN: <a href="#" className="update-pan-link">Update PAN</a></div>
// //             <div>GSTIN: {supplier.gstin}</div>
// //           </>
// //         ),
// //         created: (
// //           <>
// //             <div>{supplier.created_by || 'Admin'}</div>
// //             <div>{supplier.created_at ? new Date(supplier.created_at).toISOString().split('T')[0] : 'N/A'}</div>
// //           </>
// //         )
// //       }));

// //     setSuppliers(formatted);
// //   } catch (err) {
// //     console.error("Error fetching suppliers:", err);
// //   }
// // };

// const fetchSuppliers = async () => {
//   try {
//     const res = await axios.get("http://localhost:5000/accounts");

//     const filteredSuppliers = res.data.filter(
//       (supplier) => supplier.group === "supplier"
//     );

//     setSuppliers(filteredSuppliers); // ✅ raw supplier objects
//   } catch (err) {
//     console.error("Error fetching suppliers:", err);
//   }
// };

//   const handleAddSupplier = () => {
//     navigate('/add-supplier');
//   };

//   const handleEditSupplier = (supplier) => {
//     console.log('Editing supplier:', supplier);
//   };

//   const handleDeleteSupplier = (supplier) => {
//     console.log('Deleting supplier:', supplier);
//   };

//   const handleDownloadReport = () => {
//     console.log('Downloading report');
//   };

//   const handleDateRangeChange = (range) => {
//     console.log('Selected Range:', range);
//   };
//   const handleViewSupplier = (supplier) => {
//   navigate('/supplier-details', { state: { supplier } });
// };


//   const columns = ['NAME', 'CONTACT INFO', 'TAX INFORMATION', 'CREATED BY', 'ACTION'];

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
//           <TableLayout
//             title="View Suppliers"
//             addButtonText="Add Supplier"
//             onAddClick={handleAddSupplier}
//             columns={columns}
//             data={suppliers}
//             onEdit={handleEditSupplier}
//               onView={handleViewSupplier}
//             onDelete={handleDeleteSupplier}
//             onDownload={handleDownloadReport}
//             onDateRangeChange={handleDateRangeChange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewSuppliers;









// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../../Shared/Sidebar/Sidebar';
// import Header from '../../Shared/Header/Header';
// import TableLayout from '../../Layout/TableLayout/TableLayout';
// import axios from 'axios';

// const ViewSuppliers = ({ user }) => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [suppliers, setSuppliers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchSuppliers();
//   }, []);

//   const fetchSuppliers = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/accounts");
//       const filteredSuppliers = res.data.filter(
//         (supplier) => supplier.group === "supplier"
//       );
//       setSuppliers(filteredSuppliers);
//     } catch (err) {
//       console.error("Error fetching suppliers:", err);
//     }
//   };

//   const handleAddSupplier = () => {
//     navigate('/add-supplier');
//   };

//   const handleEditSupplier = (supplier) => {
//     console.log('Editing supplier:', supplier);
//   };

//   const handleDeleteSupplier = async (supplier) => {
//     try {
//       await axios.delete(`http://localhost:5000/accounts/${supplier.id}`);
//       fetchSuppliers(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error deleting supplier:', error);
//     }
//   };

//   const handleViewSupplier = (supplier) => {
//     navigate('/supplier-details', { state: { supplier } });
//   };

//   const handleDownloadReport = () => {
//     console.log('Downloading report');
//   };

//   const handleDateRangeChange = (range) => {
//     console.log('Selected Range:', range);
//   };

//   const filteredSuppliers = suppliers.filter(supplier => 
//     supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (supplier.business_name && supplier.business_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (supplier.mobile_number && supplier.mobile_number.includes(searchTerm)) ||
//     (supplier.email && supplier.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (supplier.gstin && supplier.gstin.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const columns = ['NAME', 'CONTACT INFO', 'TAX INFORMATION', 'CREATED BY', 'ACTION'];

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
//           <TableLayout
//             title="View Suppliers"
//             addButtonText="Add Supplier"
//             onAddClick={handleAddSupplier}
//             columns={columns}
//             data={filteredSuppliers}
//             onEdit={handleEditSupplier}
//             onView={handleViewSupplier}
//             onDelete={handleDeleteSupplier}
//             onDownload={handleDownloadReport}
//             onDateRangeChange={handleDateRangeChange}
//             searchTerm={searchTerm}
//             onSearchChange={setSearchTerm}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewSuppliers;





import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import TableLayout from '../../Layout/TableLayout/TableLayout';
import axios from 'axios';
import { baseurl } from '../../BaseURL/BaseURL';

const ViewSuppliers = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1); // You can adjust this number
  const navigate = useNavigate();

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const res = await axios.get(`${baseurl}/accounts`);
      const filteredSuppliers = res.data.filter(
        (supplier) => supplier.group === "supplier"
      );
      setSuppliers(filteredSuppliers);
    } catch (err) {
      console.error("Error fetching suppliers:", err);
    }
  };

  // Get current suppliers based on pagination
  const filteredSuppliers = suppliers.filter(supplier => 
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (supplier.business_name && supplier.business_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (supplier.mobile_number && supplier.mobile_number.includes(searchTerm)) ||
    (supplier.email && supplier.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (supplier.gstin && supplier.gstin.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSuppliers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSuppliers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddSupplier = () => {
    navigate('/add-supplier');
  };

  const handleEditSupplier = (supplier) => {
     navigate(`/add-supplier/${supplier.id}`);
  };

  const handleDeleteSupplier = async (supplier) => {
    try {
      await axios.delete(`${baseurl}/accounts/${supplier.id}`);
      fetchSuppliers(); // Refresh the list after deletion
      // Reset to first page if we're on a page that might now be empty
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error('Error deleting supplier:', error);
    }
  };

  const handleViewSupplier = (supplier) => {
    navigate('/supplier-details', { state: { supplier } });
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
            data={currentItems}
            onEdit={handleEditSupplier}
            onView={handleViewSupplier}
            onDelete={handleDeleteSupplier}
            onDownload={handleDownloadReport}
            onDateRangeChange={handleDateRangeChange}
            searchTerm={searchTerm}
            onSearchChange={(term) => {
              setSearchTerm(term);
              setCurrentPage(1); // Reset to first page when searching
            }}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewSuppliers;