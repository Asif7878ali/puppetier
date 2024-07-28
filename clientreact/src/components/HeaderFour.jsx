import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import "../stylesheet/headerFour.css"

const HeaderFour = () => {
  return (
    <>
       <section className="why-whatsapp">
      <div className="content">
        <h2>Why Whatsapp Messenger?</h2>
        <p>
          2 billion people interacted with brands through Whatsapp Messenger last year.
          Chatbots are a new way to augment your communication channel, thanks to a variety
          of formats and content automation. Be there for your audience.
        </p>
        <div className="whatsapp-icon">
          <FaWhatsapp size={50} />
        </div>
      </div>
    </section>
    </>
  )
}

export default HeaderFour