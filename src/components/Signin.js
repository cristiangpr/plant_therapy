import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
    const [values, setValues] = useState({
        email: "a@a.com",
        password: "aaaaa1",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();
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

    const signInForm = () => (


      <section id="sign-in" className="section-bg wow fadeInUp">
        <div className="container">




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
                if (user && user.role === 0) {
                    return <Redirect to="/admin_dashboard" />;
                } else {
                    return <Redirect to="/user_dashboard" />;
                }
            }

        };

    return (
        <div>
        
            {showLoading()}
            {showError()}
            {signInForm()}
            {redirectUser()}
        </div>
    );
};

export default Signin;
