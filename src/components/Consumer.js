import React, { useState, useEffect } from "react";
import Shop from "../core/Shop.js"
import ScrollUpButton from "react-scroll-up-button";
import Contact from "./Contact"
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



  <Contact/>
<Footer/>

     <ScrollUpButton/>
   </div>
</>
);

};
export default Consumer;
