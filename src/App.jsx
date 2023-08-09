import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'
import { Footer } from './components/Footer'
import Game from './components/Game'
import Prize from './components/Prize'
import NotFound from './components/NotFound'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <main className=" overflow-hidden">
      <Navbar />
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Game /> */}
      {/* <Prize /> */}
      {/* <News /> */}
      <Contact />
      <Footer />
      {/* <NotFound /> */}
    </main>
  )
}

export default App
