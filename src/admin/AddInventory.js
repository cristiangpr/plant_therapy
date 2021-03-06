import React, { useState } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createInventory } from "./apiAdmin";
import Layout from "../core/Layout";
import AdminLinks from './AdminLinks'
const AddInventory = () => {
    const [name, setName] = useState("");
      const [quantity, setQuantity] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    const handleNameChange = e => {
        setError("");
        setName(e.target.value);
    };
    const handleQuantityChange = e => {
        setError("");
        setQuantity(e.target.value);
    };
    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to api to create category
        createInventory(user._id, token, { name, quantity }).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const newInventoryForm = () => (
      <div className="form">
        <form className="contactForm" onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleNameChange}
                    value={name}
                    autoFocus
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input

                    className="form-control"
                    onChange={handleQuantityChange}
                    value={quantity}
                    autoFocus
                />
            </div>
            <button className="btn btn-outline-primary">Create Inventory</button>
        </form>
        </div>
    );
    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">{name} is created</h3>;
        }
    };

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">Inventory should be unique</h3>;
        }
    };

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin_inventories" className="text-warning">
            Go Back
            </Link>
        </div>
    );


    return (
      <Layout
      title="Create Inventory Item"

      className="container-fluid">
      <div className="row">
        <div className="col-md-3">
        {AdminLinks()}
            </div>
            <div className="col-md-3">
                </div>
          <div className="col-md-6">

              {showSuccess()}
              {showError()}
              {newInventoryForm()}
              {goBack()}

          </div>
      </div>
</Layout>
    );
};

export default AddInventory;
