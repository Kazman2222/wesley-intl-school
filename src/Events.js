import { useState, useRef } from "react";
import educationlogo from "./education-logoss.jpg"
import education from "./education.jpg"
import graduation from "./graduation.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart, faArrowRight, faTimes, faPercent, faRocket, faFacebook,faClock,  faMapMarker, faHeadphones, faBone, faStar, faStarHalfStroke, faTty, faCreditCard,faArrowLeft, faAddressBook, faUser, faPaw, faDog, faKitMedical, faCar, faSync, faPhone, faEnvelope, faBowlFood, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faTwitter, faWhatsappSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import Touring from "./Touring.jpg"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Events  = () => {
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
                <button className="button-header">SIGN UP</button>
                <button className="button-header">LOGOUT</button>
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
            
           <div className="event-fullList">
            
                <div className="event-time">
                    <h4>TUES,</h4>
                    <h2>SEP, 28</h2>
                    <h6>TIME: 2PM PROMPT</h6>
                </div>
            
            <div className="event-news">
                <div className="upcoming-images-section">
                    <img src={education} className='event-image'></img>
                </div>
                <div className="main-event">
                    <h2>Building Education Website</h2>
                    <span className='upcoming-icon' ><FontAwesomeIcon icon={faMapMarker}  ></FontAwesomeIcon> Sanford Street Pretoria, Gauteng South Africa</span>
                    <p>This is going to be a fun program. It will involve all students both junior and senior,  it takes place in south africa.
                    </p>
                    <strong>25 May 2021 - 8:00 - 17:00</strong>
                </div>
                
            </div>
            
           </div>
           <div className="event-fullList">
            
            <div className="event-time">
                <h4>SAT,</h4>
                <h2>SEP, 30</h2>
                <h6>TIME: 4PM PROMPT</h6>
            </div>
        
        <div className="event-news">
            <div className="upcoming-images-section">
                <img src={Touring} className='event-image'></img>
            </div>
            <div className="main-event">
                <h2>U.S.A Educational Tour</h2>
                <span className='upcoming-icon' ><FontAwesomeIcon icon={faMapMarker}  ></FontAwesomeIcon> Phillip Street Jersey City, NJ United States</span>
                <p >This is going to be a fun program. It will involve all students both junior and senior,  it takes place in south africa.
                </p>
                <strong>25 May 2021 - 8:00 - 17:00</strong>
            </div>
            
        </div>
        
       </div>
       <div className="event-fullList">
            
            <div className="event-time">
                <h4>MON,</h4>
                <h2>OCT, 1</h2>
                <h6>TIME: 9AM PROMPT</h6>
            </div>
        
        <div className="event-news">
            <div className="upcoming-images-section">
                <img src={graduation} className='event-image'></img>
            </div>
            <div className="main-event">
                <h2>Graduation Ceremony</h2>
                <span className='upcoming-icon' ><FontAwesomeIcon icon={faMapMarker}  ></FontAwesomeIcon> Phillip Street Jersey City, NJ United States</span>
                <p >This is going to be a fun program. It will involve all students both junior and senior,  it takes place in south africa.
                </p>
                <strong>25 May 2021 - 8:00 - 17:00</strong>
            </div>
            
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
 
export default Events;