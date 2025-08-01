import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, InputGroup } from 'react-bootstrap';
import './CreateInvoice.css';
import Sidebar from '../../../src/Component/Shared/Sidebar/Sidebar';
import Header from '../../../src/Component/Shared/Header/Header';
import { FaEdit } from "react-icons/fa";

const CreateInvoice = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [inputName, setInputName] = useState("");
  const [selected, setSelected] = useState(false);

  const handleSearch = () => {
    if (inputName.trim().toLowerCase() === "dummy") {
      setSelected(true);
    } else {
      setSelected(false);
    }
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
        <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}></div>
        <Container fluid className="invoice-container">
          <h3 className="mb-3">Create Invoice</h3>
          <div className="invoice-box p-3">
            <h5 className="section-title">Create Invoice</h5>

            <Row className="mb-3 company-info">
              <Col md={8}>
                <div>
                  <strong>J P MORGAN SERVICES INDIA PRIVATE LIMITED</strong><br />
                  Prestige, Technology Park, Sarjapur Outer Ring Road<br />
                  Email: sumukhusr7@gmail.com<br />
                  Phone: 3456549876543<br />
                  GSTIN: 29AABCD0503B1ZG
                </div>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-2">
                  <Form.Control value="INV01" readOnly />
                  <Form.Label>Invoice No</Form.Label>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control type="date" value="2025-07-26" />
                  <Form.Label>Invoice Date</Form.Label>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="date" value="2025-08-26" />
                  <Form.Label>Validity Date</Form.Label>
                </Form.Group>
              </Col>
            </Row>

            <div style={{ border: "1px solid #ccc" }}>
              <Row noGutters>
                <Col md={4} style={{ borderRight: "1px solid #ccc", padding: "15px" }}>
                  {!selected ? (
                    // Initial Search Box Layout
                    <>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>Supplier info</strong>
                        <Button variant="info" size="sm">+ New</Button>
                      </div>
                      <Form.Control
                        placeholder="Search by name"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        className="mb-2"
                      />
                      <Button variant="primary" size="sm" onClick={handleSearch}>
                        Search
                      </Button>
                    </>
                  ) : (
                    // Supplier Info Details After Search
                    <>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>Supplier/Customer Info</strong>
                        <Button variant="info" size="sm">
                          <FaEdit />
                        </Button>
                      </div>
                      <div>
                        <div>Vamshi</div>
                        <div>Business Name : business name</div>
                        <div>Telangana</div>
                        <div>GSTIN :</div>
                      </div>
                    </>
                  )}
                </Col>

                {/* Billing Address */}
                {selected && (
                  <Col md={4} style={{ borderRight: "1px solid #ccc", padding: "15px" }}>
                    <strong>Billing Address</strong>
                    <div className="mt-2">
                      <div>5-300001, Jyoti Nagar, chandrampet, Rajanna sircilla</div>
                      <div style={{ color: "red" }}>Address Line2</div>
                      <div>Hyderabad-501505</div>
                    </div>
                  </Col>
                )}

                {/* Shipping Address */}
                {selected && (
                  <Col md={4} style={{ padding: "15px" }}>
                    <strong>Shipping Address</strong>
                    <div className="mt-2">
                      <div>5-300001, Jyoti Nagar, chandrampet, Rajanna sircilla</div>
                      <div style={{ color: "red" }}>Address Line2</div>
                      <div>Hyderabad-501505</div>
                    </div>
                  </Col>
                )}
              </Row>
            </div>

            <div className="item-section mb-3">
              <Row className="align-items-end">
                <Col md={2}><Form.Label>Item</Form.Label> <div className="text-primary">+ New Item</div></Col>
                <Col md={1}><Form.Label>Qty</Form.Label><Form.Control defaultValue="1" /></Col>
                <Col md={2}><Form.Label>Price</Form.Label><Form.Control /></Col>
                <Col md={2}><Form.Label>Discount</Form.Label><Form.Control /></Col>
                <Col md={2}><Form.Label>GST</Form.Label><Form.Control /></Col>
                <Col md={1}><Button variant="success">Add</Button></Col>
              </Row>
              <Row className="mt-2">
                <Col><Form.Control placeholder="Product" /></Col>
                <Col><Form.Control placeholder="Product description" /></Col>
              </Row>
            </div>

            <Table bordered responsive size="sm" className="mb-3">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRODUCT DESC</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                  <th>DISCOUNT</th>
                  <th>GST</th>
                  <th>CGST</th>
                  <th>SGST</th>
                  <th>IGST</th>
                  <th>CESS</th>
                  <th>TOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan={12} className="text-center">No items added</td></tr>
              </tbody>
            </Table>

            <Row className="mb-3">
              <Col md={8}>
                <Form.Group>
                  <Form.Label>Note</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <div>Taxable Amount</div>
                <div>Total GST</div>
                <div>Total Cess</div>
                <Form.Select className="my-2">
                  <option>Select Additional Charges</option>
                </Form.Select>
                <div className="fw-bold">Grand Total: ₹0.00</div>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <h6>Transportation Details</h6>
                <Form.Control as="textarea" placeholder="Terms and Conditions" rows={2} />
              </Col>
              <Col md={6}>
                <h6>Other Details</h6>
                <p>For</p>
                <p>Authorized Signatory</p>
              </Col>
            </Row>

            <div className="text-center">
              <Button variant="primary" className="me-3">Submit</Button>
              <Button variant="danger">Cancel</Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CreateInvoice;
