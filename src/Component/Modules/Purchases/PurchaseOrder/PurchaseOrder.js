import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const PurchaseOrder = () => {
  const navigate = useNavigate(); // ✅ Create navigate instance

  const [month, setMonth] = useState('July');
  const [year, setYear] = useState('2025');
  const [startDate, setStartDate] = useState('2025-06-08');
  const [endDate, setEndDate] = useState('2025-07-08');

  const handleCreate = () => {
    navigate("/createpurchaseorder"); // ✅ Redirect to create purchase order page
  };

  return (
    <div className="quotation-container p-3">
      <h5 className="mb-3 fw-bold">View Purchase Order Details</h5>

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
          <button className="btn btn-info text-white mt-4" onClick={handleCreate}>
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
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>

        <table className="table table-bordered table-hover text-center">
          <thead className="table-light">
            <tr>
              <th>Supplier Name</th>
              <th>Number</th>
              <th>Amount</th>
              <th>Created</th>
              <th>Action</th>
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
};

export default PurchaseOrder;
