import React, { useState } from 'react';
import { FaCalendarAlt, FaTrash, FaEdit } from 'react-icons/fa';
import { Button, Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import './ViewCustomers.css';
import DateRangeDropdown from './DateRangeDropdown';

const ViewCustomers = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const customers = [
    {
      name: 'uma',
      company: 'MORGAN STANLEY INDIA COMPANY PRIVATE LIMITED',
      phone: '1122334455',
      email: 'uma@gmail.com',
      pan: 'Update PAN',
      gstin: '33GSPTN1882G1Z3',
      createdBy: 'iiiQbets',
      createdDate: '2025-07-07'
    }
  ];

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
          <Container fluid className="p-3">
            <h2 className="mb-3">View Customers</h2>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <DateRangeDropdown onChange={(range) => console.log('Selected Range:', range)} />
                </div>
                <Button variant="info" className="me-3 text-white">Download Report</Button>
              </div>
              <Button variant="success">Add Customer</Button>
            </div>

            <Table bordered striped responsive className="text-center">
              <thead className="table-dark">
                <tr>
                  <th>NAME</th>
                  <th>CONTACT INFO</th>
                  <th>TAX INFORMATION</th>
                  <th>CREATED BY</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td>
                      <a href="#" className="customer-link">{customer.name}</a>
                      <div>{customer.company}</div>
                    </td>
                    <td>
                      <div>{customer.phone}</div>
                      <div>{customer.email}</div>
                    </td>
                    <td>
                      <div>PAN: <a href="#" className="update-pan-link">{customer.pan}</a></div>
                      <div>GSTIN: {customer.gstin}</div>
                    </td>
                    <td>
                      <div>{customer.createdBy}</div>
                      <div>{customer.createdDate}</div>
                    </td>
                    <td>
                      <Button variant="link" className="p-1 text-primary">
                        <FaEdit />
                      </Button>
                      <Button variant="link" className="p-1 text-danger">
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomers;