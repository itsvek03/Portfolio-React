import React from 'react'
import Works from './components/Works/Works'
import Client from './components/Client/Client'
import Expertise from './components/Expertise/Expertise'
import About from './components/About/About'
import News from './components/News/News'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'

export default function App() {
    return (
        <>
            <Header />
            <Intro />

            <Expertise />

            <Works />

            <About />

            <Client />

            <News />
            <Footer />
        </>
    )
}
