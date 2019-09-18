import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { signin, authenticate } from "../auth";

const FarmSignin = () => {
    const [values, setValues] = useState({
        email: "a@a.com",
        password: "aaaaa1",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signUpForm = () => (
      <section id="sign-in" className="section-bg wow fadeInUp">
        <div className="container">

          <div className="section-header">
            <h3>Sign In</h3>
            <p>
    Affiliated Farms sign in below</p>
          </div>


                  <div className="form">

                    <div id="errormessage"></div>
                    <form action="" method="post"  className="contactForm">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input   onChange={handleChange("email")} type="email"  className="form-control" placeholder="Enter email" data-rule="email" value={email} data-msg="Please enter your email" />
                          <div className="validation"></div>
                        </div>
                        <div className="form-group col-md-6">
                          <input   onChange={handleChange("password")} type="password" className="form-control"  placeholder="Enter password" data-rule="password" data-msg="Please enter your password" />
                          <div className="validation"></div>
                        </div>
                      </div>

                      <div className="text-center"><button onClick={clickSubmit} type="submit">Sign In</button></div>
                    </form>
                  </div>
    </div>

    </section>

    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to="/Farms" />;
        }
    };

    return (
        <div>
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </div>
    );
};

export default FarmSignin;
