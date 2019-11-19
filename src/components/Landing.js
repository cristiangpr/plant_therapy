import React from 'react';
import '../App.css';
import {  Link } from 'react-router-dom';
import Navbar1 from './Navbar'
import Instagram from "./Instagram.js";

const Landing = () => (
  <>


    <div >

    <Navbar1/>




              <picture className="landing-image">
              <source srcSet="./img/product1.jpg" media="(min-width: 769px)" alt=""/>
                <source srcSet= "/img/logo.png"


                   className="d-inline-block align-top"
                   alt="Plant Therapy logo"
               media="(min-width: 1px)" alt=""/>

                      <img srcSet="./img/product1.jpg"  alt="product" className="d-block img-fluid"/>
              </picture>



   <section id="featured-services">
     <div className="container">
       <div className="row">

         <div className="col-lg-4 box">
              <Link to= "/consumer#products">   <i className="ion-pricetags"></i></Link>
           <h4 className="title"><a href="/consumer">Shop Now</a></h4>
           <p className="description">Browse natural gardening products here</p>


         </div>

         <div className="col-lg-4 box box-bg">
          <Link to= "/DistributorsLanding">   <i className="ion-earth"></i></Link>
           <h4 className="title"><a href="/DistributorsLanding">Distributors & Stores</a></h4>
           <p className="description">Wholesale and retail distributors go here</p>

         </div>

         <div className="col-lg-4 box">
          <Link to= "/FarmsLanding">   <i className="ion-leaf"></i></Link>
           <h4 className="title"><a href="/FarmsLanding">Farms</a></h4>
           <p className="description">Apply for special bulk pricing here</p>

         </div>

       </div>
     </div>
   </section>
   <section className="blog-area section-gap" id="blog">
    <div className="container">
    <div className="row">
            <div className="col-lg-12">
              <div className="section-header">
                <h4>The plant healthy, planet friendly solution you have been looking for!</h4>

              </div>
            </div>
          </div>
 <Instagram/>

 </div>
</section>
</div>
</>
);
export default Landing;
