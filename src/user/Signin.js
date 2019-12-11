import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
import Footer from '../components/Footer';

const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
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

    const signUpForm = () => (
      <div className="container mb-5">
  <div className="row">
      <div className="col-md-4"></div>
      <div className="form col-md-4">
        <form className="contactForm">

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <div className="text-center">
            <button onClick={clickSubmit} className="btn btn-outline-success text-center">
                Submit
            </button>
            </div>
        </form>
        <div className="col-md-4"></div>
        </div>
        </div>
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
                return <Redirect to="/consumer" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/shop" />;
        }
    };

    return (
      <>
        <Layout
            title="Sign in to Lost Coast Plant Therapy"

            className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}

        </Layout>
        <Footer/>
        </>
    );
};

export default Signin;
