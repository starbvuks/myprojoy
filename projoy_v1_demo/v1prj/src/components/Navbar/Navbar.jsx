import React from "react";

import menu from "../../assets/images/iconpack-projoy/1.png";
import cart from "../../assets/images/iconpack-projoy/2.png";

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
        <StyledShoppingCart src={cart} alt="cart-icon" />
      </NavbarContent>
    </Container>
  );
}

export default Navbar;
