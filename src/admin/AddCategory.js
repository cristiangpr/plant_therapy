import React, { useState } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";
import Layout from "../core/Layout";
import AdminLinks from "./AdminLinks";

const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    const handleChange = e => {
        setError("");
        setName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to api to create category
        createCategory(user._id, token, { name }).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const newCategoryForm = () => (
      <div className="form">
        <form className="contactForm" onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
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
            return <h3 className="text-danger">Category should be unique</h3>;
        }
    };
    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin_categories" className="text-warning">
            Go Back
            </Link>
        </div>
    );

    return (
      <Layout
      title="Create Product Category"

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
              {newCategoryForm()}
              {goBack()}


          </div>
      </div>
</Layout>
    );
};

export default AddCategory;
