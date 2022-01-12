import React from 'react'
import { Container } from '../../assets/styles'
import { Button } from '../../components/Button'
import { HeroButtonWrapper, HeroContentWrapper, HeroImg, HeroText, HeroTextWrapper, HeroTitle } from './HeroElements'

const Hero = () => {
  return (
    <Container>
      <HeroContentWrapper>
        <HeroTitle>Good Food Us <br/> Good Mood</HeroTitle>
        <HeroTextWrapper>
          <HeroText>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</HeroText>
        </HeroTextWrapper>
        <HeroImg src={require('../../assets/images/green-salad-tomato.png')} alt=''/>
        <HeroButtonWrapper>
          <Button shadow>Daftar Sekarang</Button>
          <Button grey>About Us</Button>
        </HeroButtonWrapper>
      </HeroContentWrapper>
    </Container>
  )
}

export default Hero
