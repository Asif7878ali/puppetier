import React, { useState } from "react";
import "../stylesheet/sign.css";

const Signin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    referral: "",
    captcha: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <label htmlFor="email">Email as Username</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address or username"
            />

            <label htmlFor="mobile">Mobile No</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your Mobile No."
            />

            <label htmlFor="referral">Referral Code (Optional)</label>
            <input
              type="text"
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              placeholder="Optional"
            />

            <label htmlFor="captcha">Captcha</label>
            <div className="captcha-container">
              <div className="captcha">X4YZC</div>
              <button type="button" className="refresh-captcha">
                &#x21bb;
              </button>
            </div>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              placeholder="Enter Captcha"
            />

            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
          <p className="sign-in">
            Already have an account? <a href="/">Sign in instead</a>
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
  );
};

export default Signin;
