import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { getProduct, getCategories, updateProduct, getInventories, deleteProduct} from "./apiAdmin";
import AdminLinks from './AdminLinks';

const UpdateProduct = ({ match }) => {
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
        error: false,
        success: false,
        createdProduct: "",
        redirectToProfile: false,
        formData: ""
    });

    const { user, token } = isAuthenticated();
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
        success,
        createdProduct,

        formData
    } = values;

    const init = productId => {
        getProduct(productId).then(data => {
            getCategories().then(cdata => {
                   getInventories().then(idata => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    categories: cdata,
                    inventories: idata,
                    category: data.category,
                    inventory: data.inventory,
                
                    quantity: data.quantity,
                    formData: new FormData()
                });
                // load categories

            }
  });
});
        });
    };



    const categoryItems = categories.map((category) =>
                   <option key={category._id} value={category._id}>{category.name}</option>
               );

               const inventoryItems = inventories.map((inventory) =>
                              <option key={inventory._id} value={inventory._id}>{inventory.name}</option>
                          );

    // load categories and set form data


    useEffect(() => {

        init(match.params.productId);

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

        updateProduct(match.params.productId, user._id, token, formData).then(
            data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        description: "",
                        photo: "",
                        price: "",
                        quantity: "",
                        loading: false,
                        error: false,
                        success: true,
                        createdProduct: data.name
                    });
                    redirectUser();
                }
            }
        );
    };

        const destroy = e => {
            e.preventDefault();
            deleteProduct(match.params.productId, user._id, token).then(data => {
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
            <button className="btn btn-outline-primary">Update Product</button>
            <button onClick={destroy} className="btn btn-outline-danger ml-3">
                Delete
            </button>
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
            <h2>{`${createdProduct}`} is updated!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = success => {
        if (success) {

                return <Redirect to="/admin_products" />;
            }
        };


    const goBack = () => (

        <div className="mt-5">
            <Link to="/admin_products" className="text-warning">
              Go Back
            </Link>
        </div>

    );

    return (
        <Layout
            title="Update product"
              className="container-fluid">
        >

            <div className="row">
            <div className="col-md-3">
            {AdminLinks()}
            </div>
            <div className="col-md-3">

            </div>
                <div className="col-md-6">
                    {showLoading()}

                    {showError()}
                    {newPostForm()}
                    {redirectUser(success)}
                    {goBack()}
                </div>

            </div>

        </Layout>
    );
};

export default UpdateProduct;
