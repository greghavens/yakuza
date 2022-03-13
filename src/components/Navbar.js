import React from 'react'
import { Link } from 'gatsby'
import { useState } from "react"



export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
        <nav>
          <Link to="/"><img src="logo2.png" alt="logo"/></Link>
          <div className={`mobile-button ${navbarOpen ? "showMenu" : "fa-bars"}`} onClick={handleToggle} onKeyDown={handleToggle}></div>
          <div className={`nav-links ${navbarOpen ? "showMenu" : ""}`} id="navLinks">
              
              <ul>
                  <li><Link to="/#roadmap" onClick={() => closeMenu()}>ROADMAP</Link></li>
                  <li><Link to="/#lore" onClick={() => closeMenu()}>LORE</Link></li>
                  <li><Link href="https://trade.dexlab.space/#/market/DpjaJ7YaH8oWcwiftg3Nn5k65jv3BiUitZjunfrgN9Cn">$BLOOD</Link></li>
                  <li><Link href="https://twitter.com/Yakuza_Raptorz"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="https://t.co/lTH0MqHkbC"><i className="fab fa-discord"></i></Link></li>
              </ul>
          </div>

        </nav>
  )
}
