import React, { Component } from 'react';
  import {  Link, withRouter } from 'react-router-dom';
  import { signout, isAuthenticated } from "../auth";
import $ from "jquery";

class StoreNavbar extends Component   {
  componentDidMount() {
    if ($('#nav-menu-container').length) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({
        id: 'mobile-nav'
      });
      $mobile_nav.find('> ul').attr({
        'class': '',
        'id': ''
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
      $('body').append('<div id="mobile-body-overly"></div>');
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

      $(document).on('click', '.menu-has-children i', function(e) {
        $(this).next().toggleClass('menu-item-active');
        $(this).nextAll('ul').eq(0).slideToggle();
        $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });

      $(document).on('click', '#mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').toggle();
      });

      $(document).click(function(e) {
        var container = $("#mobile-nav, #mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
        }
      });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
    }



 }
 compunentWiilUnmount(){
     $("#mobile-nav, #mobile-nav-toggle").destroy();

 }

 render(){
   return (

     <>
<button type="button" id="mobile-nav-toggle"><i className="fa fa-bars"></i></button>



<header id="header">
  <div className="container-fluid">

    <div id="logo" className="pull-left">
      <h1><Link to="/" className="scrollto"><img src="./img/logo.png" alt="" title="" /></Link></h1>


    </div>

    <nav id="nav-menu-container">
      <ul className="nav-menu sf-js-enabled sf-arrows">
        <li className="menu-active"><Link to ="/">Home</Link></li>

        <li ><Link to="#products" className="menu-active">Products</Link></li>
            {isAuthenticated() && (
        <li>  <Link to = "/"    onClick={() =>
                  signout(() => {
                   })
                   }>Signout</Link></li>
            )}
        <li ><Link to="#contact" className="menu-active">Contact</Link></li>
        {!isAuthenticated() && (
          <>
          <li><Link to="#signup" className="menu-active">Sign up</Link></li>
          <li><Link to="#signin" className="menu-active">Sign in</Link></li>
          </>
        )}
      </ul>
    </nav>
  </div>
</header>
</>
);
}
}
export default withRouter(StoreNavbar);
