import React from 'react';
import '../App.css';
  import { Route, Link } from 'react-router-dom';

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
              <source srcset="./img/farm2.jpg" media="(min-width: 769px)" alt=""/>
                <source srcset="./img/farm.jpg" media="(min-width: 1px)" alt=""/>
                      <img srcset="./img/farm2.jpg" alt="responsive image" class="d-block img-fluid"/>
              </picture></div>
              <div className="carousel-container">
              <div className="carousel-content animated fadeInRight">
                <h2>Lost Coast Plant Therapy</h2>
                <h5>Natural Care for your house plants, yard, garden or commercial farming.</h5>
                <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
              </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-background">
                         <picture>
                          <source srcset="./img/flower.jpg" media="(min-width: 769px)" alt=""/>
                            <source srcset="./img/flower_mobile.jpg" media="(min-width: 1px)" alt=""/>
                                  <img srcset="./img/flower.jpg" alt="responsive image" class="d-block img-fluid"/>
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
                  <source srcset="./img/dog2.jpg" media="(min-width: 769px)" alt=""/>
                    <source srcset="./img/dog.jpg" media="(min-width: 1px)" alt=""/>
                          <img srcset="./img/farm2.jpg" alt="responsive image" class="d-block img-fluid"/>
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
           <h4 className="title"><a href="">Shop Now</a></h4>
           <p className="description">Browse our selection of home gardening products</p>

         </div>

         <div className="col-lg-4 box box-bg">
          <Link to= "/distributors">   <i className="ion-earth"></i></Link>
           <h4 className="title"><a href="">Distributors</a></h4>
           <p className="description">Wholesale and retail distributors go here</p>
         </div>

         <div className="col-lg-4 box">
          <Link to= "/farms">   <i className="ion-leaf"></i></Link>
           <h4 className="title"><a href="">Farms</a></h4>
           <p className="description">Learn about our special programs for producers</p>
         </div>

       </div>
     </div>
   </section>


</div>
);
export default Landing;
