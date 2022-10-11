import { Link } from "react-router-dom/cjs/react-router-dom.min"
import educationlogo from "./education-logoss.jpg"
import schoolbuilding from "./school-building.jpg"
import library from "./library.jpg"
import footballfield from "./football-field.jpg"
import teacher1 from "./teacher-1.jpg"
import teacher2 from "./teacher-2.jpg"
import teacher3 from "./teacher-3.jpg"
import maths from "./mathss.jpg"
import chemistry from "./chemistry.jpg"
import computer from "./computer.jpg"
import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart, faArrowRight, faTimes, faPercent, faRocket, faFacebook, faClock, faCaretDown, faMapMarker, faHeadphones, faBone, faStar, faStarHalfStroke, faTty, faCreditCard,faArrowLeft, faAddressBook, faUser, faPaw, faDog, faKitMedical, faCar, faSync, faPhone, faEnvelope, faBowlFood, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faTwitter, faWhatsappSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
const About = () => {
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
                <button className="button-header"><Link to='/' className='button-header-link'>SIGN UP</Link></button>
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
            <div className="about-image">

            </div>
            <div className="our-History">
<h2>OUR HISTORY</h2>
<p className="history-p">The school was originally established in the 1970’s to provide a British type education for children of expatriates living and working in Sabah. Initially, premises were rented from the St John’s Ambulance Association in Kota Kinabalu and the first teachers were parents of the students attending the school. However, the school quickly introduced its current policy of recruiting only the best qualified teachers from around the world and began to receive recognition of its commitment to high standards from local, regional and global educational organisations.


</p>
            </div>
            <div className="our-mission">
                <div className="our-mission-div"> 
                    <h2>Our mission</h2>
                    <p>To educate all students to the highest levels of academic achievement, to enable them to reach and expand their potential, and to prepare them to become productive, responsible, ethical, creative and compassionate members of society.

                    </p>
                </div>
                <div className="our-vision-div">
                    <h2>Our vision</h2>
                    <p>Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills that will support them, as life-long learners, to participate in and contribute to the global world and practise the core values of the school: respect, tolerance & inclusion, and excellence.</p>
                </div>
            </div>
          
            <div className="our-awesome-teachers">
            <h2 className="our-awesome-teachers-h2" style={{color: "black"}}>OUR TEACHERS</h2>
         
            <div className="teachers">
                <div className="teachers-div">
                    <img src={teacher1} className='image-teacher' ></img>
                    <h2 style={{color: "firebrick"}}>Miss Selim</h2>
                    <p>Physics Teacher</p>
                </div>
                <div className="teachers-div">
                    <img src={teacher2}  className='image-teacher'></img>
                    <h2 style={{color: "firebrick"}}>Mr Baruba</h2>
                    <p>English Teacher</p>
                </div>
                <div className="teachers-div">
                    <img src={teacher3} className='image-teacher'></img>
                    <h2 style={{color: "firebrick"}}>Mrs. Anita</h2>
                    <p>Biology Teacher</p>
                </div>
            </div>
            <div className="teachers">
                <div className="teachers-div">
                    <img src={maths} className='image-teacher' ></img>
                    <h2 style={{color: "firebrick"}}>Mr Paul</h2>
                    <p>Maths Teacher</p>
                </div>
                <div className="teachers-div">
                    <img src={chemistry}  className='image-teacher'></img>
                    <h2 style={{color: "firebrick"}}>Mrs Alice</h2>
                    <p>Chemistry Teacher</p>
                </div>
                <div className="teachers-div">
                    <img src={computer} className='image-teacher'></img>
                    <h2 style={{color: "firebrick"}}>Miss Vishwas</h2>
                    <p>Computer Teacher</p>
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
 
export default About;