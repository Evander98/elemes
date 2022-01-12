import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }
`

export const Container = styled.div`
  height: 100%;
  padding: 2vw 5vw 5vw 5vw;

  @media screen and (min-width: 800px){

    ${props => {
      if(props.fitContent){
        return css`
          height: 100%;
        `
      }
    }}
  }

  /* @media screen and (min-width: 1440px){
    height: 100vh;

  } */
`