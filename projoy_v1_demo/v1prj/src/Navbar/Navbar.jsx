import React from "react";
import LogoMain from ".././img/logo.png";

import {
  Container,
  NavbarContent,
  Logo,
  LogoImg,
  Content,
  StyledMenuOutlined,
} from "./stylesNavbar.js";

function Navbar() {
  return (
    <Container>
      <NavbarContent>
        <Logo>
          <LogoImg src={LogoMain} alt="logo" />
        </Logo>
        <Content>
          <StyledMenuOutlined />
        </Content>
      </NavbarContent>
    </Container>
  );
}

export default Navbar;
