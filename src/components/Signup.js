import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
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

  return (
    <div className="containerss">
      <div id="loadings-spinnerss" className="spinnerss" style={{ display: "none" }}></div>

      <div className="forms-containerss">
        {/* Sign Up Form */}
        <form onSubmit={handleSignUp} className="sign-up-formss">
  <h2 className="titless">Sign up</h2>
            {signUpError && (
                <div className="alert alert-danger" role="alert">
                  {signUpError}
                </div>
              )}
              {signUpSuccess && (
                <div className="alert alert-success" role="alert">
                  {signUpSuccess}
                </div>
              )}
  <div className="input-fieldss">
    <i className="fas fa-user"></i>
    <input
      type="text"
      placeholder="Student number"
      value={studentNum}
      onChange={(e) => setStudentNum(e.target.value)}
    />
  </div>
  <div className="input-fieldss">
    <i className="fas fa-envelope"></i>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="input-fieldss">
    <i className="fas fa-lock"></i>
    <input
      type="password"
      placeholder="Password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div className="input-fieldss">
    <i className="fas fa-lock"></i>
    <input 
      type="password" 
      placeholder="Confirm Password" 
      value={confirmPassword} 
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
  </div>

  {/* Submit the form */}
  <button type="submit" className="anchorss transition-linkss"  disabled={signUpLoading}>
    {signUpLoading ? 'Loading...' : 'Sign Up'}
  </button>


          {/* New paragraph with "Sign up" link */}
          <p className="dont-have-account">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
