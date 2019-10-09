import React, { Component, Fragment, useEffect } from 'react';
  import {  Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import { itemTotal } from "../core/cartHelpers";
import { signout, isAuthenticated } from "../auth";



const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#18d26e" };
    } else {
        return { color: "#ffffff" };
    }
};

const Navbar = ({ history }) => {
  useEffect(() => {
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




    return () => {
    $("#mobile-nav, #mobile-nav-toggle").hide();

}

}, []);

   return (

     <>
<button type="button" id="mobile-nav-toggle"><i className="fa fa-bars"></i></button>



<header id="header">
  <div className="container-fluid">

    <div id="logo" className="pull-left">
      <h1><a href="/" className="scrollto"><img src="./img/logo.png" alt="" title="" /></a></h1>


    </div>

    <nav id="nav-menu-container">
      <ul className="nav-menu sf-js-enabled sf-arrows">
        <li><Link to="/"   style={isActive(history, "/")}>Home</Link></li>
        <li><Link to="/consumer"  style={isActive(history, "/consumer")}>Shop</Link></li>
        <li><a href="/consumer#about">About Us</a></li>
        <li><a href="consumer#products" >Products</a></li>
        <li><a href="/consumer#blog">Instagram</a></li>

        <li><Link to="/StoreLocator">Locations</Link></li>
              <li><a href="/consumer#contact">Contact</a></li>
              {isAuthenticated() && isAuthenticated().user.role !== 0 && (
                  <li className="nav-item">
                      <Link
                          className="nav-link"

                          to="/user_dashboard"
                      >
                          Dashboard
                      </Link>
                  </li>
              )}

              {isAuthenticated() && isAuthenticated().user.role === 0 && (
                  <li className="nav-item">
                      <Link
                          className="nav-link"

                          to="/admin_dashboard"
                      >
                          Dashboard
                      </Link>
                  </li>
              )}

              {!isAuthenticated() && (
                  <Fragment>
                      <li className="nav-item">
                          <Link
                              className="nav-link"

                              to="/signin"
                          >
                              Signin
                          </Link>
                      </li>

                      <li className="nav-item">
                          <Link
                              className="nav-link"

                              to="/signup"
                          >
                              Signup
                          </Link>
                      </li>
                  </Fragment>
              )}

              {isAuthenticated() && (
                  <li className="nav-item">
                      <Link
                          className="nav-link"
                          style={{ cursor: "pointer", color: "#ffffff" }}
                          onClick={() =>
                              signout(() => {
                                  history.push("/");
                              })
                          }
                      >
                          Signout
                      </Link>
                  </li>
              )}
        <li className="nav-item">
            <Link
                className="nav-link"

                to="/cart"
            >
                <i className="ion-ios-cart-outline"></i>{" "}
                <sup>
                    <small className="cart-badge">{itemTotal()}</small>
                </sup>
            </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
</>
);

}
export default withRouter(Navbar);
