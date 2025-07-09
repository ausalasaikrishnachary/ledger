// AddCompanyModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddCompanyModal = ({ show, onClose, onSave }) => {
  const [companyName, setCompanyName] = useState("");

  const handleSave = () => {
    if (companyName.trim() !== "") {
      onSave(companyName);
      setCompanyName("");
      onClose();
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add Company Name</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Group>
        <Button variant="info" onClick={handleSave}>
          Save
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default AddCompanyModal;
