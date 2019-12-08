import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { readCoupon, updateCoupon } from "./apiAdmin";
import AdminLinks from './AdminLinks';

const UpdateCoupon = ({ match }) => {
    const [values, setValues] = useState({
        code: "",
        discount: "",
        expireDate:"",
        error: false,
        success: false
    });

    const { user, token } = isAuthenticated();
    const { code, discount, expireDate, error, success } = values;

    const init = couponId => {
        // console.log(couponId);
        readCoupon(couponId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, code: data.code, discount: data.discount, expireDate: data.expireDate });
            }
        });
    };

    useEffect(() => {
        init(match.params.couponId);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        updateCoupon(match.params.couponId, user._id, token, { code, discount, expireDate }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {

                        setValues({
                            ...values,
                          code: data.code,
                          discount: data.discount,
                           expireDate: data.expireDate,

                            success: true
                        });

                }
            }
        );
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/admin_coupons" />;
        }
    };

    const couponUpdate = (code, discount, expireDate) => (
        <form id="update-form-container">
            <div className="form-group">
                <label className="text-muted">Code</label>
                <input
                    type="text"
                    onChange={handleChange("code")}
                    className="form-control"
                    value={code}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Discount</label>
                <input
                    type="text"
                    onChange={handleChange("discount")}
                    className="form-control"
                    value={discount}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Expiration Date</label>
                <input
                    type="text"
                    onChange={handleChange("expireDate")}
                    className="form-control"
                    value={expireDate}
                />
            </div>


            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );


    return (
        <Layout
            title="Update Coupon"

            className="container-fluid"
        >
      <div className="row">
       <div className="col-md-3">
        {AdminLinks()}
           </div>
        <div className="col-md-9">
            {couponUpdate(code, discount, expireDate)}
            {redirectUser(success)}

           </div>
              </div>

        </Layout>
    );
};

export default UpdateCoupon;
