import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
// import './AddSupplierForm.css';

const AddSupplierForm = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [activeTab, setActiveTab] = useState('information');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
          <div className="container customer-form-container">
            <h1 className="customer-form-title">Add Supplier</h1>
            
            <div className="customer-form-tabs">
              <div 
                className={`customer-tab ${activeTab === 'information' ? 'active' : ''}`}
                onClick={() => handleTabClick('information')}
              >
                Information
              </div>
              <div 
                className={`customer-tab ${activeTab === 'banking' ? 'active' : ''}`}
                onClick={() => handleTabClick('banking')}
              >
                Banking & Taxes
              </div>
              <div 
                className={`customer-tab ${activeTab === 'shipping' ? 'active' : ''}`}
                onClick={() => handleTabClick('shipping')}
              >
                Shipping Address
              </div>
              <div 
                className={`customer-tab ${activeTab === 'billing' ? 'active' : ''}`}
                onClick={() => handleTabClick('billing')}
              >
                Billing Address
              </div>
            </div>

            {/* Information Section */}
            <div className={`card customer-form-card ${activeTab === 'information' ? 'active-section' : ''}`}>
              <div className="customer-form-section">
                <h2 className="customer-section-title">Information</h2>
                <div className="row">
                  {/* Left Column */}
                  <div className="col-md-6">
                    {/* Title and Name in same row */}
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="customer-form-label">Title</label>
                          <select className="form-select customer-form-input">
                            <option value="">Select</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Dr.">Dr.</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="mb-3">
                          <label className="customer-form-label">Name*</label>
                          <input type="text" className="form-control customer-form-input" required />
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Mobile Number*</label>
                      <input type="tel" className="form-control customer-form-input" required />
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Supplier GSTIN</label>
                      <input type="text" className="form-control customer-form-input" />
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Business Name</label>
                      <input type="text" className="form-control customer-form-input" />
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Display Name*</label>
                      <input type="text" className="form-control customer-form-input" required />
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Fax</label>
                      <input type="text" className="form-control customer-form-input" />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">Entity Type</label>
                      <select className="form-select customer-form-input">
                        <option value="">Select an Entity Type</option>
                        <option value="Individual">Individual</option>
                        <option value="Company">Company</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Email*</label>
                      <input type="email" className="form-control customer-form-input" required />
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Supplier GST Registered Name</label>
                      <input type="text" className="form-control customer-form-input" />
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Additional Business Name</label>
                      <input type="text" className="form-control customer-form-input" />
                    </div>

                    <div className="mb-3">
                      <label className="customer-form-label">Phone Number</label>
                      <input type="tel" className="form-control customer-form-input" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="customer-form-submit">
                <button 
                  type="button" 
                  className="btn btn-primary customer-submit-btn"
                  onClick={() => handleTabClick('banking')}
                >
                  Next: Banking & Taxes
                </button>
              </div>
            </div>

            {/* Banking & Taxes Section */}
            <div className={`card customer-form-card ${activeTab === 'banking' ? 'active-section' : ''}`}>
              <div className="customer-form-section">
                <h2 className="customer-section-title">Banking & Taxes</h2>
                
                {/* Account Information Section */}
                <div className="mb-4">
                  <h3 className="customer-subsection-title">Account Information</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Account Number</label>
                        <input type="text" className="form-control customer-form-input" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Account Name</label>
                        <input type="text" className="form-control customer-form-input" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Bank Name</label>
                        <select className="form-select customer-form-input">
                          <option>Select Bank Name</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">IFSC Code</label>
                        <input type="text" className="form-control customer-form-input" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Account Type</label>
                        <select className="form-select customer-form-input">
                          <option>Savings Account</option>
                          <option>Current Account</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Branch Name</label>
                        <input type="text" className="form-control customer-form-input" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tax Information Section */}
                <div className="mb-4">
                  <h3 className="customer-subsection-title">Tax Information</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">PAN</label>
                        <input type="text" className="form-control customer-form-input" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">TAN</label>
                        <input type="text" className="form-control customer-form-input" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">TCS Slab Rate</label>
                        <select className="form-select customer-form-input">
                          <option>TCS Not Applicable</option>
                          <option>0.1%</option>
                          <option>1%</option>
                          <option>5%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Currency</label>
                        <select className="form-select customer-form-input">
                          <option>Indian Rupee</option>
                          <option>US Dollar</option>
                          <option>Euro</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Terms of Payment</label>
                        <select className="form-select customer-form-input">
                          <option>Select Terms of Payment</option>
                          <option>Net 15</option>
                          <option>Net 30</option>
                          <option>Net 60</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Apply Reverse Charge</label>
                        <select className="form-select customer-form-input">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="customer-form-label">Export or SEZ Developer</label>
                        <select className="form-select customer-form-input">
                          <option>Not Applicable</option>
                          <option>Export</option>
                          <option>SEZ Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customer-form-submit">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary customer-back-btn"
                  onClick={() => handleTabClick('information')}
                >
                  Back
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary customer-submit-btn"
                  onClick={() => handleTabClick('shipping')}
                >
                  Next: Shipping Address
                </button>
              </div>
            </div>

            {/* Shipping Address Section */}
            <div className={`card customer-form-card ${activeTab === 'shipping' ? 'active-section' : ''}`}>
              <div className="customer-form-section">
                <h2 className="customer-section-title">Shipping Address</h2>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">Address Line 1*</label>
                      <input type="text" className="form-control customer-form-input" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">Address Line 2</label>
                      <input type="text" className="form-control customer-form-input" />
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">City*</label>
                      <input type="text" className="form-control customer-form-input" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">Pin Code*</label>
                      <input type="text" className="form-control customer-form-input" required />
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">State*</label>
                      <select className="form-select customer-form-input" required>
                        <option>Select a State</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Andra Pradesh">Andra Pradesh</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Karnataka">Karnataka</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">Country*</label>
                      <select className="form-select customer-form-input" required>
                        <option>Select a Country</option>
                        <option value="India">India</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Canada">Canada</option>
                        <option value="Iraq">Iraq</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">Branch Name</label>
                      <input type="text" className="form-control customer-form-input" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="customer-form-label">GSTIN</label>
                      <input type="text" className="form-control customer-form-input" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="customer-form-submit">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary customer-back-btn"
                  onClick={() => handleTabClick('banking')}
                >
                  Back
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary customer-submit-btn"
                  onClick={() => handleTabClick('billing')}
                >
                  Next: Billing Address
                </button>
              </div>
            </div>

            {/* Billing Address Section */}
            <div className={`card customer-form-card ${activeTab === 'billing' ? 'active-section' : ''}`}>
              <div className="customer-form-section">
                <h2 className="customer-section-title">Billing Address</h2>
                
                <div className="mb-3">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="sameAsShipping" 
                      checked={sameAsShipping}
                      onChange={(e) => setSameAsShipping(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="sameAsShipping">
                      Shipping address is same as billing address
                    </label>
                  </div>
                </div>
                
                {!sameAsShipping && (
                  <>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="customer-form-label">Address Line 1</label>
                          <input type="text" className="form-control customer-form-input" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="customer-form-label">Address Line 2</label>
                          <input type="text" className="form-control customer-form-input" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="customer-form-label">City</label>
                          <input type="text" className="form-control customer-form-input" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="customer-form-label">Pin Code</label>
                          <input type="text" className="form-control customer-form-input" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="customer-form-label">State</label>
                          <select className="form-select customer-form-input">
                            <option>Select a State</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Andra Pradesh">Andra Pradesh</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Karnataka">Karnataka</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="customer-form-label">Country</label>
                          <select className="form-select customer-form-input">
                            <option>Select a Country</option>
                            <option value="India">India</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Canada">Canada</option>
                            <option value="Iraq">Iraq</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="customer-form-label">Branch Name</label>
                          <input type="text" className="form-control customer-form-input" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="customer-form-label">GSTIN</label>
                          <input type="text" className="form-control customer-form-input" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="customer-form-submit">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary customer-back-btn"
                  onClick={() => handleTabClick('shipping')}
                >
                  Back
                </button>
                <button type="submit" className="btn btn-primary customer-submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSupplierForm;