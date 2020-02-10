import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createPhoto } from "./apiAdmin";
import AdminLinks from "./AdminLinks";
import Layout from '../core/Layout';


const AddPhoto = () => {
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        name: "",
        photo: "",
        loading: false,
        error: "",
        success: "",
        createdPhoto:'',

        formData: ""
    });

    const {
        name,
        createdPhoto,
        loading,
        error,
        success,
        formData
    } = values;




    const handleChange = name => event => {
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        createPhoto(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    createdPhoto: "",
                    photo: "",

                    loading: false,
                    success: true

                });
            }
        });
    };

    const newPostForm = () => (
      <div className="form">
        <form className="contactForm"  onSubmit={clickSubmit}>

           <div className="form-row">

            <div className="form-group col-md-6">
              <label className="text-muted">Photo</label> <br/>
                <label className="btn btn-secondary">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image/*"
                    />
                </label>
            </div>

            <div className="form-group col-md-6">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>
            </div>

            <button className="btn btn-outline-success">Create Photo</button>

        </form>
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

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: createdPhoto ? "" : "none" }}
        >
            <h2>{`${createdPhoto}`} is created!</h2>
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
                <Link to="/admin_photos" className="text-warning">
                Go Back
                </Link>
            </div>

        );

    return (
      <Layout
      title="Create Photo"

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
              {newPostForm()}
              {goBack()}

          </div>
      </div>
    </Layout>
    );
};

export default AddPhoto;
