import React from 'react'
import "../stylesheet/headerThree.css"
import { GiFlatPlatform } from "react-icons/gi";
import { FaHandHolding } from "react-icons/fa6";

const HeaderThree = () => {
  return (
    <>
        <section className="software-service">
      <div className="content">
        <h2>A Software With A Service</h2>
        <p>A chatbot that can’t evolve with your needs doesn’t make sense. We have solutions to your communication challenges, and you choose the options:</p>
        <div className="cards">
          <div className="card">
            <div className="icon">
            <GiFlatPlatform size={50} color='#16329c' />
            </div>
            <h3>Platform</h3>
            <p>Easily build chatbots on your own that will grow with your ambitions. We try our best to make it as simple as possible to build, manage, optimize and track your bot performances.</p>
            <a href="#discover-platform">Discover our Platform</a>
          </div>
          <div className="card">
            <div className="icon">
            <FaHandHolding size={50} color='#16329c'/>
            </div>
            <h3>Services</h3>
            <p>Building chatbots can be challenging. We design them from conception to launch and share with you the best ways to get the most out of them.</p>
            <a href="#discover-services">Discover our Platform</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeaderThree