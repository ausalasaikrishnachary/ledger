import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUser, 
  FiDollarSign, 
  FiMessageSquare, 
  FiUsers, 
  FiFileText, 
  FiSettings, 
  FiMoreVertical,
  FiLogOut,
  FiArrowRight,
  FiMail,
  FiLock
} from 'react-icons/fi';
import { FaHandHoldingUsd, FaCommentDollar, FaFileAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ user, collapsed, activePage }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = React.useState(null);

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  // Determine active page based on current route
  const isActive = (path) => {
    return location.pathname === path || 
           location.pathname.startsWith(path) && path !== '/';
  };

  return (
    <nav className={`pcoded-navbar ${collapsed ? 'collapsed' : ''}`}>
 <div className="navbar-wrapper">
        <div className="navbar-content scroll-div">
          <ul className="nav pcoded-inner-navbar">
            <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
              <Link to="/" className="nav-link">
                <span className="pcoded-micon"><FiHome /></span>
                <span className="pcoded-mtext">Dashboard</span>
              </Link>
            </li>
            
            <li className={`nav-item ${isActive('/documents') ? 'active' : ''}`}>
              <Link to="/documents" className="nav-link">
                <span className="pcoded-micon"><FiFileText /></span>
                <span className="pcoded-mtext">Documents</span>
              </Link>
            </li>
            
            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'contacts' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={(e) => {
                e.preventDefault();
                toggleMenu('contacts');
              }}>
                <span className="pcoded-micon"><FiUser /></span>
                <span className="pcoded-mtext">Contacts</span>
              </a>
              <ul className="pcoded-submenu" style={{ display: activeMenu === 'contacts' ? 'block' : 'none' }}>
                <li className={isActive('/view-customers') ? 'active' : ''}>
                  <Link to="/view-customers">Customers</Link>
                </li>
                <li className={isActive('/view-suppliers') ? 'active' : ''}>
                  <Link to="/view-suppliers">Suppliers</Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'inventory' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={(e) => {
                e.preventDefault();
                toggleMenu('inventory');
              }}>
                <span className="pcoded-micon"><FaHandHoldingUsd /></span>
                <span className="pcoded-mtext">Inventory</span>
              </a>
              <ul className="pcoded-submenu" style={{ display: activeMenu === 'inventory' ? 'block' : 'none' }}>
                <li className={isActive('/manage-products') ? 'active' : ''}>
                  <Link to="/manage-products?type=Sales Catalog">Sales Catalog</Link>
                </li>
                <li className={isActive('/manage-products') ? 'active' : ''}>
                  <Link to="/manage-products?type=Purchased Items">Purchased Items</Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'sales' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={(e) => {
                e.preventDefault();
                toggleMenu('sales');
              }}>
                <span className="pcoded-micon"><FaHandHoldingUsd /></span>
                <span className="pcoded-mtext">Sales</span>
              </a>
              <ul className="pcoded-submenu" style={{ display: activeMenu === 'sales' ? 'block' : 'none' }}>
                <li className={isActive('/view-invoices') ? 'active' : ''}>
                  <Link to="/view-invoices">Invoices</Link>
                </li>
                <li className={isActive('/manage-receipt') ? 'active' : ''}>
                  <Link to="/manage-receipt">Receipts</Link>
                </li>
                <li className={isActive('/view-quotation') ? 'active' : ''}>
                  <Link to="/view-quotation">Quotation</Link>
                </li>
                <li className={isActive('/manage_receivables') ? 'active' : ''}>
                  <Link to="/manage_receivables">Receivables</Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'purchases' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={() => toggleMenu('purchases')}>
                <span className="pcoded-micon"><FaCommentDollar /></span>
                <span className="pcoded-mtext">Purchases</span>
              </a>
              <ul className="pcoded-submenu">
                <li><Link to="/view-purchase-invoices">Purchase Invoices</Link></li>
                <li><Link to="/manage-voucher">Expense Vouchers</Link></li>
                <li><Link to="/view-accounts-payables">Accounts Payables</Link></li>
              </ul>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'taxation' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={() => toggleMenu('taxation')}>
                <span className="pcoded-micon"><FaCommentDollar /></span>
                <span className="pcoded-mtext">Taxation</span>
              </a>
              <ul className="pcoded-submenu">
                <li><Link to="/gst-compliance">GST Compliance</Link></li>
                <li><Link to="/tds-compliance">TDS Compliance</Link></li>
                <li><Link to="/income-tax-compliance">Income Tax Compliance</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/manage-ledger" className="nav-link">
                <span className="pcoded-micon"><FiHome /></span>
                <span className="pcoded-mtext">Ledger</span>
              </Link>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'hr' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={() => toggleMenu('hr')}>
                <span className="pcoded-micon"><FiUsers /></span>
                <span className="pcoded-mtext">HR</span>
              </a>
              <ul className="pcoded-submenu">
                <li><Link to="/view_employees">Employee</Link></li>
                <li><Link to="/view_attendence">Attendance</Link></li>
                <li><Link to="/payroll">Payrolls</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/reports" className="nav-link">
                <span className="pcoded-micon"><FaFileAlt /></span>
                <span className="pcoded-mtext">Reports</span>
              </Link>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'settings' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={() => toggleMenu('settings')}>
                <span className="pcoded-micon"><FiUsers /></span>
                <span className="pcoded-mtext">Settings</span>
              </a>
              <ul className="pcoded-submenu">
                <li><Link to="/all_invoices">Change Template</Link></li>
                <li><Link to="/change-format">Change Format</Link></li>
                <li><Link to="/invoice-settings">Invoice Settings</Link></li>
                <li><Link to="/expense-settings">Expense Settings</Link></li>
                <li><Link to="/sector-settings">Sector Settings</Link></li>
                <li><Link to="/inventory-settings">Inventory Settings</Link></li>
                <li><Link to="/merge-products">Merge Products</Link></li>
                <li><Link to="/merge-buyers">Merge Buyers</Link></li>
                <li><Link to="/merge-sellers">Merge Sellers</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;