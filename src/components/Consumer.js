import React, { useState, useEffect } from "react";
import Shop from "../core/Shop.js"
import ScrollUpButton from "react-scroll-up-button";

  import {  Link } from 'react-router-dom';
import Navbar1 from "./Navbar.js";
import Footer from "./Footer.js";

import Instagram from "./Instagram.js";


const Consumer = () => {

  return (
    <>
<Navbar1/>
  <div className="body">




<Shop/>


 <div className="section-header">
   <h3>Locations</h3>

 </div>
   <section id="call-to-action" className="wow fadeIn">
     <div className="container text-center">

       <Link className="cta-btn" to="/StoreLocator">FIND A RETAIL LOCATION</Link>
     </div>
   </section>


   <section className="blog-area section-gap" id="blog">
    <div className="container">
    <div className="row">
            <div className="col-lg-12">
              <div className="section-header">
                <h3>INSTAGRAM</h3>

              </div>
            </div>
          </div>
 <Instagram/>
 
 </div>
</section>

   <section id="team">
     <div className="container">
       <div className="section-header wow fadeInUp">
         <h3>Abassadors</h3>
         <p> We are proud to sponsor these athletes who recognize that our farm practices have far reaching consequences for our future and that it matters how we grow our food and treat the environment. Non-toxic alternatives are key to creating a sustainable future. </p>
       </div>

       <div className="row">

         <div className="col-md-4 wow fadeInUp">
           <div className="member">
             <img src="img/jd.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>James Davidson</h4>
                 <span>Indycar</span>
                 <div className="social">
                   <a href=""><i className="fa fa-instagram"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>

                 </div>
               </div>
             </div>
           </div>
         </div>



         <div className="col-md-4  wow fadeInUp" data-wow-delay="0.2s">
           <div className="member">
             <img src="img/team-3.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>Elijah Fox</h4>
                 <span>Surfer</span>
                 <div className="social">
                   <a href=""><i className="fa fa-instagram"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>

                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="col-md-4  wow fadeInUp" data-wow-delay="0.3s">
           <div className="member">
             <img src="img/team-4.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>Kingston</h4>
                 <span>Formula 1</span>
                 <div className="social">
                   <a href=""><i className="fa fa-instagram"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>

                 </div>
               </div>
             </div>
           </div>
         </div>

       </div>

     </div>
   </section>



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
<Footer/>

     <ScrollUpButton/>
   </div>
</>
);

};
export default Consumer;
