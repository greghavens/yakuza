import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import "../styles/style.css"

export default function ( {children}) {
  return (
      <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Yakuza Raptorz Reborn</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Road+Rage&display=swap" rel="stylesheet"/>
        </Helmet>
        <header>
            <section className="header">
                <Navbar />
            </section>
        </header>
        <main>
            <div>
                {children}        
            </div>
        </main>
    </>
  )
}
