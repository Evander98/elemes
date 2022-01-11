import React from 'react'
import Navbar from './components/Navbar'
import { GlobalStyle } from './assets/styles'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
