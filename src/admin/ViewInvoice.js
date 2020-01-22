import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listInvoices, getInvoiceStatusValues, updateInvoiceStatus, readInvoice, updateInvoice } from "./apiAdmin";
import moment from "moment";
import AdminLinks from './AdminLinks';
import Datatable from 'react-bs-datatable';

const ViewInvoice = ({match}) => {

    const [values, setValues] = useState({

        id: "",
        products: [],
        transaction_id: "",
        amount: "",
        street_address1: "",
        street_address2: "",
        state: "",
        zip:"",
        tax:"",
        shipping: "",
        status: "",
        updated: "",
        customer: "",
        email: "",
        discount_code:"",
        discount_rate: "",
        createdAt:"",
        error:"",
        success: false,
        loading: false

    });

    const [statusValues, setStatusValues] = useState([]);

    const { user, token } = isAuthenticated();

    const {
             id,
        products,
        transaction_id,
        amount,
        street_address1,
        street_address2,
        state,
        zip,
        tax,
        shipping,
        status,
        updated,
        customer,
        email,
        discount_code,
        discount_rate,
        createdAt,
        error,
        success,
        loading
       } = values;

          const init = invoiceId => {

              readInvoice(invoiceId, token).then(data => {
                console.log(data);
                  if (data.error) {
                      setValues({ ...values, error: true });
                  } else {
                      setValues({ ...values,
                         id: data._id,
                        products: data.products,
                        transaction_id: data.transaction_id,
                        amount: data.amount,
                        street_address1: data.street_address1,
                        street_address2: data.street_address2,
                        state: data.state,
                        zip: data.zip,
                        tax: data.tax,
                        shipping: data.shipping,
                        status: data.status,
                        updated: data.updated,
                        customer: data.user.name,
                        email: data.user.email,
                        discount_code: data.discount_code,
                        discount_rate: data.discount_rate,
                        createdAt: data.createdAt
                  });
                  }
              });
          };
    const loadStatusValues = () => {
        getInvoiceStatusValues(user._id, token).then(vdata => {
            if (vdata.error) {
                console.log(vdata.error);
            } else {
                setStatusValues(vdata);
            }
        });
    };

    useEffect(() => {
            init(match.params.invoiceId);
          loadStatusValues();
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
          setValues({ ...values, error: false,   loading: true });
        updateInvoice(match.params.invoiceId, user._id ,token, {    values }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {

                        setValues({
                            ...values,
                            id: "",
                            products: [],
                            transaction_id: "",
                            amount: "",
                            street_address1: "",
                            street_address2: "",
                            state: "",
                            zip:"",
                            tax:"",
                            shipping: "",
                            status: "",
                            updated: "",
                            customer: "",
                            email: "",
                            discount_code:"",
                            discount_rate: "",
                            createdAt:"",
                            error: "",
                            success: true,
                            loading: false
                        });

                }
            }
        );
    };
    const handleStatusChange = (e, invoiceId) => {
        updateInvoiceStatus(user._id, token, match.params.invoiceId, e.target.value).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
              init(match.params.invoiceId);
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
            <Link to="/admin_invoices" className="text-warning">
              Go Back
            </Link>
        </div>

    );



    return (
      <Layout
          title="Invoice"

          className="container-fluid"
      >
      <div className="row">
      <div className="col-md-3">
        {AdminLinks()}
      </div>

          <div className="col-md-9">

          <div className="invoice-box">
        <table cellpadding="5" cellspacing="5">
          <tbody>
            <tr className="top">
                <td colspan="3">
                    <table>
                        <tr>
                            <td className="title">
                                <img   src="/img/logo.png" />
                            </td>
                            <td></td>
                            <td contenteditable='true'>
                                Invoice #: {id}<br/>
                                Created: {moment(createdAt).format("MMM Do YYYY")}<br/>
                                Due: February 1, 2015
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr className="information">
                <td colspan="3">
                    <table>
                        <tr>
                            <td>
                            P.O. Box 662<br/>
                              Calistoga, Ca 94515<br/>
                             United States <br/>
                            </td>
                            <td></td>
                            <td>
                                {customer}<br/>
                                John Doe<br/>
                              {email}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr className="heading">
                <td>
                    Payment Method
                </td>
                <td>

                </td>
                <td>
                    Check #
                </td>
            </tr>

            <tr className="details">
                <td>
                    Check
                </td>
                <td>

                </td>
                <td>
                    1000
                </td>
            </tr>

            <tr className="heading">
                <td>
                    Item
                </td>
                <td>
                    Quantity
                </td>
                <td>
                    Price
                </td>
            </tr>
{products.map((p, pIndex) => (
            <tr className="item" key={pIndex}>
                <td>
                  {p.name}
                </td>
                <td>
                  {p.count}
                </td>
                <td onChange={handleChange("price")} contenteditable= 'true' >
                  {p.price}
                </td>
                </tr>
))}


            <tr className="item last">
                <td>
                  Tax
                </td>
                <td>

                </td>
                <td>
                  {tax}
                </td>
            </tr>

            <tr className="total">
                <td></td>
                <td>

                </td>
                <td contenteditable='true' id = "amount">
                   Total:{amount}
                </td>
            </tr>
         </tbody>
        </table>

    </div>
 <Link to={`/admin/invoice/update/${id}`}> <button className="btn btn-outline-primary"  style={{marginLeft:900,marginTop:25}}>Edit</button></Link>
</div>

          </div>

      </Layout>
    );
};

export default ViewInvoice;
