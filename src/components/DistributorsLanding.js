import React, { useState } from 'react';
import Navbar from "./Navbar.js"
import { Link } from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button";
import Footer from "./Footer.js";
import Contact from "./Contact";
import Signin from "./Signin.js";
import  Signup from "./Signup.js";


  const DistributorsLanding = () => {




  return (

  <div>
  <Navbar/>
  <div className="section-header" id="signin">
    <h3>Sign In</h3>
    <p>
Pre-Aprroved Stores and Distributors sign in below</p>
  </div>
 <Signin/>
 <div className="section-header">
   <h3>Create Account</h3>
   <p>
Stores and Desitributors Fill In Details Below To
Apply For Special Pricing</p>
 </div>
 <Signup/>

 <Contact/>





  <Footer/>
    <ScrollUpButton/>
   </div>

);
}

export default DistributorsLanding;
