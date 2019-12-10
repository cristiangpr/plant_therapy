import React, { useState } from 'react';
import Navbar from "./Navbar.js"
import { Link } from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button";
import Footer from "./Footer.js"
import Signin from "./Signin.js"
import  Signup from "./Signup.js"
import Contact from "./Contact"

  const FarmsLanding = () => {




  return (

  <div>
  <Navbar/>
  <div className="section-header" id="signin">
    <h3>Sign In</h3>
    <p>
Pre-Aprroved Farms sign in below</p>
  </div>
 <Signin/>
 <div className="section-header">
   <h3>Create Account</h3>
   <p>
Farms Fill In Details Below To
Apply For Special Pricing</p>
 </div>
 <Signup/>

<Contact/>






    <ScrollUpButton/>
   </div>

);
}

export default FarmsLanding;
