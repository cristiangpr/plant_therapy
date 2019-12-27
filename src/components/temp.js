import React, {useState} from "react";
import Navbar1 from "./Navbar";
  import {   withRouter } from 'react-router-dom';
import Footer from "./Footer"
import { createMessage } from "../admin/apiAdmin";
const showNavbar = (history, path) => {
    if (history.location.pathname === "/contact") {
        return <Navbar1/>;
    } else {
        return  null ;
    }
};

const Contact = ({history}) => {
  const [values, setValues] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
      error: "",
      success: false
  });
    const { name, email, subject, message, error, success } = values;

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };


    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false,   loading: true });
        createMessage({ name, email, subject, message }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    subject:"",
                    message: "",

                    error: "",
                    success: true,

                });
            }
        });

    };

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
            Message Sent
        </div>
    );
const showForm = () => (
  <div className="container mb-5">
<div className="row">
  <div className="col-md-4"></div>
  <div className="form col-md-4">
    <form className="contactForm">
        <div className="form-group">
            <label className="text-muted">Name</label>
            <input
                onChange={handleChange("name")}
                type="text"
                className="form-control"
                value={name}
            />
        </div>

        <div className="form-group">
            <label className="text-muted">Email</label>
            <input
                onChange={handleChange("email")}
                type="email"
                className="form-control"
                value={email}
            />
        </div>

        <div className="form-group">
            <label className="text-muted">Subject</label>
            <input
                onChange={handleChange("subject")}
                type="text"
                className="form-control"
                value={subject}
            />
        </div>
        <div className="form-group">
            <label className="text-muted">Message</label>
            <input
                onChange={handleChange("message")}
                type="text"
                className="form-control"
                value={message}
            />
        </div>
        <div className="text-center">
        <button onClick={clickSubmit} className="btn btn-outline-success text-center">
            Submit
        </button>
        </div>
    </form>
    <div className="col-md-4"></div>
    </div>
    </div>
    </div>
);

  return (
<>
{showNavbar(history)}
{showSuccess()}
{showError()}
{showForm()}

<Footer/>

</>
);

};
export default withRouter(Contact);
