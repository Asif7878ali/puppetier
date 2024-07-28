import React from 'react';
import "../stylesheet/headerOne.css";

const HeaderOne = () => {
  return (
    <main>
      <section className="hero">
        <div className="content">
          <span className="new-badge">NEW</span>
          <h2>Whatsapp Chatbots</h2>
          <h1>Chatbot solution for Whatsapp Messenger</h1>
          <p>Whatsbot provides a platform to easily build chatbots and services for brands that want to stand out.</p>
          <div className="cta-buttons">
            <span  className="btn-try">Try for free</span>
            <span className="btn-contact">Contact our team</span>
          </div>
          <p className="login-text">Already using Whatsbot? <span >Login</span></p>
        </div>
        <div className="image">
          <img src="https://whatsbot.tech/images/main_banner.svg" alt="Illustration" />
        </div>
      </section>
    </main>
  );
}

export default HeaderOne;
