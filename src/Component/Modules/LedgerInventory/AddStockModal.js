// AddStockModal.js
import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AddStockModal = ({ show, onClose, currentStock = 0, onSave }) => {
  const [quantity, setQuantity] = useState("");
  const [remark, setRemark] = useState("");
  const today = new Date().toLocaleDateString("en-GB"); // format: dd-mm-yyyy

  const handleSave = () => {
    if (quantity && !isNaN(quantity)) {
      onSave({ quantity: parseInt(quantity), remark });
      setQuantity("");
      setRemark("");
      onClose();
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add Stock</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col>
            <strong>Current Stock</strong>
            <div>{currentStock}</div>
          </Col>
          <Col>
            <strong>Date</strong>
            <div>{today}</div>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Enter Quantity to Add</Form.Label>
          <Form.Control
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Remark (Optional)</Form.Label>
          <Form.Control
            placeholder="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="dark" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddStockModal;
