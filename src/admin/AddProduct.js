import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProduct, getCategories, getInventories } from "./apiAdmin";
import AdminLinks from "./AdminLinks";
import Layout from '../core/Layout';


const AddProduct = () => {
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        categories: [],
        category: "",
        inventories: [],
        inventory: "",
        quantity: "",
        photo: "",
        loading: false,
        error: "",
        createdProduct: "",
        redirectToProfile: false,
        formData: ""
    });

    const {
        name,
        description,
        price,
        categories,
        category,
        inventories,
        inventory,
        quantity,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    // load categories and set form data
    const init = () => {
        getCategories().then(data => {
           getInventories().then(idata => {
              setValues({
                  ...values,
                  categories: data,
                  inventories: idata,
                  formData: new FormData()
              });

})
            }
        );
    };


    useEffect(() => {
        init();
    }, []);



    const handleChange = name => event => {
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        createProduct(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    photo: "",
                    price: "",
                    category: "",
                    inventory: "",
                    quantity: "",
                    loading: false,
                    createdProduct: data.name
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
<div className="form-row">
            <div className="form-group col-md-6">
                <label className="text-muted">Description</label>
                <input
                    onChange={handleChange("description")}
                    className="form-control"
                    value={description}
                />
            </div>

            <div className="form-group col-md-6">
                <label className="text-muted">Price</label>
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    value={price}
                />
            </div>
            </div>
<div className="form-row">
            <div className="form-group col-md-6">
                <label className="text-muted">Category</label>
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                >
                <option>Please select</option>
                <option value="5dab5350fe6153076c4c808e">Retail</option>
                <option value="5dab86889f624f3d5839d8e2">Wholesale</option>
                  <option value="5dab877c9f624f3d5839d8e5">Farm</option>
                  <option value="5dab878a9f624f3d5839d8e6">Distributor 25</option>
                  <option value="5db747f7711507468c2f7ba5">Distributor 32</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label className="text-muted">Inventory</label>
                <select
                    onChange={handleChange("inventory")}
                    className="form-control"
                >
                >
                    <option>Please select</option>
                    <option value="5db39bb2a60e8108f00ca030">12 Oz</option>
                    <option value="5db39bc9a60e8108f00ca032">32 Oz</option>
                      <option value="5db39bd2a60e8108f00ca033">1 Gallon</option>
                      <option value="5db39bd9a60e8108f00ca034">2.5 Gallon</option>
                </select>
            </div>
            </div>
<div className="form-row">
            <div className="form-group col-md-6">
                <label className="text-muted">Shipping</label>
                <select
                    onChange={handleChange("shipping")}
                    className="form-control"
                >
                    <option>Please select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div className="form-group col-md-6">
                <label className="text-muted">Quantity</label>
                <input
                    onChange={handleChange("quantity")}
                    type="number"
                    className="form-control"
                    value={quantity}
                />
            </div>
</div>
            <button className="btn btn-outline-success">Create Product</button>

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
            style={{ display: createdProduct ? "" : "none" }}
        >
            <h2>{`${createdProduct}`} is created!</h2>
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
                <Link to="/admin_products" className="text-warning">
                Go Back
                </Link>
            </div>

        );

    return (
      <Layout
      title="Create Product"

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

export default AddProduct;
