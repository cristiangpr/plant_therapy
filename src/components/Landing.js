import React from 'react';
import '../App.css';
import {  Link } from 'react-router-dom';
import Navbar1 from './Navbar'
import Instagram from "./Instagram.js";
import Footer from "./Footer"
const Landing = () => (
  <>


    <div className="landing-image">

    <Navbar1/>




              <picture className="landing-image">
              <source srcSet="./img/product1.jpg" media="(min-width: 769px)" alt=""/>
                <source srcSet= "/img/logo.png"


                   className="d-inline-block align-top"
                   alt="Plant Therapy logo"
               media="(min-width: 1px)" alt=""/>

                      <img srcSet="./img/product1.jpg"  alt="product" className="d-block img-fluid"/>
              </picture>

</div>

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
   <section id="team">
     <div className="container">
       <div className="section-header wow fadeInUp">
       <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
           <div className="carousel-item active">
      <h4>The plant healthy, planet friendly solution you have been waiting for!</h4>
           </div>
           <div class="carousel-item">
    <h4>Clean start means clean finish</h4>
           </div>
           <div class="carousel-item">
  <h4>Organic ingredients, no poison</h4>
           </div>
         </div>
       </div>
       </div>

       <div className="row">

         <div className="col-md-4 wow fadeInUp">
           <div className="member">
             <img src="img/landing6.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
              <Link to="consumer" ><h4>Shop Now</h4></Link>


               </div>
             </div>
           </div>
         </div>



         <div className="col-md-4 wow fadeInUp">
           <div className="member">
             <img src="img/landing2.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                <Link to="consumer" ><h4>Shop Now</h4></Link>


               </div>
             </div>
           </div>
         </div>


         <div className="col-md-4 wow fadeInUp">
           <div className="member">
             <img src="img/landing4.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                <Link to="consumer" ><h4>Shop Now</h4></Link>




               </div>
             </div>
           </div>
         </div>


       </div>

     </div>
   </section>
<Footer/>

</>
);
export default Landing;
