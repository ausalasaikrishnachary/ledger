// Layout/SalesLayout.js
import React from 'react';
import './SalesLayout.css';

const SalesLayout = ({
  title,
  month,
  setMonth,
  year,
  setYear,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onDownload,
  onDownloadRange,
  onCreate,
  searchTerm,
  setSearchTerm,
  headers = [],
  children,
  entriesText = "No data available in table",
  subTabs = [],
  activeSubTab = '',
  onSubTabClick = () => {}
}) => {
  return (
    <div className="quotation-container p-3">
      <h5 className="mb-3 fw-bold">{title}</h5>

      {subTabs.length > 0 && (
        <div className="receivables-tabs mb-4">
          {subTabs.map((tab) => (
            <div
              key={tab.key}
              className={`receivables-subtab ${activeSubTab === tab.key ? 'active' : ''}`}
              onClick={() => onSubTabClick(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      )}

      <div className="row align-items-end g-3 mb-3">
        <div className="col-md-auto">
          <label className="form-label mb-1">Select Month and Year:</label>
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
          <button className="btn btn-success mt-4" onClick={onDownload}>
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
          <button className="btn btn-success mt-4" onClick={onDownloadRange}>
            <i className="bi bi-download me-1"></i> Download Range
          </button>
        </div>

        <div className="col-md-auto">
          <button className="btn btn-info text-white mt-4" onClick={onCreate}>Create</button>
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
            <input
              type="text"
              className="form-control searchbarr"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <table className="table table-bordered table-hover text-center">
          <thead className="table-light">
            <tr>
              {headers.map((header, idx) => <th key={idx}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {children && children.length > 0 ? children : (
              <tr>
                <td colSpan={headers.length}>{entriesText}</td>
              </tr>
            )}
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

export default SalesLayout;
