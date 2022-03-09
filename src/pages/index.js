import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
                  <li><AnchorLink to="#roadmap" stripHash>ROADMAP</AnchorLink></li>
                  <li><Link href="/lore">LORE</Link></li>
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
          <h1><a name="roadmap">ROAD MAP</a></h1>
          <div className="column">
            <div className="row">
              <p><h2>PHASE 0</h2> <br />Mint 1111 unique Yakuza Raptorz and 1111 Yukan Theros <br />Secondary market Place Listing and Holder verification.</p>
            </div>
            <div className="currentrow">
              <p><h2>PHASE 1</h2> <br /> Ikari Raptor leaves in SHAME, with barely enough SOL to make up for his <br /> lack of work ethic. New, stronger, doxxed dev team initiates new roadmap, <br/> new token, and a maintainable ecosystem </p> 
            </div>
            <div className="row">
              <p><h2>PHASE 2</h2> <br />Token Generation - $YAK will be generated to replace $BLOOD with real <br /> tokenomics and an intial amount will be airdropped to Raptorz and Theros <br />holders, making them whole from their previous $BLOOD<br/> (claimed or unclaimed) </p> 
            </div>
            <div className="row">
              <p><h2>PHASE 3</h2><br />Use $YAK and $SOL to evolve Yakuza Raptorz to their new Reborn form with <br />updated, beautiful art  and royalties that feed the Yakuza Reborn community <br /> wallet. Staking go-live to follow immediately after.</p> 
            </div>
            <div className="row">
              <p><h2>PHASE 4</h2> <br />28 days from the start of evolution, an extinction event will occur. <br /> All non-evolved Raptorz will be left in the original, abandoned collection.<br /> 75% of the evolution mint and 50% of royalties from secondary market <br />will be used in the creation of the custom Liquidity Pool for <br /> the $YAK/$SOL pair.</p> 
            </div>
            <div className="row">
              <p><h2>PHASE 5</h2> <br /> Theros, lusting after the Raptorz and wanting a family, give their <br />$YAK and their life to make an egg. The last of Ikari's royalties are burned with the Theros</p> 
              
            </div>
            <div className="row">
              <p><h2>PHASE 6</h2><br /> Incubation begins. For a fee payable in $YAK, Raptorz may incubate <br/> their eggs with "chance to hatch mechanics." Incubation requires an unstaked, <br />Reborn Raptor.</p> 
            </div>
            <div className="row">
              <p><h2>PHASE 7</h2> When the first of the new breed is born, the next extinction even occurs. <br /> All remaining Theros will be abandoned or burned. The new <br/> breed produces more $YAK and requires $YAK for its developing world.</p>
            </div>
          </div>
        </section>
      
      </main>
    </>
  )

}
