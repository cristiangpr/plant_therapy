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
      error: false,
      success: false
  });
    const { name, email, subject, message, error, success } = values;

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };


    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false,   loading: true });
        createMessage({ name, email, subject, message, error, success }).then(data => {
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

  return (
<>
{showNavbar(history)}
<section id="contact" className="section-bg wow fadeInUp">
  <div className="container">

    <div className="section-header">
      <h3>Contact Us</h3>
      <p>Send us a message. We'd love to hear from you!</p>
    </div>

    <div className="row contact-info">

      <div className="col-md-4">
        <div className="contact-address">
          <i className="ion-ios-location-outline"></i>
          <h3>Address</h3>
          <address> P.O. Box 662, Calistoga, Ca 94515 USA</address>
        </div>
      </div>

      <div className="col-md-4">
        <div className="contact-phone">
          <i className="ion-ios-telephone-outline"></i>
          <h3>Phone Number</h3>
          <p><a href="tel:+155895548855">+1 (877) 558-0808</a></p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="contact-email">
          <i className="ion-ios-email-outline"></i>
          <h3>Email</h3>
          <p><a href="mailto:info@example.com"> contact@lostcoastplanttherapy.com</a></p>
        </div>
      </div>

    </div>
<div className="row">
<div className="col-md-2"></div>
    <div className="form col-md-8">
    {showSuccess()}
    {showError()}

      <form className="contactForm">
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" onChange={handleChange("name")} value={name} className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validation"></div>
          </div>
          <div className="form-group col-md-6">
            <input type="email"  onChange={handleChange("email")} className="form-control" value={email} placeholder="Your Email" />

          </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
          <input type="text" onChange={handleChange("subject")} className="form-control" value={subject} id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
          <div className="validation"></div>
        </div>
        <div className="form-group col-md-6">
          <input type="text" onChange={handleChange("message")} className="form-control" value={message} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></input>
          <div className="validation"></div>
        </div>
        </div>
        <div className="col-md-2"></div>
        <div className="text-center mt-3"><button className="btn btn-outline-success"  onClick={clickSubmit} >Send Message</button></div>
      </form>
    </div>
</div>
  </div>
</section>
<Footer/>

</>
);

};
export default withRouter(Contact);
