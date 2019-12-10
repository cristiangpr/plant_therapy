import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { readCategory, updateCategory, deleteCategory } from "./apiAdmin";
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
    const goBack = () => (

        <div className="mt-5">
            <Link to="/admin_categories" className="text-warning">
            Go Back
            </Link>
        </div>

    );

    const destroy = e => {
      e.preventDefault();
        deleteCategory(match.params.categoryId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
              setValues({
                  ...values,
              

                  success: true
              });
                redirectUser();
            }
        });
    };

    const categoryUpdate = (name, email, role) => (
      <div className="form">
        <form className="contactForm">
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    onChange={handleChange("name")}
                    className="form-control"
                    value={name}
                />
            </div>


            <button onClick={clickSubmit} className="btn btn-outline-primary">
                Update
            </button>
            <button onClick={destroy} className="btn btn-outline-danger ml-3">
                Delete
            </button>
        </form>
        </div>
    );


    return (
        <Layout
            title="Update Category"

            className="container-fluid"
        >
      <div className="row">
       <div className="col-md-3">
        {AdminLinks()}
           </div>
           <div className="col-md-3">

               </div>
        <div className="col-md-6" id="">
            {categoryUpdate(name)}
            {redirectUser(success)}
            {goBack()}

           </div>
              </div>

        </Layout>
    );
};

export default UpdateCategory;
