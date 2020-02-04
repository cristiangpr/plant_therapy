import React, { useState, useEffect } from "react";
import Shop from "../core/Shop.js";

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

<div className="section-header" id="gear">
  <h3>GEAR</h3>

</div>
  <section id="team" className="wow fadeIn">
    <div className="container text-center">
      <div className="row">
      <div className="col-md-4 wow fadeInUp">
        <div className="member">
          <img src="img/t-shirt.jpg" className="img-fluid" alt=""/>
          <div className="member-info">
            <div className="member-info-content">
           <Link to="t_shirts#products" ><h4>Shop T-Shirts</h4></Link>


            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 wow fadeInUp">
        <div className="member">
          <img src="img/jackets.jpg" className="img-fluid" alt=""/>
          <div className="member-info">
            <div className="member-info-content">
           <Link to="jackets" ><h4>Shop Jackets</h4></Link>


            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 wow fadeInUp">
        <div className="member">
          <img src="img/tote.jpg" className="img-fluid" alt=""/>
          <div className="member-info">
            <div className="member-info-content">
           <Link to="accessories"><h4>Shop Accessories</h4></Link>


            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>


 <div className="section-header" id="location">
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





  <Footer/>


     <ScrollUpButton/>
   </div>
</>
);

};
export default Consumer;
