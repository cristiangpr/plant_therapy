import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createGear, getCategories, getInventories, getSizeValues } from "./apiAdmin";
import AdminLinks from "./AdminLinks";
import Layout from '../core/Layout';


const AddGear = () => {
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
        sizes: [],
        size:"",

        photo: "",
        loading: false,
        error: "",
        createdGear: "",
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
        sizes,
        size,
        loading,
        error,
        createdGear,
        redirectToProfile,
        formData
    } = values;

    // load categories and set form data
    const init = () => {
        getCategories().then(data => {
           getInventories().then(idata => {
             getSizeValues().then(sdata => {
              setValues({
                  ...values,
                  categories: data,
                  inventories: idata,
                  sizes: sdata,
                  formData: new FormData()
              });

})
})
            }
        );
    };

    const categoryItems = categories.map((category) =>
                   <option key={category._id} value={category._id}>{category.name}</option>
               );

     const inventoryItems = inventories.map((inventory) =>
                    <option key={inventory._id} value={inventory._id}>{inventory.name}</option>
                          );

      const sizeItems = sizes.map((size) =>
                       <option key={size} value={size}>{size}</option>
                                     );
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

        createGear(user._id, token, formData).then(data => {
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
                    size: "",
                    loading: false,
                    createdGear: data.name
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
        {categoryItems}
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
                {inventoryItems}
                </select>
            </div>
            </div>
<div className="form-row">
            <div className="form-group col-md-6">
            <label className="text-muted">Size</label>
            <select
                onChange={handleChange("size")}
                className="form-control"
            >
            >
                <option>Please select</option>
            {sizeItems}
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
            <button className="btn btn-outline-success">Create Gear</button>

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
            style={{ display: createdGear ? "" : "none" }}
        >
            <h2>{`${createdGear}`} is created!</h2>
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
                <Link to="/admin_gears" className="text-warning">
                Go Back
                </Link>
            </div>

        );

    return (
      <Layout
      title="Create Gear"

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

export default AddGear;
