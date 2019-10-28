import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { read, update, } from "./apiAdmin";

const UpdateUser = ({ match }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        role: "",
        error: false,
        success: false
    });

    const { token } = isAuthenticated();
    const { name, email, role, error, success } = values;

    const init = userId => {
        // console.log(userId);
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, email: data.email, role: data.role });
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
        update(match.params.userId, token, { name, email, role }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {

                        setValues({
                            ...values,
                            name: data.name,
                            email: data.email,
                            role: data.role,
                            success: true
                        });

                }
            }
        );
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/admin_users" />;
        }
    };

    const profileUpdate = (name, email, role) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    onChange={handleChange("name")}
                    className="form-control"
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    type="email"
                    onChange={handleChange("email")}
                    className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Role</label>
                <select
                    onChange={handleChange("role")}
                    className="form-control"
                >
                <option>Please select</option>
                <option value="Retail">Retail</option>
                <option value="Wholesale">Wholesale</option>
                  <option value="Farm">Farm</option>
                  <option value="Distributor 25">Distributor 25</option>
                  <option value="Distributor 32">Distributor 32</option>
                </select>
            </div>

            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );
    const goBack = () => (

        <div className="mt-5">
            <Link to="/admin_dashboard" className="text-warning">
                Back to Dashboard
            </Link>
        </div>

    );

    return (
        <Layout
            title="Profile"
            description="Update user profile"
            className="container-fluid"
        >
            <h2 className="mb-4">Profile update</h2>
            {profileUpdate(name, email, role)}
            {redirectUser(success)}
            {goBack()}
        </Layout>
    );
};

export default UpdateUser;
