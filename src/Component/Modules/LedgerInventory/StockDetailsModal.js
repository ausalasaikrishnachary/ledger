// StockDetailsModal.js
import React from "react";
import { Modal } from "react-bootstrap";

const StockDetailsModal = ({ show, onClose, stockData }) => {
  const { productName, openingStock, stockIn, stockOut, availableStock } = stockData;

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Stock Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Product Name:</strong> {productName}</p>
        <p><strong>Opening Stock:</strong> {openingStock}</p>
        <p><strong>Stock In:</strong> {stockIn}</p>
        <p><strong>Stock Out:</strong> {stockOut}</p>
        <p><strong>Available Stock:</strong> {availableStock}</p>
      </Modal.Body>
    </Modal>
  );
};

export default StockDetailsModal;
