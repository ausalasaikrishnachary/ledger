// // src/Pages/Customers/ViewCustomerDetails.js
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button, Container, Card, Table } from 'react-bootstrap';
// import './ViewCustomerDetails.css'; // Optional for styling
// import Sidebar from '../../Shared/Sidebar/Sidebar';
// import Header from '../../Shared/Header/Header';
// const ViewCustomerDetails = ({ user }) => {
//           const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
        
//   const location = useLocation();
//   const navigate = useNavigate();
//   const customer = location.state?.customer;

//   if (!customer) {
//     return <div className="text-center mt-5">No customer data found.</div>;
//   }

//   return (
//         <div className="dashboard-container">
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
//     <Container className="my-4">
//       <Card className="p-4 shadow-sm">
//         <h3 className="text-center mb-4">Customer Details</h3>
//         <Table bordered hover responsive>
//           <tbody>
//             {Object.entries(customer).map(([key, value]) => (
//               <tr key={key}>
//                 <td><strong>{key.replace(/_/g, ' ').toUpperCase()}</strong></td>
//                 <td>{value !== null && value !== '' ? value.toString() : 'N/A'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <div className="text-end">
//           <Button variant="secondary" onClick={() => navigate(-1)}>Back</Button>
//         </div>
//       </Card>
//     </Container>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ViewCustomerDetails;









import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormLayout from '../../Layout/FormLayout/FormLayout';
import './AddCustomerForm.css'; // Reuse same styles for visual consistency

const ViewCustomerDetails = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const customer = location.state?.customer;
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (!customer) {
    return <div className="text-center mt-5">No customer data found.</div>;
  }

  const sections = [
    {
      title: 'Information',
      fields: [
        'title', 'name', 'mobile_number', 'email', 'gstin',
        'gst_registered_name', 'business_name', 'additional_business_name',
        'display_name', 'phone_number', 'fax', 'entity_type'
      ]
    },
    {
      title: 'Banking & Taxes',
      fields: [
        'account_number', 'account_name', 'bank_name', 'account_type',
        'branch_name', 'ifsc_code', 'pan', 'tan', 'tds_slab_rate',
        'currency', 'terms_of_payment', 'reverse_charge', 'export_sez'
      ]
    },
    {
      title: 'Shipping Address',
      fields: [
        'shipping_address_line1', 'shipping_address_line2', 'shipping_city',
        'shipping_pin_code', 'shipping_state', 'shipping_country',
        'shipping_branch_name', 'shipping_gstin'
      ]
    },
    {
      title: 'Billing Address',
      fields: [
        'billing_address_line1', 'billing_address_line2', 'billing_city',
        'billing_pin_code', 'billing_state', 'billing_country',
        'billing_branch_name', 'billing_gstin'
      ]
    }
  ];

  const renderField = (field) => (
    <div className="col-md-6 mb-3" key={field}>
      <label className="customer-form-label">{field.replace(/_/g, ' ').toUpperCase()}</label>
      <div className="form-control customer-form-input bg-light">
        {customer[field] !== null && customer[field] !== '' ? customer[field].toString() : 'N/A'}
      </div>
    </div>
  );

  return (
    <FormLayout
      user={user}
      title="View Customer"
      tabs={[]} // No tabs
      activeTab=""
      onTabClick={() => {}}
      sidebarCollapsed={sidebarCollapsed}
      setSidebarCollapsed={setSidebarCollapsed}
    >
      {sections.map((section) => (
        <div className="card customer-form-card active-section" key={section.title}>
          <div className="customer-form-section">
            <h2 className="customer-section-title">{section.title}</h2>
            <div className="row">
              {section.fields.map(renderField)}
            </div>
          </div>
        </div>
      ))}

      <div className="text-end mb-4">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
      </div>
    </FormLayout>
  );
};

export default ViewCustomerDetails;
