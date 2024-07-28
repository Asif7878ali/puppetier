import React from 'react'
import { FaHeart, FaPlay, FaBullseye, FaBell, FaRocket, FaShoppingCart } from 'react-icons/fa';
import "../stylesheet/whatsSolution.css"

const WhatSolution = () => {
  return (
    <>
         <section className="solutions">
      <div className="content">
        <h2>We have Whatsbot Solutions for:</h2>
        <div className="icons">
          <div className="icon-card">
            <FaHeart className="icon" />
            <p>Brands</p>
          </div>
          <div className="icon-card">
            <FaPlay className="icon" />
            <p>Media</p>
          </div>
          <div className="icon-card">
            <FaBullseye className="icon" />
            <p>Agencies</p>
          </div>
          <div className="icon-card">
            <FaBell className="icon" />
            <p>Influencers</p>
          </div>
          <div className="icon-card">
            <FaRocket className="icon" />
            <p>Startups</p>
          </div>
          <div className="icon-card">
            <FaShoppingCart className="icon" />
            <p>E-commerce</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhatSolution