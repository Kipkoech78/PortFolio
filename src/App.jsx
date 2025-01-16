import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Service from './components/services/Service'
import MyWork from './components/projects/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
