import React from "react";
import {Main, Logo, LogoImg, ForText, HappyText} from "./stylesNavbarLogo";

import logo from "../../images/logo/mainlogo.png";

function NavbarLogo() {
  return (
    <Main>
      <Logo>
        <LogoImg src={logo} alt="logo" />
      </Logo>
      <ForText>for</ForText>
      <HappyText>happy gut</HappyText>
    </Main>
  );
}

export default NavbarLogo;
