import React from 'react'
import "../stylesheet/headerTwo.css"

const HeaderTwo = () => {
  return (
    <>
      <main className="hero-section">
      <section className="hero-content">
        <div className="left-content">
          <h2>A chatbot for?</h2>
          <p>
            Chatbots are a new way to engage with your audience and drive conversations within Whatsapp Messenger.
          </p>
        </div>
        <div className="center-content">
          <img
            src="https://whatsbot.tech/images/recharge_test_make.png"
            alt="WhatsBot Demo"
          />
        </div>
        <div className="right-content">
          <h2>Online Recharge Service</h2>
          <p>
            Your retailer do not login. Just message on whatsbot and recharge done.
          </p>
        </div>
      </section>
    </main>
    </>
  )
}

export default HeaderTwo