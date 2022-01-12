import React from "react";
import { Container } from "../../assets/styles";
import {
  FooterContentWrapper,
  FooterLogo,
  FooterItemsWrapper,
  FooterText,
  FooterSubTitle,
  FooterContactWrapper,
  FooterIconBackground,
  MailIcon,
  PhoneIcon,
  InstagramIcon,
  FooterInputWrapper,
  FooterInput,
  FooterSendBtn,
} from "./FooterElements";

const menu = [
  {
    subTitle: "Categories",
    content: ["Cupcake", "Pizza", "Kebab", "Salmon", "Doughnut"],
  },
  {
    subTitle: "About Us",
    content: ["About Us", "FAQ", "Report Problem"],
  },
  {
    subTitle: "Newsletter",
    content: ["Get now free 50% discount for alll products on your first order"],
  },
];

const Footer = () => {
  const renderLinks = () =>
    menu.map((item, index) => (
      <FooterItemsWrapper key={index}>
        <FooterSubTitle>{item.subTitle}</FooterSubTitle>
        {item.content.map((content, idx) => (
          <FooterText key={idx}>{content}</FooterText>
        ))}
        {
          item.subTitle === "Newsletter" ?
          <>
            <FooterInputWrapper>
              <FooterInput type='text' placeholder="Your email address"/>
              <FooterSendBtn>Send</FooterSendBtn>
            </FooterInputWrapper>
            <FooterContactWrapper mg='15px 0 0 0'>
              <MailIcon/>
              <FooterText mg='0 0 0 5px'>elemesid@gmail.com</FooterText>
            </FooterContactWrapper>
            <FooterContactWrapper mg='15px 0 0 0'>
              <PhoneIcon/>
              <FooterText mg='0 0 0 5px'>0888 1111 2222 </FooterText>
            </FooterContactWrapper>
          </>
          : null
        }
      </FooterItemsWrapper>
    ));

  return (
    <Container>
      <FooterContentWrapper>
        <FooterItemsWrapper>
          <FooterLogo src={require("../../assets/images/logo.png")} alt="" />
          <FooterText>
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </FooterText>
          <FooterContactWrapper>
            <FooterIconBackground>
              <MailIcon />
            </FooterIconBackground>
            <FooterIconBackground>
              <PhoneIcon />
            </FooterIconBackground>
            <FooterIconBackground>
              <InstagramIcon />
            </FooterIconBackground>
          </FooterContactWrapper>
        </FooterItemsWrapper>
        {renderLinks()}
      </FooterContentWrapper>
    </Container>
  );
};

export default Footer;
