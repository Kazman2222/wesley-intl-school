import React, {useRef, useState} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import school from "./school.jpg"
import banimated from "./banimated.jpg"
import Home from "./Home"
import App from "./App"


export const welcomeValue = React.createContext()

const Signup = () => {
    
    const [welcomeValues, setWelcomeValues] = useState("hi")
    const firstName = useRef()
    const secondsName = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const checkBox = useRef()
const passwordsRef = useRef()
const confirmRef = useRef()



    const [firstsName, setFirstsName] = useState(null)
    const [secondName, setsecondName] = useState(null)
    const [emails, setEmails] = useState(null)
    const [password, setPassword] = useState(null)
    const submitFunction = (event) => {
        setWelcomeValues(firstName.current.value)
        if(firstName.current.value.match("[a-z]") && secondsName.current.value.match("[a-z]") && !firstName.current.value.match("[0-9]") && !secondsName.current.value.match("[0-9]") && checkBox.current.checked && ageRef.current.value !== "" && emailRef.current.value.includes("@") && passwordsRef.current.value.match("[a-z]") && passwordsRef.current.value.length > 10 && passwordsRef.current.value.match("[0-9]") && passwordsRef.current.value.match("[A-Z]") && confirmRef.current.value === passwordsRef.current.value) {
            setFirstsName("")
            setEmails("")
            setPassword("")
            setsecondName("none")
        }  else {
            event.preventDefault()
            setFirstsName("your name should not contain numbers")
            setEmails("your email should contain '@'")
            setPassword("password should not be more than  12 characters and should contain an uppercase and a special character")
            setsecondName("block")
        }
    }
  
    return ( 
        <div>
            <div className="opening-hours">
<h3>OPENING HOURS MONDAY - FRIDAY : 8:00 AM - 4:00 PM</h3>
            </div>
           <div className="sign-up">
            <div className="form-details">
                <h2 className="h2-details">Personal Details</h2>
                <form>
                    <label for='firstName'>
             <span className="span-first-name">FirstName:</span> <input ref={firstName} type='text' id='firstName'></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label for='lastName'>
             <span className="span-first-name">LastName:</span> <input ref={secondsName} type='text' id='lastName'></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label for='Email'>
             <span className="span-Email">Email:</span> <input ref={emailRef} type='email' id='Email'></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label for='Age'>
             <span className="span-Age">Age:</span> <input ref={ageRef} type='date' id='Age' max={"2021-09-01"} required></input>
                    </label>
                    <br></br>
                    <br></br>
             <span className="span-Gender">Gender:</span> <select className="gender">
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    <br></br>
                    <br></br>
                  
                    <label for='Password'>
             <span className="span-Password">Password:</span> <input ref={passwordsRef} type='password' id='Password' ></input>
             <input type='checkbox'></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label for='Password'>
             <span className="confirm-Password">Confirm Password:</span> <input ref={confirmRef} type='password' id='Confirm-Password' ></input>
                    </label>
                
                    <br></br>
                    <br></br>
                   <ul className="error-message" style={{display: secondName}}>
                    <li>{firstsName}</li>
                    <li>{emails}</li>
                    <li>{password}</li>
                   </ul>
                    <label for='checkbox'>
            <input type='checkbox' id='checkbox' ref={checkBox} className='checkbox' ></input><span>By clicking on this it means you have accepted our privacy policy with our <Link to="">terms and conditions</Link> </span>
                    </label>
                    <br></br>
                    <br></br>
                    <br></br>
                
                </form>
                  <p>{welcomeValues}</p>
                   <button className="sign-up-button" ><Link className='sign-up-link' onClick={(event)=>submitFunction(event)}  to="/Home">Sign Up</Link></button>
            </div>
            <div className="image-animated">
                <img className="image-sch" src={banimated} alt='school'></img>
            </div>
           </div>
      
        </div>
     );
}
 
export default Signup;