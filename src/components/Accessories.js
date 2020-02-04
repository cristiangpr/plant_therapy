import React, { useState, useEffect } from "react";

import AccessoryShop from "../core/AccessoryShop.js";
import ScrollUpButton from "react-scroll-up-button";

  import {  Link } from 'react-router-dom';
import Navbar1 from "./Navbar.js";
import Footer from "./Footer.js";

import Instagram from "./Instagram.js";


const Accessories = () => {

  return (
    <>
<Navbar1/>
  <div className="body">




<AccessoryShop/>

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
export default Accessories;
