import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { readInventory, updateInventory } from "./apiAdmin";
import AdminLinks from './AdminLinks';

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

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/admin_inventories" />;
        }
    };

    const inventoryUpdate = (name, quantity) => (
        <form id="update-form-container">
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


            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
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
        <div className="col-md-9">
            {inventoryUpdate(name, quantity)}
            {redirectUser(success)}

           </div>
              </div>

        </Layout>
    );
};

export default UpdateInventory;
