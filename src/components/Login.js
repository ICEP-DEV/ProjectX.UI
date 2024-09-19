import React, { useState } from 'react';
import "./Login.css"; // Make sure to update the path if necessary
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

 
  return (
    <div className={`containers ${isSignUpMode ? 'sign-up-modes' : ''}`}>

     {/*<div className="header-infos">
        <FaGraduationCap className="graduation-icons" />
        <div className="header-texts">
          <span className="alumni-texts">Alumni</span>
          <span className="space-texts">space</span>
        </div>
      </div> */}

      <div className="forms-containers">
        <div className="signins-signups">
          {/* Sign In Form */}
          <form action="#" className="sign-in-forms">
            <h2 className="titles">Login as an: </h2>
            <div className="radio-buttons">
              <label>
                <input type="radio" name="user-type" value="admin" />
                Admin
              </label>
              <label>
                <input type="radio" name="user-type" value="alumni" />
                Alumni
              </label>
            </div>
            <div className="input-fields">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Student number" />
            </div>
            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            

            <Link to="/forgot-password" className="forgot-password-links" style={{
              display: 'block',
              marginTop: '10px',
              fontSize: '0.75rem',
              color: '#000000',
              textDecoration: 'underline'
             }}>
                Forgot Password?
            </Link>

            <p className="social-texts">Our social platforms</p>
            <div className="social-medias">
              <div className="social-icons" onClick={() => window.open('https://facebook.com', '_blank')}>
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="social-icons" onClick={() => window.open('https://twitter.com', '_blank')}>
              <i className="fab fa-twitter"></i>
            </div>
           <div className="social-icons" onClick={() => window.open('https://google.com', '_blank')}>
          <i className="fab fa-google"></i>
            </div>
            <div className="social-icons" onClick={() => window.open('https://linkedin.com', '_blank')}>
           <i className="fab fa-linkedin-in"></i>
           </div>
         </div>
        </form>
          {/* Sign Up Form */}
          
        </div>
      </div>

      {/* Panels for Sign In and Sign Up */}
      <div className="panels-containers">
        <div className="panels left-panels">
          <div className="contents">
            <h3>New here ?</h3>
        <button
              className="btns transparents"
              id="sign-up-btns"
              onClick={() => window.location.href = '/signup'}>
              Sign up
        </button>

          </div>
          
        </div> 
      </div>
      
    </div>
  );
}

export default Login;
