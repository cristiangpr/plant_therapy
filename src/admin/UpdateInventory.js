import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { readInventory, updateInventory } from "./apiAdmin";
import AdminLinks from './AdminLinks';

const UpdateInventory = ({ match }) => {
    const [values, setValues] = useState({
        name: "",

        error: false,
        success: false
    });

    const { token } = isAuthenticated();
    const { name, error, success } = values;

    const init = inventoryId => {
        // console.log(inventoryId);
        readInventory(inventoryId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name });
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
        updateInventory(match.params.inventoryId, token, { name }).then(
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
            return <Redirect to="/admin_inventories" />;
        }
    };

    const inventoryUpdate = (name, email, role) => (
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
            title="Update Inventory"
            description=""
            className="container-fluid"
        >
      <div className="row">
       <div className="col-md-3">
        {AdminLinks()}
           </div>
        <div className="col-md-9">
            {inventoryUpdate(name)}
            {redirectUser(success)}

           </div>
              </div>

        </Layout>
    );
};

export default UpdateInventory;
