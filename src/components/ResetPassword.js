import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Import the same CSS file as the Login component

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
    <div>
      <div className="containerss">


        <div className="forms-containerss">
          <form onSubmit={handleReset} className="sign-in-formss">
            <h2 className="titless">Change Password</h2>
            <h3 className="fs-6 fw-normal text-secondary m-0">Enter the details below</h3>

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
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-fieldss">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-fieldss">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button
                className="rounded-buttonn" // Change class name to 'rounded-button'
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
  );
};

export default PasswordReset;
