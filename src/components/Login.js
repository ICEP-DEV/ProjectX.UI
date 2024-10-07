import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// import { registerAlumnus, loginAdmin, loginAlumnus } from '../services/apiService'; // Adjust the import path as necessary
import axios from "axios";

const Login = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Sign Up Form States
  const [studentNum, setStudentNum] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState('');
  const [signUpLoading, setSignUpLoading] = useState(false);

  // Sign In Form States
  // State for managing logged-in status
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userDetails, setUserDetails] = useState(null);
// States for form inputs

  const [loginStudentNum, setLoginStudentNum] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const navigate = useNavigate();

  // Event Handlers
  const handleSignUpClick = () => {
    setSignUpMode(true);
    // Reset Sign In states
    setLoginError('');
    setLoginStudentNum('');
    setLoginPassword('');
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
    // Reset Sign Up states
    setSignUpError('');
    setSignUpSuccess('');
    setStudentNum('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleRoleChange = (event) => {
    setIsAdmin(event.target.value === "admin");
  };

  // Sign Up Submission Handler
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!studentNum || !email || !password || !confirmPassword) {
      setSignUpError('All fields are required.');
      setSignUpSuccess('');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSignUpError('Please enter a valid email address.');
      setSignUpSuccess('');
      return;
    }

    if (password !== confirmPassword) {
      setSignUpError('Passwords do not match.');
      setSignUpSuccess('');
      return;
    }

    if (password.length < 6) {
      setSignUpError('Password must be at least 6 characters long.');
      setSignUpSuccess('');
      return;
    }

    setSignUpError('');
    setSignUpSuccess('');
    setSignUpLoading(true);

    const data = {
      StudentNum: studentNum,
      Email: email,
      Password: password
    };

    try {
      console.log(data);
      
      //const response = await registerAlumnus(data);
      const response = await axios.post(`http://localhost:5214/api/Alumnus/Registration/Registration`, data)
      setSignUpSuccess('Registration successful! Please log in.');
      // Optionally, switch to Sign In mode
      setSignUpMode(false);
      // Clear Sign Up form fields
      setStudentNum('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Registration Error:', error.response || error.message || error);

      if (error.response && error.response.data && error.response.data.message) {
        setSignUpError(error.response.data);
      } else {
        setSignUpError(error.response.data);
      }
    } finally {
      setSignUpLoading(false);
    }
  };

  // Sign In Submission Handler
  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!loginStudentNum || !loginPassword) {
      setLoginError('All fields are required.');
      return;
    }

    setLoginError('');
    setLoginLoading(true);

    const loginData = {
      UserId: loginStudentNum,
      Password: loginPassword,
      Role: isAdmin ? 'admin' : 'alumni'
    };

    // const loginUrl = isAdmin ? loginAdmin : loginAlumnus;

    try {
      console.log(loginData);
     const response = await axios.post(`http://localhost:5214/api/Alumnus/Login/Login`, loginData);
      console.log('Login Response:', response);

        // Display user details in the console
      console.log('User Details:', response.data.user);

      // Update the logged-in status
      setIsLoggedIn(true);
      setUserDetails(response.data);

      // Redirect to dashboard
      navigate('/logged'); // Ensure that '/dashboard' is a valid route
    } catch (error) {
      console.error('Login Error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError(error.response.data);
      }
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className={`containerss ${signUpMode ? "sign-up-modess" : ""}`}>
      {/* Loading Spinner */}
      {(signUpLoading || loginLoading) && (
        <div id="loadings-spinnerss" className="spinnerss">
          {/* Spinner implementation, e.g., CSS animation */}
          <div className="spinner"></div>
        </div>
      )}

      <div className="forms-containerss">
        <div className="signinss-signupss">
          {/* Sign In Form */}
          {!signUpMode && (
            <form onSubmit={handleSignInSubmit} className="sign-in-formss">
              <h2 className="titless">Sign in</h2>

              {loginError && <p className="error-message">{loginError}</p>}

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
                  value={loginStudentNum}
                  onChange={(e) => setLoginStudentNum(e.target.value)}
                  required
                />
              </div>

              {/* {isAdmin && (
                <div className="input-fieldss">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email} // Ensure email state is separate for login if necessary
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              )} */}

              <div className="input-fieldss">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="anchorss transition-linkss" disabled={loginLoading}>
                {loginLoading ? 'Logging In...' : 'Login'}
              </button>

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
          )}

          {/* Sign Up Form */}
          {signUpMode && (
            <form onSubmit={handleSignUpSubmit} className="sign-up-formss">
              <h2 className="titless">Sign up</h2>

              {signUpError && <p className="error-message">{signUpError}</p>}
              {signUpSuccess && <p className="success-message">{signUpSuccess}</p>}

              <div className="input-fieldss">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Student number"
                  value={studentNum}
                  onChange={(e) => setStudentNum(e.target.value)}
                  required
                />
              </div>
              <div className="input-fieldss">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-fieldss">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-fieldss">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btnss" disabled={signUpLoading}>
                {signUpLoading ? 'Signing Up...' : 'Sign up'}
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
          )}
        </div>
      </div>

      {/* Panels */}
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
