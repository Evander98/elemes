import React from 'react'
import { Logo, NavbarContainer } from './NavbarElements'

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={require('../../assets/images/logo.png')} alt=''/>
    </NavbarContainer>
  )
}

export default Navbar