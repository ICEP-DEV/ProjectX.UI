import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AlumniSpaceLogo from '../images/aslogo.png';
import confetti from "canvas-confetti";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);

  const handleRoleChange = (event) => {
    setIsAdmin(event.target.value === "admin");
    setAnimateIcon(true);
    launchConfetti();

    setTimeout(() => {
      setAnimateIcon(false); // Reset animation class after animation ends
    }, 300); // Match the duration of the CSS transition
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }, // Adjust the position of confetti
    });
  };
  
  useEffect(() => {
    // Add 'signup-page' class to body when this component mounts
    document.body.classList.add("login-page");

    // Add animation class after a short delay
    const timer = setTimeout(() => {
      document.querySelector('.login-body')?.classList.add('animate-in');
    }, 0);

    // Clean up when leaving the signup page
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

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
            <form action="#" className="login-sign-in-form">
              <h2 className="login-title">Hi, Welcome Back!</h2>
              <div className="login-radio-group">
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
              <div className="login-input-field">
                <i
                  id="stu-user" className={`fas ${
                    isAdmin ? "fa-user" : "fa-user-graduate"
                  } ${animateIcon ? "animate2" : ""}`}
                ></i>
                <input
                  type="text"
                  placeholder={isAdmin ? "Staff number" : "Student number"}
                />
              </div>
              <div className="login-input-field">
                <i className="fas fa-lock" id="stu-user"></i>
                <input type="password" placeholder="Password" />
              </div>
              <Link to="/resetpassword" className="login-forgot-password-link">
                Forgot Password?
              </Link>
              <Link
                to={isAdmin ? "/admin" : "/logged"}
                className="login-anchor transition-link"
              >
                Login
              </Link>
              <p className="login-dont-have-account">
                Don't have an account?{" "}
                <Link to="/signup" className="login-signup-link">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
