import styled, { css } from "styled-components";
import { colors } from "../../assets/colors";

export const TitleContainer = styled.div`
`

export const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: ${colors.dark};
  
  ${props => {
    if(props.sub){
      return css`
        color: ${colors.primary};
        `
    }
  }}

  @media screen and (min-width: 800px){
    font-size: 38px;
  }
`