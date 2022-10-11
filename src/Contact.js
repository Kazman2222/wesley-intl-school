import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart, faArrowRight, faPercent, faTimes, faClock, faMessage, faRocket, faFacebook,  faMapMarker, faHeadphones, faBone, faStar, faStarHalfStroke, faTty, faCreditCard,faArrowLeft, faAddressBook, faUser, faPaw, faDog, faKitMedical, faCar, faSync, faPhone, faEnvelope, faBowlFood, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faTwitter, faWhatsappSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import educationlogo from "./education-logoss.jpg"
import { useState, useRef } from "react";
const Contact = () => {
    const dropdownRef = useRef()
    const dropdown = () => {
           
        dropdownRef.current.style.width = "100%"
        dropdownRef.current.style.left = "0rem"
       
    
    
      
   
}
const close  = () => {
    dropdownRef.current.style.width = "0%"
        dropdownRef.current.style.left = "-30rem"  
}
    return ( 
        <div>
                       <div className="opening-hours">
                      <div className="header-icons"><span ><FontAwesomeIcon icon={faEnvelope} className='heading-icon'></FontAwesomeIcon> KazeemQuayum67@gmail.com</span>
                      <span ><FontAwesomeIcon icon={faPhone}  className='heading-icon' ></FontAwesomeIcon> +2348109713706</span>
                      </div>  
<div> <h3 className="opening-hours">OPENING HOURS MONDAY - FRIDAY : 8:00 AM - 4:00 PM</h3></div>
            </div>
           
            <div className="header">
                <div className="name-of-school">
                <img src={educationlogo} className='education-logo'></img>
                <h2 className="name-of-schools">WESLEY <span className="span-name-of-school">INTL</span> SCHOOL</h2>
                </div>
                <div className="navbar-div" >
                   
                <ul className="navbar">
                <li><Link to='/Home' className='navbar-link'>Home</Link></li>
                        <li><Link to='/Course' className='navbar-link'>Course</Link></li>
                        <li><Link to='/Events' className='navbar-link'>Events</Link></li>
                        <li><Link to='/Contact' className='navbar-link'>Contacts</Link></li>
                        <li><Link to='/About' className='navbar-link'>About us</Link></li>
                    </ul>
                  
                    
                </div>
                <div  className="div-fa-bars">
<h2><FontAwesomeIcon icon={faBars} onClick={dropdown}></FontAwesomeIcon></h2>
                </div>
                <div className="group-header-button">
                <button className="button-header"><Link to='/Exam' className='link'>HOME</Link></button>
                <button className="button-header">LOGIN</button>
              </div> 
            </div>
            <div className="dropdown" ref={dropdownRef} style={{top: "3rem"}}>
                <div className="dropdown-div">
                    <h2><FontAwesomeIcon icon={faTimes} onClick={close} className="fatimes" style={{color: "black"}}></FontAwesomeIcon></h2>
                    <br></br>
                      <ul className="dropdown-ul">
                        <li className="dropdown-li" style={{color:"black"}}>Home </li>
                        <li className="dropdown-li"><Link to='/Course' className='navbar-link' style={{color: "black"}}>Course</Link></li>
                        <li className="dropdown-li"><Link to='/Events' className='navbar-link' style={{color: "black"}}>Events</Link></li>
                        <li className="dropdown-li"><Link to='/Contact' className='navbar-link' style={{color: "black"}}>Contacts</Link></li>
                        <li className="dropdown-li"><Link to='/About' className='navbar-link' style={{color: "black"}}>About us</Link></li>
                    </ul>
                    <div className="group-button-dropdown">
                    <button className="button-dropdown" style={{width: "45%" , marginBottom: "5%", marginLeft: "5%"}}><Link to='/' className='button-header-link'>SIGN UP</Link></button>
                <button className="button-dropdown" style={{width: "45%" , marginBottom: "5%" , marginLeft: "5%" , color: "black"}} >LOGOUT</button>
                    </div>
                  
                </div>
            </div>
            
           
            
            
           <div className="contact-us">
           
           </div>
           <div className='contact-us-information'>
            <div  className='contact-us-information-box-3'>
                <h2><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon></h2>
                <h4>OUR LOCATION</h4>
                <span>PO Box 97845 Baker st. 567,</span>
                <br></br>
                <span>Los Angeles, California, US.</span>
            </div>
            <div className='contact-us-information-box'>
                <h2><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></h2>
                <h4>CONTACT US</h4>
                <span>Mobile: (+04) 600 444 999</span>
                <br></br>
                <span>Fax: (+04) 600 888 222</span>
            </div>
            <div className='contact-us-information-box'>
                <h2><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></h2>
                <h4>WRITE SOME WORDS</h4>
                <span>Support24/7@domain.com</span>
                <br></br>
                <span>Info@domain.com</span>
            </div>
           </div>
           <hr></hr>
           <div>
            <h2 className='leave-us-a-message'>Leave A Message</h2>
            <div className='form-input-contact-us'>
            <label htmlFor='name'></label>
          <input placeholder='Name*' id='name-contact'></input>
          <label htmlFor='subject'></label>
          <input placeholder='Subject*' id='subject-contact'></input>
          <label htmlFor='email'></label>
          <input placeholder='Email*' id='email-contact'></input>
            </div>
          
                <label htmlFor='textarea'></label>
                <div className='textarea-contact-us'>
                <textarea rows="20" cols="194" id='textarea' placeholder='Type in your message here...'></textarea>
            </div>
            <div className='send-us-a-message'>
                <button className='send-us-a-message-button'>SEND US A MESSAGE</button>
            </div>
         
           </div>
           <div className="footer">
<div className="footer-logo">
<img src={educationlogo} className='education-logos'></img>
    <h2 className="footer-logo-h2">WESLEY INTL SCHOOL FOUNDED 12 YEARS AGO </h2>
</div>
<div className="footer-information">
    <h2>CONTACTS INFO</h2>
    <p style={{color: "white"}}><FontAwesomeIcon  icon={faMapMarker} style={{color: "rgb(235, 123, 123)"}}></FontAwesomeIcon> PO Box 97845 Baker st. 567,Los Angeles, California, US.</p>
    <p style={{color: "white"}}><FontAwesomeIcon  icon={faEnvelope} style={{color: "rgb(235, 123, 123)"}}></FontAwesomeIcon> KazeemQuayum67@gmail</p>
    <p style={{color: "white"}}><FontAwesomeIcon  icon={faPhone} style={{color: "rgb(235, 123, 123)"}}></FontAwesomeIcon> (+04) 600 444 999</p>
    <p style={{color: "white"}}><FontAwesomeIcon  icon={faClock} style={{color: "rgb(235, 123, 123)"}}></FontAwesomeIcon> MONDAY - FRIDAY : 8:00 AM - 4:00 PM</p>
    
</div>
<div className="footer-quick-links" >
    <h2>QUICK LINKS</h2>
    <ul className="footer-quick-links-ul">
  <li>Home </li>
  <li><Link to='/Course' className='navbar-link'>Course</Link></li>
  <li>Events</li>
  <li><Link to='/Contact' className='navbar-link'>Contacts</Link></li>
  <li>About us</li>
    </ul>
</div>
        </div>
        <div className="social-media">
        <div>
    <p className='copy-right-p'>COPYRIGHT © 2021 WESLEY INTL SCHOOL | BUILT  BY KAZEEM QUAYUM.</p>
   </div>
   <div className='social-medias'>
<span><FontAwesomeIcon className='social-media-icon' icon={faFacebookSquare}></FontAwesomeIcon></span>
<span><FontAwesomeIcon className='social-media-icon' icon={faWhatsappSquare}></FontAwesomeIcon></span>
<span><FontAwesomeIcon  className='social-media-icon' icon={faTwitterSquare}></FontAwesomeIcon></span>
<span><FontAwesomeIcon  className='social-media-icon' icon={faInstagramSquare}></FontAwesomeIcon></span>
   </div>
        </div>
        <div className="footer-1">
<div className="footer-logo-1">
<img src={educationlogo} className='education-logos-1'></img>
    <h2 className="footer-logo-h2">WESLEY INTL SCHOOL FOUNDED 12 YEARS AGO </h2>
</div>
<div className="footer-1-display">
<div className="footer-information">
    <h2>CONTACTS INFO</h2>
    <p style={{color: "white"}}><FontAwesomeIcon  icon={faMapMarker} style={{color: "rgb(235, 123, 123)"}}></FontAwesomeIcon> PO Box 97845 Baker st. 567,Los Angeles, California, US.</p>
    <p style={{color: "white"}}><FontAwesomeIcon  icon={faEnvelope} style={{color: "rgb(235, 123, 123)"}}></FontAwesomeIcon> KazeemQuayum67@gmail</p>
    <p style={{color: "white"}}><FontAwesomeIcon  icon={faPhone} style={{color: "rgb(235, 123, 123)"}}></FontAwesomeIcon> (+04) 600 444 999</p>
    <p style={{color: "white"}}><FontAwesomeIcon  icon={faClock} style={{color: "rgb(235, 123, 123)"}}></FontAwesomeIcon> MONDAY - FRIDAY : 8:00 AM - 4:00 PM</p>
    
</div>
<div className="footer-quick-links" >
    <h2>QUICK LINKS</h2>
    <ul className="footer-quick-links-ul">
  <li>Home </li>
  <li><Link to='/Course' className='navbar-link'>Course</Link></li>
  <li>Events</li>
  <li><Link to='/Contact' className='navbar-link'>Contacts</Link></li>
  <li>About us</li>
    </ul>
</div>
</div>

        </div>
        <div className="social-media-1">
        <div>
    <p className='copy-right-p-1'>COPYRIGHT © 2021 WESLEY INTL SCHOOL | BUILT  BY KAZEEM QUAYUM.</p>
   </div>
   <div className='social-medias-1'>
<span><FontAwesomeIcon className='social-media-icon-1' icon={faFacebookSquare}></FontAwesomeIcon></span>
<span><FontAwesomeIcon className='social-media-icon-1' icon={faWhatsappSquare}></FontAwesomeIcon></span>
<span><FontAwesomeIcon  className='social-media-icon-1' icon={faTwitterSquare}></FontAwesomeIcon></span>
<span><FontAwesomeIcon  className='social-media-icon-1' icon={faInstagramSquare}></FontAwesomeIcon></span>
   </div>
        </div>
        </div>
     );
}
 
export default Contact;