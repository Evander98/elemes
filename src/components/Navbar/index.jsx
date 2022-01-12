import React from "react";
import { Button } from "../Button";
import {
  Hot,
  HotWrapper,
  Logo,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuItemWrapper,
  NavbarMenuWrapper,
} from "./NavbarElements";

const menu = [
  {
    menu: "Home",
    isHot: false,
  },
  {
    menu: "About",
    isHot: false,
  },
  {
    menu: "Promotions",
    isHot: true,
  },
  {
    menu: "Blogs",
    isHot: false,
  },
  {
    menu: "Contact Us",
    isHot: false,
  },
];

const Navbar = () => {
  const renderMenu = () =>
    menu.map((item, index) => (
      <NavbarMenuItemWrapper key={index}>
        <NavbarMenu>{item.menu}</NavbarMenu>
        {item.isHot ? (
          <HotWrapper>
            <Hot>Hot</Hot>
          </HotWrapper>
        ) : null}
      </NavbarMenuItemWrapper>
    ));

  return (
    <NavbarContainer>
      <Logo src={require("../../assets/images/logo.png")} alt="Elemes" />
      <NavbarMenuWrapper>{renderMenu()}</NavbarMenuWrapper>
      <Button>Daftar Sekarang</Button>
    </NavbarContainer>
  );
};

export default Navbar;
