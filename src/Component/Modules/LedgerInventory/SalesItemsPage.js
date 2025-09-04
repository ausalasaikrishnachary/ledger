import React, { useState, useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import AddCompanyModal from "./AddCompanyModal";
import AddCategoryModal from "./AddCategoryModal";
import axios from "axios";
import { baseurl } from "../../BaseURL/BaseURL";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Header from "../../Shared/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";

const SalesItemsPage = ({ groupType = "Salescatalog", user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const productToEdit = location.state?.productToEdit || null;

  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [maintainBatch, setMaintainBatch] = useState(false);
  const [batches, setBatches] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchCompanies();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${baseurl}/categories`);
      setCategoryOptions(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(`${baseurl}/companies`);
      setCompanyOptions(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const [formData, setFormData] = useState({
    group_by: groupType,
    goods_name: "",
    category_id: "",
    company_id: "",
    price: "",
    inclusive_gst: "",
    gst_rate: "",
    non_taxable: "",
    net_price: "",
    hsn_code: "",
    unit: "UNT-UNITS",
    cess_rate: "",
    cess_amount: "",
    sku: "",
    opening_stock: "",
    opening_stock_date: "",
    min_stock_alert: "",
    max_stock_alert: "",
    description: "",
    maintain_batch: false,
    batches: []
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        group_by: productToEdit.group_by || groupType,
        goods_name: productToEdit.goods_name || productToEdit.name || "",
        category_id: productToEdit.category_id || "",
        company_id: productToEdit.company_id || "",
        price: productToEdit.price || "",
        inclusive_gst: productToEdit.inclusive_gst || "",
        gst_rate: productToEdit.gst_rate || "",
        non_taxable: productToEdit.non_taxable || "",
        net_price: productToEdit.net_price || "",
        hsn_code: productToEdit.hsn_code || "",
        unit: productToEdit.unit || "UNT-UNITS",
        cess_rate: productToEdit.cess_rate || "",
        cess_amount: productToEdit.cess_amount || "",
        sku: productToEdit.sku || "",
        opening_stock: productToEdit.opening_stock || "",
        opening_stock_date: productToEdit.opening_stock_date || "",
        min_stock_alert: productToEdit.min_stock_alert || "",
        max_stock_alert: productToEdit.max_stock_alert || "",
        description: productToEdit.description || "",
        maintain_batch: productToEdit.maintain_batch || false,
        batches: productToEdit.batches || []
      });
      setMaintainBatch(productToEdit.maintain_batch || false);
      setBatches(productToEdit.batches || []);
    }
  }, [productToEdit, groupType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleBatchChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...batches];
    updated[index][name] = value;
    setBatches(updated);
    setFormData((prev) => ({ ...prev, batches: updated }));
  };

  const addNewBatch = () => {
    const newBatch = {
      id: Date.now(),
      batchNumber: "",
      mfgDate: "",
      expDate: "",
      quantity: "",
      costPrice: "",
      sellingPrice: "",
      purchasePrice: "",
      mrp: "",
      batchPrice: ""
    };
    const updated = [...batches, newBatch];
    setBatches(updated);
    setFormData((prev) => ({ ...prev, batches: updated }));
  };

  const removeBatch = (id) => {
    const updated = batches.filter((b) => b.id !== id);
    setBatches(updated);
    setFormData((prev) => ({ ...prev, batches: updated }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Copy formData but remove batches and maintain_batch before sending
    const dataToSend = { ...formData };
    delete dataToSend.batches;
    delete dataToSend.maintain_batch; // optional, if you don't want to store this

    if (productToEdit) {
      await axios.put(`${baseurl}/products/${productToEdit.id}`, dataToSend, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Product updated successfully!");
    } else {
      await axios.post(`${baseurl}/products`, dataToSend, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Product added successfully!");
    }

    navigate('/sales-items');
  } catch (error) {
    console.error("Failed to add/update product.", error);
    alert("Failed to add/update product.");
  }
};


  const pageTitle = productToEdit
    ? `Edit Product in Sales Catalog`
    : `Add Product to Sales Catalog`;

  return (
    <div className="dashboard-container">
      <Header
        user={user}
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="content-wrapper">
        <div
          className={`pcoded-navbar ${sidebarCollapsed ? "navbar-collapsed" : ""}`}
        >
          <Sidebar user={user} collapsed={sidebarCollapsed} />
        </div>

        <div className={`main-content ${sidebarCollapsed ? "collapsed" : ""}`}>
          <div className="container-fluid mt-3 purchased-items-wrapper">
            <div className="container mt-4">
              <h3 className="mb-4">{pageTitle}</h3>
              <Form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <Form.Control
                      placeholder="Product Name"
                      name="goods_name"
                      value={formData.goods_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col d-flex">
                    <Form.Select
                      className="me-1"
                      name="category_id"
                      value={formData.category_id}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categoryOptions.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.category_name}
                        </option>
                      ))}
                    </Form.Select>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => setShowCategoryModal(true)}
                    >
                      <BsPlus />
                    </Button>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col d-flex">
                    <Form.Select
                      className="me-1"
                      name="company_id"
                      value={formData.company_id}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Company Name</option>
                      {companyOptions.map((company) => (
                        <option key={company.id} value={company.id}>
                          {company.company_name}
                        </option>
                      ))}
                    </Form.Select>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => setShowCompanyModal(true)}
                    >
                      <BsPlus />
                    </Button>
                  </div>
                  <div className="col">
                    <Form.Control
                      placeholder="Price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <Form.Select
                      name="inclusive_gst"
                      value={formData.inclusive_gst}
                      onChange={handleChange}
                    >
                      <option value="Inclusive">Inclusive of GST</option>
                      <option value="Exclusive">Exclusive of GST</option>
                    </Form.Select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <Form.Select
                      name="gst_rate"
                      value={formData.gst_rate}
                      onChange={handleChange}
                    >
                      <option value="18%">GST Rate 18%</option>
                      <option value="12%">GST Rate 12%</option>
                      <option value="5%">GST Rate 5%</option>
                      <option value="0%">GST Rate 0%</option>
                    </Form.Select>
                  </div>
                  <div className="col">
                    <Form.Control
                      placeholder="Non Taxable"
                      name="non_taxable"
                      type="text"
                      value={formData.non_taxable}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <Form.Control
                      placeholder="Net Price | GST"
                      name="net_price"
                      type="number"
                      value={formData.net_price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <Form.Control
                      placeholder="HSN Code"
                      name="hsn_code"
                      value={formData.hsn_code}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <Form.Select
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                    >
                      <option>UNT-UNITS</option>
                      <option>KG-Kilograms</option>
                      <option>L-Liters</option>
                      <option>M-Meters</option>
                    </Form.Select>
                  </div>
                  <div className="col">
                    <Form.Control
                      placeholder="CESS Rate%"
                      name="cess_rate"
                      type="number"
                      value={formData.cess_rate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <Form.Control
                      placeholder="CESS Amount"
                      name="cess_amount"
                      type="number"
                      value={formData.cess_amount}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <Form.Control
                      placeholder="SKU"
                      name="sku"
                      value={formData.sku}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <Form.Control
                      placeholder="Opening Stock"
                      name="opening_stock"
                      type="number"
                      value={formData.opening_stock}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <Form.Control
                      type="date"
                      placeholder="Opening Stock Date"
                      name="opening_stock_date"
                      value={formData.opening_stock_date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <Form.Control
                      placeholder="Min Stock Alert"
                      name="min_stock_alert"
                      type="number"
                      value={formData.min_stock_alert}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <Form.Control
                      placeholder="Max Stock Alert"
                      name="max_stock_alert"
                      type="number"
                      value={formData.max_stock_alert}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      label="Maintain Batch"
                      name="maintain_batch"
                      checked={formData.maintain_batch}
                      onChange={(e) => {
                        setMaintainBatch(e.target.checked);
                        handleChange(e);
                      }}
                    />
                  </div>
                </div>

                <Form.Group className="mt-3 mb-2">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Group>

                {maintainBatch && (
                  <div className="border border-dark p-3 mb-3">
                    <h5>Batch Details</h5>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Batch No.</th>
                          <th>Exp. Dt</th>
                          <th>Mfg. Dt</th>
                          <th>Sale Price</th>
                          <th>P. Price</th>
                          <th>M.R.P</th>
                          <th>B. Price</th>
                          <th>Stock</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {batches.map((batch, index) => (
                          <tr key={batch.id}>
                            <td>
                              <Form.Control
                                placeholder="Batch Number"
                                name="batchNumber"
                                value={batch.batchNumber}
                                onChange={(e) => handleBatchChange(index, e)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="date"
                                name="expDate"
                                value={batch.expDate}
                                onChange={(e) => handleBatchChange(index, e)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="date"
                                name="mfgDate"
                                value={batch.mfgDate}
                                onChange={(e) => handleBatchChange(index, e)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                name="sellingPrice"
                                value={batch.sellingPrice}
                                onChange={(e) => handleBatchChange(index, e)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                name="purchasePrice"
                                value={batch.purchasePrice}
                                onChange={(e) => handleBatchChange(index, e)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                name="mrp"
                                value={batch.mrp}
                                onChange={(e) => handleBatchChange(index, e)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                name="batchPrice"
                                value={batch.batchPrice}
                                onChange={(e) => handleBatchChange(index, e)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                type="number"
                                name="quantity"
                                value={batch.quantity}
                                onChange={(e) => handleBatchChange(index, e)}
                              />
                            </td>
                            <td>
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeBatch(batch.id)}
                              >
                                Remove
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Button variant="primary" onClick={addNewBatch}>
                      Add Batch
                    </Button>
                  </div>
                )}

                <div className="d-flex justify-content-end">
                  <Button
                    variant="secondary"
                    onClick={() => navigate('/sales-items')}
                    className="me-2"
                  >
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>

              <AddCompanyModal
                show={showCompanyModal}
                onClose={() => setShowCompanyModal(false)}
                onSave={(newCompany) => {
                  fetchCompanies();
                  setFormData((prev) => ({
                    ...prev,
                    company_id: newCompany.id
                  }));
                }}
              />
              <AddCategoryModal
                show={showCategoryModal}
                onClose={() => setShowCategoryModal(false)}
                onSave={(newCategory) => {
                  fetchCategories();
                  setFormData((prev) => ({
                    ...prev,
                    category_id: newCategory.id
                  }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesItemsPage;