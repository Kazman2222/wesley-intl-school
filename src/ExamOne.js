import { useRef, useState } from "react";
import Exam from "./Exam";
import Signup from "./Signup";
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import educationlogo from "./education-logoss.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart, faArrowRight, faPercent, faRocket, faFacebook,faClock,  faMapMarker, faHeadphones, faBone, faStar, faStarHalfStroke, faTty, faCreditCard,faArrowLeft, faAddressBook, faUser, faPaw, faDog, faKitMedical, faCar, faSync, faPhone, faEnvelope, faBowlFood, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faTwitter, faWhatsappSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
const ExamOne = ({one, two, third}) => {
    const oneRef = useRef()
    const secondRef = useRef()
    const thirdRef = useRef()
    const fourthRef = useRef()
    const elevenRef = useRef()
    const twelveRef = useRef()
    const thirteenRef = useRef()
    const fourteenRef = useRef()
    const twentyOneRef = useRef()
    const twentyTwoRef = useRef()
    const twentyThreeRef = useRef()
    const twentyFourRef = useRef()
    const thirtyOneRef = useRef()
    const thirtyTwoRef = useRef()
    const thirtyThreeRef = useRef()
    const thirtyFourRef = useRef()
    
    const [exam, setExam] = useState(0)
    const [examTwo, setExamTwo] = useState(0)
    const [examThird, setExamThird] = useState(0)
    const [examFourth, setExamFourth] = useState(0)

    const [score, setScore] = useState("none")
    const [question, setQuestion] =  useState()
    const [status, setStatus] = useState("")
    const [statusColor, setStatusColor]  = useState()
   
 
    const handleOne = () => {
        if(oneRef.current.checked && exam !==1) {
            
           setExam(prevState => prevState + 1)
       
        } else {
            
        }
    }
    const handleSecond = () => {
        if(secondRef.current.checked && exam ===1) {
            
           setExam(prevState => prevState - 1)
        
        } else {
            
        }
    }
    const handleThird = () => {
      if(thirdRef.current.checked && exam ===1) {
          
         setExam(prevState => prevState - 1)
      
      } else {
          
      }
  }
  const handleFourth = () => {
    if(fourthRef.current.checked && exam===1) {
        
       setExam(prevState => prevState - 1)
    
    } else {
        
    }
}
const handleEleven = () => {
    if(elevenRef.current.checked && examTwo ===1) {
        
       setExamTwo(prevState => prevState - 1)
   
    } else {
        
    }
  }
  const handleTwelve = () => {
    if(twelveRef.current.checked && examTwo ===1) {
        
        setExamTwo(prevState => prevState - 1)
    
    } else {
        
    }
  }
  const handleThirteen = () => {
  if(thirteenRef.current.checked && examTwo !==1) {
      
    setExamTwo(prevState => prevState + 1)
  
  } else {
      
  }
  }
  const handleFourteen = () => {
  if(fourteenRef.current.checked && examTwo ===1) {
    
    setExamTwo(prevState => prevState - 1)
  
  } else {
    
  }
  }
  const handleTwentyOne = () => {
    if(twentyOneRef.current.checked && examThird ===1) {
        
       setExamThird(prevState => prevState - 1)
   
    } else {
        
    }
  }
  const handleTwentyTwo = () => {
    if(twentyTwoRef.current.checked && examThird !==1) {
        
        setExamThird(prevState => prevState + 1)
    
    } else {
        
    }
  }
  const handleTwentyThree = () => {
  if(twentyThreeRef.current.checked && examThird ===1) {
      
    setExamThird(prevState => prevState - 1)
  
  } else {
      
  }
  }
  const handleTwentyFour = () => {
  if(twentyFourRef.current.checked && examThird ===1) {
    
    setExamThird  (prevState => prevState - 1)
  
  } else {
    
  }
  }
  const handleThirtyOne = () => {
    if(thirtyOneRef.current.checked && examFourth ===1) {
        
       setExamFourth(prevState => prevState - 1)
   
    } else {
        
    }
  }
  const handleThirtyTwo = () => {
    if(thirtyTwoRef.current.checked && examFourth !==1) {
        
        setExamFourth(prevState => prevState + 1)
    
    } else {
        
    }
  }
  const handleThirtyThree = () => {
  if(thirtyThreeRef.current.checked && examFourth ===1) {
      
    setExamFourth(prevState => prevState - 1)
  
  } else {
      
  }
  }
  const handleThirtyFour = () => {
  if(thirtyFourRef.current.checked && examFourth ===1) {
    
    setExamFourth  (prevState => prevState - 1)
  
  } else {
    
  }
  }

  const submitFunction = () => {
setQuestion("none")
setScore("block")
if(exam  + examFourth + examThird + examTwo + one + two + third > 4) {
    setStatusColor("green")
    setStatus("PASSED")
} else {
    setStatusColor("red")
    setStatus("FAILED")
}
  }
  
   
    return ( 
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
                <li><Link to='/Home' className='navbar-link'>Home</Link></li>
                        <li><Link to='/Course' className='navbar-link'>Course</Link></li>
                        <li><Link to='/Events' className='navbar-link'>Events</Link></li>
                        <li><Link to='/Contact' className='navbar-link'>Contacts</Link></li>
                        <li><Link to='/About' className='navbar-link'>About us</Link></li>
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
                <div style={{display: question}}>
                <div className="question">
                    <h2>QUESTION 4 .</h2>
                    <strong>From options A to D, choose the interpretation that you consider most
appropriate for this sentence: The police knew that the suspect was not being
straight with them. This means that the suspect was</strong>
                    <div>
                        <input type='radio' ref={oneRef} onClick={handleOne} name="answer"  ></input>
                        <span>   not telling the truth  </span>
                    </div>
                    <div>
                        <input type='radio' ref={secondRef} name="answer" onClick={handleSecond}></input>
                        <span>not friendly</span>
                    </div>
                    <div>
                        <input type='radio' ref={thirdRef} name="answer" onClick={handleThird}></input>
                        <span>Afraid</span>
                    </div>
                    <div>
                        <input type='radio' ref={fourthRef} name="answer" onClick={handleFourth}></input>
                        <span>Timid</span>
                    </div>
                    </div> 
                    <div className="question">
                    <h2>QUESTION 5 .</h2>
                    <strong>If un = 2, 6, 10, …, the 12th term of the sequence is?</strong>
                    <div>
                        <input type='radio' ref={elevenRef}  name="answers" onClick={handleEleven} ></input>
                        <span>30</span>
                    </div>
                    <div>
                        <input type='radio' ref={twelveRef} name="answers" onClick={handleTwelve}></input>
                        <span>50</span>
                    </div>
                    <div>
                        <input type='radio' ref={thirteenRef} name="answers" onClick={handleThirteen}></input>
                        <span>46</span>
                    </div>
                    <div>
                        <input type='radio' ref={fourteenRef} name="answers" onClick={handleFourteen}></input>
                        <span>90</span>
                    </div>
                   
                    </div> 
                    <div className="question">
                    <h2>QUESTION 6 .</h2>
                    <strong>In an arithmetic sequence whose 4th term is 14 and whose 11th term is 70, the
sum of the first 12 terms of the sequence is</strong>
                    <div>
                        <input type='radio' ref={twentyOneRef}  name="answers-two" onClick={handleTwentyOne} ></input>
                        <span> 390</span>
                    </div>
                    <div>
                        <input type='radio' ref={twentyTwoRef} name="answers-two" onClick={handleTwentyTwo}></input>
                        <span>408 </span>
                    </div>
                    <div>
                        <input type='radio' ref={twentyThreeRef} name="answers-two" onClick={handleTwentyThree}></input>
                        <span>590</span>
                    </div>
                    <div>
                        <input type='radio' ref={twentyFourRef} name="answers-two" onClick={handleTwentyFour}></input>
                        <span> 362</span>
                    </div>
                  
                   
                    </div> 
                    <div className="question">
                    <h2>QUESTION 7 .</h2>
                    <strong>Which of the following statements both describes a public corporation:</strong>
                    <div>
                        <input type='radio' ref={thirtyOneRef}  name="answers-three" onClick={handleThirtyOne} ></input>
                        <span> It is an organ of government responsible for executing the policies of
government</span>
                    </div>
                    <div>
                        <input type='radio' ref={thirtyTwoRef} name="answers-three" onClick={handleThirtyTwo}></input>
                        <span> It is a legal body established by an act of state to provide essential services </span>
                    </div>
                    <div>
                        <input type='radio' ref={thirtyThreeRef} name="answers-three" onClick={handleThirtyThree}></input>
                        <span>It is a local body that renders services on a local basis</span>
                    </div>
                    <div>
                        <input type='radio' ref={thirtyFourRef} name="answers-three" onClick={handleThirtyFour}></input>
                        <span> It is a body owned by members of the public</span>
                    </div>
                    </div>  
                    <button onClick={submitFunction} className='submit-button'>SUBMIT</button>
                    </div>
                    <div style={{display: score}} className='submit-section'>
                <h2>Thank you for writing the exam, your answers have been submitted successfully.</h2>   
              <h2> You have a total score of - {examThird + exam + examFourth + examTwo + one+ two + third} out of 7</h2> 
              <h2> Your current status- <strong style={{color: statusColor}}>{status}</strong></h2>
                       
                        </div>    
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
     );
}
 
export default ExamOne;