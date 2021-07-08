import React from "react";
import {
  Container,
  Main,
  Logo,
  LogoImg,
  ForText,
  HappyText,
} from "./stylesNavbarLogo";

import "./navlogo.css";
import logo from "../../../assets/images/logo/mainlogo.png";

function NavbarLogo() {
  return (
    <Container className="navbar-logo">
      <Main>
        <Logo>
          <LogoImg src={logo} alt="logo" />
        </Logo>
        <ForText>for</ForText>
        <HappyText>happy gut</HappyText>
      </Main>
    </Container>
  );
}

export default NavbarLogo;
