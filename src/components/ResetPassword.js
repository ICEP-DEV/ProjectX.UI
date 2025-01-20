import React, { useState,useEffect  } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css"; // Import the same CSS file as the Login component
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

    useEffect(() => {
      // Add 'signup-page' class to body when this component mounts
      document.body.classList.add('rp-login-page');

        // Add animation class after a short delay
      const timer = setTimeout(() => {
        document.querySelector('.rp-login-body')?.classList.add('animate-in');
      }, 0);
      
      // Clean up when leaving the signup page
      return () => {
        document.body.classList.remove('rp-login-page');
      };
    }, []);

  return (
    <div className="rp-login-body">
      {/* Container 1 */}
      <div className="rp-login-container">
        {/* Container 2 */}          
        <div className="rp-login-right-container">
          {/* Container 4 */}
          <div className="rp-login-forms-container">
          
          <form onSubmit={handleReset} className="signup-form">
            <h2 className="rp-login-title">Change Password</h2>
            <p className="rp-login-paragraph-right">Please fill-in the details below:</p>
  
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
  
            <div className="rp-login-input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                className="rp-form-control"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div className="rp-login-input-field">
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
  
            <div className="rp-login-input-field">
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

                          <Link to="/login" className="login-forgot-password-link">
                            Back To Login
                          </Link>            
            
              <button                
                type="submit"
                disabled={signUpLoading}
              >
                {signUpLoading ? 'Loading...' : 'Change Password'}
              </button>
            
          </form>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default PasswordReset;
