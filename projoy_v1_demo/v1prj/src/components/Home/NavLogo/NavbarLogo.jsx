import React from "react";
import {
  Container,
  Main,
  Logo,
  LogoImg,
  ForText,
  HappyText,
} from "./stylesNavbarLogo";

import logo from "../../../assets/images/logo/mainlogo.png";

function NavbarLogo() {
  return (
    <Container>
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
