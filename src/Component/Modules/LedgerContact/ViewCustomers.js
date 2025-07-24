import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import './ViewCustomers.css';
import TableLayout from '../../Layout/TableLayout/TableLayout';
import axios from 'axios';
import { baseurl } from '../../BaseURL/BaseURL';

const ViewCustomers = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${baseurl}/accounts`);
      const customers = response.data.filter((cust) => cust.group === "customer");
      setCustomers(customers);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (customer.business_name && customer.business_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (customer.mobile_number && customer.mobile_number.includes(searchTerm)) ||
    (customer.email && customer.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (customer.gstin && customer.gstin.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddCustomer = () => {
    navigate('/add-customer');
  };

  const handleEditCustomer = (customer) => {
     navigate(`/add-customer/${customer.id}`);
  };

  const handleDeleteCustomer = async (customer) => {
    try {
      await axios.delete(`${baseurl}/accounts/${customer.id}`);
      fetchCustomers(); // Refresh the list after deletion
      // Reset to first page if we're on a page that might now be empty
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  const handleViewCustomer = (customer) => {
    navigate('/customer-details', { state: { customer } });
  };

  const handleDownloadReport = () => {
    console.log('Downloading report');
  };

  const handleDateRangeChange = (range) => {
    console.log('Selected Range:', range);
  };

  const columns = ['NAME', 'CONTACT INFO', 'CITY', 'TAX INFORMATION', 'CREATED BY', 'ACTION'];

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
            data={currentItems}
            onEdit={handleEditCustomer}
            onDelete={handleDeleteCustomer}
            onView={handleViewCustomer}
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

export default ViewCustomers;