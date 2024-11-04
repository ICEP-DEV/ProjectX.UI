import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PasswordReset = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [itsPin, setItsPin] = useState();
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState('');
  const [signUpLoading, setSignUpLoading] = useState(false);

  const handleReset = async(e) => {
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
        const response = await axios.post(`http://localhost:5214/api/Alumnus/ResetPassword/ResetPassword`, data);
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
    <div className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <div className="row">
                <div className="col-12">
                <Link to="/" className="anchorss transition-linkss">
                  <i className="bi bi-arrow-left"></i> {/* Use the desired icon here */}
                </Link>
                  <div className="mb-5">
                    <h2 className="h3"> Change password</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter the details below
                    </h3>
                  </div>
                </div>
              </div>

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

              <form onSubmit={handleReset}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn btn-lg"
                        type="submit"
                        style={{
                          background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)',
                          color: '#fff',
                          border: 'none',
                        }}
                        disabled={signUpLoading}
                      >
                        {signUpLoading ? 'Loading...' : 'Change Password'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
