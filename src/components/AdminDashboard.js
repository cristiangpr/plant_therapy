import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import  Navbar  from "./Navbar"

const AdminDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header name">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link-dash" to="/create_category">
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link-dash" to="/create_product">
                            Create Product
                        </Link>
                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link-dash" to="/add_inventory">
                            Manage Inventory
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link-dash" to="/add_coupon">
                        Create Coupon
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link-dash" to="/admin_orders">
                            View Orders
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link-dash" to="/admin_products">
                            Manage Products
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link-dash" to="/admin_users">
                            Manage Users
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header name">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === "Admin" ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (

        <Layout
            title="Admin Dashboard"
            description={`Hello ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-sm-3">{adminLinks()}</div>
                <div className="col-sm-9">{adminInfo()}</div>
            </div>
        </Layout>

    );
};

export default AdminDashboard;
