import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Header from '../Shared/Header/Header';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Receivables & Payables',
    },
    plotOptions: {
      pie: {
        innerSize: '60%',
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.y !== 0 ? `${this.point.name}: ${this.y}` : '';
          },
        },
      },
    },
    series: [
      {
        name: 'Amount',
        data: [
          { name: 'Receivables', y: 0, color: '#00c9f2' },
          { name: 'Payables', y: 0, color: '#f5b041' },
        ],
      },
    ],
    credits: {
      enabled: true,
      href: 'https://www.highcharts.com',
      text: 'Highcharts.com',
    },
  };

  return (
    <div className="dashboard-container">
      <Header 
        user={user} 
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <div className="content-wrapper">
        <div className={`pcoded-navbar ${sidebarCollapsed ? 'navbar-collapsed' : ''}`}>
          <Sidebar 
            user={user} 
            collapsed={sidebarCollapsed} 
          />
        </div>
        <div className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <Container fluid className="p-3" style={{ marginTop: '60px' }}>
            {/* Navigation Tabs */}
            <Nav variant="tabs" defaultActiveKey="/revenue" className="mb-3">
              <Nav.Item>
                <Nav.Link active>Revenue</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Expenses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Banking</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Cards and Date Picker */}
            <Row className="align-items-center mb-4">
              <Col md={2} sm={6} xs={12} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Bank Balance</Card.Title>
                    <Card.Subtitle className="text-muted">Current FY</Card.Subtitle>
                    <h6 className="text-purple mt-2">INR</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={2} sm={6} xs={12} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Cash Balance</Card.Title>
                    <Card.Subtitle className="text-muted">Current FY</Card.Subtitle>
                    <h6 className="text-success mt-2">INR</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={2} sm={6} xs={12} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Receivables</Card.Title>
                    <Card.Subtitle className="text-muted">Current FY</Card.Subtitle>
                    <h6 className="text-danger mt-2">INR 0.00</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={2} sm={6} xs={12} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Payables</Card.Title>
                    <Card.Subtitle className="text-muted">Current FY</Card.Subtitle>
                    <h6 className="text-warning mt-2">INR 0.00</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={{ span: 4 }} className="text-end mb-3">
                <div className="d-inline-block border px-3 py-2 rounded bg-light">
                  <i className="bi bi-calendar"></i> July 1, 2025 - July 31, 2025 ▾
                </div>
              </Col>
            </Row>

            {/* Donut Chart */}
            <Card className="p-3 shadow-sm">
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;