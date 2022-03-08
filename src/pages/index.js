import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../styles/style.css"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Yakuza Raptorz Reborn</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Road+Rage&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <script src="/menu.js" />
      </Helmet>
      <header>
        <section className="header">
        <nav>
          <Link to="/"><img src="logo2.png" alt="logo"/></Link>
          <div className="nav-links" id="navLinks">
              <i className="fa fa-times" onclick="hideMenu()"></i>
              <ul>
                  <li><Link to="/lore">LORE</Link></li>
                  <li><Link href="https://trade.dexlab.space/#/market/DpjaJ7YaH8oWcwiftg3Nn5k65jv3BiUitZjunfrgN9Cn">$BLOOD</Link></li>
                  <li><Link href="https://twitter.com/Yakuza_Raptorz"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="https://t.co/lTH0MqHkbC"><i className="fab fa-discord"></i></Link></li>
              </ul>
          </div>
          <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <div className="img-gif">
          <p><img src="/gif_2.gif" alt="raptorz pfp" /></p>
        </div>
        <div className="text-box">
          <p>1,111 Yakuza Raptors have been brought to the present from 200 million years ago <br />by an accidental time travel experiment</p>
          <Link href="https://magiceden.io/marketplace/yakuza_raptorz" className="hero-btn">BUY RAPTORZ ON MAGIC EDEN</Link>
        </div>
        </section>
      </header>
      <main>

        

      

        <section className="roadmap">
          <h1>ROAD MAP</h1>
          <div className="column">
            <div className="row">
              <p>PHASE 1 <br />Mint 1111 unique Yakuza Raptorz.</p> 
            </div>
            <div className="row">
              <p>PHASE 2 <br />Secondary market Place Listing and Holders SolaLandHQ verification. </p> 
            </div>
            <div className="row">
              <p>PHASE 3 <br />Token Generation - $BLOOD generated right after the mint and <br /> airdropped to Raptor holders.</p> 
            </div>
            <div className="row">
              <p>PHASE 4 <br />Move the 50% of our sales royalties from secondary market places to <br /> the 
              community wallet which will be used in Liquidity Pool <br /> for the $BLOOD/$USDC pair.</p> 
            </div>
            <div className="row">
              <p>PHASE 5 <br />Collaborations with bigger projects and individuals within 
              the NFT space<br /> Perks-promotions,exclusive gifts for holders <br /> and whitelist Spots.</p> 
            </div>
          </div>
        </section>
      
      </main>
    </>
  )

}
