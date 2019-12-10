import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getPurchaseHistory } from "../user/apiUser";
import moment from "moment";

const Dashboard = () => {
    const [history, setHistory] = useState([]);

    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    const token = isAuthenticated().token;

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setHistory(data);
            }
        });
    };

    useEffect(() => {
        init(_id, token);
    }, []);

    const userLinks = () => {
        return (
            <div className="card" id="dark-card">
                <h4 className="card-header name">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark">
                        <Link className="nav-link" to="/cart">
                            My Cart
                        </Link>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <Link className="nav-link" to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return (
            <div className="card" id="dark-card">
                <h4 className="card-header name">User Information</h4>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark">{name}</li>
                    <li className="list-group-item list-group-item-dark">{email}</li>
                    <li className="list-group-item list-group-item-dark">
                        {role}
                    </li>
                </ul>
            </div>
        );
    };

    const purchaseHistory = history => {
        return (
            <div className="card " id="dark-card">
                <h4 className="card-header name">Purchase history</h4>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark">
                        {history.map((h, i) => {
                            return (
                                <div>
                                    <hr />
                                    {h.products.map((p, i) => {
                                        return (
                                            <div key={i} id="history">
                                                <p>Product name: {p.name}</p>
                                                <p>
                                                    Product price: ${role === 10 ? p.price * .255
                                                    : p.price}
                                                </p>
                                                <p>
                                                    Purchased date:{" "}
                                                    {moment(
                                                        h.createdAt
                                                    ).format("MMM Do YYYY")}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="User Dashboard"
            description={`Hello ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{userLinks()}</div>
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory(history)}
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
