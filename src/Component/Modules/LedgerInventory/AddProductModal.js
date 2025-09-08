import React, { useState, useEffect } from "react";
import { Button, Form, Table, Alert } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import AddCompanyModal from "./AddCompanyModal";
import AddCategoryModal from "./AddCategoryModal";
import axios from "axios";
import { baseurl } from "../../BaseURL/BaseURL";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Header from "../../Shared/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";

const AddProductPage = ({ groupType = "Purchaseditems", user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const productToEdit = location.state?.productToEdit || null;
  console.log("productToEdit=",productToEdit)

  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [maintainBatch, setMaintainBatch] = useState(false);
  const [batches, setBatches] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "success" });

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
      showAlert("Error fetching categories", "danger");
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(`${baseurl}/companies`);
      setCompanyOptions(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
      showAlert("Error fetching companies", "danger");
    }
  };

  const showAlert = (message, variant = "success") => {
    setAlert({ show: true, message, variant });
    setTimeout(() => setAlert({ show: false, message: "", variant: "success" }), 3000);
  };

  const createDefaultBatch = () => {
    return {
      id: Date.now(),
      batchNumber: "",
      mfgDate: "",
      expDate: "",
      quantity: "",
      costPrice: "",
      sellingPrice: formData.price || "",
      purchasePrice: "",
      mrp: "",
      batchPrice: ""
    };
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
    opening_stock_date: new Date().toISOString().split('T')[0],
    min_stock_alert: "",
    max_stock_alert: "",
    description: "",
    maintain_batch: false,
    can_be_sold:false
  });

  useEffect(() => {
    if (productToEdit) {
      // Fetch batches for this product
      const fetchBatches = async () => {
        try {
          const response = await axios.get(`${baseurl}/products/${productToEdit.id}/batches`);

          // Map backend field names to frontend field names
          const mappedBatches = response.data && response.data.length > 0
            ? response.data.map(batch => ({
              id: batch.id,
              batchNumber: batch.batch_number || "",
              mfgDate: batch.mfg_date ? batch.mfg_date.split('T')[0] : "",
              expDate: batch.exp_date ? batch.exp_date.split('T')[0] : "",
              quantity: batch.quantity || "",
              costPrice: batch.cost_price || "",
              sellingPrice: batch.selling_price || formData.price || "",
              purchasePrice: batch.purchase_price || "",
              mrp: batch.mrp || "",
              batchPrice: batch.batch_price || ""
            }))
            : [createDefaultBatch()];

          setBatches(mappedBatches);
          console.log("mappedBatches=", mappedBatches);
        } catch (error) {
          console.error("Error fetching batches:", error);
          setBatches([createDefaultBatch()]);
        }
      };

      fetchBatches();

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
        opening_stock_date: productToEdit.opening_stock_date || new Date().toISOString().split('T')[0],
        min_stock_alert: productToEdit.min_stock_alert || "",
        max_stock_alert: productToEdit.max_stock_alert || "",
        description: productToEdit.description || "",
        maintain_batch: productToEdit.maintain_batch || false,
         can_be_sold: productToEdit.can_be_sold || false

      });
      setMaintainBatch(productToEdit.maintain_batch || false);
    }
  }, [productToEdit, groupType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "maintain_batch") {
      // When maintain_batch is checked, add a default batch if batches array is empty
      if (checked && batches.length === 0) {
        const defaultBatch = createDefaultBatch();
        const updatedBatches = [...batches, defaultBatch];
        setBatches(updatedBatches);
      }
      setFormData(prev => ({ ...prev, maintain_batch: checked }));
      setMaintainBatch(checked);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }));
    }
  };

  const handleBatchChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...batches];
    updated[index][name] = value;
    setBatches(updated);
  };

  const addNewBatch = () => {
    const newBatch = createDefaultBatch();
    const updated = [...batches, newBatch];
    setBatches(updated);
  };

  const removeBatch = (id) => {
    if (batches.length <= 1 && maintainBatch) {
      showAlert("At least one batch is required when Maintain Batch is enabled.", "warning");
      return;
    }
    const updated = batches.filter((b) => b.id !== id);
    setBatches(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate batches if maintain_batch is enabled
    if (maintainBatch) {
      const invalidBatches = batches.filter(batch =>
        !batch.batchNumber || !batch.quantity || !batch.sellingPrice
      );

      if (invalidBatches.length > 0) {
        showAlert("Please fill all required fields in batch details (Batch Number, Quantity, and Selling Price)", "warning");
        return;
      }
    }

    try {
      // Prepare batches data with backend field names
      const batchesForBackend = maintainBatch ? batches.map(batch => ({
        batchNumber: batch.batchNumber,
        mfgDate: batch.mfgDate || null,
        expDate: batch.expDate || null,
        quantity: batch.quantity,
        costPrice: batch.costPrice || 0,
        sellingPrice: batch.sellingPrice,
        purchasePrice: batch.purchasePrice || 0,
        mrp: batch.mrp || 0,
        batchPrice: batch.batchPrice || 0
      })) : [];

      const dataToSend = {
        ...formData,
        ...(maintainBatch && { batches: batchesForBackend })
      };

      if (productToEdit) {
        await axios.put(`${baseurl}/products/${productToEdit.id}`, dataToSend, {
          headers: { "Content-Type": "application/json" },
        });
        showAlert("Product updated successfully!");
      } else {
        await axios.post(`${baseurl}/products`, dataToSend, {
          headers: { "Content-Type": "application/json" },
        });
        showAlert("Product added successfully!");
      }

      setTimeout(() => navigate('/purchased-items'), 1500);
    } catch (error) {
      console.error("Failed to add/update product.", error);
      showAlert("Failed to add/update product.", "danger");
    }
  };

  const pageTitle = productToEdit
    ? `Edit Product in Purchased Items`
    : `Add Product to Purchased Items`;



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

                  {groupType !== "Salescatalog" && (
                    <div className="col d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Can be Sold"
                        name="can_be_sold"
                        checked={formData.can_be_sold}
                        onChange={handleChange}
                      />
                    </div>
                  )}

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
                          <th>Batch No.*</th>
                          <th>Exp. Date</th>
                          <th>Mfg. Date</th>
                          <th>Sale Price*</th>
                          <th>Purchase Price</th>
                          <th>M.R.P</th>
                          <th>Batch Price</th>
                          <th>Stock*</th>
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
                                required
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
                                required
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
                                required
                              />
                            </td>
                            <td>
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeBatch(batch.id)}
                                disabled={batches.length <= 1}
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
                    <div className="mt-2 text-muted">
                      <small>* indicates required fields</small>
                    </div>
                  </div>
                )}

                <div className="d-flex justify-content-end">
                  <Button
                    variant="secondary"
                    onClick={() => navigate('/purchased-items')}
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

export default AddProductPage;