import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="logo">CodeVerse</div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
