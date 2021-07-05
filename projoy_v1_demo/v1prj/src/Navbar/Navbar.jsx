import React from "react";
import LogoMain from ".././img/logo-light-blue.png";

import {
  Container,
  NavbarContent,
  Logo,
  LogoImg,
  Content,
  StyledMenuOutlined,
  StyledShoppingCartOutlined,
} from "./stylesNavbar.js";

function Navbar() {
  return (
    <Container>
      <NavbarContent>
        <Logo>
          <LogoImg src={LogoMain} alt="logo" />
        </Logo>
        <Content>
          <StyledShoppingCartOutlined />
          <StyledMenuOutlined />
        </Content>
      </NavbarContent>
    </Container>
  );
}

export default Navbar;
