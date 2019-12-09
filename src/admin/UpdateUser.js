import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { readUser, updateUser, deleteUser } from "./apiAdmin";
import AdminLinks from "./AdminLinks";
const UpdateUser = ({ match }) => {
    const [values, setValues] = useState({
      name: "",
      email: "",
      role: "",

      phone: "",
      permit: "",
      business_name: "",
      street_address: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      website: "",
      about: "",
        loading: false,
      error: "",
      success: false
    });

    const { token } = isAuthenticated();
    const {    name, email, role,  phone, permit, business_name, street_address, city, state, country, zip, website, about, loading, error, success } = values;

    const init = userId => {
        // console.log(userId);
        readUser(userId, token).then(data => {
          console.log(data);
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, email: data.email, role: data.role, phone: data.phone, permit: data.permit,
                business_name: data.business_name, street_address: data.street_address, city: data.city, zip: data.zip, website: data.website,
                about: data.about });
            }
        });
    };

    useEffect(() => {
        init(match.params.userId);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
          setValues({ ...values, error: false,   loading: true });
        updateUser(match.params.userId, token, {    name, email, phone, permit, business_name, street_address, city, state, country, zip, website, about, loading, error, success }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {

                        setValues({
                            ...values,
                            name: "",
                            email: "",

                            phone: "",
                            permit: "",
                            business_name: "",
                            street_address: "",
                            city: "",
                            state: "",
                            country: "",
                            zip: "",
                            website: "",
                            about: "",
                            error: "",
                            success: true,
                            loading: false
                        });

                }
            }
        );
    };

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
            User profile updated.
        </div>
    );
    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );
        const showError = () => (
            <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
            >
                {error}
            </div>
        );
        const redirectUser = success => {
            if (success) {
                return <Redirect to="/admin_users" />;
            }
        };
        


    const profileUpdate = () => (
      <div className="form">

        <form  className="contactForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input   onChange={handleChange("name")} type="text"  className="form-control" value={name}  data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

            </div>
            <div className="form-group col-md-6">
              <input   onChange={handleChange("email")} type="email" className="form-control"  value={email} placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input    type="text"  className="form-control"  placeholder="Create a password" disabled  />

            </div>

            <div className="form-group col-md-6">
              <input onChange={handleChange("phone")} type="text" className="form-control" value={phone} placeholder="Phone" data-rule="minlen:10" data-msg="Please enter a valid phone" />

            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <input onChange={handleChange("permit")} type="text" className="form-control" value={permit} placeholder="Seller Permit # | Tax ID #" />

            </div>
            <div className="form-group col-md-6">
              <input onChange={handleChange("business_name")} type="text"  className="form-control" value={business_name} placeholder="Business Name" />

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <input onChange={handleChange("street_address")} type="text"  className="form-control" value={street_address} placeholder="Street Address"  />

            </div>

          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input onChange={handleChange("city")} type="text"  className="form-control" value={city} placeholder="City" />

            </div>
            <div className="form-group col-md-6">
              <input onChange={handleChange("state")} type="text" className="form-control"  value={state} placeholder="State"  />

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input onChange={handleChange("country")} type="text"  className="form-control" value={country} placeholder="Country"  />

            </div>
            <div className="form-group col-md-6">
              <input onChange={handleChange("zip")} type="text" className="form-control"  value={zip} placeholder="Zip"  />

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input onChange={handleChange("website")} type="text" className="form-control" value={website} placeholder="Website URL" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input onChange={handleChange("about")} type="text" className="form-control"  value={about} placeholder="How did you hear about us?"  />

            </div>
          </div>
          <div className="text-center"><button className="btn btn-outline-primary" onClick={clickSubmit} type="submit">Submit</button></div>
        </form>
      </div>
);
    const goBack = () => (

        <div className="mt-5">
            <Link to="/admin_users" className="text-warning">
            Go Back
            </Link>
        </div>

    );

    return (
      <Layout
      title="Update User"

      className="container-fluid">
      <div className="row">
      <div className="col-md-3">
      {AdminLinks()}
          </div>
  <div className="col-md-3">  </div>
        <div className="col-md-6">
              {showLoading()}
              {showSuccess()}
              {showError()}
              {profileUpdate()}
               {goBack()}
          </div>
      </div>
    </Layout>
    );
};

export default UpdateUser;
