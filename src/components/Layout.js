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
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
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
