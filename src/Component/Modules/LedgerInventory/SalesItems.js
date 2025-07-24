import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlusCircle, FaMinusCircle, FaEye, FaShoppingBag } from 'react-icons/fa';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import './PurchasedItems.css';
import AddProductModal from './AddProductModal';
import AddServiceModal from './AddServiceModal';
import AddStockModal from './AddStockModal';
import DeductStockModal from './DeductStockModal';
import StockDetailsModal from './StockDetailsModal';
import { baseurl } from './../../BaseURL/BaseURL';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SalesItems = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [dateRange, setDateRange] = useState('');
  const [search, setSearch] = useState('');
  const [showProductModal, setShowProductModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showStockModal, setShowStockModal] = useState(false);
  const [showDeductModal, setShowDeductModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [stock, setStock] = useState(10);
  const [productToEdit, setProductToEdit] = useState(null);
  const [stockData, setStockData] = useState();
  const [items, setItems] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [currentStockData, setCurrentStockData] = useState({
    opening_stock: 0,
    stock_in: 0,
    stock_out: 0,
    balance_stock: 0
  });

  const handleAddStock = async ({ quantity, remark }) => {
    try {
      const response = await axios.post(`${baseurl}/stock/${selectedProductId}`, {
        stock_in: quantity,
        stock_out: 0,
        date: new Date().toISOString().split('T')[0],
        remark
      });

      fetchProducts();
      alert("Stock added successfully!");
    } catch (error) {
      console.error("Error adding stock:", error);
      alert("Failed to add stock");
    }
  };

  const handleDeductStock = async ({ quantity, remark }) => {
    try {
      const response = await axios.post(`${baseurl}/stock/${selectedProductId}`, {
        stock_in: 0,
        stock_out: quantity,
        date: new Date().toISOString().split('T')[0],
        remark
      });

      fetchProducts();
      alert("Stock deducted successfully!");
    } catch (error) {
      console.error("Error deducting stock:", error);
      alert("Failed to deduct stock");
    }
  };

  const handleEditClick = (product) => {
    setProductToEdit({
      id: product.id,
      goods_name: product.name,
      price: product.price,
      description: product.description,
      gst_rate: product.gst,
      opening_stock: product.opening_stock,
      category_id: product.category_id,
      company_id: product.company_id,
      inclusive_gst: product.inclusive_gst,
      non_taxable: product.non_taxable,
      net_price: product.net_price,
      hsn_code: product.hsn_code,
      unit: product.unit,
      cess_rate: product.cess_rate,
      cess_amount: product.cess_amount,
      sku: product.sku,
      opening_stock_date: product.opening_stock_date,
      min_stock_alert: product.min_stock_alert,
      max_stock_alert: product.max_stock_alert,
      can_be_sold: product.can_be_sold
    });
    setShowProductModal(true);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseurl}/products`);
      const formatted = response.data
        .filter(item => item.group_by === "Salescatalog")
        .map(item => ({
          id: item.id,
          name: item.goods_name,
          price: item.price,
          description: item.description,
          gst: item.gst_rate,
          updatedBy: 'System',
          updatedOn: new Date(item.updated_at).toLocaleDateString(),
          opening_stock: item.opening_stock || 0,
          stock_in: item.stock_in || 0,
          stock_out: item.stock_out || 0,
          balance_stock: item.balance_stock || 0,
          category_id: item.category_id,
          company_id: item.company_id,
          inclusive_gst: item.inclusive_gst,
          non_taxable: item.non_taxable,
          net_price: item.net_price,
          hsn_code: item.hsn_code,
          unit: item.unit,
          cess_rate: item.cess_rate,
          cess_amount: item.cess_amount,
          sku: item.sku,
          opening_stock_date: item.opening_stock_date,
          min_stock_alert: item.min_stock_alert,
          max_stock_alert: item.max_stock_alert,
          can_be_sold: item.can_be_sold
        }));
      setItems(formatted);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    console.log("id", productId);
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${baseurl}/products/${productId}`);
        alert("Product deleted successfully!");
        fetchProducts();
      } catch (error) {
        console.error("Full error details:", error);
        console.error("Response data:", error.response?.data);
        alert(`Failed to delete product: ${error.response?.data?.message || error.message}`);
      }
    }
  };

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
                    <button className="btn btn-info dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-list me-2"></i> Sales Catalogue
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/sales-items">Sales Catalogue</a></li>
                      <li><a className="dropdown-item" href="/purchased-items">Purchased Items</a></li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-plus-circle me-2"></i> ADD
                    </button>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item" onClick={() => setShowProductModal(true)}>Products</button></li>
                      <li><button className="dropdown-item" onClick={() => setShowServiceModal(true)}>Services</button></li>
                    </ul>
                  </div>
                </div>

                <AddProductModal
                  show={showProductModal} 
                  onClose={() => {
                    setShowProductModal(false);
                    setProductToEdit(null);
                  }}
                  groupType="Salescatalog"
                  productToEdit={productToEdit}
                />

                <AddServiceModal 
                  show={showServiceModal}
                  onClose={() => setShowServiceModal(false)}
                  groupType="Salescatalog"
                />
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
                        <th> PRODUCT NAME</th>
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
                            <Link to={`/product-details/${item.id}`} className="text-primary text-decoration-none">
                              {item.name}
                            </Link>
                            <br />
                            <span className="text-muted">RS. {item.price}</span>
                          </td>
                          <td>{item.description}</td>
                          <td>GST Rate: {item.gst}</td>
                          <td>
                            {item.updatedBy}
                            <br />
                            {item.updatedOn}
                          </td>
                          <td>
                            <FaEdit 
                              className="text-success me-2 action-icon" 
                              title="Edit" 
                              onClick={() => handleEditClick(item)}
                            />
                            <FaTrash 
                              className="text-danger me-2 action-icon" 
                              title="Delete" 
                              onClick={() => handleDeleteProduct(item.id)}
                            />
                            <FaPlusCircle
                              className="text-warning me-2 action-icon"
                              title="Add"
                              onClick={() => {
                                setSelectedProductId(item.id);
                                setCurrentStockData({
                                  opening_stock: item.opening_stock,
                                  stock_in: item.stock_in,
                                  stock_out: item.stock_out,
                                  balance_stock: item.balance_stock
                                });
                                setShowStockModal(true);
                              }}
                            />
                            <FaMinusCircle
                              className="text-danger me-2 action-icon"
                              title="Remove"
                              onClick={() => {
                                setSelectedProductId(item.id);
                                setCurrentStockData({
                                  opening_stock: item.opening_stock,
                                  stock_in: item.stock_in,
                                  stock_out: item.stock_out,
                                  balance_stock: item.balance_stock
                                });
                                setShowDeductModal(true);
                              }}
                            />
                            <FaEye
                              className="text-primary action-icon"
                              title="View"
                              onClick={() => {
                                setStockData({
                                  ...item,
                                  opening_stock: item.opening_stock || 0,
                                  stock_in: item.stock_in || 0,
                                  stock_out: item.stock_out || 0,
                                  balance_stock: item.balance_stock || 0
                                });
                                setShowViewModal(true);
                              }}
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
                <p>Total Active Catalogue: {items.length}</p>
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
        currentStock={currentStockData.balance_stock}
        onSave={handleAddStock}
      />

      <DeductStockModal
        show={showDeductModal}
        onClose={() => setShowDeductModal(false)}
        currentStock={currentStockData.balance_stock}
        onSave={handleDeductStock}
      />

      <StockDetailsModal
        show={showViewModal}
        onClose={() => setShowViewModal(false)}
        stockData={stockData}
        context="sales"
      />
    </>
  );
};

export default SalesItems;