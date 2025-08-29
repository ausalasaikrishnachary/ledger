// Pages/Purchase/PurchaseInvoicePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SalesLayout from '../Sales/LayOut/SalesLayout';

const PurchaseInvoicePage = () => {
  const navigate = useNavigate();

  const [month, setMonth] = useState('July');
  const [year, setYear] = useState('2025');
  const [startDate, setStartDate] = useState('2025-06-08');
  const [endDate, setEndDate] = useState('2025-07-08');
  const [searchTerm, setSearchTerm] = useState('');

  const headers = ['Supplier', 'PInvoice', 'Total Amount', 'Payment', 'Created'];

  const handleDownload = () => console.log("Download clicked");
  const handleDownloadRange = () => console.log("Download Range clicked");

  const handleCreate = () => {
    navigate("/createinvoice"); // Redirects to create invoice page
  };

  const data = []; // Replace with real data

  return (
    <SalesLayout
      title="View Purchase Invoice Details"
      month={month}
      setMonth={setMonth}
      year={year}
      setYear={setYear}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      onDownload={handleDownload}
      onDownloadRange={handleDownloadRange}
      onCreate={handleCreate}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      headers={headers}
    >
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.supplier}</td>
          <td>{item.invoiceNo}</td>
          <td>{item.totalAmount}</td>
          <td>{item.payment}</td>
          <td>{item.created}</td>
        </tr>
      ))}
    </SalesLayout>
  );
};

export default PurchaseInvoicePage;