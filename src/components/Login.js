import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import AlumniSpaceLogo from '../images/aslogo.png';
import axios from "axios";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [studentNum, setStudentNum] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [role, setRole] = useState("alumni"); // Default role is "alumni"
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setIsAdmin(event.target.value === "admin");
    setAnimateIcon(true);
    setRole(event.target.value); // Store the selected role

    setTimeout(() => {
      setAnimateIcon(false); // Reset animation class after animation ends
    }, 300); // Match the duration of the CSS transition
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

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!studentNum || !password) {
      setLoginError("Both fields are required.");
      return;
    }

    setLoginError('');
    setLoginLoading(true);

    const loginDTO = {
      UserId: studentNum,
      Password: password,
      Role: role,
    };

    try {
      const response = await axios.post("http://localhost:5214/api/Alumnus/Login/Login", loginDTO, {
        withCredentials: true, // If you are handling sessions/cookies
      });

      // If login is successful, store session info
      if (response.status === 200) {
        const { UserId, UserName, UserRole } = response.data;
            // Show popup with the UserRole value
        // alert("UserRole returned from backend: " + role);
        sessionStorage.setItem('alumnusId', loginDTO.UserId);
        sessionStorage.setItem('UserName', UserName);
        sessionStorage.setItem('UserRole', role);
       
        console.log('Alumnus id :' , loginDTO.UserId);
          // const loggedIn = async() => {
          //   try{
          //     const response = await fetch(
          //       "http://localhost:5214/api/Alumnus/IsLoggedIn/IsLoggedIn",
          //       {
          //         method: "GET",
          //         credentials: "include", // Include cookies in the request
          //       }
          //     );
          //   }
          //   catch(error){
          //     console.error("Error fetching events:", error);
          //   }
          // };
      
          //   loggedIn(); // Fetch profile data only if logged in
      
     
        // Redirect based on the role
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/logged");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      if (error.response) {
        setLoginError(error.response.data); // Display error from server
      } else {
        setLoginError("Network or server error occurred.");
      }
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="login-body">
      {/* Container 1 */}
      <div className="login-container">
        {/* Container 2 */}

        <div className="login-right-container">
          {/* Container 4 */}
          <div className="login-forms-container">
            <form onSubmit={handleLogin} className="login-sign-in-form">
              <h2 className="login-title">Hi, Welcome Back!</h2>
              <div className="login-radio-group">
                <label>
                  <input
                    type="radio"
                    value="alumni"
                    name="role"
                    onChange={handleRoleChange}
                    checked={role === "alumni"}
                  />
                  Alumni
                </label>
                <label>
                  <input
                    type="radio"
                    value="admin"
                    name="role"
                    onChange={handleRoleChange}
                    checked={role === "admin"}
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
                  value={studentNum}
                  onChange={(e) => setStudentNum(e.target.value)}
                  required
                />
              </div>
              <div className="login-input-field">
                <i className="fas fa-lock" id="stu-user"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Link to="/resetpassword" className="login-forgot-password-link">
                Forgot Password?
              </Link>
              <button type="submit" className="login-anchor transition-link" disabled={loginLoading}>
                {loginLoading ? "Logging in..." : "Login"}
              </button>
              {loginError && <p className="login-error">{loginError}</p>}
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