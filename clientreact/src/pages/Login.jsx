import React, { useState } from "react";
import "../stylesheet/login.css";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      
      <div className="register-container">
        <div className="form-container">
          <div className="header">
            <img
              src="https://adibots.com/assets/img/logos/adibots-logo.png"
              alt="WhatsBot Logo"
              className="logo"
            />
            <h1>Register</h1>
            <p>Create New WhatsBot Account</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email as Username</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address or username"
            />
            
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="......"
            />
            <button type="submit" className="register-btn">
              Login
            </button>
          </form>
          <p className="sign-in">
            Don't have an account? <a href="/">Sign in instead</a>
          </p>
        </div>
        <div className="illustration">
          <img
            src="https://whatsbot.tech/images/slides/campaign_launch_monochromatic.png"
            alt="WhatsBot"
          />
          <p>Grow Your Business with AdiBots.</p>
        </div>
      </div>

    </>
  )
}

export default Login