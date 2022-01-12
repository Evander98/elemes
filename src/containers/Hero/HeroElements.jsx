import styled from "styled-components";
import { colors } from "../../assets/colors";

export const HeroContentWrapper = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 40px;
  grid-template-areas: 
    'title'
    'image'
    'text';
  
  @media screen and (min-width: 800px){
    grid-template-areas: 
      'title title title image'
      'text text text image'
      'button button button image';
  }
`

export const HeroTitle = styled.p`
  grid-area: title;
  font-size: 52px;
  font-weight: 500;
  line-height: 64px;
  color: ${colors.primary};
  /* margin-top: 5vw; */

  @media screen and (min-width: 800px){
    font-size: 64px;
  }
`

export const HeroText = styled.p`
  font-size: 18px;
  line-height: 29px;
  color: ${colors.light1};
`

export const HeroTextWrapper = styled.div`
  grid-area: text;
  max-width: 482px;
  
`

export const HeroImg = styled.img`
  grid-area: image;
  width: 25vw; 
  height: 25vw;
  border: 4vw solid rgba(196, 196, 196, .08);
  border-radius: 50%;
`

export const HeroButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 260px;
  margin-bottom: 20px;
`