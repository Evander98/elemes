import styled from "styled-components"
import { css } from "styled-components"
import { colors } from "../../assets/colors"

export const Button = styled.button`
  height: 42px;
  border-radius: 100px;
  padding: 10px 18px 10px 18px;
  background: ${colors.primary};
  border: none;
  outline: none;
  color: white;
  font-weight: 500;
  box-shadow: 0px 8px 32px rgba(102, 107, 226, 0.35);
  
  ${(props) => {
    if(props.grey){
      return css`
        background-color: ${colors.lightGray2};
        color: ${colors.dark};
        box-shadow: none;
      `
    }
  }}
`