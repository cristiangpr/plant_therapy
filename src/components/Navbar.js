import React, {  Fragment, useEffect } from 'react';
  import {   withRouter } from 'react-router-dom';

import { itemTotal } from "../core/cartHelpers";
import { signout, isAuthenticated } from "../auth";
import {Navbar, Nav } from 'react-bootstrap'


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#18d26e" };
    } else {
        return { color: "#ffffff" };
    }
};

const showLogo = (history, path) => {
    if (history.location.pathname === "/") {
        return null;
    } else {
        return  <img
           src="/img/logo.png"
           height= "100%"
           width= "100%"

           className="d-inline-block align-top"
           alt="Plant Therapy logo"
         /> ;
    }
};

const Navbar1 = ({ history }) => {


return (


<Navbar bg="black"  variant="white" expand="md" className="Navbar" sticky="top">

<Navbar.Brand href="/">
{showLogo(history)}
   </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="ml-auto" id="mobile-navbar">
      <Nav.Link href="/"   style={isActive(history, "/")}>Home</Nav.Link>
      <Nav.Link href="/consumer#products"   style={isActive(history, "/consumer")} >Shop</Nav.Link>
        <Nav.Link href="/about" style={isActive(history, "/about")}>About</Nav.Link>
        <Nav.Link href="/StoreLocator" style={isActive(history, "/StoreLocator")}>Locations</Nav.Link>
          <Nav.Link href="/contact" style={isActive(history, "/contact")} >Contact</Nav.Link>
          {isAuthenticated() && isAuthenticated().user.role !== "Admin" && (

                  <Nav.Link


                      href="/user_dashboard" style={isActive(history, "/user_dashboard")}
                  >
                      Dashboard
                  </Nav.Link>

          )}
          {isAuthenticated() && isAuthenticated().user.role === "Admin" && (

                  <Nav.Link


                      href="/admin_dashboard" style={isActive(history, "/admin_dashboard")}
                  >
                      Dashboard
                  </Nav.Link>

          )}
          {!isAuthenticated() && (
              <Fragment>

                      <Nav.Link
                          className="nav-link"

                          href="/signin" style={isActive(history, "/signin")}
                      >
                          Signin
                      </Nav.Link>


                      <Nav.Link
                          className="nav-link"

                          href="/signup" style={isActive(history, "/signup")}
                      >
                          Signup
                      </Nav.Link>

              </Fragment>
          )}

          {isAuthenticated() && (
            <Fragment>

                  <Nav.Link


                      onClick={() =>
                          signout(() => {
                              history.push("/");
                          })
                      }
                  >
                      Signout
                  </Nav.Link>

              </Fragment>
          )}

        <Nav.Link


            href="/cart"
        >
            <i className="ion-ios-cart-outline"></i>{" "}
            <sup>
                <small className="cart-badge">{itemTotal()}</small>
            </sup>
        </Nav.Link>


    </Nav>

  </Navbar.Collapse>
</Navbar>
);
};
export default withRouter(Navbar1);
