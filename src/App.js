import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signup from './Signup';
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import school from "./school.jpg"
import maths from "./banimated.jpg"
import React, {useRef, useState, useContext} from "react"
import Exam from './Exam';
import ExamOne from './ExamOne';
import Calculator from './Calculator';
import educationlogo from "./education-logoss.jpg"
import Events from './Events';
import Contact from './Contact';
import Course from './Course';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart, faArrowRight, faPercent, faRocket, faFacebook, faClock,  faMapMarker, faHeadphones, faBone, faStar, faStarHalfStroke, faTty, faCreditCard,faArrowLeft, faAddressBook, faUser, faPaw, faDog, faKitMedical, faCar, faSync, faPhone, faEnvelope, faBowlFood, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faTwitter, faWhatsappSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import About from './About';

function App() {
  const [welcomeValues, setWelcomeValues] = useState()
    const firstName = useRef()
    const secondsName = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const checkBox = useRef()
const passwordsRef = useRef()
const confirmRef = useRef()




    const [firstsName, setFirstsName] = useState(false)
    const [lastName, setLastName] =  useState(false)
    const [secondName, setsecondName] = useState(null)
    const [emails, setEmails] = useState(false)
    const [password, setPassword] = useState(false)
    const [confirmPassword, setConfirmPassword]= useState(false)
    //border of each input field changes if there is an error
    const [errorFirstName, setErrorFirstName] = useState("rgb(72, 242, 233)")
    const [errorLastName, setErrorLastName] = useState("rgb(72, 242, 233)")
    const [errorEmail, setErrorEmail] = useState("rgb(72, 242, 233)")
    const [errorPassword, setErrorPassword] = useState("rgb(72, 242, 233)")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("rgb(72, 242, 233)")

    // submitFunction for each input Field if there is an error
    const submitFunction = (event) => {
       setWelcomeValues(firstName.current.value)
        if(firstName.current.value === "" | firstName.current.value.match("[0-9]") ) {
            setFirstsName(true)
            // input filed changes to red if there is an error
            setErrorFirstName("red")
            event.preventDefault()
        } 
        if(secondsName.current.value === "" | secondsName.current.value.match("[0-9]") ) {
            setLastName(true)
            setErrorLastName("red")
            event.preventDefault()
        }  
        if(!emailRef.current.value.includes("@")) {
            setEmails(true)
           setErrorEmail("red")
            event.preventDefault()
        }
        if(!passwordsRef.current.value > 7 | !passwordsRef.current.value.match("[A-Z]") | !passwordsRef.current.value.match("[0-9]")) {
            setPassword(true)
            setErrorPassword("red")
            event.preventDefault()
        }
       if(confirmRef.current.value !== passwordsRef.current.value ) {
        setConfirmPassword(true)
        setErrorConfirmPassword("red")
        event.preventDefault()
       }
    }  
    const errorFirstNameFunction = () => {
        setFirstsName(false)
        setErrorFirstName("rgb(72, 242, 233)")
    }
    const errorLastNameFunction = () => {
        setLastName(false)
        setErrorLastName("rgb(72, 242, 233)")
    }
    const errorEmailFunction = () => {
        setEmails(false)
        setErrorEmail("rgb(72, 242, 233)")
    }
    const errorPasswordFunction = () => {
        setPassword(false)
        setErrorPassword("rgb(72, 242, 233)")
    }
    const errorConfirmPasswordFunction = () => {
        setConfirmPassword(false)
        setErrorConfirmPassword("rgb(72, 242, 233)")
    }

    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const [third, setThird] = useState(0)
     // useRef for question 1, i binded each input field to a useRef
    const oneRef = useRef()
    const secondRef = useRef()
    const thirdRef = useRef()
    const fourthRef = useRef()
    // useRef for question 2, i binded each input field to a useRef
    const elevenRef = useRef()
    const twelveRef = useRef()
    const thirteenRef = useRef()
    const fourteenRef = useRef()
     // useRef for question 3, i binded each input field to a useRef
    const twentyOneRef = useRef()
    const twentyTwoRef = useRef()
    const twentyThreeRef = useRef()
    const twentyFourRef = useRef()
    // function for question 1
    const handleOne = () => {
        if(oneRef.current.checked && one !==1) {
            // i used useState to increment and decrement if the user gets it right or fails it
           setOne(prevState => prevState + 1)
       
        } else {
            
        }
    }
    const handleSecond = () => {
        if(secondRef.current.checked && one ===1) {
            
           setOne(prevState => prevState - 1)
        
        } else {
            
        }
    }
    const handleThird = () => {
      if(thirdRef.current.checked && one ===1) {
          
         setOne(prevState => prevState - 1)
      
      } else {
          
      }
  }
  const handleFourth = () => {
    if(fourthRef.current.checked && one ===1) {
        
       setOne(prevState => prevState - 1)
    
    } else {
        
    }
}
// function for question 2
const handleEleven = () => {
  if(elevenRef.current.checked && two ===1) {
      
     setTwo(prevState => prevState - 1)
 
  } else {
      
  }
}
const handleTwelve = () => {
  if(twelveRef.current.checked && two ===1) {
      
     setTwo(prevState => prevState - 1)
  
  } else {
      
  }
}
const handleThirteen = () => {
if(thirteenRef.current.checked && two !==1) {
    
   setTwo(prevState => prevState + 1)

} else {
    
}
}
const handleFourteen = () => {
if(fourteenRef.current.checked && two ===1) {
  
 setTwo(prevState => prevState - 1)

} else {
  
}
}
// function for question 3
const handleTwentyOne = () => {
  if(twentyOneRef.current.checked && third ===1) {
      
     setThird(prevState => prevState - 1)
 
  } else {
      
  }
}
const handleTwentyTwo = () => {
  if(twentyTwoRef.current.checked && third !==1) {
      
     setThird(prevState => prevState + 1)
  
  } else {
      
  }
}
const handleTwentyThree = () => {
if(twentyThreeRef.current.checked && third ===1) {
    
   setThird(prevState => prevState - 1)

} else {
    
}
}
const handleTwentyFour = () => {
if(twentyFourRef.current.checked && third ===1) {
  
 setThird(prevState => prevState - 1)

} else {
  
}
}
// show and hide password and confirm password value
const showPassword = () => {
if(passwordsRef.current.type === "password") {
    passwordsRef.current.type = "text"
} else {
    passwordsRef.current.type= "password"
}
}
const showConfirmPassword = () => {
    if(confirmRef.current.type === "password") {
        confirmRef.current.type = "text"
    } else {
        confirmRef.current.type= "password"
    }
    }
  return (
    <Router>
       <div className="App">
        <Route exact path='/'>
         <div style={{backgroundColor: "darkblue", height: "76em"}}>
        <div style={{backgroundColor: "darkblue", color: "white"}}>
            <div className="opening-hourss">
<h6>OPENING HOURS MONDAY - FRIDAY : 8:00 AM - 4:00 PM</h6>
            </div>
           <div className="sign-up">
            <div className="form-details">
                <h2 className="h2-details">WELCOME TO WESLEY INTL SCHOOL</h2>
                <p className="p-details">Don't have an account yet? Register now to have one</p>
               
                <form>
                    <label for='firstName'>
             <span className="span-first-name">FirstName:</span> 
             <br></br>
             <input style={{border: `2px solid ${errorFirstName}`}} ref={firstName} type='text' id='firstName' required onChange={errorFirstNameFunction}></input>
             {firstsName && <div className='error-message'>Input can't be empty and can't contain numbers</div>}
                    </label>
                    <br></br>
                    <br></br>
                    <label for='lastName'>
             <span className="span-first-name">LastName:</span>
             <br></br>
              <input style={{border: `2px solid ${errorLastName}`}} ref={secondsName} type='text' id='lastName' required onChange={errorLastNameFunction}></input>
             {lastName && <div className='error-message'>Input can't be empty and can't contain numbers</div>}
                    </label>
                    <br></br>
                    <br></br>
                    <label for='Email'>
             <span className="span-Email">Email:</span> 
             <br></br>
             <input style={{border: `2px solid ${errorEmail}`}} ref={emailRef} type='email' id='Email' required onChange={errorEmailFunction}></input>
             {emails && <div className='error-message-email'>Email field should contain '@'</div>}
                    </label>
                    <br></br>
                    <br></br>
                    <span className="span-Gender">Gender:</span> 
                    <br></br>
                    <select className="gender">
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label for='Age'>
             <span className="span-Age">Date of birth: </span>
             <br></br>
             <input ref={ageRef} type='date' id='Age' max={"2021-09-01"} required></input>
                    </label>
                  
            
                    <br></br>
                    <br></br>
                  
                    <label for='Password'>
             <span className="span-Password">Password:</span> 
             <br></br>
             <input style={{border: `2px solid ${errorPassword}`}} ref={passwordsRef} type='password' id='Password' onChange={errorPasswordFunction}  ></input><input type='checkbox' className='checkbox' onClick={showPassword}></input>
             {password && <div className='error-message-password'>minimum of 8 characters and should contain Uppercase and Number</div>}
                    </label>
                    <br></br>
                    <br></br>
                    <label for='Password'> 
             <span className="confirm-Password">Confirm Password:</span>
             <br></br>
              <input  style={{border: `2px solid ${errorConfirmPassword}`}} ref={confirmRef} type='password' id='Confirm-Password' onChange={errorConfirmPasswordFunction} ></input><input className='checkbox' type='checkbox' onClick={showConfirmPassword}></input>
              {confirmPassword && <div className='error-message-password'>confirm password doesn't match password  </div>}
              </label>
                  
                  
                
                    <br></br>
                    <br></br>
                 
                    <label for='checkbox'> </label>
<p className='terms-and-condition'> <input type='checkbox' id='checkbox' ref={checkBox} className='checkbox' ></input><span>By clicking on this it means you have accepted our privacy policy with our <Link style={{color: "lightgray"}} to="">terms and conditions</Link> </span></p>
                   
                    <br></br>
                    <br></br>
                    <br></br>
                
                </form>
                
                   <button className="sign-up-button" ><Link className='sign-up-link' onClick={(event)=>submitFunction(event)}  to="/Home">Sign Up</Link></button>
            </div>
           
           </div>
      
        </div>
        </div>
          
       
        </Route>
   
    <Switch>
      <Route path="/Home">
       <Home welcomeValues={welcomeValues}></Home>
      </Route>
      <Route path="/Exam">
      <div>
             <div className="opening-hours">
<h3>OPENING HOURS MONDAY - FRIDAY : 8:00 AM - 4:00 PM</h3>
            </div>
           
            <div className="header">
                <div className="name-of-school">
                <img src={educationlogo} className='education-logo'></img>
                <h2 className="name-of-schools">WESLEY <span className="span-name-of-school">INTL</span> SCHOOL</h2>
                </div>
                <div className="navbar-div" >
                   
                <ul className="navbar">
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Events</li>
                        <li><Link to='/Contact' className='navbar-link'>Contacts</Link></li>
                        <li>About us</li>
                    </ul>
                  
                    
                </div>
                <div  className="div-fa-bars">
<h2><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></h2>
                </div>
                <div className="group-header-button">
                <button className='button-header'><Link className='link' to='/Calculator'>Calculator</Link></button>
                <button className="button-header">LOGIN</button>
              </div> 
            </div>
            <div className="instructions">
                <h2>INSTRUCTIONS</h2>
                <ol>
                    <li>Read the instructions before starting the examination</li>
                    <li>You are given a maximum of 30 minutes to take the exam</li>
                    <li>You are not allowed to use to a physical calculator but the one provided by the school</li>
                </ol>
                </div> 
                <div className="question">
                    <h2>QUESTION 1 .</h2>
                    <strong>The local government reforms of 1976 in Nigeria were designed to:</strong>
                    <div>
                        <input type='radio' ref={oneRef} onClick={handleOne} name="answer"  ></input>
                        <span>  All of the above </span>
                    </div>
                    <div>
                        <input type='radio' ref={secondRef} name="answer" onClick={handleSecond}></input>
                        <span>Enlist grass-root support</span>
                    </div>
                    <div>
                        <input type='radio' ref={thirdRef} name="answer" onClick={handleThird}></input>
                        <span>Achieve even development</span>
                    </div>
                    <div>
                        <input type='radio' ref={fourthRef} name="answer" onClick={handleFourth}></input>
                        <span>Decentralize authority</span>
                    </div>
                   
                    </div> 
                    <div className="question">
                    <h2>QUESTION 2 .</h2>
                    <strong>P is the point (2, 7) and Q is the point (6, 3). What is the gradient of PQ?</strong>
                    <div>
                        <input type='radio' ref={elevenRef}  name="answers" onClick={handleEleven} ></input>
                        <span>-0.5</span>
                    </div>
                    <div>
                        <input type='radio' ref={twelveRef} name="answers" onClick={handleTwelve}></input>
                        <span>1</span>
                    </div>
                    <div>
                        <input type='radio' ref={thirteenRef} name="answers" onClick={handleThirteen}></input>
                        <span>-1</span>
                    </div>
                    <div>
                        <input type='radio' ref={fourteenRef} name="answers" onClick={handleFourteen}></input>
                        <span>0.5</span>
                    </div>
                  
                    </div> 
                    <div className="question">
                    <h2>QUESTION 3 .</h2>
                    <strong>From options A to D, choose the word or group of words that best completes
the following sentence: This portion is to be shared between………</strong>
                    <div>
                        <input type='radio' ref={twentyOneRef}  name="answers-two" onClick={handleTwentyOne} ></input>
                        <span> us and them</span>
                    </div>
                    <div>
                        <input type='radio' ref={twentyTwoRef} name="answers-two" onClick={handleTwentyTwo}></input>
                        <span>we and them </span>
                    </div>
                    <div>
                        <input type='radio' ref={twentyThreeRef} name="answers-two" onClick={handleTwentyThree}></input>
                        <span>we and they</span>
                    </div>
                    <div>
                        <input type='radio' ref={twentyFourRef} name="answers-two" onClick={handleTwentyFour}></input>
                        <span> us and they</span>
                    </div>
                 
                   
                    </div> 
                    <button className='submit-button'><Link to="/ExamOne" className='next-page-link'>Next Page</Link></button>
                    <div className="footer">
<div className="footer-logo">
<img src={educationlogo} className='education-logos'></img>
    <h2>WESLEY INTL SCHOOL FOUNDED 12 YEARS AGO </h2>
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
      </Route>
      <Route  path="/ExamOne">
<ExamOne one={one} two={two} third={third}></ExamOne>
      </Route>
      <Route path='/Calculator'>
        <Calculator></Calculator>
      </Route>
      <Route path='/Events'>
        <Events></Events>
      </Route>
      <Route path="/Contact">
<Contact></Contact>
      </Route>
      <Route path='/Course'>
        <Course></Course>
      </Route>
      <Route path='/About'>
<About></About>
      </Route>
    </Switch>
    </div>
    </Router>
   
  );
}

export default App;
