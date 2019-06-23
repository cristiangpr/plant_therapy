import React, { Component } from 'react';


class Consumer extends Component {



render(){
  return (

  <div>
  <button type="button" id="mobile-nav-toggle"><i className="fa fa-bars"></i></button>



  <header id="header">
    <div className="container-fluid">

      <div id="logo" className="pull-left">
        <h1><a href="#intro" className="scrollto"><img src="./img/logo.jpg" alt="" title="" /></a></h1>

   <a href="#intro"></a>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu sf-js-enabled sf-arrows">
          <li className="menu-active"><a href="/">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#footer">Sign In</a></li>

          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

<section id="about">
  <div className="container" id="about-container">

    <header className="section-header">
      <h3>About Us</h3>
      <p>For over 45 years we have been enthusiastic organic gardeners. Our love of plants and the environment inspired the creation of

</p><h4>Lost Coast Plant Therapy</h4>
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
          We have all seen the devastating effects of poisonous pesticides, insecticides and fungicides that contaminate the water, soil, food and crops they are used on.  We are proud to provide an alternative solution to some of the agricultural industry's biggest challenges.
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
          We found the available products on the market for insect and disease control unsatisfactory in effectiveness. We took all our knowledge and years of experience, two years developing our formula, along with eighteen months of field testing to bring you an all natural solution.
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
          We trust in nature's solutions to thriving and believe in creating a sustainable future by the daily actions we take with the products we use. Both organic and conventional farmers can be proud of taking care of the environment and their workers
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
               <div className="single-product wow fadeInRight" data-wow-duration="1s">
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
               <div className="single-product wow fadeInRight"  data-wow-duration="1s">
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
                     <span className="mr-4">$169.99</span>
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
       <h3>Store Finder</h3>
       <p> Find a retail location near you</p>
       <a className="cta-btn" href="#">Find Stores</a>
     </div>
   </section>

   <section id="testimonials" className="section-bg wow fadeInUp">
     <div className="container">

       <header className="section-header">
         <h3>Testimonials</h3>
       </header>

       <div className="owl-carousel testimonials-carousel">

         <div className="testimonial-item">
           <img src="img/testimonial-1.jpg" className="testimonial-img" alt=""/>
           <h3>Saul Goodman</h3>
           <h4>Ceo &amp; Founder</h4>
           <p>
             <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
             Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
             <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
           </p>
         </div>

         <div className="testimonial-item">
           <img src="img/testimonial-2.jpg" className="testimonial-img" alt=""/>
           <h3>Sara Wilsson</h3>
           <h4>Designer</h4>
           <p>
             <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
             Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
             <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
           </p>
         </div>

         <div className="testimonial-item">
           <img src="img/testimonial-3.jpg" className="testimonial-img" alt=""/>
           <h3>Jena Karlis</h3>
           <h4>Store Owner</h4>
           <p>
             <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
             Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
             <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
           </p>
         </div>

         <div className="testimonial-item">
           <img src="img/testimonial-4.jpg" className="testimonial-img" alt=""/>
           <h3>Matt Brandon</h3>
           <h4>Freelancer</h4>
           <p>
             <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
             Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
             <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
           </p>
         </div>

         <div className="testimonial-item">
           <img src="img/testimonial-5.jpg" className="testimonial-img" alt=""/>
           <h3>John Larson</h3>
           <h4>Entrepreneur</h4>
           <p>
             <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
             Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
             <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
           </p>
         </div>

       </div>

     </div>
   </section>


   <section id="team">
     <div className="container">
       <div className="section-header wow fadeInUp">
         <h3>Team</h3>
         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
       </div>

       <div className="row">

         <div className="col-lg-3 col-md-6 wow fadeInUp">
           <div className="member">
             <img src="img/team-1.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>Walter White</h4>
                 <span>Chief Executive Officer</span>
                 <div className="social">
                   <a href=""><i className="fa fa-twitter"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>
                   <a href=""><i className="fa fa-google-plus"></i></a>
                   <a href=""><i className="fa fa-linkedin"></i></a>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
           <div className="member">
             <img src="img/team-2.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>Sarah Jhonson</h4>
                 <span>Product Manager</span>
                 <div className="social">
                   <a href=""><i className="fa fa-twitter"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>
                   <a href=""><i className="fa fa-google-plus"></i></a>
                   <a href=""><i className="fa fa-linkedin"></i></a>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
           <div className="member">
             <img src="img/team-3.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>William Anderson</h4>
                 <span>CTO</span>
                 <div className="social">
                   <a href=""><i className="fa fa-twitter"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>
                   <a href=""><i className="fa fa-google-plus"></i></a>
                   <a href=""><i className="fa fa-linkedin"></i></a>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
           <div className="member">
             <img src="img/team-4.jpg" className="img-fluid" alt=""/>
             <div className="member-info">
               <div className="member-info-content">
                 <h4>Amanda Jepson</h4>
                 <span>Accountant</span>
                 <div className="social">
                   <a href=""><i className="fa fa-twitter"></i></a>
                   <a href=""><i className="fa fa-facebook"></i></a>
                   <a href=""><i className="fa fa-google-plus"></i></a>
                   <a href=""><i className="fa fa-linkedin"></i></a>
                 </div>
               </div>
             </div>
           </div>
         </div>

       </div>

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
                 <h4>Awesome art is awesome</h4>
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
             <h3>Lost Coast Plant Therapy</h3>
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
         &copy; Copyright <strong>Lost Coast Plant Therapy</strong>. All Rights Reserved
       </div>

     </div>
   </footer>
     <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
   </div>

);
}
}
export default Consumer;
