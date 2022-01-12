import styled from "styled-components";
import { colors } from "../../assets/colors";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 5vw;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 207px;
`

export const NavbarMenuWrapper = styled.div`
  display: none;
  @media screen and (min-width: 900px){
    display: flex;
  }

`

export const NavbarMenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const NavbarMenu = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin-right: 32px;
  color: ${colors.light1};
  cursor: pointer;
`

export const HotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  width: 36px;
  border-radius: 8px;
  background-color: #E7462D;
  margin: -40px 15px 0 0;
`

export const Hot = styled.p`
  font-family: 'Open Sans';
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
`