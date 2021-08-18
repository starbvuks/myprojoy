import React from "react";
import {
  Container,
  Main,
  Logo,
  LogoImg,
  ForText,
  HappyText,
  TextContent,
} from "./stylesNavbarLogo";

import "./navlogo.css";
import logo from "../../../assets/images/logo/logo-f2.png";

function NavbarLogo() {
  return (
    <Container className="navbar-logo">
      <Main>
        <Logo>
          <LogoImg src={logo} alt="logo" />
        </Logo>
      </Main>
      <TextContent>
        <ForText>for</ForText>
        <HappyText>happy gut</HappyText>
      </TextContent>
    </Container>
  );
}

export default NavbarLogo;
