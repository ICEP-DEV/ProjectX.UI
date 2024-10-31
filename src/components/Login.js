import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";



const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
 

  const handleRoleChange = (event) => {
    setIsAdmin(event.target.value === "admin");
  };

  
  return (
    <div>
    
    <div className= "containerss">

      <div className="forms-containerss">

          {/* Sign In Form */}
          <form action="#" className="sign-in-formss">
            
            <h2 className="titless">Hi, Welcome Back!</h2>

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
              />
            </div>

            {isAdmin && (
              <div className="input-fieldss">
                <i className="fas fa-envelope"></i>
                <input type="password" placeholder="Password" />
              </div>
            )}

            {!isAdmin && (
              <div className="input-fieldss">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
            )}

            <Link to="/resetpassword" className="forgot-password-link">
              Forgot Password?
            </Link>

            <Link to="/logged" className="anchorss transition-linkss">
              Login
            </Link>


             {/* New paragraph with "Sign up" link */}
             <p className="dont-have-account">
             Don't have an account?{" "}
             <Link to="/signup" className="signup-link">
             Sign up
             </Link>
            </p>

         {/*<p className="social-textss">Our social platforms</p>
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
            </div> */}


          </form>
          
      </div>
      
    </div>
    </div>
  );
};

export default Login;
