import React from 'react';
import { Link } from 'react-router-dom';
import { FiMoreVertical, FiUser, FiMail, FiSettings, FiLogOut, FiArrowRight, FiMenu } from 'react-icons/fi';
// import Logo from '../Images/logo_IIQ.webp';

const Header = ({ user, toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <header className="navbar pcoded-header navbar-expand-lg navbar-light header-dark" style={{backgroundColor:'black'}}>
      <div className="m-header">
        <button className="mobile-menu" id="mobile-collapse" onClick={toggleSidebar}>
          <FiMenu />
        </button>
        {/* <Link to="/" className="b-brand">
          <img src={Logo} alt="" className="logo" width="87px" />
          <img src="assets/images/logo-icon.png" alt="" className="logo-thumb" />
        </Link> */}
        <button className="mob-toggler">
          <FiMoreVertical />
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li>
            <div className={`dropdown drp-user ${dropdownOpen ? 'show' : ''}`}>
              <button className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FiUser />
              </button>
              <div className={`dropdown-menu dropdown-menu-right profile-notification ${dropdownOpen ? 'show' : ''}`}>
                <div className="pro-head">
                  {user && (
                    <>
                      <img src={user.logoimage} className="img-radius" alt="User-Profile-Image" />
                      <span>{user.name}</span>
                    </>
                  )}
                </div>
                <ul className="pro-body">
                  <li><Link to="/profile" className="dropdown-item"><FiUser /> Profile</Link></li>
                  <li><Link to="/manage-business" className="dropdown-item"><FiSettings /> Settings</Link></li>
                  {user?.role === "superadmin" && (
                    <li><Link to="/dashboard" className="dropdown-item"><FiArrowRight /> Switch Branch</Link></li>
                  )}
                  <li><Link to="/logout" className="dropdown-item"><FiLogOut /> Log Out</Link></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;