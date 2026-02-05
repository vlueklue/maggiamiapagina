import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ValueProp />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
