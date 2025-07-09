// AddProductModal.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

const AddProductModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add Products</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="row mb-3">
            <div className="col">
              <Form.Control placeholder="Goods Name" />
            </div>
            <div className="col d-flex">
              <Form.Select className="me-1">
                <option>Select Category</option>
              </Form.Select>
              <Button variant="outline-primary" size="sm">
                <BsPlus />
              </Button>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col d-flex">
              <Form.Select className="me-1">
                <option>Company Name</option>
              </Form.Select>
              <Button variant="outline-primary" size="sm">
                <BsPlus />
              </Button>
            </div>
            <div className="col">
              <Form.Control placeholder="Price" />
            </div>
            <div className="col">
              <Form.Select>
                <option>Inclusive of GST</option>
                <option>Exclusive of GST</option>
              </Form.Select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <Form.Select>
                <option>GST Rate 18%</option>
              </Form.Select>
            </div>
            <div className="col">
              <Form.Control placeholder="Non Taxable" />
            </div>
            <div className="col">
              <Form.Control placeholder="Net Price | GST" />
            </div>
            <div className="col">
              <Form.Control placeholder="HSN Code" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <Form.Select>
                <option>UNT-UNITS</option>
              </Form.Select>
            </div>
            <div className="col">
              <Form.Control placeholder="CESS Rate%" />
            </div>
            <div className="col">
              <Form.Control placeholder="CESS Amount" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <Form.Control placeholder="SKU" />
            </div>
            <div className="col">
              <Form.Control placeholder="Opening Stock" />
            </div>
            <div className="col">
              <Form.Control type="date" placeholder="Opening Stock Date" />
            </div>
            <div className="col">
              <Form.Control placeholder="Min Stock Alert" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <Form.Control placeholder="Max Stock Alert" />
            </div>
            <div className="col d-flex align-items-center">
              <Form.Check type="checkbox" label="Can be Sold" />
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={2} placeholder="Description" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;