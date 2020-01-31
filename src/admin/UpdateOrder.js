import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus, readOrder } from "./apiAdmin";
import moment from "moment";
import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';

const UpdateOrder = ({match}) => {

    const [values, setValues] = useState({

        id: "",
        products: [],
        transaction_id: "",
        amount: "",
        address: "",
        status: "",
        updated: "",
        customer: "",
        discount_code:"",
        discount_rate: "",
        createdAt:""

    });

    const [statusValues, setStatusValues] = useState([]);

    const { user, token } = isAuthenticated();

    const {
             id,
        products,
        transaction_id,
        amount,
        address,
        status,
        updated,
        customer,
        discount_code,
        discount_rate,
        createdAt
       } = values;

          const init = orderId => {
              // console.log(userId);
              readOrder(orderId, token).then(data => {
                console.log(data);
                  if (data.error) {
                      setValues({ ...values, error: true });
                  } else {
                      setValues({ ...values,
                         id: data._id,
                        products: data.products,
                        transaction_id: data.transaction_id,
                        amount: data.amount,
                        address: data.address,
                        status: data.status,
                        updated: data.updated,
                        customer: data.user.name,
                        discount_code: data.discount_code,
                        discount_rate: data.discount_rate,
                        createdAt: data.createdAt
                  });
                  }
              });
          };
    const loadStatusValues = () => {
        getStatusValues(user._id, token).then(vdata => {
            if (vdata.error) {
                console.log(vdata.error);
            } else {
                setStatusValues(vdata);
            }
        });
    };

    useEffect(() => {
            init(match.params.orderId);
          loadStatusValues();
    }, []);


    const handleStatusChange = (e, orderId) => {
        updateOrderStatus(user._id, token, match.params.orderId, e.target.value).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
              init(match.params.orderId);
                }
            }
        );
    };

    const showStatus = o => (
        <div className="form-group">
            <h4 className="mb-3">Status: {status}</h4>
            <select
                className="form-control"
                onChange={e => handleStatusChange(e, o._id)}
            >
                <option>Update Status</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );
    const goBack = () => (

        <div className="mt-5">
            <Link to="/admin_orders" className="text-warning">
              Go Back
            </Link>
        </div>

    );


    return (
      <Layout
          title="Order"

          className="container-fluid"
      >
      <div className="row">
      <div className="col-md-3">
        {AdminLinks()}
      </div>
      <div className="col-md-3">

      </div>
          <div className="col-md-3">

             <div className="card" id="dark-card" >


                         <h4 className="card-header name">  Order ID: {id}</h4>



                          <ul className="list-group">
                              <li className="list-group-item list-group-item-dark">
                                    {showStatus(status)}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                  Transaction ID: {transaction_id}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                  Amount: ${amount}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                  Ordered by: {user.name}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                  Ordered on:  {moment(createdAt).format("MMM Do YYYY")}

                              </li>
                              <li className="list-group-item list-group-item-dark">
                                  Delivery address: {address}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                  Discount Code: {discount_code}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                  Discount Rate: {discount_rate}
                              </li>
                          </ul>
  </div>
    {goBack()}
                          </div>



              <div className="col-md-3">
              <div className="card" id="dark-card" >
           <h4 className="card-header name">Total products in order:{" "} {products.length}</h4>

           {products.map((p, pIndex) => (

               <ul
                   className="list-group-border"
                   key={pIndex} >
                   <li className="list-group-item list-group-item-dark">
                       Product name: {p.name}
                   </li>
                   <li className="list-group-item list-group-item-dark">
                       Product price: ${parseFloat(p.price).toFixed(2)}
                   </li>
                   <li className="list-group-item list-group-item-dark">
                       Product total: {p.count}
                   </li>
                   <li className="list-group-item list-group-item-dark">
                       Product Id: {p._id}
                   </li>

               </ul>

           ))}
           </div>

              </div>



          </div>

      </Layout>
    );
};

export default UpdateOrder;
