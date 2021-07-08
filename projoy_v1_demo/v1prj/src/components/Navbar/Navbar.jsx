import React from "react";

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
        <StyledMenuOutlined />
        <LogoContainer>
          <Logo>Projoy</Logo>
        </LogoContainer>
        <StyledShoppingCartOutlined />
      </NavbarContent>
    </Container>
  );
}

export default Navbar;
