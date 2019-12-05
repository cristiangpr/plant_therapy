import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { readCategory, updateCategory } from "./apiAdmin";
import AdminLinks from './AdminLinks';

const UpdateCategory = ({ match }) => {
    const [values, setValues] = useState({
        name: "",

        error: false,
        success: false
    });

    const { token, user } = isAuthenticated();
    const { name, error, success } = values;

    const init = categoryId => {
        // console.log(categoryId);
        readCategory(categoryId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name });
            }
        });
    };

    useEffect(() => {
        init(match.params.categoryId);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        updateCategory(match.params.categoryId, user._id, token, { name }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {

                        setValues({
                            ...values,
                            name: data.name,

                            success: true
                        });

                }
            }
        );
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/admin_categories" />;
        }
    };

    const categoryUpdate = (name, email, role) => (
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


            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );


    return (
        <Layout
            title="Update Category"
            description=""
            className="container-fluid"
        >
      <div className="row">
       <div className="col-md-3">
        {AdminLinks()}
           </div>
        <div className="col-md-9">
            {categoryUpdate(name)}
            {redirectUser(success)}

           </div>
              </div>

        </Layout>
    );
};

export default UpdateCategory;
