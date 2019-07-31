import React, { Component } from 'react';
import $ from "jquery";
import Navbar from "./Navbar.js";
import Instafeed from "instafeed.js";
class Consumer extends Component {


componentDidMount(){
  var feed = new Instafeed({
    accessToken: '1913298339.92bedff.14e523580fd54980a28e7d719706ca0c',
      get: 'user',
      clientId: 	'92bedffba0f8495c8220ddb88c6b5ccb',
       template:'<div className="col-lg-4 col-md-6"><div className="thumb"><a href="{{link}}"><img className="img-fluid" id="insta" src="{{image}}" /></div></div></a>',
      limit: 3,

      resolution: 'low_resolution', // thumbnail, low_resolution, standard_resolution
      sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
      tagName: null,
      userId: 1913298339,
});
feed.run();
}

render(){
  return (

  <div>

<Navbar/>
<section id="about">
  <div className="container" id="about-container">

    <header className="section-header">
      <h3>About Us</h3>
      <p>For over 45 years we have been enthusiastic organic gardeners. Our love of plants and the environment inspired the creation of

</p><h4>Lost Coast Plant Therapy</h4>
    </header>

    <div className="row about-cols">

      <div className="col-md-4 wow fadeInUp">
        <div className="about-col">
          <div className="img">
            <img src="./img/mission.jpg" alt="" className="img-fluid"/>
            <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
          </div>
          <h2 className="title"><a href="#">Our Mission</a></h2>
          <p>
          We have all seen the devastating effects of poisonous pesticides, insecticides and fungicides that contaminate the water, soil, food and crops they are used on.  We are proud to provide an alternative solution to some of the agricultural industry's biggest challenges.
          </p>
        </div>
      </div>

      <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="about-col">
          <div className="img">
            <img src="./img/plan.jpg" alt="" className="img-fluid"/>
            <div className="icon"><i className="ion-ios-list-outline"></i></div>
          </div>
          <h2 className="title"><a href="#">Our Plan</a></h2>
          <p>
          We found the available products on the market for insect and disease control unsatisfactory in effectiveness. We took all our knowledge and years of experience, two years developing our formula, along with eighteen months of field testing to bring you an all natural solution.
          </p>
        </div>
      </div>

      <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
        <div className="about-col">
          <div className="img">
            <img src="./img/vision.jpg" alt="" className="img-fluid"/>
            <div className="icon"><i className="ion-ios-eye-outline"></i></div>
          </div>
          <h2 className="title"><a href="#">Our Vision</a></h2>
          <p>
          We trust in nature's solutions to thriving and believe in creating a sustainable future by the daily actions we take with the products we use. Both organic and conventional farmers can be proud of taking care of the environment and their workers
          </p>
        </div>
      </div>

    </div>

  </div>
</section>


   <section className="new_product_area section_gap_top section_gap_bottom_custo" id="products">
     <div className="container">
       <div className="row justify-content-center">
         <div className="col-lg-12">
           <div className="section-header">
             <h3>PRODUCTS</h3>
             <p>Find a presentation to fit your needs</p>
           </div>
         </div>
       </div>

       <div className="row">
         <div className="col-lg-6">
           <div className="new_product wow fadeIn">

             <h3 className="text-uppercase" id="dark">Free 2 oz Sample</h3>
             <div className="product-img">
               <img className="img-fluid" src="./img/sample.jpg" alt="" />
             </div>
             <h4 id="dark">Pay only shipping cost</h4>
             <a href="#" className="main_btn">Add to cart</a>
           </div>
         </div>

         <div className="col-lg-6 mt-5 mt-lg-0">
           <div className="row">
             <div className="col-lg-6 col-md-6">
               <div className="single-product wow fadeIn" >
                 <div className="product-img">
                   <img className="img-fluid w-100" src="./img/product1.jpg" alt="" />
                   <div className="p_icon">
                     <a href="#">
                       <i className="ti-eye"></i>
                     </a>
                     <a href="#">
                       <i className="ti-heart"></i>
                     </a>
                     <a href="#">
                       <i className="ti-shopping-cart"></i>
                     </a>
                   </div>
                 </div>
                 <div className="product-btm">
                   <a href="#" className="d-block">
                     <h4>2.5 Gallon Bottle</h4>
                   </a>
                   <div className="mt-3">
                     <span className="mr-4">$575.00</span>
                     <del>$600.00</del>
                   </div>
                 </div>
               </div>
             </div>

             <div className="col-lg-6 col-md-6">
               <div className="single-product wow fadeIn" >
                 <div className="product-img">
                   <img className="img-fluid w-100" src="./img/gallon.jpg" alt="" />
                   <div className="p_icon">
                     <a href="#">
                       <i className="ti-eye"></i>
                     </a>
                     <a href="#">
                       <i className="ti-heart"></i>
                     </a>
                     <a href="#">
                       <i className="ti-shopping-cart"></i>
                     </a>
                   </div>
                 </div>
                 <div className="product-btm">
                   <a href="#" className="d-block">
                     <h4>1 Gallon Bottle</h4>
                   </a>
                   <div className="mt-3">
                     <span className="mr-4">$250.00</span>
                     <del>$275.00</del>
                   </div>
                 </div>
               </div>
             </div>

             <div className="col-lg-6 col-md-6">
               <div className="single-product  wow fadeIn"  >
                 <div className="product-img">
                   <img className="img-fluid w-100" src="./img/32oz.jpg" alt="" />
                   <div className="p_icon">
                     <a href="#">
                       <i className="ti-eye"></i>
                     </a>
                     <a href="#">
                       <i className="ti-heart"></i>
                     </a>
                     <a href="#">
                       <i className="ti-shopping-cart"></i>
                     </a>
                   </div>
                 </div>
                 <div className="product-btm">
                   <a href="#" className="d-block">
                     <h4>32 oz Bottle</h4>
                   </a>
                   <div className="mt-3">
                     <span className="mr-4">$90.00</span>
                     <del>$100.00</del>
                   </div>
                 </div>
               </div>
             </div>

             <div className="col-lg-6 col-md-6">
               <div className="single-product  wow fadeIn" >
                 <div className="product-img">
                   <img className="img-fluid w-100" src="./img/12oz.jpg" alt="" />
                   <div className="p_icon">
                     <a href="#">
                       <i className="ti-eye"></i>
                     </a>
                     <a href="#">
                       <i className="ti-heart"></i>
                     </a>
                     <a href="#">
                       <i className="ti-shopping-cart"></i>
                     </a>
                   </div>
                 </div>
                 <div className="product-btm">
                   <a href="#" className="d-block">
                     <h4>12 oz Bottle</h4>
                   </a>
                   <div className="mt-3">
                     <span className="mr-4">$40.00</span>
                     <del>$50.00</del>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>

   <section id="call-to-action" className="wow fadeIn">
     <div className="container text-center">
       <h3>Store Finder</h3>
       <p> Find a retail location near you</p>
       <a className="cta-btn" href="#">Find Stores</a>
     </div>
   </section>




   <section id="team">
     <div className="container">
       <div className="section-header wow fadeInUp">
         <h3>Abassadors</h3>
         <p> We are proud to sponsor these athletes who recognize that our farm practices have far reaching consequences for our future and that it matters how we grow our food and treat the environment. Non-toxic alternatives are key to creating a sustainable future. </p>
       </div>

       <div className="row">

         <div className="col-lg-3 col-md-6 wow fadeInUp">
           <div className="member">
             <img src="img/jd.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>James Davidson</h4>
                 <span>Indycar</span>
                 <div className="social">
                   <a href=""><i className="fa fa-twitter"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>
                   <a href=""><i className="fa fa-google-plus"></i></a>
                   <a href=""><i className="fa fa-linkedin"></i></a>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
           <div className="member">
             <img src="img/team-2.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>Sarah Jhonson</h4>
                 <span>Snowboard</span>
                 <div className="social">
                   <a href=""><i className="fa fa-twitter"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>
                   <a href=""><i className="fa fa-google-plus"></i></a>
                   <a href=""><i className="fa fa-linkedin"></i></a>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
           <div className="member">
             <img src="img/team-3.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>William Anderson</h4>
                 <span>Surfer</span>
                 <div className="social">
                   <a href=""><i className="fa fa-twitter"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>
                   <a href=""><i className="fa fa-google-plus"></i></a>
                   <a href=""><i className="fa fa-linkedin"></i></a>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
           <div className="member">
             <img src="img/team-4.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>Amanda Jepson</h4>
                 <span>Formula 1</span>
                 <div className="social">
                   <a href=""><i className="fa fa-twitter"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>
                   <a href=""><i className="fa fa-google-plus"></i></a>
                   <a href=""><i className="fa fa-linkedin"></i></a>
                 </div>
               </div>
             </div>
           </div>
         </div>

       </div>

     </div>
   </section>

<section className="blog-area section-gap" id="blog">
 <div className="container">
 <div className="row justify-content-center">
         <div className="col-lg-12">
           <div className="section-header">
             <h3>INSTAGRAM</h3>

           </div>
         </div>
       </div>
  <div className="row" id="instafeed">

  </div>
  </div>
</section>
   <section id="contact" className="section-bg wow fadeInUp">
     <div className="container">

       <div className="section-header">
         <h3>Contact Us</h3>
         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
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
           <div className="form-group">
             <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
             <div className="validation"></div>
           </div>
           <div className="form-group">
             <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
             <div className="validation"></div>
           </div>
           <div className="text-center"><button type="submit">Send Message</button></div>
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
     <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
   </div>

);
}
}
export default Consumer;
