import React, { useState, useEffect } from "react";
import ScrollUpButton from "react-scroll-up-button";

  import {  Link } from 'react-router-dom';
import Navbar from "./Navbar.js";
import Instagram from "./Instagram.js";
import Footer from "./Footer.js";


const About = () => {


const howText = "After saturation of entire plant, our spray will adhere to the target insect, egg case or larvae. It's active ingredients then cause disruption of respiration and digestion. It also penetrates to dehydrate their entire body.\n Insects can never become immune to suffocation or dehydration.\n Lost Coast Plant Therapy was designed to suffocate and dehydrate on contact. That is why it is important to thoroughly saturate your infested plants. If the product does not contact the insect it can't suffocate or dehydrate it.\n Many insects and diseases are eliminated on contact with one application. Others, take repeat application to eliminate the problem.\n Our unique formula does not stress the plant and will not damage flowers, fruits or vegetables as long as it is applied under proper lighting and low heat conditions. Safe to apply daily and will not interfere with plant development.\n Safe to apply on day of harvest and as often as required throughout growth.\n Lost Coat Plant Therapy has been laboratory tested by CW Analytical (among others) and found to leave no harmful residue; this means it is safe for your soil, food and ornamental plants, pets and people.\n Clean ingredients means clean test results. Passes strict lab parts per billion testing.";


  return (

  <div>

<Navbar/>
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

    <div className="container" id="about-container">

      <header className="section-header">
        <h3>How it Works</h3>



      </header>

      <div className="row about-cols">

        <div className="col-12 wow fadeInUp">
          <div className="about-col">
            <div className="img">
              <img src="./img/how.jpg" alt="" className="img-fluid"/>
              <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
            </div>
            <h2 className="title"><a href="#">  LOST COAST PLANT THERAPY SUFFOCATES AND DEHYDRATES SOFT BODY INSECTS, THEIR LARVAE AND EGGS, POWDERY MILDEW, MOLD AND FUNGUS ON CONTACT.</a></h2>
            <div className="display-linebreak">
            {howText}
    </div>
        <ul className="bullet">
        <li>Dries off quickly.</li>
         <li> Tests clean.</li>
          <li>  Safe for food and medicinal plants.</li>
          <li>  Biodegradable.</li>
          <li>  PBA Free or HDPE grade bottles.</li>
        <li>    Non-GMO and organic ingredients.</li>
         </ul>
          </div>
        </div>



      </div>

    </div>
    <div className="container" id="about-container">

      <header className="section-header">
        <h3>What it Works On</h3>



      </header>

      <div className="row about-cols">

        <div className="col-md-12 wow fadeInUp">
          <div className="about-col">
            <div className="img">
              <img src="./img/what.jpg" alt="" className="img-fluid"/>
              <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
            </div>
            <h2 className="title"><a href="#">INSECTS ELIMINATED ON CONTACT INCLUDE SOFT BODY INSECTS, THEIR EGGS AND LARVAE. MILDEW, MOLD, AND FUNGUS SPORES ELIMINATED ON CONTACT. LOST COAST PLANT THERAPY CAN ALSO BE USED AS A PREVENTATIVE.</a></h2>
            <p>
            The smaller the insect the faster it works. Larger soft body insects may take longer to suffocate or dehydrate, or require repeat application. Contact with our product begins the death process.

  Spider Mites: Works on all types of mites, including red spider mites, two spotted spider mites and their eggs.</p>
  <ul className="bullet">
  <li>Broad Mites</li>
 <li> Russet Mites</li>
  <li>Fungus Gnats</li>
  <li>White Flies</li>
  <li>Thrips</li>
  <li>Aphids</li>
<li>  Root Knot Nemotodes</li>
<li>  Ants</li>
<li>  Earwigs</li>
<li>  Pill Bug</li>


<li> Powdery Mildew: Our product melts spores on contact and changes the pH of plant surface and washes off the powdery mildew already present.</li>
 <li> Mold: kills molds on contact, stopping it's growth, and washes it off.</li>
 <li> Botrytis (Gray Mold)</li>
 <li> Fungus: eliminates fungus on contact.</li>
 <li> Blight  </li>
 <li> Leaf Rust</li>
  </ul>

          </div>
        </div>



      </div>

    </div>
    <div className="container" id="about-container">

      <header className="section-header">
        <h3>Why it Works</h3>



      </header>

      <div className="row about-cols">

        <div className="col-md-12 wow fadeInUp">
          <div className="about-col">
            <div className="img">
              <img src="./img/why.jpg" alt="" className="img-fluid"/>
              <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
            </div>
            <h2 className="title"><a href="#"> SEVEN SIMPLE INGREDIENTS OF THE HIGHEST QUALITY MAKE UP LOST COAST PLANT THERAPY. WE ONLY USE BIODEGRADEABLE, FOOD GRADE AND COSMETIC GRADE INGREDIENTS</a></h2>
            <div>

          <h2>LABEL ACTIVE INGREDIENTS:</h2>
<ul className="bullet">
          <li> <strong> Soy oil:</strong>  </li>  <p> Coats insects and suffocates on contact. Bugs cannot build an immunity to suffocation.</p>

          <li>   <strong>    Peppermint Essential Oil:</strong></li>
               <p>Natural bug repellent.</p>
            <li>   <strong>      Citric Acid:</strong> </li> <p>Adjusts pH of plant surface. This ingredient makes the pH of the plant inhospitable for powdery mildew and eliminates spores on contact due to its anti-fungal properties.</p>
</ul>
            <h2>LABEL INERT INGREDIENTS:</h2>
<ul className="bullet">
            <li>    <strong>Soap </strong></li> <p>Proprietary blend and from a sustainable plant source. Lowers the surface tension of water/liquid, which helps it spread across the surface of anything it is applied to. An emulsifier (helps all the other ingredients to stay mixed together.) It also penetrates the insects body covering and disrupts the cell membrane. Cell contents leak out causing the target pests to dehydrate.</p>

            <li>    <strong>Isopropyl Alcohol</strong></li> <p> Dehydrates insects rapidly and helps evaporate diluted product from plants safely without leaving harmful residue or burning.</p>

          <li>   <strong>   Sodium Citrate</strong></li>  <p>Buffers pH to keep it stable; which makes it impossible for powdery mildew and spores to live on the plant.</p>
        <li>  <strong>      Water</strong></li><p>  Purified, reverse osmosis. Emulsifier and thinning agent.</p>
        </ul>
            </div>
          </div>
        </div>



      </div>

    </div>
</section>






 <Instagram/>







   <section id="contact" className="section-bg wow fadeInUp">
     <div className="container">

       <div className="section-header">
         <h3>Contact Us</h3>
         <p>We'd love to hear from you!</p>
       </div>

       <div className="row contact-info">

         <div className="col-md-4">
           <div className="contact-address">
             <i className="ion-ios-location-outline"></i>
             <h3>Address</h3>
             <address> P.O. Box 662, Calistoga, Ca 94515 USA</address>
           </div>
         </div>

         <div className="col-md-4">
           <div className="contact-phone">
             <i className="ion-ios-telephone-outline"></i>
             <h3>Phone Number</h3>
             <p><a href="tel:+155895548855">+1 (877) 558-0808</a></p>
           </div>
         </div>

         <div className="col-md-4">
           <div className="contact-email">
             <i className="ion-ios-email-outline"></i>
             <h3>Email</h3>
             <p><a href="mailto:info@example.com"> contact@lostcoastplanttherapy.com</a></p>
           </div>
         </div>

       </div>
</div>
   </section>

   <Footer/>
     <ScrollUpButton/>
   </div>

);

};
export default About;
