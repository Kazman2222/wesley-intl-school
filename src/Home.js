import React,{useContext, useEffect, useRef, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart, faArrowRight, faTimes, faPercent, faRocket, faFacebook, faCaretDown, faMapMarker, faHeadphones, faBone, faStar, faStarHalfStroke, faTty, faCreditCard,faArrowLeft, faAddressBook, faUser, faPaw, faDog, faKitMedical, faCar, faSync, faPhone, faEnvelope, faBowlFood, faPhoneAlt, faMessage, faClock } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faTwitter, faWhatsappSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import education from "./education.jpg"
import educationlogo from "./education-logoss.jpg"
import dogs from "./bull-dog.jpg"
import Touring from "./Touring.jpg"
import students from "./students.jpg"
import student1 from "./student.jpg"
import entrancess from "./entrancess.jpg"
import writingexam from "./writing-exams.jpg"
import writingexams from "./writing-exam-1.jpg"
import teacher1 from "./teacher-1.jpg"
import teacher2 from "./teacher-2.jpg"
import teacher3 from "./teacher-3.jpg"



import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { welcomeValue } from "./Signup"

const Home = ({welcomeValues}) => {
    const channleCon = useContext(welcomeValue)
  
    const [course, setCourse] = useState(0)
    const [studentss, setStudentss] = useState(0)
    const [awards, setAwards] = useState(0)
    const [instructors, setInstructors] = useState(0)
    const countingRef =  useRef()
    const [go, setGo]  =useState(1)
    useEffect(()=> {
    setInterval(()=> {
       setGo(prevState => prevState + 1)
       }, 4000)
      
     }, [])
   
   
   useEffect(()=> {
    countingRef.current = setInterval(()=> {
        if(document.documentElement.scrollTop > 150) {
            setCourse(prevState=> prevState + 1)
            setStudentss(prevState => prevState +10)
            setAwards(prevState => prevState + 1)
            setInstructors(prevState => prevState + 1)
        } else {

        }
      
    }, 50)
   }, [])
   if(course > 100) {
    setCourse(100)
   } else {

   }

   if(studentss > 1500) {
    setStudentss(1500)
   } else {

   }
   if(awards > 30) {
    setAwards(30)
   } else {

   }
    if(instructors > 150) {
        setInstructors(150)
    } else {

    }

    const transFun = ()=> {
        inputRef.current.style.left = "-109rem"
        regRef.current.style.left = "0rem"
        regRef.current.style.visibility = "inherit"
        regRef.current.style.width="100%"
        inputRef.current.style.width="0%"
        slideRef.current.style.backgroundColor = "lightgray"
        slidesRef.current.style.backgroundColor = "gray"
       
       
       
      
    }
    const takeFun = ()=> {
        inputRef.current.style.left = "0rem"
        regRef.current.style.left = "0rem"
        regRef.current.style.visibility = "inherit"
        regRef.current.style.width="0%"
        inputRef.current.style.width="100%"
        slidesRef.current.style.backgroundColor = "lightgray"
        slideRef.current.style.backgroundColor = "gray"
    }
    const inputRef = useRef()  
    const regRef = useRef()  
    const slideRef = useRef()
    const slidesRef = useRef()
    const dropdownRef = useRef()
    if(go === 7) {
       transFun()
        } else if(go === 11) {
            takeFun()
        } else if(go > 11) {
    setGo(3)
        } else {

        }
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
            <div className="quick-display">
                <p>Welcome {welcomeValues}</p>
            </div>
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
                        <li>Home </li>
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
            <div className="dropdown" ref={dropdownRef}>
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
           
             <div className="main">
           <div ref={inputRef} className="main-1" >
            <div className="main-1-first-div">
            
                <h2 className="leading-school">THE LEADING SCHOOL</h2>
                <p className="leading-school-paragraph">Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone</p>
                <button className="main-1-button">LEARN MORE</button>
            </div>
           <img  className='para1' src={students} alt="hi"></img>
           </div>
           <div ref={regRef} className="main-2">
           <div className="main-1-first-div">
                <h2 className="leading-school">THE LEADING SCHOOL</h2>
                <p className="leading-school-paragraph">Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone</p>
                <button className="main-1-button">LEARN MORE</button>
            </div>
           <img  className='para2' src={student1} alt="hi"></img>
           </div>
           </div>
           <div className="slideshow-changing">
            <div ref={slideRef}></div>
            <div ref={slidesRef} id='slideshow-changing-secondname'></div>
           </div>
           <div className="entrance-exam">
            <h2 className="entrance-h2">OUR ENTRANCE EXAMS</h2>
            <div className="categories-exam">
            <div className="common-entrance">
            <img src={writingexams} className='entrance-image'></img>
            <div className="entrance-information">
            <h2 className="upcoming-exam-h2">UPCOMING ENTRANCE EXAM</h2>
<p className="upcoming-exam-p">A college entrance exam is a standardized aptitude test that measures your aptitude in various areas such as verbal, math, analytical and writing skills.</p>
<button className="upcoming-exam-button"><Link to='/Exam' className='upcoming-exam-link ' >CLICK TO TAKE EXAM</Link></button>
            </div>
            </div>
            <div className="common-entrance">
            <img src={entrancess} className='entrance-image'></img>
            <div className="entrance-information">
            <h2 className="upcoming-exam-h2">UPCOMING ENTRANCE EXAM</h2>
<p className="upcoming-exam-p">A college entrance exam is a standardized aptitude test that measures your aptitude in various areas such as verbal, math, analytical and writing skills.</p>
<button className="upcoming-exam-button">CLICK TO TAKE EXAM</button>
            </div>

            </div>
            <div className="common-entrance" id="common-entrance-3">
            <img src={writingexam} className='entrance-image-3'></img>
            <div className="entrance-information">
            <h2 className="upcoming-exam-h2">UPCOMING ENTRANCE EXAM</h2>
<p className="upcoming-exam-p">A college entrance exam is a standardized aptitude test that measures your aptitude in various areas such as verbal, math, analytical and writing skills.</p>
<button className="upcoming-exam-button">CLICK TO TAKE EXAM</button>
            </div>

            </div>
            </div>
            </div>
           <div className="what-we-offer">
            <div className="information">
            <div className="information-courses">
            <div>
                <h2>{course}+</h2>
                <p className="information-paragraph">Courses we offer</p>
            </div>
            <div>
                <h2>{instructors}+</h2>
                <p className="information-paragraph">Professional Instructors</p>
            </div>
           </div>
           <div className="information-courses">
           <div >
                <h2>{studentss}+</h2>
                <p className="information-paragraph">Virtous Students</p>
            </div>
            <div>
                <h2>{awards}+</h2>
                <p className="information-paragraph">International Awards</p>
               
            </div>
           </div>
            </div>
          <div className="information-image">
          
          </div>
           </div>
        <div className="our-skills">
            <h2 className="our-skills-h2">Our Skills</h2>
            <p className="our-skills-paragraph">We at wesley intl school we provide one of the best skills to our students and make them stand out in the community</p>
           <div  >
           <strong className="our-skills-strong">Communication</strong>
            <progress value="90" min="60" max="100" className="progress-bar">80%</progress>
           </div>
           <div  >
           <strong className="our-skills-strong">Problem Solving</strong>
            <progress value="80" min="60" max="100" className="progress-bar">80%</progress>
           </div>
           <div  >
           <strong className="our-skills-strong">Creativity</strong>
            <progress value="90" min="60" max="100" className="progress-bar">80%</progress>
           </div>
           <div  >
           <strong className="our-skills-strong">Team Work</strong>
            <progress value="100" min="60" max="100" className="progress-bar">80%</progress>
           </div>
        </div>
        <div className="upcoming-events">
            <h2 className="upcoming-events-h2">Upcoming Events</h2>
            <p className="upcoming-events-span">A brief of our upcoming events</p>
            <div className="upcoming-news">
                <div className="upcoming-images-section">
                    <img src={education} className='upcoming-image'></img>
                </div>
                <div className="main-event">
                    <h2>Building Education Website</h2>
                    <span className='upcoming-icon' ><FontAwesomeIcon icon={faMapMarker}  ></FontAwesomeIcon> Sanford Street Pretoria, Gauteng South Africa</span>
                    <p>This is going to be a fun program. It will involve all students both junior and senior,  it takes place in south africa.
                    </p>
                    <strong>25 May 2021 - 8:00 - 17:00</strong>
                </div>
                
            </div>
            <div className="upcoming-news">
                <div className="upcoming-images-section">
                    <img src={Touring} className='upcoming-image'></img>
                </div>
                <div className="main-event">
                    <h2>U.S.A Educational Tour</h2>
                    <span className='upcoming-icon' ><FontAwesomeIcon icon={faMapMarker}  ></FontAwesomeIcon> Phillip Street Jersey City, NJ United States</span>
                    <p>This is going to be a fun program. It will involve all students both junior and senior,  it takes place in south africa.
                    </p>
                    <strong>25 May 2021 - 8:00 - 17:00</strong>
                </div>
                
            </div>
            <div className="view-events-div">
            <button className="view-events"><Link to='/Events' className='link' style={{color: "white"}}>VIEW EVENTS</Link> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
           
        </div>
        <div className="our-awesome-teachers">
            <h2 className="our-awesome-teachers-h2">OUR AWESOME TEACHERS</h2>
            <p>Meet our awesome teachers with very good certificates</p>
            <div className="teachers">
                <div className="teachers-div">
                    <img src={teacher1} className='image-teacher'></img>
                    <h2>Miss Selim</h2>
                    <p>Physics Teacher</p>
                </div>
                <div className="teachers-div">
                    <img src={teacher2}  className='image-teacher'></img>
                    <h2>Mr Baruba</h2>
                    <p>English Teacher</p>
                </div>
                <div className="teachers-div">
                    <img src={teacher3} className='image-teacher'></img>
                    <h2>Mrs. Anita</h2>
                    <p>Biology Teacher</p>
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
 
export default Home;