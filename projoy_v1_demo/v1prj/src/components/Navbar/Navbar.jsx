import React from "react";
import logo from "../../images/logo/mainlogo.png";
import menu from "../../images/iconpack-projoy/1.png";
import cart from "../../images/iconpack-projoy/2.png";

import NavbarLogo from "./NavbarLogo";

import {
  Container,
  NavbarContent,
  StyledMenu,
  StyledShoppingCart,
} from "./stylesNavbar.js";

function Navbar() {
  return (
    <Container>
      <NavbarContent>
        <StyledMenu src={menu} alt="menu-icon" />
        <NavbarLogo />
        <StyledShoppingCart src={cart} alt="cart-icon" />
      </NavbarContent>
    </Container>
  );
}

export default Navbar;
