import React from 'react';
import { Button, Table, Container, Pagination, Form, InputGroup } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaSearch } from 'react-icons/fa';
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
  onDateRangeChange,
  searchTerm,
  onSearchChange,
  currentPage,
  totalPages,
  onPageChange
}) => {
  // Create pagination items
  let paginationItems = [];
  const maxVisiblePages = 5; // Number of visible page buttons
  
  if (totalPages > 1) {
    // Always show first page
    paginationItems.push(
      <Pagination.Item 
        key={1} 
        active={1 === currentPage}
        onClick={() => onPageChange(1)}
      >
        {1}
      </Pagination.Item>
    );

    // Calculate range of pages to show
    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

    // Adjust if we're at the start or end
    if (currentPage <= Math.floor(maxVisiblePages / 2) + 1) {
      endPage = Math.min(totalPages - 1, maxVisiblePages);
    }
    if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
      startPage = Math.max(2, totalPages - maxVisiblePages + 1);
    }

    // Add ellipsis if needed after first page
    if (startPage > 2) {
      paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" />);
    }

    // Add middle pages
    for (let number = startPage; number <= endPage; number++) {
      paginationItems.push(
        <Pagination.Item 
          key={number} 
          active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    // Add ellipsis if needed before last page
    if (endPage < totalPages - 1) {
      paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" />);
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      paginationItems.push(
        <Pagination.Item 
          key={totalPages} 
          active={totalPages === currentPage}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }
  }

  return (
    <Container fluid className="p-3">
      <h2 className="mb-3">{title}</h2>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          {/* Search Field */}
          <div className="me-3" style={{ width: '250px' }}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder={`Search ${title.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </div>
          
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
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="customer-link">{item.name}</div>
                  <div>{item.business_name}</div>
                </td>
                <td>
                  <div>{item.mobile_number}</div>
                  <div>{item.email}</div>
                </td>
                <td>
                  <div>{item.shipping_city}</div>
                </td>
                <td>
                  <div>PAN: {item.pan || 'N/A'}</div>
                  <div>GSTIN: {item.gstin || 'N/A'}</div>
                </td>
                <td>
                  <div>{item.created_by || 'Admin'}</div>
                  <div>{item.created_at ? new Date(item.created_at).toISOString().split('T')[0] : 'N/A'}</div>
                </td>
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
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No {title.toLowerCase()} found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          <Pagination>
            <Pagination.First 
              onClick={() => onPageChange(1)} 
              disabled={currentPage === 1} 
            />
            <Pagination.Prev 
              onClick={() => onPageChange(currentPage - 1)} 
              disabled={currentPage === 1} 
            />
            {paginationItems}
            <Pagination.Next 
              onClick={() => onPageChange(currentPage + 1)} 
              disabled={currentPage === totalPages} 
            />
            <Pagination.Last 
              onClick={() => onPageChange(totalPages)} 
              disabled={currentPage === totalPages} 
            />
          </Pagination>
        </div>
      )}
    </Container>
  );
};

export default TableLayout;