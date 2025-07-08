// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from './Component/Modules/Contacts/Customers';
import Dashboard from './Component/Dashboard/Dashboard';
import ViewCustomers from './Component/Modules/LedgerContact/ViewCustomers';
import ViewSuppliers from './Component/Modules/LedgerContact/ViewSuppliers';
import AddCustomer from './Component/Modules/LedgerContact/AddCustomers';
import AddSupplier from './Component/Modules/LedgerContact/AddSuppliers';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/view-customers" element={<ViewCustomers />} />
          <Route path="/view-suppliers" element={<ViewSuppliers />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
