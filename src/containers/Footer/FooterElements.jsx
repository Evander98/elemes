import styled, { css } from "styled-components";
import { colors } from "../../assets/colors";
import { FiInstagram, FiPhone, FiMail } from 'react-icons/fi'

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #F9FFF7;;
  border-radius: 20px;
  padding: 74px 67px 40px 67px;

`

export const FooterItemsWrapper = styled.div`
  width: fit-content;
  margin-top: 40px;
`

export const FooterLogo = styled.img`
  width: 207px;
`

export const FooterText = styled.p`
  color: ${colors.light1};
  font-size: 14px;
  line-height: 20px;
  max-width: 330px;
  margin-top: 20px;

  ${({mg}) => {
    if(mg){
      return css`
        margin: ${mg};
      `
    }
  }}
`

export const FooterSubTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 40px;
`

export const FooterContactWrapper = styled.div`
  display: flex;
  margin-top: 35px;
  align-items: center;

  ${({mg}) => {
    if(mg){
      return css`
        margin: ${mg};
      `
    }
  }}
`

export const FooterIconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 24px;

  &:hover{
    background-color: ${colors.primary};
  }
`

export const MailIcon = styled(FiMail)`
  font-size: 20px;
  color: ${colors.primary};

  ${FooterIconBackground}:hover &{
    color: white;
  }
`

export const PhoneIcon = styled(FiPhone)`
  font-size: 20px;
  color: ${colors.primary};

  ${FooterIconBackground}:hover &{
    color: white;
  }
`

export const InstagramIcon = styled(FiInstagram)`
  font-size: 20px;
  color: ${colors.primary};

  ${FooterIconBackground}:hover &{
    color: white;
  }
`

export const FooterInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  box-sizing: border-box;
  margin: 20px 0;
`

export const FooterInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 39px;
  border: 1px solid #000000;
  border-right: 0;
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  padding: 0 15px;
`

export const FooterSendBtn = styled.button`
  border: none;
  outline: none;
  color: white;
  font-weight: 500;
  background: ${colors.primary};
  height: 41px;
  width: 60px;
  border-radius: 0 8px 8px 0;
`

