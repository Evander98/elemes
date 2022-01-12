import styled, { css } from "styled-components";
import { colors } from "../../assets/colors";
import { AiFillStar } from "react-icons/ai";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 175px;
  height: auto;
  min-width: 230px;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 11px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover::after {
    content: "";
    position: absolute;
    z-index: -1;
    height: 185px;
    min-width: 230px;
    transform: scale(1.1);
    background-image: url(${require("../../assets/images/foods.png")});
    border-radius: 8px;
    opacity: 0.1;
    background-size: contain;
  }

  ${({ background }) => {
    if (background === 0) {
      return css`
        background-color: #f0feeb;
      `;
    } else if (background === 1) {
      return css`
        background-color: #e6f3f5;
      `;
    } else if (background === 2) {
      return css`
        background-color: #eaeefa;
      `;
    } else if (background === 3) {
      return css`
        background-color: #f9eef3;
      `;
    } else if (background === 4) {
      return css`
        background-color: #f3f7d9;
      `;
    }
  }}

  ${({isTrending}) => {
    if(isTrending){
      return css`
        align-items: flex-start;

      `
    }
  }}
`;

export const CardImage = styled.img`
  width: 47px;
  margin-bottom: 25px;

  ${({isTrending}) => {
    if(isTrending){
      return css`
        width: 80px;
        /* margin-top: 50px; */
      `
    }
  }}
`;

export const CardTitle = styled.p`
  font-weight: 500;
  color: ${colors.dark};
  /* line-height: 22px; */

  ${({isTrending}) => {
    if(isTrending){
      return css`
        font-size: 26px;
      `
    }
  }}

  ${({primary}) => {
    if(primary){
      return css`
        color: ${colors.primary};
        margin: 10px 0;
      `
    }
  }}
`;

export const CardItemAmount = styled(CardTitle)`
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
`;

export const CardRating = styled(AiFillStar)`
  color: #C9C9C9;
  font-size: 15px;

  ${({rated}) => {
    if(rated === 1){
      return css`
        color: #FF8412;
      `
    }
  }}
`