import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus } from "./apiAdmin";
import moment from "moment";
import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [statusValues, setStatusValues] = useState([]);
    const [header, setHeader] = useState([
        { title: "Order Id", prop: "orderId", sortable: true, filterable: true, editable: true },
        {title: "Transaction", prop: "transId", sortable: true, filterable: true},
        {title: "Amount", prop: "amount", filterable: true, sortable: true},
          {title: "Status", prop: "status", filterable: true, sortable: true},
        {title: "", prop: "update"},
            {title: "Customer", prop: "customer", filterable: true, sortable: true},
            {title: "Ordered on", prop: "date", filterable: true, sortable: true},
            {title: "", prop: "view"},





    ]);


    const { user, token } = isAuthenticated();

    const loadOrders = () => {
        listOrders(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrders(data);
            }
        });
    };
    const loadStatusValues = () => {
        getStatusValues(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setStatusValues(data);
            }
        });
    };

    useEffect(() => {
        loadOrders();
          loadStatusValues();
    }, []);
    const showOrdersLength = () => {
        if (orders.length > 0) {
            return (
                <h4 className="text-danger">
                    Total orders: {orders.length}
                </h4>
            );
        } else {
            return <h4 className="text-danger">No orders</h4>;
        }
    };
    const noOrders = orders => {
        return orders.length < 1 ? <h4>No orders</h4> : null;
    };
    const showInput = (key, value) => (
        <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{key}</div>
            </div>
            <input
                type="text"
                value={value}
                className="form-control"
                readOnly
            />
        </div>
    );
    const handleStatusChange = (e, orderId) => {
        updateOrderStatus(user._id, token, orderId, e.target.value).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
                    loadOrders();
                }
            }
        );
    };

    const showStatus = o => (
        <div className="form-group">
            <h3 className="mark mb-4" style={{color: "black"}}>Status: {o.status}</h3>
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
    const body =  orders.map((o, i) => (

            {   orderId: o._id ,
                transId: o.transaction_id,
                amount: o.amount,
                status: o.status,
                update:   <select

                      onChange={e => handleStatusChange(e, o._id)}
                  >
                      <option>Update Status</option>
                      {statusValues.map((status, index) => (
                          <option key={index} value={status}>
                              {status}
                          </option>
                      ))}
                  </select>,
                customer: user.name,
                date: moment(o.createdAt).format("MMM Do YYYY"),
                view:      <Link to={`/admin/order/update/${o._id}`}>
                         <button  className="btn btn-outline-primary">
                        View
                         </button>
                     </Link>
               }
             ));


    return (
      <Layout
          title="Orders"

          className="container-fluid"
      >
      <div className="row">
      <div className="col-md-3">
        {AdminLinks()}
      </div>
          <div className="col-md-9">
              {showOrdersLength()}

              <Datatable
                tableHeaders={header}
                tableBody={body}


                rowsPerPage={10}
                rowsPerPageOption={[5, 10, 20, 30, 100]}
                initialSort={{ prop: "orderId", isAscending: true }}

              />
          </div>
      </div>
      </Layout>
    );
};

export default Orders;
