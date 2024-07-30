import React from 'react'
import "../stylesheet/navbar.css"

const Navbar = () => {
  return (
    <>
     <header>
        <nav>
            <div class="logo">
                <img src="https://adibots.com/assets/img/logos/adibots-logo.png" alt="WhatsBot Logo"/>
            </div>
            <div class="nav-links">
                <span>Home</span>
                <span>Contact us</span>
                <span class="btn-signup">Sign up</span>
                <span class="btn-login">Login</span>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar