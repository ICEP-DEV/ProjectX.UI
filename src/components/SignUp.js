import React, { useState } from 'react';
import "./Login.css"; // Make sure to update the path if necessary
//import { FaGraduationCap } from 'react-icons/fa';
import axios from 'axios';


function SignUp(){
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true); // This toggles the animation class

  }

  const [ studentNum, setStudentNum] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const handleSave =(e) => 
  {
      e.preventDefault();
      console.log(studentNum, email, password);
      const url = 'https://localhost:44391/api/AlumnusRegistration/AlumnusRegistration';

      const data = 
      {
        StudentNum : studentNum,
        Email : email,
        Password : password
      }

      axios.post(url,data)
      .then((result) => {
        const dt = result.data;
      })
      .catch((error)=>{
          console.log(error);
      })

      
  }
 
  return (
    <div className={`containers ${isSignUpMode ? 'sign-up-modes' : ''}`}>

     

      <div className="forms-containers">
        <div className="signins-signups">
          {/* Sign In Form */}
          <form action="#" className="sign-in-forms">
            <h2 className="titles">Sign up </h2>
            
            <div className="input-fields">
              <i className="fas fa-user-graduate"></i>
              <input 
                  type="text" 
                  placeholder="Student number" 
                  onChange={(e) => setStudentNum(e.target.value)}
              />
            </div>
            <div className="input-fields">
              <i className="fas fa-envelope"></i>
              <input
                  type="text" 
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input
                 type="password" 
                 placeholder="Password"
                 onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder=" Confirm Password" />
            </div>
            <button 
                 type="button"
                 className="anchors transition-links"
                 onClick={(e) => handleSave(e)} 
            >
                SIGN UP
            </button>
          
            <p className="social-texts">Our social platforms</p>
            <div className="social-medias">
              <div className="social-icons" onClick={() => window.open('https://www.facebook.com/TUTCommunications', '_blank')}>
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="social-icons" onClick={() => window.open('https://x.com/official_tut', '_blank')}>
                <i className="fab fa-twitter"></i>
              </div>
              <div className="social-icons" onClick={() => window.open('https://www.tut.ac.za', '_blank')}>
                <i className="fab fa-google"></i>
              </div>
              <div className="social-icons" onClick={() => window.open('https://www.linkedin.com/school/tshwane-university-of-technology/', '_blank')}>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}


export default SignUp;
