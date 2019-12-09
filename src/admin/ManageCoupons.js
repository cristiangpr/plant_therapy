import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCoupons } from "./apiAdmin";
import {Table} from 'react-bootstrap';
import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';



const ManageCoupons = () => {
    const [coupons, setCoupons] = useState([]);
    const [header, setHeader] = useState([
        { title: "Code", prop: "code", sortable: true, filterable: true },
        { title: "Discount", prop: "discount", sortable: true, filterable: true },
        { title: "Expiration", prop: "expiration", sortable: true, filterable: true },

          {title: "Edit", prop: "edit"},

    ]);

    const { user, token } = isAuthenticated();

    const loadCoupons = () => {
        getCoupons().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCoupons(data);
            }
        });
    };



    const createCoupon = () => (
      <Link to='create_coupon'>
          <button className="btn btn-outline-success">
              Create Coupon
          </button>
      </Link>

    )

        const body =   coupons.map((c, i) => (
              {    code: c.code,
                   discount: c.discount,
                   expiration: c.expireDate,
                    edit:    <Link to={`/admin/coupon/update/${c._id}`}>
                            <button className="btn btn-outline-warning">
                              Edit
                            </button>
                        </Link>
                   }
                    ))


    useEffect(() => {
        loadCoupons();
    }, []);

    return (
        <Layout
            title="Manage Coupons"

            className="container-fluid"
        >  <h2 className="text-center">
              Total {coupons.length} coupons
          </h2>
            <div className="row">
                <div className="col-sm-3" id="admin-links">{AdminLinks()}

                </div>
                <div className="col-sm-9">

                    <hr />
                    <Datatable
                      tableHeaders={header}
                      tableBody={body}
                      keyName="couponTable"
                      tableClass="striped border responsive"
                      rowsPerPage={10}
                      rowsPerPageOption={[3, 5, 8, 10]}
                      initialSort={{ prop: "name", isAscending: true }}
                    />
                    {createCoupon()}
                </div>
            </div>
        </Layout>
    );
};

export default ManageCoupons;
