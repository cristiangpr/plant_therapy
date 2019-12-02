import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "./apiAdmin";
import {Table} from 'react-bootstrap';
import AdminLinks from './AdminLinks';


const ManageCategories = () => {
    const [categories, setCategories] = useState([]);

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
          <button className="btn btn-success">
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
            description=""
            className="container-fluid"
        >  <h2 className="text-center">
              Total {categories.length} categories
          </h2>
            <div className="row">
                <div className="col-sm-3" id="admin-links">{AdminLinks()}

                </div>
                <div className="col-sm-9">

                    <hr />
                    <Table striped bordered hover>
                    <thead>
                           <tr>

                             <th sortable="true"> Name</th>
                             <th></th>
                             <th></th>

                             <th>{createCategory()}</th>
                           </tr>
                    </thead>
                    <tbody>

                        {categories.map((c, i) => (
                          <tr>
                            <td

                            >
                                <strong>{c.name}</strong>
                                </td>


                                           <td>
                                        <Link to={`/admin/category/update/${c._id}`}>
                                            <button className="btn btn-primary">
                                                View
                                            </button>
                                        </Link>
                                        </td>
                                <td>

                                <Link to={`/admin/category/update/${c._id}`}>
                                    <button className="btn btn-warning">
                                        Update
                                    </button>
                                </Link>
                                </td>
                                <td>
                                <button
                                    type="button"
                                    onClick={() => destroy(c._id)}
                                    className="btn btn-danger"
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

export default ManageCategories;
