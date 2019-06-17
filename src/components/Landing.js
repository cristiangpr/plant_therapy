import React from 'react';
import '../App.css';


const Landing = () => (




    <div className ="body">

    <header id="header">
      <div className="container-fluid">

        <div id="logo" className="pull-left">
          <h1><a href="#intro" className="scrollto"><img src="./img/logo.jpg" alt="" title="" /></a></h1>

     <a href="#intro"></a>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active"><a href="#intro">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#team">Sign In</a></li>
            <li className="menu-has-children"><a href="">Drop Down</a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
                <li><a href="#">Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>


    <section id="intro">
      <div className="intro-container">
        <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

          <ul className="carousel-indicators"></ul>

          <div className="carousel-inner" role="listbox">

            <div className="carousel-item active animated fadeIn">
              <div className="carousel-background"><img  src="./img/Logo_Greenhouses_Horizontal.jpg" alt=""/></div>
              <div className="carousel-container">
                <div className="carousel-content">

                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-background"><img src="./img/Grapes_Horizontal.jpg" alt=""/></div>
              <div className="carousel-container">
                <div className="carousel-content animated fadeInLeft">
                  <h2>100% Organic</h2>
                  <h5>The plant healthy - planet healthy solution you have been looking for! </h5>
                  <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-background"><img src="./img/Pink_Roses_Horizontal.jpg" alt=""/></div>
              <div className="carousel-container">
                <div className="carousel-content animated fadeInRight">
                  <h2>It's INCREDIBLE!</h2>
                  <h5>Natural Care for your house plants, yard, garden or commercial farming.</h5>
                  <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-background"><img src="./img/Spinach_Field_Horizontal.jpg" alt=""/></div>
              <div className="carousel-container">
                <div className="carousel-content animated fadeIn">
                  <h2>AVAILABLE AT A STORE NEAR YOU</h2>
                  <p>Protect your valuable crops from damaging pests, mold and mildew with Lost Coast Plant Therapy non-toxic solution.</p>
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
           <i className="ion-bug"></i>
           <h4 className="title"><a href="">Insecticide</a></h4>
           <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
         </div>

         <div className="col-lg-4 box box-bg">
           <i className="ion-pinpoint"></i>
           <h4 className="title"><a href="">Fungicide</a></h4>
           <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
         </div>

         <div className="col-lg-4 box">
           <i className="ion-earth"></i>
           <h4 className="title"><a href="">Planet Friendly</a></h4>
           <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
         </div>

       </div>
     </div>
   </section>


   <section id="about">
     <div className="container">

       <header className="section-header">
         <h3>About Us</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
               Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
               Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
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
              <div className="main_title">
                <h2><span>products</span></h2>
                <p>Find a presentation to fit your needs</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="new_product wow fadeInLeft">

                <h3 className="text-uppercase" id="dark">Plant Therapy Gift Pack</h3>
                <div className="product-img">
                  <img className="img-fluid" src="./img/product1.jpg" alt="" />
                </div>
                <h4 id="dark">$499.99</h4>
                <a href="#" className="main_btn">Add to cart</a>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-product wow fadeIn" data-wow-duration="2s">
                    <div className="product-img">
                      <img className="img-fluid w-100" src="./img/product2.jpg" alt="" />
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
                        <h4>Variety Pack</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$499.99</span>
                        <del>$600.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-product wow fadeIn"  data-wow-duration="2s">
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
                        <h4>1 Gallon</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">&169.99</span>
                        <del>$200.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-product  wow fadeIn"  data-wow-duration="2s">
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
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-product  wow fadeIn" data-wow-duration="2s" >
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
                        <span className="mr-4">$79.99</span>
                        <del>$100.00</del>
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
          <h3>Distributors and Farms</h3>
          <p> Create an account to access our colaborators area</p>
          <a className="cta-btn" href="#">Create Account</a>
        </div>
      </section>



      <section className="blog-area section-gap" id="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2><span>blog</span></h2>

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog wow fadeIn">
                <div className="thumb">
                  <img className="img-fluid" src="./img/blog1.jpg" alt=""/>
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>Plant Thearpy at CannaCon
                    </h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                      Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog wow fadeIn" data-wow-delay=".3s">
                <div className="thumb">
                  <img className="img-fluid" src="./img/blog2.jpg" alt=""/>
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>Awesom art is awesome</h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                      Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog wow fadeIn" data-wow-delay=".6s">
                <div className="thumb">
                  <img className="img-fluid" src="./img/blog3.jpg" alt=""/>
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>Cannabis is a sacred plant</h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                      Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>BizPage</h3>
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
                  A108 Adam Street <br/>
                  New York, NY 535022<br/>
                  United States <br/>
                  <strong>Phone:</strong> +1 5589 55488 55<br/>
                  <strong>Email:</strong> info@example.com<br/>
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
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                <form action="" method="post">
                  <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>BizPage</strong>. All Rights Reserved
          </div>

        </div>
      </footer>
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      </div>

);
export default Landing;
