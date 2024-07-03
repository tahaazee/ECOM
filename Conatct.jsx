import React from 'react'
import Navbar from './Navbar';
import "./Conatct.css"


function Conatct() {
    
    return(
        <>
         <div><Navbar /></div>
        <div> <div className="contact-details">
      <h2>Contact Details</h2>
      <div className="details-container">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>123 Main Street, Cityville, State, PAKISTAN</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <p>+123432457890</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>T-kING@777.com</p>
        </div>
      </div>
    </div></div></>
    )
}
export default Conatct;