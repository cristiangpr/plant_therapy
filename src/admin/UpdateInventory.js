import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { readInventory, updateInventory, deleteInventory } from "./apiAdmin";
import AdminLinks from './AdminLinks';
import "../styles.css";

const UpdateInventory = ({ match }) => {
    const [values, setValues] = useState({
        name: "",
        quantity: "",

        error: false,
        success: false
    });

    const { user, token } = isAuthenticated();
    const { name, quantity, error, success } = values;

    const init = inventoryId => {
        // console.log(inventoryId);
        readInventory(inventoryId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, quantity: data.quantity });
            }
        });
    };

    useEffect(() => {
        init(match.params.inventoryId);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        updateInventory(match.params.inventoryId, user._id, token, { name, quantity }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {

                        setValues({
                            ...values,
                            name: data.name,
                            quantity: data.quantity,

                            success: true
                        });

                }
            }
        );
    };
    const destroy = e => {
      e.preventDefault();
        deleteInventory(match.params.inventoryId, user._id, token).then(data => {
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

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/admin_inventories" />;
        }
    };

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin_inventories" className="text-warning">
            Go Back
            </Link>
        </div>
    );

    const inventoryUpdate = (name, quantity) => (
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
            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input
                    type="number"
                    onChange={handleChange("quantity")}
                    className="form-control"
                    value={quantity}
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
            title="Update Inventory"

            className="container-fluid"
        >
      <div className="row">
       <div className="col-md-3">
        {AdminLinks()}
           </div>
            <div className="col-md-3"></div>
        <div className="col-md-6">
            {inventoryUpdate(name, quantity)}
            {redirectUser(success)}
            {goBack()}

           </div>
              </div>

        </Layout>
    );
};

export default UpdateInventory;
