// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from './Component/Modules/Contacts/Customers';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
