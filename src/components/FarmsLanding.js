import React, { useState } from 'react';
import StoreNavbar from "./StoreNavbar.js"
import { Link, Redirect } from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button";
import { signup } from "../auth";
import FarmSignin from "./FarmSignin"


  const FarmsLanding = () => {
      const [values, setValues] = useState({
          name: "",
          email: "",
          password: "",
          phone: "",
          permit: "",
          business_name: "",
          street_address: "",
          city: "",
          state: "",
          country: "",
          zip: "",
          website: "",
          about: "",
          error: "",
          success: false
      });

      const { name, email, password, phone, permit, business_name, street_address, city, state, country, zip, website, about, error, success } = values;

      const handleChange = name => event => {
          setValues({ ...values, error: false, [name]: event.target.value });
      };



      const clickSubmit = event => {
          event.preventDefault()
          setValues({ ...values, error: false });
          signup({ name, email, password, phone, permit, business_name, street_address, city, state, country, zip, website, about, error, success }).then(data => {
              if (data.error) {
                  setValues({ ...values, error: data.error, success: false });
              } else {
                  setValues({
                      ...values,
                      name: "",
                      email: "",
                      password: "",
                      phone: "",
                      permit: "",
                      business_name: "",
                      street_address: "",
                      city: "",
                      state: "",
                      country: "",
                      zip: "",
                      website: "",
                      about: "",
                      error: "",
                      success: true
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
              New account is created. Please <Link to="/signin">Signin</Link>
          </div>
      );


  return (

  <div>
  <StoreNavbar/>
 <FarmSignin/>

  <section id="contact" className="section-bg wow fadeInUp">
    <div className="container">

      <div className="section-header">
        <h3>Create Account</h3>
        <p>
Farms Fill In Details Below To
Apply For Special Pricing</p>
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
            <p><a href="mailto:info@example.com"> contact@loscoastplanttherapy.com</a></p>
          </div>
        </div>

      </div>
      {showSuccess()}
      {showError()}

      <div className="form">
        <div id="sendmessage">Your message has been sent. Thank you!</div>
        <div id="errormessage"></div>
        <form  className="contactForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input   onChange={handleChange("name")} type="text"  className="form-control" value={name} placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

            </div>
            <div className="form-group col-md-6">
              <input   onChange={handleChange("email")} type="email" className="form-control"  value={email} placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input   onChange={handleChange("password")} type="password" className="form-control" value={password} placeholder="Create a password"  />

            </div>

            <div className="form-group col-md-6">
              <input onChange={handleChange("phone")} type="text" className="form-control" value={phone} placeholder="Phone" data-rule="minlen:10" data-msg="Please enter a valid phone" />

            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <input onChange={handleChange("permit")} type="text" className="form-control" value={permit} placeholder="Seller Permit # | Tax ID #" />

            </div>
            <div className="form-group col-md-6">
              <input onChange={handleChange("business_name")} type="text"  className="form-control" value={business_name} placeholder="Business Name" />

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <input onChange={handleChange("street_address")} type="text"  className="form-control" value={street_address} placeholder="Street Address"  />

            </div>

          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input onChange={handleChange("city")} type="text"  className="form-control" value={city} placeholder="City" />

            </div>
            <div className="form-group col-md-6">
              <input onChange={handleChange("state")} type="text" className="form-control"  value={state} placeholder="State"  />

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input onChange={handleChange("country")} type="text"  className="form-control" value={country} placeholder="Country"  />

            </div>
            <div className="form-group col-md-6">
              <input onChange={handleChange("zip")} type="text" className="form-control"  value={zip} placeholder="Zip"  />

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input onChange={handleChange("website")} type="text" className="form-control" value={website} placeholder="Website URL" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input onChange={handleChange("about")} type="text" className="form-control"  value={about} placeholder="How did you hear about us?"  />

            </div>
          </div>
          <div className="text-center"><button onClick={clickSubmit} type="submit">Submit Application</button></div>
        </form>
      </div>

    </div>
  </section>

   <footer id="footer">
     <div className="footer-top">
       <div className="container">
         <div className="row">

           <div className="col-lg-3 col-md-6 footer-info">
             <h3>Lost Coast Plant Therapy</h3>
             <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
           </div>

           <div className="col-lg-3 col-md-6 footer-links">
             <h4>Useful Links</h4>
             <ul>
               <li><i className="ion-ios-arrow-right"></i> <a href="/">Home</a></li>
               <li><i className="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
               <li><i className="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
               <li><i className="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
               <li><i className="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
             </ul>
           </div>

           <div className="col-lg-3 col-md-6 footer-contact">
             <h4>Contact Us</h4>
             <p>
               A108 Adam Street <br/>
               New York, NY 535022<br/>
               United States <br/>
               <strong>Phone:</strong> +1 5589 55488 55<br/>
               <strong>Email:</strong> info@example.com<br/>
             </p>

             <div className="social-links">
               <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
               <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
               <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
               <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
               <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
             </div>

           </div>

           <div className="col-lg-3 col-md-6 footer-newsletter">
             <h4>Our Newsletter</h4>
             <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
             <form action="" method="post">
               <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
             </form>
           </div>

         </div>
       </div>
     </div>

     <div className="container">
       <div className="copyright">
         &copy; Copyright <strong>Lost Coast Plant Therapy</strong>. All Rights Reserved
       </div>

     </div>
   </footer>
    <ScrollUpButton/>
   </div>

);
}

export default FarmsLanding;
