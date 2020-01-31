import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getGears } from "./apiAdmin";

import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';


const ManageGears = () => {
    const [gears, setGears] = useState([]);
    const [header, setHeader] = useState([
        { title: "Name", prop: "name", sortable: true, filterable: true, editable: true },
        {title: "Category", prop: "category", sortable: true, filterable: true},
        {title: "Price", prop: "price", filterable: true, sortable: true},
          {title: "Edit", prop: "edit"},


    ]);


    const { user, token } = isAuthenticated();

    const loadGears = () => {
        getGears().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                  console.log(data);
                setGears(data);
            }
        });
    };



    const createGear = () => (
      <Link to='create_gear'>
          <button  className="btn btn-outline-success">
              Create Gear
          </button>
      </Link>

    )
const body =  gears.map((p, i) => (

        {   name: p.name,
            category: p.category.name,
            price: p.price,
            edit:    <Link to={`/admin/gear/update/${p._id}`}>
                    <button className="btn btn-outline-warning">
                      Edit
                    </button>
                </Link>
           }
            ))



    useEffect(() => {
        loadGears();
    }, []);

    return (
        <Layout
            title="Manage Gears"

            className="container-fluid"
        >  <h2 className="text-center">
              Total {gears.length} gears
          </h2>
            <div className="row">
                <div className="col-sm-3" id="admin-links">{AdminLinks()}

                </div>
                <div className="col-sm-9">

                    <hr />
                    <Datatable
                      tableHeaders={header}
                      tableBody={body}


                      rowsPerPage={50}
                      rowsPerPageOption={[50, 100, 200]}
                      initialSort={{ prop: "name", isAscending: true }}

                    />
                    {createGear()}
                </div>
            </div>
        </Layout>
    );
};

export default ManageGears;
