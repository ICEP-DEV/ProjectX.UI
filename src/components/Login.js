import React, { useState } from 'react';
import "./Login.css"; // Make sure to update the path if necessary
import { Link } from 'react-router-dom';

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [userType, setUserType] = useState('alumni'); // Default to alumni

  const handleSignUpClick = () => {
    setIsSignUpMode(true); // This toggles the animation class
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value); // Update the user type based on the selected radio button
  };

  return (
    <div className={`containers ${isSignUpMode ? 'sign-up-modes' : ''}`}>
      <div className="forms-containers">
        <div className="signins-signups">
          {/* Sign In Form */}
          <form action="#" className="sign-in-forms">
            <h2 className="titles">Login as an: </h2>
            <div className="radio-buttons">
              <label>
                <input 
                  type="radio" 
                  name="user-type" 
                  value="admin" 
                  checked={userType === 'admin'} 
                  onChange={handleUserTypeChange} 
                />
                Admin
              </label>
              <label>
                <input 
                  type="radio" 
                  name="user-type" 
                  value="alumni" 
                  checked={userType === 'alumni'} 
                  onChange={handleUserTypeChange} 
                />
                Alumni
              </label>
            </div>
            <div className="input-fields">
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                placeholder={userType === 'admin' ? 'Staff number' : 'Student number'} // Update placeholder based on userType
              />
            </div>
            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Link to="/landing_page/index.html" className="anchors transition-links">
              LOGIN
            </Link>

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

export default Login;
