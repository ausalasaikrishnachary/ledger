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
  const [itemsPerPage] = useState(5); // You can adjust this number
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

  const columns = ['NAME', 'CONTACT INFO','CITY', 'TAX INFORMATION', 'CREATED BY', 'ACTION'];

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