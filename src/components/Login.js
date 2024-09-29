import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from 'axios';

const Login = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  const handleRoleChange = (event) => {
    setIsAdmin(event.target.value === "admin");
  };

  const [ studentNum, setStudentNum] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ cpassword, setCPassword] = useState('')

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

      
    // Make the Axios POST request
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json', // Set content type
      },
    })
    .then((result) => {
      console.log("API Response:", result); // Check the API response
      // Optionally clear the form fields if the request is successful
      clear();
      const dt = result.data;
      if (dt && dt.statusMessage) {
        alert(dt.statusMessage); // Show success message
      } else {
        alert("No status message returned.");
      }
    })
    .catch((error) => {
      console.log("API Error:", error); // Log the error
      alert("An error occurred.");
    });
  };
  

const clear = () => 
{
  setStudentNum('');
  setEmail('');
  setPassword('');
  setCPassword('');
}

  return (
    <div className={`containerss ${signUpMode ? "sign-up-modess" : ""}`}>
      {/* Conditionally render the graduation icon and Alumni Space text only when not in sign-up mode */}
      {!signUpMode && (
        <div className="graduation-icon">
          <i className="fas fa-graduation-cap"></i>
          {/* Add Alumni Space below the icon */}
          <span className="heading-colorss">
            Alumni<sup className="aspacess"> Space</sup>
          </span>
        </div>
      )}

      <div id="loadings-spinnerss" className="spinnerss" style={{ display: "none" }}></div>

      <div className="forms-containerss">
        <div className="signinss-signupss">
          {/* Sign In Form */}
          <form action="#" className="sign-in-formss">
            <h2 className="titless">Sign in</h2>

            {/* Radio buttons for Alumni and Admin */}
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="alumni"
                  name="role"
                  onChange={handleRoleChange}
                  checked={!isAdmin}
                />
                Alumni
              </label>
              <label>
                <input
                  type="radio"
                  value="admin"
                  name="role"
                  onChange={handleRoleChange}
                  checked={isAdmin}
                />
                Admin
              </label>
            </div>

            {/* Conditionally render fields based on the role */}
            <div className="input-fieldss">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder={isAdmin ? "Staff number" : "Student number"}
                required
              />
            </div>

            {isAdmin && (
              <div className="input-fieldss">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required />
              </div>
            )}

            {!isAdmin && (
              <div className="input-fieldss">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required/>
                
              </div>
            )}

            <Link to="/logged" className="anchorss transition-linkss">
              Login
            </Link>

            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>

            <p className="social-textss">Our social platforms</p>
            <div className="social-mediass">
              <div className="social-iconss" onClick={() => window.open('https://www.facebook.com/TUTCommunications', '_blank')}>
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="social-iconss" onClick={() => window.open('https://x.com/official_tut', '_blank')}>
                <i className="fab fa-twitter"></i>
              </div>
              <div className="social-iconss" onClick={() => window.open('https://www.tut.ac.za', '_blank')}>
                <i className="fab fa-google"></i>
              </div>
              <div className="social-iconss" onClick={() => window.open('https://www.linkedin.com/school/tshwane-university-of-technology/', '_blank')}>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </form>

          {/* Sign Up Form */}
          <form action="#" className="sign-up-formss">
            <h2 className="titless">Sign up</h2>
            <div className="input-fieldss">
                <i className="fas fa-user-graduate"></i>
              <input
                 type="text"
                 placeholder="Student number" 
                 onChange={(e) => setStudentNum(e.target.value)}
                 value={studentNum}
                 required
                 />
            </div>
            <div className="input-fieldss">
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />
            </div>
            <div className="input-fieldss">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />
            </div>
            <div className="input-fieldss">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"  
                onChange={(e) => setCPassword(e.target.value)}              
                value={cpassword}
                required
                /> 
            </div>
            <button
               type="button"
               className="btnss"                
               onClick={(e) => handleSave(e)} 
               >
                SIGN UP
            </button>   

            <p className="social-textss">Our social platforms</p>
            <div className="social-mediass">
              <div className="social-iconss" onClick={() => window.open('https://www.facebook.com/TUTCommunications', '_blank')}>
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="social-iconss" onClick={() => window.open('https://x.com/official_tut', '_blank')}>
                <i className="fab fa-twitter"></i>
              </div>
              <div className="social-iconss" onClick={() => window.open('https://www.tut.ac.za', '_blank')}>
                <i className="fab fa-google"></i>
              </div>
              <div className="social-iconss" onClick={() => window.open('https://www.linkedin.com/school/tshwane-university-of-technology/', '_blank')}>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="panelss-containerss">
        <div className="panelss left-panelss">
          <div className="contentss">
            <h3>New here?</h3>
            <button className="btnss transparentss" id="sign-up-btnss" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panelss right-panelss">
          <div className="contentss">
            <h3>One of us?</h3>
            <button className="btnss transparentss" id="sign-in-btnss" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
