import styled, { css } from "styled-components"
import { colors } from "../../assets/colors"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  border-radius: 100px;
  padding: 10px 18px 10px 18px;
  background: ${colors.primary};
  border: none;
  outline: none;
  color: white;
  font-weight: 500;
  transition: all .2s ease;

  &:active{
    background: #aad14e;
  }
  
  ${({grey}) => {
    if(grey){
      return css`
        background-color: ${colors.lightGray2};
        color: ${colors.dark};
      `
    }
  }}

  ${({shadow}) => {
    if(shadow){
      return css`
        box-shadow: 0px 8px 32px rgba(102, 107, 226, 0.35);    
      `
    }
  }}

  ${({center}) => {
    if(center){
      return css`
        margin: auto;
        margin-top: 50px;
      `
    }
  }}

`