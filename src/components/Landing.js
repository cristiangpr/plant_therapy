import React from 'react';
import '../App.css';
  import {  Link } from 'react-router-dom';

const Landing = () => (




    <div className ="body">



    <section id="intro">
      <div className="intro-container">
        <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

          <ul className="carousel-indicators"></ul>

          <div className="carousel-inner" role="listbox">

            <div className="carousel-item active animated fadeIn">
              <div className="carousel-background">
              <picture>
              <source srcSet="./img/product.jpg" media="(min-width: 769px)" alt=""/>
                <source srcSet="./img/product_mobile.jpg" media="(min-width: 1px)" alt=""/>
                      <img srcSet="./img/product.jpg"  alt="product" className="d-block img-fluid"/>
              </picture></div>

            </div>

            <div className="carousel-item">
              <div className="carousel-background">
                         <picture>
                          <source srcset="./img/pink2.jpg" media="(min-width: 769px)" alt=""/>
                            <source srcSet="./img/pink_mobile.jpg" media="(min-width: 1px)" alt=""/>
                                  <img srcSet="./img/pink2.jpg" alt="flowers" className="d-block img-fluid"/>
                          </picture></div>
              <div className="carousel-container">
                <div className="carousel-content animated fadeInLeft">
                  <h2>Organic Ingredients</h2>
                  <h5>The plant healthy - planet healthy solution you have been looking for! </h5>
                  <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-background">
               <picture>
                  <source srcSet="./img/farm2.jpg" media="(min-width: 769px)" alt=""/>
                    <source srcSet="./img/farm2_mobile.jpg" media="(min-width: 1px)" alt=""/>
                          <img srcSet="./img/farm2.jpg" alt="farm" className="d-block img-fluid"/>
                  </picture></div>
              <div className="carousel-container">
                <div className="carousel-content animated fadeInLeft">
                  <h2>No Poison</h2>
                  <h5>Clean and healthy gardens from start to finish! </h5>
                  <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>

          </div>

          <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>

          <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

        </div>
      </div>
    </section>

   <section id="featured-services">
     <div className="container">
       <div className="row">

         <div className="col-lg-4 box">
              <Link to= "/consumer">   <i className="ion-pricetags"></i></Link>
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
);
export default Landing;
