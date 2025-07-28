// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Customers from './Component/Modules/Contacts/Customers';
import Dashboard from './Component/Dashboard/Dashboard';
import ViewCustomers from './Component/Modules/LedgerContact/ViewCustomers';
import ViewSuppliers from './Component/Modules/LedgerContact/ViewSuppliers';
import AddCustomer from './Component/Modules/LedgerContact/AddCustomers';
import AddSupplier from './Component/Modules/LedgerContact/AddSuppliers';
import Quotations from './Component/Modules/Sales/Quotation/Quotations';
import Receipts from './Component/Modules/Sales/Receipts/Receipts';
import BillOfSupply from './Component/Modules/Sales/BillOfSupply/BillOfSupply';
import CreditNote from './Component/Modules/Sales/CreditNote/CreditNote';
import DeliveryChallan from './Component/Modules/Sales/DeliveryChallan/DeliveryChallan';
import Invoices from './Component/Modules/Sales/Invoices/Invoices';
import Sales from './Component/Modules/Sales/Sales';
import Ageing from './Component/Modules/Sales/Receivables/Ageing'
import OverdueReceivables from './Component/Modules/Sales/Receivables/OverdueReceivables'
import PartyWiseReceivables from './Component/Modules/Sales/Receivables/PartyWiseReceivables'
import UpcomingReveivables from './Component/Modules/Sales/Receivables/UpcomingReveivables'


import PurchasedItems from './Component/Modules/LedgerInventory/PurchasedItems';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SalesItems from './Component/Modules/LedgerInventory/SalesItems';

import ProductDetails from './Component/Modules/LedgerInventory/SalesItemsProductDetails';

// Purchase

// Purchase
import DebitNote from './Component/Modules/Purchases/DebitNote/DebitNote';
import Payable from './Component/Modules/Purchases/Payables/Payable';
import PurchaseInvoice from './Component/Modules/Purchases/PurchaseInvoices/PurchaseInvoice';
import PurchaseOrder from './Component/Modules/Purchases/PurchaseOrder/PurchaseOrder';
import Voucher from './Component/Modules/Purchases/Voucher/Voucher';

import PuchaseAgeing from './Component/Modules/Purchases/Payables/Ageing';
import OverduePayables from './Component/Modules/Purchases/Payables/OverduePayables';
import PartyWisePayables from './Component/Modules/Purchases/Payables/PartyWisePayables';
import UpcomingPayables from './Component/Modules/Purchases/Payables/UpcomingPayables';
import ViewCustomerDetails from './Component/Modules/LedgerContact/ViewCustomerDetails';

import ViewSupplierDetails from './Component/Modules/LedgerContact/ViewSupplierDetails';
import Receivables from './Component/Modules/Sales/Receivables/Receivables';
import CreateInvoice from './Component/CreateInvoice/CreateInvoice';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/customer" element={<Customers />} /> */}
          <Route path="/view-customers" element={<ViewCustomers />} />
          <Route path="/view-suppliers" element={<ViewSuppliers />} />
          <Route path="/add-customer" element={<AddCustomer />} />
           <Route path="/add-customer/:id" element={<AddCustomer />} />
          <Route path="/customer-details" element={<ViewCustomerDetails />} />
          <Route path="/supplier-details" element={<ViewSupplierDetails />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
           <Route path="/add-supplier/:id" element={<AddSupplier />} />
          <Route path="/quotations" element={<Quotations />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/billOfSupply" element={<BillOfSupply />} />
          <Route path="/creditNote" element={<CreditNote />} />
          <Route path="/deliveryChallan" element={<DeliveryChallan />} />
           <Route path="/receivables" element={<Receivables />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/createinvoice" element={<CreateInvoice />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/ageing" element={<Ageing />} />
          <Route path="/overdue" element={<OverdueReceivables />} />
          <Route path="/partyWise" element={<PartyWiseReceivables />} />
      
          <Route path="/upcoming" element={<UpcomingReveivables />} />
           <Route path="/purchased-items" element={<PurchasedItems />} />
            <Route path="/sales-items" element={<SalesItems />} />
            
            <Route path="/product-details/:id" element={<ProductDetails />} />

          // Purchase


     <Route path="/debitNote" element={<DebitNote />} />
          <Route path="/payables" element={<Payable />} />
           <Route path="/purchaseInvoice" element={<PurchaseInvoice />} />
            <Route path="/purchaseOrder" element={<PurchaseOrder />} />
            <Route path="/voucher" element={<Voucher />} />

                <Route path="/puchaseAgeing" element={<PuchaseAgeing />} />
           <Route path="/overduePayables" element={<OverduePayables />} />
            <Route path="/partyWisePayables" element={<PartyWisePayables />} />
            <Route path="/upcomingPayables" element={<UpcomingPayables />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;