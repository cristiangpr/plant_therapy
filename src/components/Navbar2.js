import React, {  Fragment, useEffect } from 'react';
  import {   withRouter } from 'react-router-dom';

import { itemTotal } from "../core/cartHelpers";
import { signout, isAuthenticated } from "../auth";
import {Navbar, Nav} from 'react-bootstrap'


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#18d26e" };
    } else {
        return { color: "#ffffff" };
    }
};


const Navbar2 = ({ history }) => {


return (


<Navbar bg="black"  variant="white" expand="lg" className="">

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/"   style={isActive(history, "/")}>Home</Nav.Link>
      <Nav.Link href="/consumer#products"  >Shop</Nav.Link>
        <Nav.Link href="/about" >About</Nav.Link>
        <Nav.Link href="/StoreLocator" >Locations</Nav.Link>
          <Nav.Link href="/consumer#contact">Contact</Nav.Link>
          {isAuthenticated() && isAuthenticated().user.role !== "Admin" && (

                  <Nav.Link


                      href="/user_dashboard"
                  >
                      Dashboard
                  </Nav.Link>

          )}
          {isAuthenticated() && isAuthenticated().user.role === "Admin" && (

                  <Nav.Link


                      href="/user_dashboard"
                  >
                      Dashboard
                  </Nav.Link>

          )}
          {!isAuthenticated() && (
              <Fragment>

                      <Nav.Link
                          className="nav-link"

                          href="/signin"
                      >
                          Signin
                      </Nav.Link>


                      <Nav.Link
                          className="nav-link"

                          href="/signup"
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


            to="/cart"
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
export default withRouter(Navbar2);
