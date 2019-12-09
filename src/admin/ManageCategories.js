import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategories } from "./apiAdmin";
import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';


const ManageCategories = () => {
    const [categories, setCategories] = useState([]);
    const [header, setHeader] = useState([
        { title: "Name", prop: "name", sortable: true, filterable: true },
          {title: "Edit", prop: "edit"},

    ]);

    const { user, token } = isAuthenticated();

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCategories(data);
            }
        });
    };






    const createCategory = () => (
      <Link to='create_category'>
          <button className="btn btn-outline-success">
              Create Category
          </button>
      </Link>

    )
    const body =   categories.map((c, i) => (
          {    name: c.name,

                edit:    <Link to={`/admin/category/update/${c._id}`}>
                        <button className="btn btn-outline-warning">
                          Edit
                        </button>
                    </Link>
               }
                ))



    useEffect(() => {
        loadCategories();

    }, []);

    return (
        <Layout
            title="Manage Categories"

            className="container-fluid"
        >  <h2 className="text-center">
              Total {categories.length} categories
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
             {createCategory()}
                </div>
            </div>
        </Layout>
    );
};

export default ManageCategories;
