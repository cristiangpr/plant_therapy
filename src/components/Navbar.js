import React, { Component } from 'react';
  import {  Link } from 'react-router-dom';
import $ from "jquery";

class Navbar extends Component {
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
      <h1><a href="/" className="scrollto"><img src="./img/logo.png" alt="" title="" /></a></h1>

 <a href="#intro"></a>
    </div>

    <nav id="nav-menu-container">
      <ul className="nav-menu sf-js-enabled sf-arrows">
        <li className="menu-active"><a href="/">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#footer">Sign In</a></li>
        <li><Link to="/farmsLanding">Farms</Link></li>
          <li><Link to="/distributorsLanding">Distributors</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
</>
);
}
}
export default Navbar;
