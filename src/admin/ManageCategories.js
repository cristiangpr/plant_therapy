import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "./apiAdmin";
import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';


const ManageCategories = () => {
    const [categories, setCategories] = useState([]);
    const [header, setHeader] = useState([
        { title: "Name", prop: "name", sortable: true, filterable: true },

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

    const destroy = categoryId => {
        deleteCategory(categoryId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadCategories();
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
                tableBody={categories}
                keyName="userTable"
                tableClass="striped border responsive"
                rowsPerPage={3}
                rowsPerPageOption={[3, 5, 8, 10]}
                initialSort={{ prop: "name", isAscending: true }}
              />
  
                </div>
            </div>
        </Layout>
    );
};

export default ManageCategories;
