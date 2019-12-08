import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCoupons, deleteCoupon } from "./apiAdmin";
import {Table} from 'react-bootstrap';
import AdminLinks from './AdminLinks'


const ManageCoupons = () => {
    const [coupons, setCoupons] = useState([]);

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

    const destroy = couponId => {
        deleteCoupon(couponId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadCoupons();
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
                    <Table striped bordered hover>
                    <thead>
                           <tr>

                             <th sortable="true"> Code</th>
                             <th>Discount</th>
                             <th>Expiration</th>
                               <th></th>
                                <th></th>
                             <th>{createCoupon()}</th>
                           </tr>
                    </thead>
                    <tbody>

                        {coupons.map((c, i) => (
                          <tr>
                            <td>
                                <strong>{c.code}</strong>
                                </td>
                                <td>
                                    <strong>{c.discount}</strong>
                                    </td>
                                    <td>
                                        <strong>{c.expireDate}</strong>
                                        </td>



                                           <td>
                                        <Link to={`/admin/coupon/update/${c._id}`}>
                                            <button className="btn btn-outline-primary">
                                                View
                                            </button>
                                        </Link>
                                        </td>
                                <td>

                                <Link to={`/admin/coupon/update/${c._id}`}>
                                    <button className="btn btn-outline-warning">
                                        Update
                                    </button>
                                </Link>
                                </td>
                                <td>
                                <button
                                    type="button"
                                    onClick={() => destroy(c._id)}
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

export default ManageCoupons;
