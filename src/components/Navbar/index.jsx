import React from 'react'
import { Logo, NavbarContainer } from './NavbarElements'

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={require('../../assets/images/logo.png')} alt=''/>
      <p>test2</p>
    </NavbarContainer>
  )
}

export default Navbar
