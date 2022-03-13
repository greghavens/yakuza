import React from 'react'
import { Link } from 'gatsby'
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaTwitter } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'

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
          <div className={`mobile-button ${navbarOpen ? "showMenu" : ""}`} onClick={handleToggle} onKeyDown={handleToggle}><FaBars classname="nav-links" /></div>
          <div className={`nav-links ${navbarOpen ? "showMenu" : ""}`} id="navLinks">
              
              <ul>
                  <li><Link to="/#roadmap" onClick={() => closeMenu()}>ROADMAP</Link></li>
                  <li><Link to="/#lore" onClick={() => closeMenu()}>LORE</Link></li>
                  <li><Link href="https://trade.dexlab.space/#/market/DpjaJ7YaH8oWcwiftg3Nn5k65jv3BiUitZjunfrgN9Cn">$BLOOD</Link></li>
                  <li><Link href="https://twitter.com/Yakuza_Raptorz"><FaTwitter/></Link></li>
                  <li><Link href="https://t.co/lTH0MqHkbC"><FaDiscord/></Link></li>
              </ul>
          </div>

        </nav>
  )
}
