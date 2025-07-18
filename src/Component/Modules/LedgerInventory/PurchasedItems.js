import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaEdit, FaTrash, FaPlusCircle,
  FaMinusCircle, FaEye, FaShoppingBag
} from 'react-icons/fa';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import './PurchasedItems.css';
import AddProductModal from './AddProductModal';
import AddServiceModal from './AddServiceModal';
import AddStockModal from './AddStockModal';
import DeductStockModal from './DeductStockModal';
import StockDetailsModal from './StockDetailsModal';
import { baseurl } from '../../BaseURL/BaseURL';

const PurchasedItems = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [dateRange, setDateRange] = useState('');
  const [search, setSearch] = useState('');
  const [showProductModal, setShowProductModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showStockModal, setShowStockModal] = useState(false);
  const [showDeductModal, setShowDeductModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [stock, setStock] = useState(10);
  const [stockData, setStockData] = useState({
    productName: "iPhone 16",
    openingStock: 10,
    stockIn: 5,
    stockOut: 0,
    availableStock: 15
  });

  const [items, setItems] = useState([]);

  // Fetch data from API
  useEffect(() => {
    axios.get(`${baseurl}/products`)
      .then(response => {
        const formatted = response.data.map(item => ({
          name: item.goods_name,
          price: item.price,
          description: item.description,
          gst: item.gst_rate,
          updatedBy: 'System',
          updatedOn: new Date(item.updated_at).toLocaleDateString(),
        }));
        setItems(formatted);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="dashboard-container">
        <Header user={user} toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="content-wrapper">
          <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
            <Sidebar user={user} collapsed={sidebarCollapsed} />
          </div>
          <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="container-fluid mt-3 purchased-items-wrapper">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex gap-2">
                  <div className="dropdown">
                    <button
                      className="btn btn-info dropdown-toggle d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-list me-2"></i> Purchased Items
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/purchased-items">Purchased Items</a></li>
                      <li><a className="dropdown-item" href="/sales-items">Sales Catalog</a></li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <button
                      className="btn btn-success dropdown-toggle d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-plus-circle me-2"></i> ADD
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" onClick={() => setShowProductModal(true)}>
                          Products
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={() => setShowServiceModal(true)}>
                          Services
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <AddProductModal show={showProductModal} onClose={() => setShowProductModal(false)} />
                <AddServiceModal show={showServiceModal} onClose={() => setShowServiceModal(false)} />

                <div className="d-flex gap-2">
                  <button className="btn btn-warning">Bulk Upload</button>
                  <button className="btn btn-info">Export</button>
                </div>
              </div>

      <AddProductModal 
      show={showProductModal}
      onClose={() => setShowProductModal(false)} 
      groupType="Purchaseditems"
      />

      <AddServiceModal show={showServiceModal} onClose={() => setShowServiceModal(false)} />

              <div className="d-flex gap-2">
                <button className="btn btn-warning">Bulk Upload</button>
                <button className="btn btn-info">Export</button>
              </div>
            </div>

            <div className="card p-3">
              <div className="d-flex align-items-center gap-2 mb-3">
                <input
                  type="text"
                  className="form-control datepicker"
                  placeholder="📅 Select Date Range"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                />
                <button className="btn btn-info">Download Report</button>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <div>
                  Show{' '}
                  <select className="form-select d-inline w-auto">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>{' '}
                  entries
              <div className="card p-3">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <input
                    type="text"
                    className="form-control datepicker"
                    placeholder="📅 Select Date Range"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                  />
                  <button className="btn btn-info">Download Report</button>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <div>
                    Show{' '}
                    <select className="form-select d-inline w-auto">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>{' '}
                    entries
                  </div>
                  <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search:"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered table-striped text-center">
                    <thead className="table-dark">
                      <tr>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>GST RATE</th>
                        <th>UPDATED BY</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItems.map((item, index) => (
                        <tr key={index} className="align-middle">
                          <td>
                            <FaShoppingBag className="me-2 text-info" />
                            <a href={`/product-details/${item.name}`} className="text-primary text-decoration-none">
                              {item.name}
                            </a>
                            <br />
                            <span className="text-muted">RS. {item.price}</span>
                          </td>
                          <td>{item.description}</td>
                          <td>GST Rate: {item.gst}%</td>
                          <td>
                            {item.updatedBy}
                            <br />
                            {item.updatedOn}
                          </td>
                          <td>
                            <FaEdit className="text-success me-2 action-icon" title="Edit" />
                            <FaTrash className="text-danger me-2 action-icon" title="Delete" />
                            <FaPlusCircle
                              className="text-warning me-2 action-icon"
                              title="Add"
                              onClick={() => setShowStockModal(true)}
                            />
                            <FaMinusCircle
                              className="text-danger me-2 action-icon"
                              title="Remove"
                              onClick={() => setShowDeductModal(true)}
                            />
                            <FaEye
                              className="text-primary action-icon"
                              title="View"
                              onClick={() => setShowViewModal(true)}
                            />
                          </td>
                        </tr>
                      ))}
                      {filteredItems.length === 0 && (
                        <tr>
                          <td colSpan="5">No items found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-between">
                  <div>Showing 1 to {filteredItems.length} of {filteredItems.length} entries</div>
                  <div>
                    <nav>
                      <ul className="pagination pagination-sm mb-0">
                        <li className="page-item disabled"><span className="page-link">Previous</span></li>
                        <li className="page-item active"><span className="page-link">1</span></li>
                        <li className="page-item disabled"><span className="page-link">Next</span></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="summary-box card mt-3 p-3">
                <p>Total Active Catalog: {items.length}</p>
                <p>Total Active Products: {items.length}</p>
                <p>Total Active Services: 0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddStockModal
        show={showStockModal}
        onClose={() => setShowStockModal(false)}
        currentStock={stock}
        onSave={({ quantity }) => setStock(prev => prev + quantity)}
      />

      <DeductStockModal
        show={showDeductModal}
        onClose={() => setShowDeductModal(false)}
        currentStock={stock}
        onSave={({ quantity }) => setStock(prev => prev - quantity)}
      />

      <StockDetailsModal
        show={showViewModal}
        onClose={() => setShowViewModal(false)}
        stockData={stockData}
      />
    </>
  );
};

export default PurchasedItems;
