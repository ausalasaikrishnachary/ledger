import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Header from '../../Shared/Header/Header';
import { baseurl } from '../../BaseURL/BaseURL';

const ProductDetails = ({ user }) => {
    const { id } = useParams(); // get product ID from URL
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [productData, setProductData] = useState(null);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${baseurl}/products/${id}`);
                setProductData(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!productData) return <div>Loading product details...</div>;

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
                            <h1 className="mb-4">{productData.goods_name}</h1>

                            <div className="row">
                                {/* Product details column */}
                                <div className="col-md-4">
                                    <div className="card mb-3 p-3 bg-light">
                                        <h4>Product Details</h4>
                                        <hr className="my-2" />
                                        <p><strong>Units:</strong> {productData.unit}</p>
                                        <p><strong>HSN:</strong> {productData.hsn_code}</p>
                                        <p><strong>GST:</strong> {productData.gst_rate}%</p>
                                        <p><strong>Cess:</strong> {productData.cess_rate}%</p>
                                        <p><strong>SKU:</strong> {productData.sku}</p>
                                        {/* <p><strong>Group By:</strong> {productData.group_by}</p>
                                        <p><strong>Company ID:</strong> {productData.company_id}</p> */}
                                        <p><strong>Description:</strong> {productData.description}</p>
                                        {/* <p><strong>Can Be Sold:</strong> {productData.can_be_sold ? 'Yes' : 'No'}</p> */}
                                        <p><strong>Non-Taxable:</strong> {productData.non_taxable ? 'Yes' : 'No'}</p>
                                        <p><strong>Net Price:</strong> ₹{productData.net_price}</p>
                                        <p><strong>Cess Amount:</strong> ₹{productData.cess_amount}</p>
                                        {/* <p><strong>Min Stock Alert:</strong> {productData.min_stock_alert}</p>
                                        <p><strong>Max Stock Alert:</strong> {productData.max_stock_alert}</p> */}
                                        <p><strong>Created By:</strong> N/A</p>
                                        <p><strong>Created On:</strong> {new Date(productData.opening_stock_date).toLocaleDateString('en-IN', {
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric'
                                        })}</p>
                                        <p><strong>Last Updated By:</strong> N/A</p>
                                        <p><strong>Last Updated On:</strong> {new Date(productData.updated_at).toLocaleDateString('en-IN', {
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric'
                                        })}</p>
                                    </div>
                                </div>

                                {/* Main content column */}
                                <div className="col-md-8">
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
                                                        <td>{productData.category_id}</td>
                                                        <td>{productData.goods_name}</td>
                                                        <td>{productData.description}</td>
                                                        <td>{productData.price}</td>
                                                        <td>{productData.opening_stock}</td>
                                                        <td>{productData.stock_in || 0}</td>
                                                        <td>{productData.stock_out || 0}</td>
                                                        <td>{productData.balance_stock || "N/A"}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Placeholder Recent Sales and Purchases */}
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
                                                        <td>{productData.unit}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="card p-3">
                                        <h5>Audit Log</h5>
                                        <hr className="my-2" />
                                        <p>on {productData.opening_stock_date}</p>
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
