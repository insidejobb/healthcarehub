// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
   <>
    <nav>
        <div className="marquee-container">
      <div className="marquee-text">
        <p style={{color:'white'}}>Now all our members are covered for any medical expenses upto Rs. 1 Lakh incurred due to injuries 
occurred as a result of fall or accidents. | This is automatically extended to all our eligible* 
senior citizen members upon enrolment with Anvayaa on annual plans. |
// * Please contact your care team for eligibility requirements</p></div>
    </div>
      <ul>
      <li><Link to="/Home">Home</Link></li>
        <li><Link to="/about">AboutUs</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">ContactUs</Link></li>
      </ul>
    </nav>
   </>
  );
}

export default Navbar;

//Now all our members are covered for any medical expenses upto Rs. 1 Lakh incurred due to injuries 
//occurred as a result of fall or accidents. | This is automatically extended to all our eligible* 
//senior citizen members upon enrolment with Anvayaa on annual plans. |
// * Please contact your care team for eligibility requirements
