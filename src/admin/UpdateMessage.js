import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { readMessage, updateMessage, deleteMessage } from "./apiAdmin";
import AdminLinks from './AdminLinks';
import "../styles.css";
import moment from "moment";

const UpdateMessage = ({ match }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        notes: "",
          createdAt:"",
        error: false,
        success: false
    });

    const { user, token } = isAuthenticated();
    const { name, email, subject, message, notes, error, success,   createdAt } = values;

    const init = messageId => {
        // console.log(messageId);
        readMessage(messageId, user._id, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, email: data.email, subject: data.subject, message: data.message, notes: data.notes,  createdAt: data.createdAt });
            }
        });
    };

    useEffect(() => {
        init(match.params.messageId);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        updateMessage(match.params.messageId, user._id, token, { notes }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {

                        setValues({
                            ...values,
                            notes: data.notes,


                            success: true
                        });

                }
            }
        );
    };
    const destroy = e => {
      e.preventDefault();
        deleteMessage(match.params.messageId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
              setValues({
                  ...values,


                  success: true
              });
                redirectUser();
            }
        });
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/admin_messages" />;
        }
    };

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin_messages" className="text-warning">
            Go Back
            </Link>
        </div>
    );

    const messageUpdate = (name, quantity) => (
<div className="form">
        <form className="contactForm">
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    onChange={handleChange("name")}
                    className="form-control"
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input
                    type="number"
                    onChange={handleChange("quantity")}
                    className="form-control"
                    value={quantity}
                />
            </div>


            <button onClick={clickSubmit} className="btn btn-outline-primary">
                Update
            </button>
            <button onClick={destroy} className="btn btn-outline-danger ml-3">
                Delete
            </button>
        </form>
        </div>
    );


    return (
      <Layout
          title="Message"

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


                         <h4 className="card-header name">  Message</h4>



                          <ul className="list-group">
                              <li className="list-group-item list-group-item-dark">
                                Neme : {name}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                Email: {email}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                Subject: {subject}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                Message : {message}
                              </li>
                              <li className="list-group-item list-group-item-dark">
                                  Recieved on:  {moment(createdAt).format("MMM Do YYYY")}

                              </li>
                              <li className="list-group-item list-group-item-dark">
                              <div className="form-group">
                                  <label className="text-muted">Notes</label>
                                  <input
                                      type="text"
                                      onChange={handleChange("notes")}
                                      className="form-control"
                                      value={notes}
                                  />
                                  <button onClick={clickSubmit} className="btn btn-outline-primary mt-3">
                                      Update
                                  </button>
                                  <button onClick={destroy} className="btn btn-outline-danger mt-3 ml-3">
                                      Delete
                                  </button>
                              </div>
                              </li>

                          </ul>

  </div>
    {goBack()}
    {redirectUser(success)}

                          </div>





          </div>

      </Layout>
    );
};

export default UpdateMessage;
