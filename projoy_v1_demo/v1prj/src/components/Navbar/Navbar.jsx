import React from "react";
import logo from "../../assets/images/logo/mainlogo.png";
import menu from "../../assets/images/iconpack-projoy/1.png";
import cart from "../../assets/images/iconpack-projoy/2.png";

import NavbarLogo from "../Home/NavLogo/NavbarLogo.jsx";

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
