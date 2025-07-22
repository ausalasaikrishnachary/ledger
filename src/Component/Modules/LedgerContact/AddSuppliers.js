// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../../Shared/Sidebar/Sidebar';
// import Header from '../../Shared/Header/Header';
// // import './AddSupplierForm.css';

// const AddSupplierForm = ({ user }) => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [sameAsShipping, setSameAsShipping] = useState(false);
//   const [activeTab, setActiveTab] = useState('information');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="dashboard-container">
//       <Header 
//         user={user} 
//         toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
//       />
//       <div className="content-wrapper">
//         <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
//           <Sidebar 
//             user={user} 
//             collapsed={sidebarCollapsed} 
//           />
//         </div>
//         <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
//           <div className="container customer-form-container">
//             <h1 className="customer-form-title">Add Supplier</h1>

//             <div className="customer-form-tabs">
//               <div 
//                 className={`customer-tab ${activeTab === 'information' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('information')}
//               >
//                 Information
//               </div>
//               <div 
//                 className={`customer-tab ${activeTab === 'banking' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('banking')}
//               >
//                 Banking & Taxes
//               </div>
//               <div 
//                 className={`customer-tab ${activeTab === 'shipping' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('shipping')}
//               >
//                 Shipping Address
//               </div>
//               <div 
//                 className={`customer-tab ${activeTab === 'billing' ? 'active' : ''}`}
//                 onClick={() => handleTabClick('billing')}
//               >
//                 Billing Address
//               </div>
//             </div>

//             {/* Information Section */}
//             <div className={`card customer-form-card ${activeTab === 'information' ? 'active-section' : ''}`}>
//               <div className="customer-form-section">
//                 <h2 className="customer-section-title">Information</h2>
//                 <div className="row">
//                   {/* Left Column */}
//                   <div className="col-md-6">
//                     {/* Title and Name in same row */}
//                     <div className="row">
//                       <div className="col-md-4">
//                         <div className="mb-3">
//                           <label className="customer-form-label">Title</label>
//                           <select className="form-select customer-form-input">
//                             <option value="">Select</option>
//                             <option value="Mr.">Mr.</option>
//                             <option value="Mrs.">Mrs.</option>
//                             <option value="Ms.">Ms.</option>
//                             <option value="Dr.">Dr.</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-md-8">
//                         <div className="mb-3">
//                           <label className="customer-form-label">Name*</label>
//                           <input type="text" className="form-control customer-form-input" required />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Mobile Number*</label>
//                       <input type="tel" className="form-control customer-form-input" required />
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Supplier GSTIN</label>
//                       <input type="text" className="form-control customer-form-input" />
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Business Name</label>
//                       <input type="text" className="form-control customer-form-input" />
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Display Name*</label>
//                       <input type="text" className="form-control customer-form-input" required />
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Fax</label>
//                       <input type="text" className="form-control customer-form-input" />
//                     </div>
//                   </div>

//                   {/* Right Column */}
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">Entity Type</label>
//                       <select className="form-select customer-form-input">
//                         <option value="">Select an Entity Type</option>
//                         <option value="Individual">Individual</option>
//                         <option value="Company">Company</option>
//                         <option value="Partnership">Partnership</option>
//                       </select>
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Email*</label>
//                       <input type="email" className="form-control customer-form-input" required />
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Supplier GST Registered Name</label>
//                       <input type="text" className="form-control customer-form-input" />
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Additional Business Name</label>
//                       <input type="text" className="form-control customer-form-input" />
//                     </div>

//                     <div className="mb-3">
//                       <label className="customer-form-label">Phone Number</label>
//                       <input type="tel" className="form-control customer-form-input" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="customer-form-submit">
//                 <button 
//                   type="button" 
//                   className="btn btn-primary customer-submit-btn"
//                   onClick={() => handleTabClick('banking')}
//                 >
//                   Next: Banking & Taxes
//                 </button>
//               </div>
//             </div>

//             {/* Banking & Taxes Section */}
//             <div className={`card customer-form-card ${activeTab === 'banking' ? 'active-section' : ''}`}>
//               <div className="customer-form-section">
//                 <h2 className="customer-section-title">Banking & Taxes</h2>

//                 {/* Account Information Section */}
//                 <div className="mb-4">
//                   <h3 className="customer-subsection-title">Account Information</h3>
//                   <div className="row">
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Account Number</label>
//                         <input type="text" className="form-control customer-form-input" />
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Account Name</label>
//                         <input type="text" className="form-control customer-form-input" />
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Bank Name</label>
//                         <select className="form-select customer-form-input">
//                           <option>Select Bank Name</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">IFSC Code</label>
//                         <input type="text" className="form-control customer-form-input" />
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Account Type</label>
//                         <select className="form-select customer-form-input">
//                           <option>Savings Account</option>
//                           <option>Current Account</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Branch Name</label>
//                         <input type="text" className="form-control customer-form-input" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Tax Information Section */}
//                 <div className="mb-4">
//                   <h3 className="customer-subsection-title">Tax Information</h3>
//                   <div className="row">
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">PAN</label>
//                         <input type="text" className="form-control customer-form-input" />
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">TAN</label>
//                         <input type="text" className="form-control customer-form-input" />
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">TCS Slab Rate</label>
//                         <select className="form-select customer-form-input">
//                           <option>TCS Not Applicable</option>
//                           <option>0.1%</option>
//                           <option>1%</option>
//                           <option>5%</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Currency</label>
//                         <select className="form-select customer-form-input">
//                           <option>Indian Rupee</option>
//                           <option>US Dollar</option>
//                           <option>Euro</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Terms of Payment</label>
//                         <select className="form-select customer-form-input">
//                           <option>Select Terms of Payment</option>
//                           <option>Net 15</option>
//                           <option>Net 30</option>
//                           <option>Net 60</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Apply Reverse Charge</label>
//                         <select className="form-select customer-form-input">
//                           <option>Yes</option>
//                           <option>No</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-4">
//                       <div className="mb-3">
//                         <label className="customer-form-label">Export or SEZ Developer</label>
//                         <select className="form-select customer-form-input">
//                           <option>Not Applicable</option>
//                           <option>Export</option>
//                           <option>SEZ Developer</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="customer-form-submit">
//                 <button 
//                   type="button" 
//                   className="btn btn-outline-secondary customer-back-btn"
//                   onClick={() => handleTabClick('information')}
//                 >
//                   Back
//                 </button>
//                 <button 
//                   type="button" 
//                   className="btn btn-primary customer-submit-btn"
//                   onClick={() => handleTabClick('shipping')}
//                 >
//                   Next: Shipping Address
//                 </button>
//               </div>
//             </div>

//             {/* Shipping Address Section */}
//             <div className={`card customer-form-card ${activeTab === 'shipping' ? 'active-section' : ''}`}>
//               <div className="customer-form-section">
//                 <h2 className="customer-section-title">Shipping Address</h2>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">Address Line 1*</label>
//                       <input type="text" className="form-control customer-form-input" required />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">Address Line 2</label>
//                       <input type="text" className="form-control customer-form-input" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">City*</label>
//                       <input type="text" className="form-control customer-form-input" required />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">Pin Code*</label>
//                       <input type="text" className="form-control customer-form-input" required />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">State*</label>
//                       <select className="form-select customer-form-input" required>
//                         <option>Select a State</option>
//                         <option value="Telangana">Telangana</option>
//                         <option value="Andra Pradesh">Andra Pradesh</option>
//                         <option value="Kerala">Kerala</option>
//                         <option value="Karnataka">Karnataka</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">Country*</label>
//                       <select className="form-select customer-form-input" required>
//                         <option>Select a Country</option>
//                         <option value="India">India</option>
//                         <option value="Bangladesh">Bangladesh</option>
//                         <option value="Canada">Canada</option>
//                         <option value="Iraq">Iraq</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">Branch Name</label>
//                       <input type="text" className="form-control customer-form-input" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="customer-form-label">GSTIN</label>
//                       <input type="text" className="form-control customer-form-input" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="customer-form-submit">
//                 <button 
//                   type="button" 
//                   className="btn btn-outline-secondary customer-back-btn"
//                   onClick={() => handleTabClick('banking')}
//                 >
//                   Back
//                 </button>
//                 <button 
//                   type="button" 
//                   className="btn btn-primary customer-submit-btn"
//                   onClick={() => handleTabClick('billing')}
//                 >
//                   Next: Billing Address
//                 </button>
//               </div>
//             </div>

//             {/* Billing Address Section */}
//             <div className={`card customer-form-card ${activeTab === 'billing' ? 'active-section' : ''}`}>
//               <div className="customer-form-section">
//                 <h2 className="customer-section-title">Billing Address</h2>

//                 <div className="mb-3">
//                   <div className="form-check">
//                     <input 
//                       className="form-check-input" 
//                       type="checkbox" 
//                       id="sameAsShipping" 
//                       checked={sameAsShipping}
//                       onChange={(e) => setSameAsShipping(e.target.checked)}
//                     />
//                     <label className="form-check-label" htmlFor="sameAsShipping">
//                       Shipping address is same as billing address
//                     </label>
//                   </div>
//                 </div>

//                 {!sameAsShipping && (
//                   <>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="customer-form-label">Address Line 1</label>
//                           <input type="text" className="form-control customer-form-input" />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="customer-form-label">Address Line 2</label>
//                           <input type="text" className="form-control customer-form-input" />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="customer-form-label">City</label>
//                           <input type="text" className="form-control customer-form-input" />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="customer-form-label">Pin Code</label>
//                           <input type="text" className="form-control customer-form-input" />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="customer-form-label">State</label>
//                           <select className="form-select customer-form-input">
//                             <option>Select a State</option>
//                             <option value="Telangana">Telangana</option>
//                             <option value="Andra Pradesh">Andra Pradesh</option>
//                             <option value="Kerala">Kerala</option>
//                             <option value="Karnataka">Karnataka</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="customer-form-label">Country</label>
//                           <select className="form-select customer-form-input">
//                             <option>Select a Country</option>
//                             <option value="India">India</option>
//                             <option value="Bangladesh">Bangladesh</option>
//                             <option value="Canada">Canada</option>
//                             <option value="Iraq">Iraq</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="customer-form-label">Branch Name</label>
//                           <input type="text" className="form-control customer-form-input" />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="customer-form-label">GSTIN</label>
//                           <input type="text" className="form-control customer-form-input" />
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="customer-form-submit">
//                 <button 
//                   type="button" 
//                   className="btn btn-outline-secondary customer-back-btn"
//                   onClick={() => handleTabClick('shipping')}
//                 >
//                   Back
//                 </button>
//                 <button type="submit" className="btn btn-primary customer-submit-btn">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddSupplierForm;






import React, { useState, useEffect } from 'react'; 
import FormLayout, { FormSection } from '../../Layout/FormLayout/FormLayout';
import './AddCustomerForm.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { baseurl } from '../../BaseURL/BaseURL';

const AddSupplierForm = ({ user }) => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [activeTab, setActiveTab] = useState('information');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
    const [isLoadingGstin, setIsLoadingGstin] = useState(false);
  const [gstinError, setGstinError] = useState(null);
  
  const [formData, setFormData] = useState({
    group: "supplier",
    title: "",
    entity_type: "",
    name: "",
    mobile_number: "",
    email: "",
    gstin: "",
    gst_registered_name: "",
    business_name: "",
    additional_business_name: "",
    display_name: "",
    phone_number: "",
    fax: "",
    account_number: "",
    account_name: "",
    bank_name: "",
    account_type: "",
    branch_name: "",
    ifsc_code: "",
    pan: "",
    tan: "",
    tds_slab_rate: "",
    currency: "",
    terms_of_payment: "",
    reverse_charge: "",
    export_sez: "",
    shipping_address_line1: "",
    shipping_address_line2: "",
    shipping_city: "",
    shipping_pin_code: "",
    shipping_state: "",
    shipping_country: "",
    shipping_branch_name: "",
    shipping_gstin: "",
    billing_address_line1: "",
    billing_address_line2: "",
    billing_city: "",
    billing_pin_code: "",
    billing_state: "",
    billing_country: "",
    billing_branch_name: "",
    billing_gstin: ""
  });

  // Required fields for each section
  const requiredFields = {
    information: [
      'title',
      'entity_type',
      'name',
      'mobile_number',
      'email',
      'display_name'
    ],
    banking: [
      'account_number',
      'account_name',
      'bank_name',
      'account_type',
      'ifsc_code'
    ],
    shipping: [
      'shipping_address_line1',
      'shipping_city',
      'shipping_pin_code',
      'shipping_state',
      'shipping_country'
    ],
    billing: sameAsShipping ? [] : [
      'billing_address_line1',
      'billing_city',
      'billing_pin_code',
      'billing_state',
      'billing_country'
    ]
  };

  // Field validation rules
  const validateField = (name, value) => {
    let error = '';
    
    if (requiredFields[activeTab]?.includes(name) && !value) {
      error = 'This field is required';
    }
    
    switch(name) {
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'mobile_number':
        if (value && !/^[0-9]{10}$/.test(value)) {
          error = 'Mobile number must be 10 digits';
        }
        break;
      case 'phone_number':
        if (value && !/^[0-9]{10,12}$/.test(value)) {
          error = 'Phone number must be 10-12 digits';
        }
        break;
      case 'gstin':
      case 'shipping_gstin':
      case 'billing_gstin':
        if (value && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)) {
          error = 'Invalid GSTIN format';
        }
        break;
      case 'pan':
        if (value && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
          error = 'Invalid PAN format';
        }
        break;
      case 'tan':
        if (value && !/^[A-Z]{4}[0-9]{5}[A-Z]{1}$/.test(value)) {
          error = 'Invalid TAN format';
        }
        break;
      case 'ifsc_code':
        if (value && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)) {
          error = 'Invalid IFSC code format';
        }
        break;
      case 'shipping_pin_code':
      case 'billing_pin_code':
        if (value && !/^[1-9][0-9]{5}$/.test(value)) {
          error = 'Invalid PIN code';
        }
        break;
      case 'account_number':
        if (value && !/^[0-9]{9,18}$/.test(value)) {
          error = 'Account number must be 9-18 digits';
        }
        break;
    }
    
    return error;
  };

  // Validate current tab before proceeding
  const validateTab = () => {
    const newErrors = {};
    let isValid = true;
    
    requiredFields[activeTab]?.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  // Fetch supplier data if ID exists (edit mode)
  useEffect(() => {
    if (id) {
      const fetchSupplier = async () => {
        try {
          const response = await axios.get(`${baseurl}/accounts/${id}`);
          setFormData(response.data);
          setIsEditing(true);
          
          const isSameAddress = 
            response.data.billing_address_line1 === response.data.shipping_address_line1 &&
            response.data.billing_address_line2 === response.data.shipping_address_line2 &&
            response.data.billing_city === response.data.shipping_city &&
            response.data.billing_pin_code === response.data.shipping_pin_code &&
            response.data.billing_state === response.data.shipping_state &&
            response.data.billing_country === response.data.shipping_country &&
            response.data.billing_branch_name === response.data.shipping_branch_name &&
            response.data.billing_gstin === response.data.shipping_gstin;
            
          setSameAsShipping(isSameAddress);
        } catch (err) {
          console.error('Failed to fetch supplier data', err);
        }
      };
      
      fetchSupplier();
    }
  }, [id]);

  const tabs = [
    { id: 'information', label: 'Information' },
    { id: 'banking', label: 'Banking & Taxes' },
    { id: 'shipping', label: 'Shipping Address' },
    { id: 'billing', label: 'Billing Address' }
  ];

  const handleTabClick = (tab) => {
    if (validateTab()) {
      setActiveTab(tab);
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validate the field
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

    const handleGstinChange = async (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Only make API call if GSTIN is 15 characters (valid length)
    if (name === 'gstin' && value.length === 15) {
      try {
        setIsLoadingGstin(true);
        setGstinError(null);
        
        const response = await axios.post(`${baseurl}/gstin-details`, { gstin: value });
        
        if (response.data.success && response.data.result) {
          const result = response.data.result;
          const addr = result.pradr?.addr || {};
          
          // Construct address lines
          const addressLine1 = `${addr.bno || ''}${addr.bno && addr.flno ? ', ' : ''}${addr.flno || ''}`.trim();
          const addressLine2 = `${addr.st || ''}${addr.st && addr.bnm ? ', ' : ''}${addr.bnm || ''}${(addr.st || addr.bnm) && addr.loc ? ', ' : ''}${addr.loc || ''}`.trim();
          
          // Update form data with the fetched values
          setFormData(prev => ({
            ...prev,
            gst_registered_name: result.lgnm || '',
            business_name: result.tradeNam || '',
            additional_business_name: result.tradeNam || '',
            display_name: result.lgnm || '',
            shipping_address_line1: addressLine1,
            shipping_address_line2: addressLine2,
            shipping_city: result.ctj || '',
            shipping_pin_code: addr.pncd || '',
            shipping_state: addr.stcd || '',
            shipping_country: 'India',
            // Also update billing address by default
            billing_address_line1: addressLine1,
            billing_address_line2: addressLine2,
            billing_city: result.ctj || '',
            billing_pin_code: addr.pncd || '',
            billing_state: addr.stcd || '',
            billing_country: 'India'
          }));
          
          // Set same as shipping address to true since we're populating both
          setSameAsShipping(true);
        }
      } catch (error) {
        setGstinError('Failed to fetch GSTIN details. Please enter manually.');
        console.error('Error fetching GSTIN details:', error);
      } finally {
        setIsLoadingGstin(false);
      }
    }
  };

  const handleSubmit = async () => {
    // Validate all tabs before submitting
    let allValid = true;
    const newErrors = {};
    
    Object.keys(requiredFields).forEach(tab => {
      requiredFields[tab].forEach(field => {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          allValid = false;
        }
      });
    });
    
    setErrors(newErrors);
    
    if (!allValid) {
      alert('Please fix all validation errors before submitting');
      return;
    }
    
    let finalData = { ...formData };

    if (sameAsShipping) {
      finalData = {
        ...finalData,
        billing_address_line1: formData.shipping_address_line1,
        billing_address_line2: formData.shipping_address_line2,
        billing_city: formData.shipping_city,
        billing_pin_code: formData.shipping_pin_code,
        billing_state: formData.shipping_state,
        billing_country: formData.shipping_country,
        billing_branch_name: formData.shipping_branch_name,
        billing_gstin: formData.shipping_gstin
      };
    }

    try {
      let response;
      if (isEditing) {
        response = await axios.put(`${baseurl}/accounts/${id}`, finalData);
        alert('Supplier updated successfully!');
      } else {
        response = await axios.post(`${baseurl}/accounts`, finalData);
        alert('Supplier added successfully!');
      }

      navigate('/view-suppliers');

      if (!isEditing) {
        setFormData({
          group: "supplier",
          title: "",
          entity_type: "",
          name: "",
          mobile_number: "",
          email: "",
          gstin: "",
          gst_registered_name: "",
          business_name: "",
          additional_business_name: "",
          display_name: "",
          phone_number: "",
          fax: "",
          account_number: "",
          account_name: "",
          bank_name: "",
          account_type: "",
          branch_name: "",
          ifsc_code: "",
          pan: "",
          tan: "",
          tds_slab_rate: "",
          currency: "",
          terms_of_payment: "",
          reverse_charge: "",
          export_sez: "",
          shipping_address_line1: "",
          shipping_address_line2: "",
          shipping_city: "",
          shipping_pin_code: "",
          shipping_state: "",
          shipping_country: "",
          shipping_branch_name: "",
          shipping_gstin: "",
          billing_address_line1: "",
          billing_address_line2: "",
          billing_city: "",
          billing_pin_code: "",
          billing_state: "",
          billing_country: "",
          billing_branch_name: "",
          billing_gstin: ""
        });
        setSameAsShipping(false);
        setActiveTab("information");
      }
    } catch (err) {
      console.error(err);
      alert(`Failed to ${isEditing ? 'update' : 'add'} supplier`);
    }
  };

  return (
    <FormLayout
      user={user}
      title={isEditing ? "Edit Supplier" : "Add Supplier"}
      tabs={tabs}
      activeTab={activeTab}
      onTabClick={handleTabClick}
      sidebarCollapsed={sidebarCollapsed}
      setSidebarCollapsed={setSidebarCollapsed}
    >
      <FormSection
        id="information"
        activeTab={activeTab}
        title="Information"
        onBack={null}
        onNext={() => handleTabClick('banking')}
        nextLabel="Banking & Taxes"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="customer-form-label">Title*</label>
                  <select 
                    className={`form-select customer-form-input ${errors.title ? 'is-invalid' : ''}`} 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Dr.">Dr.</option>
                  </select>
                  {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>
              </div>
              <div className="col-md-8">
                <div className="mb-3">
                  <label className="customer-form-label">Name*</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    className={`form-control customer-form-input ${errors.name ? 'is-invalid' : ''}`} 
                    onChange={handleChange} 
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="customer-form-label">Mobile Number*</label>
              <input 
                type="tel" 
                name="mobile_number" 
                value={formData.mobile_number} 
                className={`form-control customer-form-input ${errors.mobile_number ? 'is-invalid' : ''}`} 
                onChange={handleChange} 
                required
              />
              {errors.mobile_number && <div className="invalid-feedback">{errors.mobile_number}</div>}
            </div>

             <div className="mb-3">
    <label className="customer-form-label">Supplier GSTIN</label>
    <input 
      type="text" 
      name="gstin" 
      value={formData.gstin} 
      className={`form-control customer-form-input ${errors.gstin ? 'is-invalid' : ''}`} 
      onChange={handleGstinChange}
      maxLength="15"
    />
    {isLoadingGstin && <div className="text-muted small">Fetching details...</div>}
    {gstinError && <div className="text-danger small">{gstinError}</div>}
    {errors.gstin && <div className="invalid-feedback">{errors.gstin}</div>}
  </div>

            <div className="mb-3">
              <label className="customer-form-label">Business Name</label>
              <input 
                type="text" 
                name="business_name" 
                value={formData.business_name} 
                className="form-control customer-form-input" 
                onChange={handleChange} 
              />
            </div>

            <div className="mb-3">
              <label className="customer-form-label">Display Name*</label>
              <input 
                type="text" 
                name="display_name" 
                value={formData.display_name} 
                className={`form-control customer-form-input ${errors.display_name ? 'is-invalid' : ''}`} 
                onChange={handleChange} 
                required
              />
              {errors.display_name && <div className="invalid-feedback">{errors.display_name}</div>}
            </div>

            <div className="mb-3">
              <label className="customer-form-label">Fax</label>
              <input 
                type="text" 
                name="fax" 
                value={formData.fax} 
                className="form-control customer-form-input" 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">Entity Type*</label>
              <select 
                className={`form-select customer-form-input ${errors.entity_type ? 'is-invalid' : ''}`} 
                name="entity_type" 
                value={formData.entity_type} 
                onChange={handleChange}
                required
              >
                <option value="">Select an Entity Type</option>
                <option value="Individual">Individual</option>
                <option value="Company">Company</option>
                <option value="Partnership">Partnership</option>
              </select>
              {errors.entity_type && <div className="invalid-feedback">{errors.entity_type}</div>}
            </div>

            <div className="mb-3">
              <label className="customer-form-label">Email*</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                className={`form-control customer-form-input ${errors.email ? 'is-invalid' : ''}`} 
                onChange={handleChange} 
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="customer-form-label">Supplier GST Registered Name</label>
              <input 
                type="text" 
                name="gst_registered_name" 
                value={formData.gst_registered_name} 
                className="form-control customer-form-input" 
                onChange={handleChange} 
              />
            </div>

            <div className="mb-3">
              <label className="customer-form-label">Additional Business Name</label>
              <input 
                type="text" 
                name="additional_business_name" 
                value={formData.additional_business_name} 
                className="form-control customer-form-input" 
                onChange={handleChange} 
              />
            </div>

            <div className="mb-3">
              <label className="customer-form-label">Phone Number</label>
              <input 
                type="tel" 
                name="phone_number" 
                value={formData.phone_number} 
                className={`form-control customer-form-input ${errors.phone_number ? 'is-invalid' : ''}`} 
                onChange={handleChange} 
              />
              {errors.phone_number && <div className="invalid-feedback">{errors.phone_number}</div>}
            </div>
          </div>
        </div>
      </FormSection>

      <FormSection
        id="banking"
        activeTab={activeTab}
        title="Banking & Taxes"
        onBack={() => handleTabClick('information')}
        onNext={() => handleTabClick('shipping')}
        nextLabel="Shipping Address"
      >
        <div className="mb-4">
          <h3 className="customer-subsection-title">Account Information</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Account Number*</label>
                <input 
                  type="text" 
                  name="account_number" 
                  value={formData.account_number} 
                  className={`form-control customer-form-input ${errors.account_number ? 'is-invalid' : ''}`} 
                  onChange={handleChange} 
                  required
                />
                {errors.account_number && <div className="invalid-feedback">{errors.account_number}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Account Name*</label>
                <input 
                  type="text" 
                  name="account_name" 
                  value={formData.account_name} 
                  className={`form-control customer-form-input ${errors.account_name ? 'is-invalid' : ''}`} 
                  onChange={handleChange} 
                  required
                />
                {errors.account_name && <div className="invalid-feedback">{errors.account_name}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Bank Name*</label>
                <select 
                  className={`form-select customer-form-input ${errors.bank_name ? 'is-invalid' : ''}`} 
                  name="bank_name" 
                  value={formData.bank_name} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Bank Name</option>
                  <option value="SBI">SBI</option>
                  <option value="ANDHRA">ANDHRA</option>
                  <option value="HDFC">HDFC</option>
                  <option value="ICICI">ICICI</option>
                </select>
                {errors.bank_name && <div className="invalid-feedback">{errors.bank_name}</div>}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">IFSC Code*</label>
                <input 
                  type="text" 
                  name="ifsc_code" 
                  value={formData.ifsc_code} 
                  className={`form-control customer-form-input ${errors.ifsc_code ? 'is-invalid' : ''}`} 
                  onChange={handleChange} 
                  required
                />
                {errors.ifsc_code && <div className="invalid-feedback">{errors.ifsc_code}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Account Type*</label>
                <select 
                  className={`form-select customer-form-input ${errors.account_type ? 'is-invalid' : ''}`} 
                  name="account_type" 
                  value={formData.account_type} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Savings Account">Savings Account</option>
                  <option value="Current Account">Current Account</option>
                </select>
                {errors.account_type && <div className="invalid-feedback">{errors.account_type}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Branch Name</label>
                <input 
                  type="text" 
                  name="branch_name" 
                  value={formData.branch_name} 
                  className="form-control customer-form-input" 
                  onChange={handleChange} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="customer-subsection-title">Tax Information</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">PAN</label>
                <input 
                  type="text" 
                  name="pan" 
                  value={formData.pan} 
                  className={`form-control customer-form-input ${errors.pan ? 'is-invalid' : ''}`} 
                  onChange={handleChange} 
                />
                {errors.pan && <div className="invalid-feedback">{errors.pan}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">TAN</label>
                <input 
                  type="text" 
                  name="tan" 
                  value={formData.tan} 
                  className={`form-control customer-form-input ${errors.tan ? 'is-invalid' : ''}`} 
                  onChange={handleChange} 
                />
                {errors.tan && <div className="invalid-feedback">{errors.tan}</div>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">TCS Slab Rate</label>
                <select 
                  className="form-select customer-form-input" 
                  name="tds_slab_rate" 
                  value={formData.tds_slab_rate} 
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Not Applicable">TCS Not Applicable</option>
                  <option value="0.1%">0.1%</option>
                  <option value="1%">1%</option>
                  <option value="5%">5%</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Currency</label>
                <select 
                  className="form-select customer-form-input" 
                  name="currency" 
                  value={formData.currency} 
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="INR">INR</option>
                  <option value="USD">US Dollar</option>
                  <option value="EUR">Euro</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Terms of Payment</label>
                <select 
                  className="form-select customer-form-input" 
                  name="terms_of_payment" 
                  value={formData.terms_of_payment} 
                  onChange={handleChange}
                >
                  <option value="">Select Terms of Payment</option>
                  <option value="Net 15">Net 15</option>
                  <option value="Net 30">Net 30</option>
                  <option value="Net 60">Net 60</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Apply Reverse Charge</label>
                <select 
                  className="form-select customer-form-input" 
                  name="reverse_charge" 
                  value={formData.reverse_charge} 
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label className="customer-form-label">Export or SEZ Developer</label>
                <select 
                  className="form-select customer-form-input" 
                  name="export_sez" 
                  value={formData.export_sez} 
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Not Applicable">Not Applicable</option>
                  <option value="Export">Export</option>
                  <option value="SEZ Developer">SEZ Developer</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </FormSection>

      <FormSection
        id="shipping"
        activeTab={activeTab}
        title="Shipping Address"
        onBack={() => handleTabClick('banking')}
        onNext={() => handleTabClick('billing')}
        nextLabel="Billing Address"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">Address Line 1*</label>
              <input 
                type="text" 
                name="shipping_address_line1" 
                value={formData.shipping_address_line1} 
                className={`form-control customer-form-input ${errors.shipping_address_line1 ? 'is-invalid' : ''}`} 
                onChange={handleChange} 
                required
              />
              {errors.shipping_address_line1 && <div className="invalid-feedback">{errors.shipping_address_line1}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">Address Line 2</label>
              <input 
                type="text" 
                name="shipping_address_line2" 
                value={formData.shipping_address_line2} 
                className="form-control customer-form-input" 
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">City*</label>
              <input 
                type="text" 
                name="shipping_city" 
                value={formData.shipping_city} 
                className={`form-control customer-form-input ${errors.shipping_city ? 'is-invalid' : ''}`} 
                onChange={handleChange} 
                required
              />
              {errors.shipping_city && <div className="invalid-feedback">{errors.shipping_city}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">Pin Code*</label>
              <input 
                type="text" 
                name="shipping_pin_code" 
                value={formData.shipping_pin_code} 
                className={`form-control customer-form-input ${errors.shipping_pin_code ? 'is-invalid' : ''}`} 
                onChange={handleChange} 
                required
              />
              {errors.shipping_pin_code && <div className="invalid-feedback">{errors.shipping_pin_code}</div>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">State*</label>
              <select 
                className={`form-select customer-form-input ${errors.shipping_state ? 'is-invalid' : ''}`} 
                name="shipping_state" 
                value={formData.shipping_state} 
                onChange={handleChange}
                required
              >
                <option value="">Select a State</option>
                <option value="Telangana">Telangana</option>
                <option value="Andra Pradesh">Andra Pradesh</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
              </select>
              {errors.shipping_state && <div className="invalid-feedback">{errors.shipping_state}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">Country*</label>
              <select 
                className={`form-select customer-form-input ${errors.shipping_country ? 'is-invalid' : ''}`} 
                name="shipping_country" 
                value={formData.shipping_country} 
                onChange={handleChange}
                required
              >
                <option value="">Select a Country</option>
                <option value="India">India</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Canada">Canada</option>
                <option value="Iraq">Iraq</option>
              </select>
              {errors.shipping_country && <div className="invalid-feedback">{errors.shipping_country}</div>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">Branch Name</label>
              <input 
                type="text" 
                name="shipping_branch_name" 
                value={formData.shipping_branch_name} 
                className="form-control customer-form-input" 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="customer-form-label">GSTIN</label>
              <input 
                type="text" 
                name="shipping_gstin" 
                value={formData.shipping_gstin} 
                className={`form-control customer-form-input ${errors.shipping_gstin ? 'is-invalid' : ''}`} 
                onChange={handleChange} 
              />
              {errors.shipping_gstin && <div className="invalid-feedback">{errors.shipping_gstin}</div>}
            </div>
          </div>
        </div>
      </FormSection>

      <FormSection
        id="billing"
        activeTab={activeTab}
        title="Billing Address"
        onBack={() => handleTabClick('shipping')}
        onSubmit={handleSubmit}
        isLast={true}
      >
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
                  <label className="customer-form-label">Address Line 1*</label>
                  <input 
                    type="text" 
                    name="billing_address_line1" 
                    value={formData.billing_address_line1} 
                    className={`form-control customer-form-input ${errors.billing_address_line1 ? 'is-invalid' : ''}`} 
                    onChange={handleChange} 
                    required
                  />
                  {errors.billing_address_line1 && <div className="invalid-feedback">{errors.billing_address_line1}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="customer-form-label">Address Line 2</label>
                  <input 
                    type="text" 
                    name="billing_address_line2" 
                    value={formData.billing_address_line2} 
                    className="form-control customer-form-input" 
                    onChange={handleChange} 
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="customer-form-label">City*</label>
                  <input 
                    type="text" 
                    name="billing_city" 
                    value={formData.billing_city} 
                    className={`form-control customer-form-input ${errors.billing_city ? 'is-invalid' : ''}`} 
                    onChange={handleChange} 
                    required
                  />
                  {errors.billing_city && <div className="invalid-feedback">{errors.billing_city}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="customer-form-label">Pin Code*</label>
                  <input 
                    type="text" 
                    name="billing_pin_code" 
                    value={formData.billing_pin_code} 
                    className={`form-control customer-form-input ${errors.billing_pin_code ? 'is-invalid' : ''}`} 
                    onChange={handleChange} 
                    required
                  />
                  {errors.billing_pin_code && <div className="invalid-feedback">{errors.billing_pin_code}</div>}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="customer-form-label">State*</label>
                  <select 
                    className={`form-select customer-form-input ${errors.billing_state ? 'is-invalid' : ''}`} 
                    name="billing_state" 
                    value={formData.billing_state} 
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a State</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Andra Pradesh">Andra Pradesh</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                  {errors.billing_state && <div className="invalid-feedback">{errors.billing_state}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="customer-form-label">Country*</label>
                  <select 
                    className={`form-select customer-form-input ${errors.billing_country ? 'is-invalid' : ''}`} 
                    name="billing_country" 
                    value={formData.billing_country} 
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Country</option>
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Canada">Canada</option>
                    <option value="Iraq">Iraq</option>
                  </select>
                  {errors.billing_country && <div className="invalid-feedback">{errors.billing_country}</div>}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="customer-form-label">Branch Name</label>
                  <input 
                    type="text" 
                    name="billing_branch_name" 
                    value={formData.billing_branch_name} 
                    className="form-control customer-form-input" 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="customer-form-label">GSTIN</label>
                  <input 
                    type="text" 
                    name="billing_gstin" 
                    value={formData.billing_gstin} 
                    className={`form-control customer-form-input ${errors.billing_gstin ? 'is-invalid' : ''}`} 
                    onChange={handleChange} 
                  />
                  {errors.billing_gstin && <div className="invalid-feedback">{errors.billing_gstin}</div>}
                </div>
              </div>
            </div>
          </>
        )}
      </FormSection>
    </FormLayout>
  );
};

export default AddSupplierForm;