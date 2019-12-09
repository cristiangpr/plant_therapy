import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getInventories } from "./apiAdmin";
import {Table} from 'react-bootstrap';
import AdminLinks from './AdminLinks'
import Datatable from 'react-bs-datatable';

const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);
    const [header, setHeader] = useState([
        { title: "Name", prop: "name", sortable: true, filterable: true },
        { title: "Quantity", prop: "quantity", sortable: true, filterable: true },

          {title: "Edit", prop: "edit"},

    ]);


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


    const createInventory = () => (
      <Link to='create_inventory'>
          <button className="btn btn-outline-success">
              Create Inventory Item
          </button>
      </Link>

    )

    const body =   inventories.map((v, i) => (
          {    name: v.name,
               quantity: v.quantity,
                edit:    <Link to={`/admin/inventory/update/${v._id}`}>
                        <button className="btn btn-outline-warning">
                          Edit
                        </button>
                    </Link>
               }
                ))

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
                    <Datatable
                      tableHeaders={header}
                      tableBody={body}
                      keyName="categoryTable"
                      tableClass="striped border responsive"
                      rowsPerPage={10}
                      rowsPerPageOption={[3, 5, 8, 10]}
                      initialSort={{ prop: "name", isAscending: true }}
                    />
                    {createInventory()}
                </div>
            </div>
        </Layout>
    );
};

export default ManageInventories;
