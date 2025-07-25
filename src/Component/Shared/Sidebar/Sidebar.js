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

  // Set initial active menu based on current path
  React.useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/view-customers') || path.startsWith('/view-suppliers')) {
      setActiveMenu('contacts');
    } else if (path.startsWith('/manage-products')) {
      setActiveMenu('inventory');
    } else if (path.startsWith('/invoices') || 
               path.startsWith('/receipts') || 
               path.startsWith('/quotations') || 
                 path.startsWith('/billOfSupply') || 
               path.startsWith('/creditNote') || 
                 path.startsWith('/deliveryChallan') || 
               path.startsWith('/manage_receivables')) {
      setActiveMenu('sales');
    } else if (path.startsWith('/purchaseInvoice') || 
               path.startsWith('/manage-voucher') || 
               path.startsWith('/view-accounts-payables')) {
      setActiveMenu('purchases');
    } else if (path.startsWith('/gst-compliance') || 
               path.startsWith('/tds-compliance') || 
               path.startsWith('/income-tax-compliance')) {
      setActiveMenu('taxation');
    } else if (path.startsWith('/view_employees') || 
               path.startsWith('/view_attendence') || 
               path.startsWith('/payroll')) {
      setActiveMenu('hr');
    } else if (path.startsWith('/all_invoices') || 
               path.startsWith('/change-format') || 
               path.startsWith('/invoice-settings') || 
               path.startsWith('/expense-settings') || 
               path.startsWith('/sector-settings') || 
               path.startsWith('/inventory-settings') || 
               path.startsWith('/merge-products') || 
               path.startsWith('/merge-buyers') || 
               path.startsWith('/merge-sellers')) {
      setActiveMenu('settings');
    }
  }, [location.pathname]);

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
           (path !== '/' && location.pathname.startsWith(path));
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
                <li className={isActive('/sales-items') ? 'active' : ''}>
                  {/* <Link to="/manage-products?type=Sales Catalog">Sales Catalog</Link> */}
                   <Link to="/sales-items">Sales catalogue</Link>
                </li>
                <li className={isActive('/purchased-items') ? 'active' : ''}>
                  {/* <Link to="/manage-products?type=Purchased Items">Purchased Items</Link> */}
                   <Link to="/purchased-items">Purchased Items</Link>
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
                <li className={isActive('/invoices') ? 'active' : ''}>
                  <Link to="/invoices">Invoices</Link>
                </li>
                <li className={isActive('/receipts') ? 'active' : ''}>
                  <Link to="/receipts">Receipts</Link>
                </li>
                <li className={isActive('/quotations') ? 'active' : ''}>
                  <Link to="/quotations">Quotations</Link>
                </li>
                <li className={isActive('/billOfSupply') ? 'active' : ''}>
                  <Link to="/billOfSupply">Bill Of Supply</Link>
                </li>
                 <li className={isActive('/creditNote') ? 'active' : ''}>
                  <Link to="/creditNote">Credit Note</Link>
                </li> 
                <li className={isActive('/deliveryChallan') ? 'active' : ''}>
                  <Link to="/deliveryChallan">Delivery Challan</Link>
                </li>
                <li className={isActive('/receivables') ? 'active' : ''}>
                  <Link to="/receivables">Receivables</Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'purchases' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={(e) => {
                e.preventDefault();
                toggleMenu('purchases');
              }}>
                <span className="pcoded-micon"><FaCommentDollar /></span>
                <span className="pcoded-mtext">Purchases</span>
              </a>
              <ul className="pcoded-submenu" style={{ display: activeMenu === 'purchases' ? 'block' : 'none' }}>
                <li className={isActive('/purchaseInvoice') ? 'active' : ''}>
                  <Link to="/purchaseInvoice">Purchase Invoices</Link>
                </li>
                <li className={isActive('/manage-voucher') ? 'active' : ''}>
                  <Link to="/manage-voucher">Expense Vouchers</Link>
                </li>
                <li className={isActive('/view-accounts-payables') ? 'active' : ''}>
                  <Link to="/view-accounts-payables">Accounts Payables</Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'taxation' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={(e) => {
                e.preventDefault();
                toggleMenu('taxation');
              }}>
                <span className="pcoded-micon"><FaCommentDollar /></span>
                <span className="pcoded-mtext">Taxation</span>
              </a>
              <ul className="pcoded-submenu" style={{ display: activeMenu === 'taxation' ? 'block' : 'none' }}>
                <li className={isActive('/gst-compliance') ? 'active' : ''}>
                  <Link to="/gst-compliance">GST Compliance</Link>
                </li>
                <li className={isActive('/tds-compliance') ? 'active' : ''}>
                  <Link to="/tds-compliance">TDS Compliance</Link>
                </li>
                <li className={isActive('/income-tax-compliance') ? 'active' : ''}>
                  <Link to="/income-tax-compliance">Income Tax Compliance</Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item ${isActive('/manage-ledger') ? 'active' : ''}`}>
              <Link to="/manage-ledger" className="nav-link">
                <span className="pcoded-micon"><FiHome /></span>
                <span className="pcoded-mtext">Ledger</span>
              </Link>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'hr' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={(e) => {
                e.preventDefault();
                toggleMenu('hr');
              }}>
                <span className="pcoded-micon"><FiUsers /></span>
                <span className="pcoded-mtext">HR</span>
              </a>
              <ul className="pcoded-submenu" style={{ display: activeMenu === 'hr' ? 'block' : 'none' }}>
                <li className={isActive('/view_employees') ? 'active' : ''}>
                  <Link to="/view_employees">Employee</Link>
                </li>
                <li className={isActive('/view_attendence') ? 'active' : ''}>
                  <Link to="/view_attendence">Attendance</Link>
                </li>
                <li className={isActive('/payroll') ? 'active' : ''}>
                  <Link to="/payroll">Payrolls</Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item ${isActive('/reports') ? 'active' : ''}`}>
              <Link to="/reports" className="nav-link">
                <span className="pcoded-micon"><FaFileAlt /></span>
                <span className="pcoded-mtext">Reports</span>
              </Link>
            </li>

            <li className={`nav-item pcoded-hasmenu ${activeMenu === 'settings' ? 'pcoded-trigger' : ''}`}>
              <a href="#!" className="nav-link" onClick={(e) => {
                e.preventDefault();
                toggleMenu('settings');
              }}>
                <span className="pcoded-micon"><FiUsers /></span>
                <span className="pcoded-mtext">Settings</span>
              </a>
              <ul className="pcoded-submenu" style={{ display: activeMenu === 'settings' ? 'block' : 'none' }}>
                <li className={isActive('/all_invoices') ? 'active' : ''}>
                  <Link to="/all_invoices">Change Template</Link>
                </li>
                <li className={isActive('/change-format') ? 'active' : ''}>
                  <Link to="/change-format">Change Format</Link>
                </li>
                <li className={isActive('/invoice-settings') ? 'active' : ''}>
                  <Link to="/invoice-settings">Invoice Settings</Link>
                </li>
                <li className={isActive('/expense-settings') ? 'active' : ''}>
                  <Link to="/expense-settings">Expense Settings</Link>
                </li>
                <li className={isActive('/sector-settings') ? 'active' : ''}>
                  <Link to="/sector-settings">Sector Settings</Link>
                </li>
                <li className={isActive('/inventory-settings') ? 'active' : ''}>
                  <Link to="/inventory-settings">Inventory Settings</Link>
                </li>
                <li className={isActive('/merge-products') ? 'active' : ''}>
                  <Link to="/merge-products">Merge Products</Link>
                </li>
                <li className={isActive('/merge-buyers') ? 'active' : ''}>
                  <Link to="/merge-buyers">Merge Buyers</Link>
                </li>
                <li className={isActive('/merge-sellers') ? 'active' : ''}>
                  <Link to="/merge-sellers">Merge Sellers</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;