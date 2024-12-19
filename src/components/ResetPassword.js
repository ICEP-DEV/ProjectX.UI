import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Import the same CSS file as the Login component
import AlumniSpaceLogo from '../images/aslogo.png';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [itsPin, setItsPin] = useState();
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState('');
  const [signUpLoading, setSignUpLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
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

    const itsPin = parseInt(window.prompt("Enter your ITS Pin:"), 10);
    if (itsPin) {
      const data = {
        Email: email,
        Password: password,
        ItsPin: itsPin,
      };
      try {
        console.log(data);
        const response = await axios.put(`http://localhost:5214/api/Alumnus/ResetPassword/ResetPassword`, data);
        alert("Password reset was successful!");

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate("/login");
      } catch (error) {
        console.error('Reset Error:', error);

        if (error.response) {
          const serverMessage = error.response.data;
          setSignUpError(serverMessage);
        } else {
          setSignUpError(error.message || 'Unknown error occurred.');
        }
      } finally {
        setSignUpLoading(false);
      }
    }
  };

  return (
    <div className="login-body">
      {/* Container 1 */}
      <div className="login-container">
        {/* Container 2 */}        
        <div className="login-left-container">
          {/* Container 3 */}
          <a href="/" className="login-logo-link">
            <img src={AlumniSpaceLogo} alt="Alumni Space Logo" className="login-logo" />
          </a>
          <div className="login-text-content">
            <h1 className="login-heading">Welcome to Alumni Space</h1>
            <p className="login-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>

        <div className="login-right-container">
          {/* Container 4 */}
          <div className="login-forms-container">
          
          <form onSubmit={handleReset} className="rp-sign-in-formss">
            <h2 className="login-title">Change Password</h2>
            <p className="login-paragraph">Enter the details below</p>

            {signUpError && (
              <div className="rp-alert rp-alert-danger" role="alert">
                {signUpError}
              </div>
            )}
            {signUpSuccess && (
              <div className="rp-alert rp-alert-success" role="alert">
                {signUpSuccess}
              </div>
            )}

            <div className="rp-input-fieldss">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                className="login-input-field"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className="rp-form-control"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="rp-input-fieldss">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className="rp-form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="rp-d-grid">
              <button
                className="rp-rounded-buttonn" // Change class name to 'rp-rounded-button'
                type="submit"
                disabled={signUpLoading}
              >
                {signUpLoading ? 'Loading...' : 'Change Password'}
              </button>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default PasswordReset;
