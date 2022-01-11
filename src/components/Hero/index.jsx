import React from 'react'
import { Button } from '../Button'
import { HeroButtonWrapper, HeroContainer, HeroContentWrapper, HeroImg, HeroText, HeroTextWrapper, HeroTitle } from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContentWrapper>
        <HeroTitle>Good Food Us <br/> Good Mood</HeroTitle>
        <HeroTextWrapper>
          <HeroText>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</HeroText>
        </HeroTextWrapper>
        <HeroImg src={require('../../assets/images/green-salad-tomato.png')} alt=''/>
        <HeroButtonWrapper>
          <Button>Daftar Sekarang</Button>
          <Button grey>About Us</Button>
        </HeroButtonWrapper>
      </HeroContentWrapper>
    </HeroContainer>
  )
}

export default Hero
