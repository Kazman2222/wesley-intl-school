import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart, faArrowRight, faTimes, faPercent, faRocket, faFacebook, faClock, faCaretDown, faMapMarker, faHeadphones, faBone, faStar, faStarHalfStroke, faTty, faCreditCard,faArrowLeft, faAddressBook, faUser, faPaw, faDog, faKitMedical, faCar, faSync, faPhone, faEnvelope, faBowlFood, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faTwitter, faWhatsappSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import educationlogo from "./education-logoss.jpg"
import axios from "axios"
import laboratory from "./laboratory.jpg"
import business from "./business.jpg"
import Art from "./lawyer.jpg"
import { useEffect, useRef, useState } from 'react'
const Course = () => {
    const [course, setCourse] = useState({})
    const [display, setDisplay] = useState("none")
    const [id, setId] = useState()
    const inputRef = useRef()
    const selectRef = useRef()
    //fetching of course from a database
    useEffect(()=> {
      axios.get( `http://localhost:3803/course/${id}`)  
      .then(response => {
        setCourse(response.data)
      })
      .catch(err=> {
        console.log(err.msg)
      })
    }, [id])
    // functon to search for a course from a database
    const searchCourseFunction = () => {
        setId(inputRef.current.value)
        if( inputRef.current.value ==="Chemistry"   | inputRef.current.value ==="Physics" | inputRef.current.value === "Biology") {
         
            setDisplay("block")
            selectRef.current.value = "science"
           
        } if(  inputRef.current.value ==="Accounting" | inputRef.current.value === "Economics"  ) {
           
            selectRef.current.value = "business"
           
            setDisplay("block")
                } 
                if(  inputRef.current.value ==="Government"  ) {
           
                    selectRef.current.value = "art"
                   
                    setDisplay("block")
                        }  
                if(inputRef.current.value !=="Accounting" && inputRef.current.value !=="Chemistry" &&  inputRef.current.value !=="Physics" &&  inputRef.current.value !=="Government" &&  inputRef.current.value !== "Biology" &&  inputRef.current.value !== "Economics"  ) {
                    setDisplay("none")
                }
    } 
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
           
            
           
           <div className="course-image">
<h2 className='course-h2'>WESLEY INTL SCHOOL</h2>
<p className='course-p'>Start investing in your kids and make a better future for them</p>
           </div>
           <div >
            <div className='course-department'>
            <h2 className='course-department-h2'>School Departments</h2>
            <p className='course-department-p'>The school runs three department featuring science, business and arts.</p>
            </div>
           <div className='course-science'>
            <div>
                <img src={laboratory} className="course-images" alt='science'></img>
            </div>
            <div>
                <h2>SCIENCE DEPARTMENT</h2>
                <h3 className='course-name-science'>The school runs a science program with over 500 students. It has also produced the best scientist in the world.We have a standard laboratory with nice equipments and the best safety measures instruments.</h3>
            </div>
           </div>
           <div className='course-business'>
            <div>
                <img src={business} className="course-images" alt='science'></img>
            </div>
            <div>
                <h2>BUSINESS DEPARTMENT</h2>
                <h3 className='course-name-science'>The school runs a science program with over 500 students. It has also produced the best scientist in the world.We have a standard laboratory with nice equipments and the best safety measures instruments.</h3>
            </div>
           </div>
           <div className='course-science'>
            <div>
                <img src={Art} className="course-images" alt='science'></img>
            </div>
            <div>
                <h2>ART DEPARTMENT</h2>
                <h3 className='course-name-science'>The school runs a science program with over 500 students. It has also produced the best scientist in the world.We have a standard laboratory with nice equipments and the best safety measures instruments.</h3>
            </div>
           </div>
           </div>
          
           <div className='box-ref'>
            <select ref={selectRef} className='select-course'>
                <option value="science">Science</option>
                <option value="art">Art</option>
                <option value="business">Business</option>
            </select>
           <input type='text' ref={inputRef} className="input-course" placeholder='search for course' ></input>
           </div>

    <div key={course.id} style={{display: display}} className='course-information'>
        <div className='course-information-div'>
        <h2>NAME OF COURSE <span>: {course.title}</span></h2> 
        <h2> COURSE TITLE <span>: {course.body}</span></h2>
        </div>
       <div className='course-information-div'>
       <h2>COURSE DURATION<span>: {course.duration}</span></h2>
       <h2>COURSE COORDINATOR <span>: {course.coordinator}</span></h2>
       
      
       </div>
       
       
       
    </div>
           <div className='course-button-div'>
           <button onClick={searchCourseFunction} className='course-button'>search course</button>
          
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
 
export default Course;