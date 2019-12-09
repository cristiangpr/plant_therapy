import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { signup } from "../auth";
import AdminLinks from "./AdminLinks";
import Layout from '../core/Layout';



const AddUser = () => {
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
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

    const {
       name, email, password, phone, permit, business_name, street_address, city, state, country, zip, website, about, loading, error, success
    } = values;






    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };



    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false,   loading: true });
        signup({ name, email, password, phone, permit, business_name, street_address, city, state, country, zip, website, about, error, success }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    password: "",
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
        });

    };
    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );
        const goBack = () => (
            <div className="mt-5">
                <Link to="/admin_users" className="text-warning">
                Go Back
                </Link>
            </div>
        );

  const signUpForm = () => (

  <div className="form">

    <form  className="contactForm">
      <div className="form-row">
        <div className="form-group col-md-6">
          <input   onChange={handleChange("name")} type="text"  className="form-control" value={name} placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

        </div>
        <div className="form-group col-md-6">
          <input   onChange={handleChange("email")} type="email" className="form-control"  value={email} placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />

        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input   onChange={handleChange("password")} type="password" className="form-control" value={password} placeholder="Create a password"  />

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
      <div className="text-center"><button className="btn btn-outline-primary" onClick={clickSubmit} type="submit">Submit Application</button></div>
    </form>
  </div>


  )
    return (
      <Layout
      title="Create User"

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
              {signUpForm()}
              {goBack()}

          </div>
      </div>
    </Layout>
    );
};

export default AddUser;
