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
            <div className="card mb-5" id="dark-card">
                <h3 className="card-header name">User Information</h3>
                <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark">{name}</li>
                    <li className="list-group-item list-group-item-dark">{email}</li>
                    <li className="list-group-item list-group-item-dark">
                        {role === "Admin" ? "Admin" : "Registered User"}
                    </li>
                </ul>
                </div>
            </div>
        );
    };

    return (

        <Layout
            title="Admin Dashboard"

            className="container-fluid"
        >
            <div className="row">
                <div className="col-sm-3">{AdminLinks()}</div>

                <div className="col-sm-6">{adminInfo()}</div>
                  <div className="col-sm-3"></div>
            </div>
        </Layout>

    );
};

export default AdminDashboard;
