import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts } from "./apiAdmin";

import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [header, setHeader] = useState([
        { title: "Name", prop: "name", sortable: true, filterable: true, editable: true },
        {title: "Category", prop: "category", sortable: true, filterable: true},
        {title: "Price", prop: "price", filterable: true, sortable: true},
          {title: "Edit", prop: "edit"},


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




    const createProduct = () => (
      <Link to='create_product'>
          <button  className="btn btn-outline-success">
              Create Product
          </button>
      </Link>

    )
const body =  products.map((p, i) => (

        {   name: p.name,
            category: p.category.name,
            price: p.price,
            edit:    <Link to={`/admin/product/update/${p._id}`}>
                    <button className="btn btn-outline-warning">
                      Edit
                    </button>
                </Link>
           }
            ))



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
                      tableBody={body}


                      rowsPerPage={10}
                      rowsPerPageOption={[5, 10, 20, 30, 100]}
                      initialSort={{ prop: "name", isAscending: true }}

                    />
                    {createProduct()}
                </div>
            </div>
        </Layout>
    );
};

export default ManageProducts;
