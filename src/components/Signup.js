import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  // Function to handle the sign up button click
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Pop a window.prompt for the ITS pin
    const itsPin = window.prompt("Enter your ITS Pin:");
    
    if (itsPin) {
      // If a pin is entered, navigate to the next page
      navigate("/logged"); // Navigate to the next page after entering the pin
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
        <form action="#" className="sign-up-formss">
          <h2 className="titless">Sign up</h2>
          <div className="input-fieldss">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Student number" />
          </div>
          <div className="input-fieldss">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-fieldss">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-fieldss">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Confirm Password" />
          </div>

          {/* Change the onClick handler for the sign-up button */}
          <button onClick={handleSignUp} className="anchorss transition-linkss">
            Sign Up
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
