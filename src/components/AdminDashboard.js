import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import  AdminLinks  from "../admin/AdminLinks";


const AdminDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

  
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
                <div className="col-sm-3">{AdminLinks()}</div>
                <div className="col-sm-9">{adminInfo()}</div>
            </div>
        </Layout>

    );
};

export default AdminDashboard;
