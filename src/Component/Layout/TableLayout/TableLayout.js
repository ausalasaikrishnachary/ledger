// src/Layout/TableLayout.js
import React from 'react';
import { Button, Table, Container, Pagination } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import DateRangeDropdown from '../../Modules/LedgerContact/DateRangeDropdown';

const TableLayout = ({
  title,
  addButtonText,
  onAddClick,
  columns,
  data,
  onEdit,
  onDelete,
  onView,
  showDateRange = true,
  showDownload = true,
  onDownload,
  onDateRangeChange
}) => {
  return (
    <Container fluid className="p-3">
      <h2 className="mb-3">{title}</h2>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          {showDateRange && (
            <div className="me-3">
              <DateRangeDropdown onChange={onDateRangeChange} />
            </div>
          )}
          {showDownload && (
            <Button variant="info" className="me-3 text-white" onClick={onDownload}>
              Download Report
            </Button>
          )}
        </div>
        <Button variant="success" onClick={onAddClick}>
          {addButtonText}
        </Button>
      </div>

      <Table bordered striped responsive className="text-center">
        <thead className="table-dark">
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key, i) => (
                <td key={i}>{item[key]}</td>
              ))}
              <td>
                {onView && (
                  <Button variant="link" className="p-1 text-info" onClick={() => onView(item)}>
                    <FaEye />
                  </Button>
                )}
                {onEdit && (
                  <Button variant="link" className="p-1 text-primary" onClick={() => onEdit(item)}>
                    <FaEdit />
                  </Button>
                )}
                {onDelete && (
                  <Button variant="link" className="p-1 text-danger" onClick={() => onDelete(item)}>
                    <FaTrash />
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center mt-3">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </Container>
  );
};

export default TableLayout;