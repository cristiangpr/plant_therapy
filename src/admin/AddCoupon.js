import React, { useState } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCoupon } from "./apiAdmin";
import Layout from "../core/Layout";

const AddCoupon = () => {
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState();
    const [expireDate, setExpireDate] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    const handleCodeChange = e => {
        setError("");
        setCode(e.target.value);
    };
    const handleDiscountChange = e => {
        setError("");
        setDiscount(e.target.value);
    };
    const handleExpireDateChange = e => {
        setError("");
        setExpireDate(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to api to create coupon
        createCoupon(user._id, token, { code, discount, expireDate}).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const newCouponForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Code</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleCodeChange}
                    value={code}
                    autoFocus
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Discount Rate</label>
                <input
                    type="number"
                    className="form-control"
                    onChange={handleDiscountChange}
                    value={discount}
                    autoFocus
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Expiration Date</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleExpireDateChange}
                    value={expireDate}
                    autoFocus
                />
            </div>
            <button className="btn btn-outline-primary">Create Coupon</button>
        </form>
    );
    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">{code} is created</h3>;
        }
    };

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">Coupon should be unique</h3>;
        }
    };

    const goBack = () => (

        <div className="mt-5">
            <Link to="/admin_dashboard" className="text-warning">
                Back to Dashboard
            </Link>
        </div>

    );


    return (
      <Layout
      title="Create Product Coupon"
      description={`Hello ${user.name}!`}
      className="container-fluid">
      <div className="row">
          <div className="col-md-8 offset-md-2">

              {showSuccess()}
              {showError()}
              {newCouponForm()}
              {goBack()}
          </div>
      </div>
</Layout>
    );
};

export default AddCoupon;
