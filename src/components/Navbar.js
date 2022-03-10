import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Navbar() {
  return (
        <nav>
          <Link to="/"><img src="logo2.png" alt="logo"/></Link>
          <div className="nav-links" id="navLinks">
              <i className="fa fa-times" onclick="hideMenu()" onKeyDown="hideMenu()"></i>
              <ul>
                  <li><AnchorLink to="/#roadmap" >ROADMAP</AnchorLink></li>
                  <li><AnchorLink to="/#lore">LORE</AnchorLink></li>
                  <li><Link href="https://trade.dexlab.space/#/market/DpjaJ7YaH8oWcwiftg3Nn5k65jv3BiUitZjunfrgN9Cn">$BLOOD</Link></li>
                  <li><Link href="https://twitter.com/Yakuza_Raptorz"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="https://t.co/lTH0MqHkbC"><i className="fab fa-discord"></i></Link></li>
              </ul>
          </div>
          <i className="fa fa-bars" onclick="showMenu()" onKeydown="showMenu"></i>
        </nav>
  )
}
