import React, { useState } from "react";
import "./Login.css";
function Login() {
    //const [loginBtn showLoginbtn] = useState("")
    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    //   };
  return (
    <>
      <div className="loginScreen">
        <div className="container" id="container">
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icons">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icons">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icons">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icons">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email to registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icons">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icons">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icons">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icons">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email/password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your Personal details to use all of site features</p>
                <button className="hidden" id="login">
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your Personal details to use all of site
                  features
                </p>
                <button className="hidden" id="register">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
