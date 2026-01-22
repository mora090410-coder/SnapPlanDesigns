import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Deliverables from './components/Deliverables'
import WhoItsFor from './components/WhoItsFor'
import IntakeCTA from './components/IntakeCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Nav />
            <Hero />
            <Problem />
            <HowItWorks />
            <Deliverables />
            <WhoItsFor />
            <IntakeCTA />
            <FAQ />
            <Footer />
        </>
    )
}

export default App
