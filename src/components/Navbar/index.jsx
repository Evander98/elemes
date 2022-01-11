import React from 'react'
import { Button } from '../Button'
import { Logo, NavbarContainer } from './NavbarElements'

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={require('../../assets/images/logo.png')} alt='Elemes'/>
      <Button>Daftar Sekarang</Button>
    </NavbarContainer>
  )
}

export default Navbar
