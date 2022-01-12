import React from 'react'
import Navbar from './components/Navbar'
import { GlobalStyle } from './assets/styles'
import Hero from './containers/Hero'
import Category from './containers/Category'
import Trending from './containers/Trending'
import Footer from './containers/Footer'

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
      <Category/>
      <Trending/>
      <Footer/>
    </div>
  )
}

export default App
