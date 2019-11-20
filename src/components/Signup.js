import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signup } from "../auth";




const Signup = () => {

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
      error: "",
      success: false
  });

  const { name, email, password, phone, permit, business_name, street_address, city, state, country, zip, website, about, error, success } = values;

  const handleChange = name => event => {
      setValues({ ...values, error: false, [name]: event.target.value });
  };



  const clickSubmit = event => {
      event.preventDefault()
      setValues({ ...values, error: false });
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
                  success: true
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
const signUpForm = () => (
<div className="container">
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
    <div className="text-center"><button onClick={clickSubmit} type="submit">Submit Application</button></div>
  </form>
</div>
</div>

)
return (
    <div>
        {showSuccess()}
        {showError()}
        {signUpForm()}

    </div>
);
};
export default Signup;
