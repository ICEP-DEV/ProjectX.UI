import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import AlumniSpaceLogo from '../images/aslogo.png';

const Signup = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  // Sign Up Form States
  const [studentNum, setStudentNum] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [itsPin, setItsPin] = useState();
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState('');
  const [signUpLoading, setSignUpLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  // Function to handle the sign up button click
  const handleSignUp = async(e) => {
    e.preventDefault(); // Prevent default link behavior

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
      return signUpSuccess;
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
    // Pop a window.prompt for the ITS pin
    const itsPin = parseInt(window.prompt("Enter your ITS Pin:"), 10);
    if (itsPin) {
      // If a pin is entered, navigate to the next page
      const data = {
        StudentNum: studentNum,
        Email: email,
        Password: password,
        ItsPin: itsPin,
      };
      try {
        console.log(data);
        const response = await axios.post("http://localhost:5214/api/Alumnus/Registration/Registration", data, {
          withCredentials: true,
        });
        
        setSignUpSuccess('Registration successful! Please log in.');
        setSignUpMode(false);

        // Clear the form fields
        setStudentNum('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        navigate("/ConfirmProfile"); // Navigate to the next page

      } catch (error) {
        console.error('Registration Error:', error);

        if (error.response) {
          // If the error has a response, check for the data and message
          const serverMessage = error.response.data;
          setSignUpError(serverMessage);
        } else if (error.message) {
          // Handle other network or request errors
          setSignUpError(error.message);
        } else {
          setSignUpError('Unknown error occurred.');
        }
      } finally {
        setSignUpLoading(false);
      }
       // Navigate to the next page after entering the pin
    } else {
      // Optionally, handle cases where the pin is not entered
      alert("Please enter your ITS Pin to proceed.");
    }
  };

  useEffect(() => {
    // Add 'signup-page' class to body when this component mounts
    document.body.classList.add('signup-page');
    
    // Clean up when leaving the signup page
    return () => {
      document.body.classList.remove('signup-page');
    };
  }, []);

  return (
    <div className="signup-container1">
      <div className="signup-container2">
        {/* Left Section */}
        <div className="signup-container3">
        <a href="/" className="signup-logo-link">
            <img src={AlumniSpaceLogo} alt="Alumni Space Logo" className="signup-logo" />
          </a>
          <div className="signup-content">
            <h1>Welcome to Alumni Space</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="signup-container4">
          <form onSubmit={handleSignUp} className="signup-form">
            <h2>Sign Up</h2>
            {signUpError && <div className="signup-alert-danger">{signUpError}</div>}
            {signUpSuccess && <div className="signup-alert-success">{signUpSuccess}</div>}
            <input
              type="text"
              placeholder="Student number"
              value={studentNum}
              onChange={(e) => setStudentNum(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" disabled={signUpLoading}>
              {signUpLoading ? 'Loading...' : 'Sign Up'}
            </button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
