import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";

import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [header, setHeader] = useState([
        { title: "Name", prop: "name", sortable: true, filterable: true },
        {title: "Category", prop: "{category.name}", sortable: true, filterable: true},
        {title: "Price", prop: "price", filterable: true, sortable: true},

    ]);


    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                  console.log(data);
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
          <button className="btn btn-outline-success">
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

            className="container-fluid"
        >  <h2 className="text-center">
              Total {products.length} products
          </h2>
            <div className="row">
                <div className="col-sm-3" id="admin-links">{AdminLinks()}

                </div>
                <div className="col-sm-9">

                    <hr />
                    <Datatable
                      tableHeaders={header}
                      tableBody={products}
                      keyName="productTable"
                      tableClass="striped border responsive"
                      rowsPerPage={5}
                      rowsPerPageOption={[3, 5, 8, 10]}
                      initialSort={{ prop: "name", isAscending: true }}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default ManageProducts;
