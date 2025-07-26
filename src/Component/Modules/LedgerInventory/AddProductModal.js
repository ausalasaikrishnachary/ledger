import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import AddCompanyModal from "./AddCompanyModal";
import AddCategoryModal from "./AddCategoryModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../../BaseURL/BaseURL";

const AddProductModal = ({ show, onClose, groupType, productToEdit }) => {
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    if (show) {
      fetchCategories();
      fetchCompanies();
    }
  }, [show]);

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

  // Initialize form state with IDs instead of names
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
    can_be_sold: false,
    description: ""
  });

  // Reset form when productToEdit or groupType changes
  useEffect(() => {
    if (productToEdit) {
      // If editing, populate form with existing product data
      setFormData({
        group_by: productToEdit.group_by || groupType,
        goods_name: productToEdit.goods_name || "",
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
        can_be_sold: productToEdit.can_be_sold || false,
        description: productToEdit.description || ""
      });
    } else {
      // If adding new, reset form with groupType
      setFormData({
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
        can_be_sold: false,
        description: ""
      });
    }
  }, [productToEdit, groupType]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      group_by: groupType
    }));
  }, [groupType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting product data:", formData);

    try {
      let response;
      if (productToEdit) {
        // Edit existing product
        response = await axios.put(
          `${baseurl}/products/${productToEdit.id}`,
          formData,
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log("✅ Product updated successfully!");
      } else {
        // Add new product
        response = await axios.post(
          `${baseurl}/products`,
          formData,
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log("✅ Product added successfully!");
      }

      console.log("Response:", response.data);
      onClose();
      alert(productToEdit ? "Updated successfully!" : "Submitted successfully!");
    } catch (error) {
      console.error("❌ Failed to add product.");

      if (error.response) {
        console.error("Status Code:", error.response.status);
        console.error("Message:", error.response.data?.message || "Server error");
        if (error.response.data?.errors) {
          console.error("Validation Errors:", error.response.data.errors);
        }
      } else if (error.request) {
        console.error("No response from server. Please check your network or server status.");
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  // Update modal title based on mode
  const modalTitle = productToEdit
    ? `Edit Product in ${groupType === "Salescatalog" ? "Sales Catalog" : "Purchased Items"}`
    : `Add Product to ${groupType === "Salescatalog" ? "Sales Catalog" : "Purchased Items"}`;


  return (
    <>
      <Modal show={show} onHide={onClose} size="lg" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <Button variant="outline-primary" size="sm" onClick={() => setShowCategoryModal(true)}>
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
                <Button variant="outline-primary" size="sm" onClick={() => setShowCompanyModal(true)}>
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

            </div>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
      <AddCompanyModal
        show={showCompanyModal}
        onClose={() => setShowCompanyModal(false)}
        onSave={(newCompany) => {
          // After saving, refresh the companies list
          fetchCompanies();
          // Set the newly added company as selected
          setFormData(prev => ({ ...prev, company_id: newCompany.id }));
        }}
      />
      <AddCategoryModal
        show={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        onSave={(newCategory) => {
          // After saving, refresh the categories list
          fetchCategories();
          // Set the newly added category as selected
          setFormData(prev => ({ ...prev, category_id: newCategory.id }));
        }}
      />
    </>
  );
};

export default AddProductModal;