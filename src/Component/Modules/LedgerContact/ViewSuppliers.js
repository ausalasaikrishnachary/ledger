import React, { useState } from 'react';
import { FaCalendarAlt, FaTrash, FaEdit } from 'react-icons/fa';
import { Button, Table, Form } from 'react-bootstrap';
// import './ViewCustomers.css';
import DateRangeDropdown from './DateRangeDropdown';


const ViewSuppliers = () => {

  const customers = [
    {
      name: 'santosh',
      company: 'Wipro Limited',
      phone: '6360395837',
      email: 'sumukhurs7@gmail.com',
      pan: 'Update PAN',
      gstin: '33GSPTN1882G1Z3',
      createdBy: 'iiiQbets',
      createdDate: '2025-07-07'
    }
  ];

  return (
    <div className="view-customers-container">
      <h2 className="mb-3">View Suppliers</h2>

      <div className="d-flex align-items-center mb-3 view-customers-controls">
        <div className="me-3">
  <DateRangeDropdown onChange={(range) => console.log('Selected Range:', range)} />
</div>
        <Button variant="info" className="me-auto text-white">Download Report</Button>
        <Button variant="success">Add Supplier</Button>
      </div>

      <Table bordered striped responsive className="text-center view-customers-table">
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
    </div>
  );
};

export default ViewSuppliers;