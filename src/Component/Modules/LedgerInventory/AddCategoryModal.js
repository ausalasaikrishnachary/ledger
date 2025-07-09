// AddCategoryModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddCategoryModal = ({ show, onClose, onSave }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSave = () => {
    if (categoryName.trim() !== "") {
      onSave(categoryName);
      setCategoryName("");
      onClose();
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Form.Group>
        <Button variant="info" onClick={handleSave}>
          Save
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default AddCategoryModal;
