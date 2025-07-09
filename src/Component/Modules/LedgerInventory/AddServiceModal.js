// AddServiceModal.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddServiceModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add Services</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="row mb-3">
            <div className="col">
              <Form.Control placeholder="Service Name" />
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
                <option>GST Rate to be Applied</option>
                <option>5%</option>
                <option>12%</option>
                <option>18%</option>
                <option>28%</option>
              </Form.Select>
            </div>
            <div className="col">
              <Form.Control placeholder="Net Price | GST" />
            </div>
            <div className="col">
              <Form.Control placeholder="SAC Code" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <Form.Control placeholder="CESS Rate%" />
            </div>
            <div className="col">
              <Form.Control placeholder="CESS Amount" />
            </div>
            <div className="col">
              <Form.Control placeholder="Non Taxable" />
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Description" />
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

export default AddServiceModal;
