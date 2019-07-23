import React, { Component } from 'react';
import StoreNavbar from "./StoreNavbar.js"
  import { Link } from 'react-router-dom';
class FarmsLanding extends Component {



render(){
  return (

  <div>
  <StoreNavbar/>
  <section id="sign-in" className="section-bg wow fadeInUp">
    <div className="container">

      <div className="section-header">
        <h3>Sign In</h3>
        <p>
Affiliated Farms sign in below</p>
      </div>


              <div className="form">

                <div id="errormessage"></div>
                <form action="" method="post" role="form" className="contactForm">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Enter username" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Enter password" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validation"></div>
                    </div>
                  </div>

                  <div className="text-center"><Link to="/Farms"><button type="submit">Sign In</button></Link></div>
                </form>
              </div>
</div>

</section>


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

      <div className="form">
        <div id="sendmessage">Your message has been sent. Thank you!</div>
        <div id="errormessage"></div>
        <form action="" method="post" role="form" className="contactForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="password" name="password" className="form-control" id="password" placeholder="Create a password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input type="password" className="form-control" name="password-conf" id="password-conf" placeholder="Confirm password" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="password" name="password" className="form-control" id="password" placeholder="Business Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input type="password" className="form-control" name="password-conf" id="password-conf" placeholder="Farm Name if different from business name" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="password" name="password" className="form-control" id="password" placeholder="Seller Permit # | Tax ID #" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input type="password" className="form-control" name="password-conf" id="password-conf" placeholder="Phone" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="password" name="password" className="form-control" id="password" placeholder="Address Line 1" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input type="password" className="form-control" name="password-conf" id="password-conf" placeholder="Address Line 2" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="password" name="password" className="form-control" id="password" placeholder="City" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input type="password" className="form-control" name="password-conf" id="password-conf" placeholder="State" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="password" name="password" className="form-control" id="password" placeholder="Country" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input type="password" className="form-control" name="password-conf" id="password-conf" placeholder="Zip" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="password" name="password" className="form-control" id="password" placeholder="Website URL" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input type="password" className="form-control" name="password-conf" id="password-conf" placeholder="How did you hear about us?" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validation"></div>
            </div>
          </div>
          <div className="text-center"><button type="submit">Submit Application</button></div>
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
               <li><i className="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
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
     <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
   </div>

);
}
}
export default FarmsLanding;
