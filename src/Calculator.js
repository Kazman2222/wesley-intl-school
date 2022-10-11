import { Link } from "react-router-dom/cjs/react-router-dom.min"
import educationlogo from "./education-logoss.jpg"
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faCoffee, faShoppingCart, faArrowRight, faPercent, faRocket, faFacebook, faCaretDown, faMapMarker, faHeadphones, faBone, faStar, faStarHalfStroke, faTty, faCreditCard,faArrowLeft, faAddressBook, faUser, faPaw, faDog, faKitMedical, faCar, faSync, faPhone, faEnvelope, faBowlFood, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faTwitter, faWhatsappSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Calculator = () => {
    
const [count, setCount] = useState("")
const [counts, setCounts] = useState()
const [multiply, setMultiply] = useState()
const [multiplys, setMultiplys] = useState()
const [result, setResult] = useState()
const [results, setResults] = useState()
const [previousValue, setPreviousValue] = useState([])
const [storedValues, setStoredValues] = useState()
const inputRef = useRef()
const inputRefs = useRef()
const countRef= useRef()
useEffect(()=> {
  inputRef.current.blur()
})
const handleMe0 = () => {
  if(count === "") {
  inputRef.current.value += 0
  } else {
    inputRefs.current.value += 0
  }
 
}
const handleMe1 = () => {
  if(count === "") {
  inputRef.current.value += 1
  } else {
    inputRefs.current.value += 1
  }
 
}
const handleMe2 = () => {
  if(count === "") {
  inputRef.current.value += 2
  } else {
    inputRefs.current.value += 2
  }
 
}
const handleMe3 = () => {
  if(count === "") {
  inputRef.current.value += 3
  } else {
    inputRefs.current.value += 3
  }
 
}
const handleMe4 = () => {
  if(count === "") {
  inputRef.current.value += 4
  } else {
    inputRefs.current.value += 4
  }
 
}
const handleMe5 = () => {
  if(count === "") {
  inputRef.current.value += 5
  } else {
    inputRefs.current.value += 5
  }
 
}
const handleMe6 = () => {
  if(count === "") {
  inputRef.current.value += 6
  } else {
    inputRefs.current.value += 6
  }
 
}
const handleMe7 = () => {
  if(count === "") {
  inputRef.current.value += 7
  } else {
    inputRefs.current.value += 7
  }
 
}
const handleMe8 = () => {
  if(count === "") {
  inputRef.current.value += 8
  } else {
    inputRefs.current.value += 8
  }
 
}
const handleMe9 = () => {
  if(count === "") {
  inputRef.current.value += 9
  } else {
    inputRefs.current.value +=9
  }
}
const handleMe10 = () => {
  if(count === "") {
  inputRef.current.value += "."
  } else {
    inputRefs.current.value += "."
  }
}
const setFu = () => {
  if(inputRef.current.value !== "" && inputRefs.current.value !== "" && countRef.current.value !== "") {
    inputRef.current.value = multiply
    inputRefs.current.value =""
      setCount("*")
     } if(inputRef.current.value.length > 0) {
       setCount("*")
     }

}
const setFus = () => {
  if(inputRef.current.value !== "" && inputRefs.current.value !== "" && countRef.current.value !== "") {
   inputRef.current.value = multiply
   inputRefs.current.value =""
     setCount("+")
    } if(inputRef.current.value.length > 0) {
      setCount("+")
    }
  }
  const setFunc = () => {
    if(inputRefs.current.value === "" && inputRef.current.value === "") {
      inputRef.current.value ="-"
      setCount("")
    } if(inputRef.current.value[1] > 0 && countRef.current.value === "" ) {
     setCount("-")
    }  if(countRef.current.value === "" && inputRefs.current.value === "" && inputRef.current.value[0] > 0) {
      setCount("-")
    }
    if(countRef.current.value !== "" && inputRefs.current.value === "" ) {
     inputRefs.current.value ="-"
    }
    if(inputRef.current.value !== "" && inputRefs.current.value !== "" && countRef.current.value !== "" && inputRefs.current.value[1] > -1 ) {
      inputRef.current.value = multiply
      inputRefs.current.value =""
        setCount("-")
       }
       if(inputRef.current.value !== "" && inputRefs.current.value !== "" && countRef.current.value !== ""  && inputRefs.current.value[0] > 0) {
        inputRef.current.value = multiply
        inputRefs.current.value =""
          setCount("-")
         }
     
  

    }
    const setFunct = () => {
   if(inputRef.current.value !== "" && inputRefs.current.value !== "" && countRef.current.value !== "") {
        inputRef.current.value = multiply
        inputRefs.current.value =""
          setCount("/")
         } if(inputRef.current.value.length > 0) {
           setCount("/")
         }
      }
const resFU = () => {
  if(count === "*") {
    setMultiply(inputRef.current.value * inputRefs.current.value)
  }
  if(count === "-") {
    setMultiply(inputRef.current.value - inputRefs.current.value)
  }
  if(count === "+") {
    setMultiply(Number(inputRef.current.value) + Number(inputRefs.current.value))
  }
  if(count === "/") {
    setMultiply(inputRef.current.value / inputRefs.current.value)
  }
  setPreviousValue([...previousValue, {
    value: multiply
  }])
}
const clearFun = () => {
 
  if(inputRefs.current.value !== "") {
inputRefs.current.value = inputRefs.current.value.slice(0, -1)
setCount("")

  }  
   else {
    inputRef.current.value = inputRef.current.value.slice(0, -1)
   }
}
const overFun = () => {
  setCount("")
  setMultiply("")
  inputRef.current.value = ""
  inputRefs.current.value = ""
}
const storedValuesFunction = () => {
  setStoredValues("flex")
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
                <div className="group-header-button">
                
                <button className="button-header"><Link to='/Home' className='link'>Home</Link></button>
                <button className="button-header"><Link to='/Exam' className='link'>Exam</Link></button>
              </div> 
            </div>
            
           
        <div className="main-calculator-container">
            <div className="input-calculator">
            <input type="text" value={results} ref={inputRef} className="input-2"></input>
        <input type="text" ref={countRef} value={count} className="input-3"></input>
        <input type="text" ref={inputRefs} className="input-4"></input>
       
       
            </div>
            <p className="results">{multiply}</p>
       
            
      
        <div className="button-section">
          <div className="button-container">
          <button className="calculator-button" onClick={handleMe7}>7</button>
        <button className="calculator-button" onClick={handleMe8}>8</button>
        <button className="calculator-button" onClick={handleMe9}>9</button>
        <button className="calculator-buttons" onClick={clearFun}>DEL</button>
          </div>
          <div className="button-container">
          <button className="calculator-button" onClick={handleMe4}>4</button>
        <button className="calculator-button" onClick={handleMe5}>5</button>
        <button className="calculator-button" onClick={handleMe6}>6</button>
        <button className="calculator-buttons" onClick={setFus}>+</button>
          </div>
        <div className="button-container">
        <button className="calculator-button" onClick={handleMe1}>1</button>
        <button className="calculator-button" onClick={handleMe2}>2</button>
        <button className="calculator-button" onClick={handleMe3}>3</button>
        <button className="calculator-buttons" onClick={setFunc}>-</button>
       
        </div>
       <div className="button-container">
       <button className="calculator-button" onClick={handleMe10}>.</button>
        <button className="calculator-button" onClick={handleMe0}>0</button>
        <button className="calculator-button" onClick={setFu}>*</button>
        <button className="calculator-buttons" onClick={setFunct}>/</button>
       </div>
     <div className="button-container">
      <button className="reset-button" onClick={overFun}>RESET</button>
        <button className="result-button" onClick={resFU}>=</button>
        <button className="stored-button" onClick={storedValuesFunction}>Stored values</button>
        </div>
       
        </div>
        
        
        </div>
       <div className="stored_values" style={{display: storedValues}}>
        <h2>Stored Values:</h2>
       {
              previousValue.map(values=> (
                <div className="storedValues" >
              
                  <p>{values.value}</p>
                </div>
              ))
            }
       </div>
       
       </div>
     );
}
 
export default Calculator;