import React from 'react';

  import {  Link } from 'react-router-dom';

const Footer = () => (

<footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-3 col-md-6 footer-info">
          <h3>Lost Coast Plant Therapy</h3>
          <p>Protect your valuable crops from damaging pests, mold and mildew with Lost Coast Plant Therapy. Eliminates bugs on contact by suffocation and dehydration. Does not leave harmful residue on your plants.</p>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
            <li><i className="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
            <li><i className="ion-ios-arrow-right"></i> <a href="#">Disclaimers</a></li>
            <li><i className="ion-ios-arrow-right"></i> <a href="#">Refund Policy</a></li>
            <li><i className="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-contact">
          <h4>Contact Us</h4>
          <p>
           P.O. Box 662<br/>
             Calistoga, Ca 94515<br/>
            United States <br/>
            <strong>Phone:</strong>+1 (877) 558-0808<br/>
            <strong>Email:</strong>  contact@loscoastplanttherapy.com<br/>
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
          <p>Sign up to recieve updates on our products</p>
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
);
export default Footer;
