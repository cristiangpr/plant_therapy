import React from 'react';
import '../App.css';
import {  Link } from 'react-router-dom';
import Navbar1 from './Navbar'


const Landing = () => (
  <>

<Navbar1/>
    <div className ="body">


    <section id="intro">
      <div className="intro-container">
        <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">



          <div className="carousel-inner" role="listbox">

            <div className="carousel-item active animated fadeIn">
              <div className="carousel-background">
              <picture>
              <source srcSet="./img/product1.jpg" media="(min-width: 769px)" alt=""/>
                <source srcSet="./img/product_mobile.jpg" media="(min-width: 1px)" alt=""/>
                      <img srcSet="./img/product1.jpg"  alt="product" className="d-block img-fluid"/>
              </picture></div>
               </div>
            </div>
  </div>
    </div>

    </section>

   <section id="featured-services">
     <div className="container">
       <div className="row">

         <div className="col-lg-4 box">
              <Link to= "/consumer#products">   <i className="ion-pricetags"></i></Link>
           <h4 className="title"><a href="/consumer">Shop Now</a></h4>
           <p className="description">Browse our selection of home gardening products</p>
  

         </div>

         <div className="col-lg-4 box box-bg">
          <Link to= "/DistributorsLanding">   <i className="ion-earth"></i></Link>
           <h4 className="title"><a href="/DistributorsLanding">Distributors & Stores</a></h4>
           <p className="description">Wholesale and retail distributors go here</p>

         </div>

         <div className="col-lg-4 box">
          <Link to= "/FarmsLanding">   <i className="ion-leaf"></i></Link>
           <h4 className="title"><a href="/FarmsLanding">Farms</a></h4>
           <p className="description">Learn about our special programs for producers</p>

         </div>

       </div>
     </div>
   </section>


</div>
</>
);
export default Landing;
