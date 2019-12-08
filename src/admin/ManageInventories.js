import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getInventories, deleteInventory } from "./apiAdmin";
import {Table} from 'react-bootstrap';
import AdminLinks from './AdminLinks'


const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);

    const { user, token } = isAuthenticated();

    const loadInventories = () => {
        getInventories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setInventories(data);
            }
        });
    };

    const destroy = inventoryId => {
        deleteInventory(inventoryId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadInventories();
            }
        });
    };

    const createInventory = () => (
      <Link to='create_inventory'>
          <button className="btn btn-outline-success">
              Create Inventory Item
          </button>
      </Link>

    )



    useEffect(() => {
        loadInventories();
    }, []);

    return (
        <Layout
            title="Manage Inventories"

            className="container-fluid"
        >  <h2 className="text-center">
              Total {inventories.length} inventories
          </h2>
            <div className="row">
                <div className="col-sm-3" id="admin-links">{AdminLinks()}

                </div>
                <div className="col-sm-9">

                    <hr />
                    <Table  bordered id="table-div" >
                    <thead>
                           <tr>

                             <th sortable="true"> Name</th>
                             <th>Qunantity</th>
                             <th></th>
                                <th></th>
                             <th>{createInventory()}</th>
                           </tr>
                    </thead>
                    <tbody>

                        {inventories.map((v, i) => (
                          <tr>
                            <td>
                                <strong>{v.name}</strong>
                                </td>
                            <td>
                                    <strong>{v.quantity}</strong>
                                    </td>

                                           <td>
                                        <Link to={`/admin/inventory/update/${v._id}`}>
                                            <button className="btn btn-outline-primary">
                                                View
                                            </button>
                                        </Link>
                                        </td>
                                <td>

                                <Link to={`/admin/inventory/update/${v._id}`}>
                                    <button className="btn btn-outline-warning">
                                        Update
                                    </button>
                                </Link>
                                </td>
                                <td>
                                <button
                                    type="button"
                                    onClick={() => destroy(v._id)}
                                    className="btn btn-outline-danger"
                                >
                                    Delete
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Layout>
    );
};

export default ManageInventories;
