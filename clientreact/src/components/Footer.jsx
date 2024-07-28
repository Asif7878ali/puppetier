import React from 'react'
import "../stylesheet/footer.css"

const Footer = () => {
  return (
    <>
     <footer className="get-started">
        <div className="heading">
        <h3>Ready to get started?</h3>
        <p>Contact our team or try our platform.</p>
        </div>
       
        <div className="buttons">
          <button className="try-free">Try for free</button>
          <button className="contact-team">Contact our team</button>
        </div>
      </footer>
      <div className="footer">
        <img src="https://adibots.com/assets/img/logos/adibots-logo.png" alt="Whatsbot Logo" className="footer-logo" />
      </div>
   
    </>
  )
}

export default Footer