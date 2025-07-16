import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';

const ProductDetails = ({ user }) => {
        const { productName } = useParams();
        const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

        // Mock data - in a real app, you'd fetch this based on the productName
        const productData = {
                name: productName,
                category: "mobile",
                displayName: "PRODUCT NAME",
                fullName: "phone 16",
                price: "100,000.00",
                openingStock: 10,
                stockIn: 5,
                stockOut: 0,
                balanceStock: 15,
                units: "PCS-PIECES",
                hsn: "85171300",
                gst: "18%",
                cess: "0",
                createdBy: "iiCDiels",
                createdOn: "2025-07-09",
                lastUpdatedBy: ""
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
<div className="container-fluid mt-3">
    <div className="card p-3">
        <h1 className="mb-4">{productData.name}</h1>

        <div className="row">
            {/* Product details column - md-4 */}
            <div className="col-md-4">
                <div className="card mb-3 p-3 bg-light">
                    <h4>Product Details</h4>
                    <hr className="my-2" />
                    <p><strong>Units:</strong> {productData.units}</p>
                    <p><strong>HSN:</strong> {productData.hsn}</p>
                    <p><strong>GST:</strong> {productData.gst}</p>
                    <p><strong>Cess:</strong> {productData.cess}</p>
                    <p><strong>Created By:</strong> {productData.createdBy}</p>
                    <p><strong>Created On:</strong> {productData.createdOn}</p>
                    <p><strong>Last Updated By:</strong> {productData.lastUpdatedBy || "N/A"}</p>
                </div>
            </div>

            {/* Main content column - md-8 */}
            <div className="col-md-8">
                {/* Product Stock Details Card */}
                <div className="card mb-4 p-3">
                    <h5>Product Stock Details</h5>
                    <hr className="my-2" />
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Display Name</th>
                                    <th>Full Name</th>
                                    <th>PRICE PER UNIT</th>
                                    <th>OPENING STOCK</th>
                                    <th>STOCK IN</th>
                                    <th>STOCK OUT</th>
                                    <th>BALANCE STOCK</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{productData.category}</td>
                                    <td>{productData.displayName}</td>
                                    <td>{productData.fullName}</td>
                                    <td>{productData.price}</td>
                                    <td>{productData.openingStock}</td>
                                    <td>{productData.stockIn}</td>
                                    <td>{productData.stockOut}</td>
                                    <td>{productData.balanceStock}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Sales Card */}
                <div className="card mb-4 p-3">
                    <h5>Recent Sales</h5>
                    <hr className="my-2" />
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Invoice</th>
                                    <th>Invoice Date</th>
                                    <th>Customer Name</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="4">No sales recorded for this product.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Purchases Card */}
                <div className="card mb-4 p-3">
                    <h5>Recent Purchases</h5>
                    <hr className="my-2" />
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Purchase Invoice</th>
                                    <th>Invoice Date</th>
                                    <th>Supplier Name</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01/01/1970</td>
                                    <td></td>
                                    <td></td>
                                    <td>Units</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Audit Log Card */}
                <div className="card p-3">
                    <h5>Audit Log</h5>
                    <hr className="my-2" />
                    <p>on {productData.createdOn} 05:51:55</p>
                </div>
            </div>
        </div>
    </div>
</div>
                                </div>
                        </div>
                </div>
        );
};

export default ProductDetails;