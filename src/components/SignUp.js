import React, { useState } from 'react';
import "./Login.css"; // Make sure to update the path if necessary
//import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SignUp() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true); // This toggles the animation class
  };
 
  return (
    <div className={`containers ${isSignUpMode ? 'sign-up-modes' : ''}`}>

     

      <div className="forms-containers">
        <div className="signins-signups">
          {/* Sign In Form */}
          <form action="#" className="sign-in-forms">
            <h2 className="titles">Sign up </h2>
            
            <div className="input-fields">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Student number" />
            </div>
            <div className="input-fields">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder=" Confirm Password" />
            </div>
            <Link to="/landing_page/index.html" className="anchors transition-links">
                SIGN UP
            </Link>
          
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

      {/* Panels for and Sign Up */}
      
      {/*<div class="panels right-panels">
          <div class="contents">
            <h3>One of us ?</h3>
            <button class="btns transparents" id="sign-in-btns">
              Sign in
            </button>
          </div>
          
        </div>*/}


      {/*<div className="panels-containers">
        <div className="panels left-panels">
          
        <div className="header-infos">
        <FaGraduationCap className="graduation-icons" />
        <div className="header-texts">
          <span className="alumni-texts">Alumni</span>
          <span className="space-texts">space</span>
        </div>
      </div>

        </div> 
      </div>*/}

      

    </div>
  );
}

export default SignUp;
