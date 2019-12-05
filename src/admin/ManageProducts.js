import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import {Table} from 'react-bootstrap';
import AdminLinks from './AdminLinks'


const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    const createProduct = () => (
      <Link to='create_product'>
          <button className="btn btn-success">
              Create Product
          </button>
      </Link>

    )



    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="Manage Products"
            description=""
            className="container-fluid"
        >  <h2 className="text-center">
              Total {products.length} products
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
                             <th>Category</th>
                             <th>Price</th>
                             <th></th>
                                <th></th>
                             <th>{createProduct()}</th>
                           </tr>
                    </thead>
                    <tbody>

                        {products.map((p, i) => (
                          <tr>
                            <td

                            >
                                <strong>{p.name}</strong>
                                </td>
                                <td

                                >
                                    <strong>{p.category.name}</strong>
                                    </td>
                                    <td

                                    >
                                        <strong>{p.price}</strong>
                                        </td>
                                        <td>

                                        <Link to={`/admin/product/update/${p._id}`}>
                                            <button className="btn btn-primary">
                                                View
                                            </button>
                                        </Link>
                                        </td>
                                <td>

                                <Link to={`/admin/product/update/${p._id}`}>
                                    <button className="btn btn-warning">
                                        Update
                                    </button>
                                </Link>
                                </td>
                                <td>
                                <button
                                    type="button"
                                    onClick={() => destroy(p._id)}
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

export default ManageProducts;
