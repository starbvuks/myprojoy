import React from "react";
import styled from "styled-components";
import Middle from "./MiddleContent/Middle.jsx";
import NavbarLogo from "./NavLogo/NavbarLogo.jsx";

function Home() {
  return (
    <Main>
      <Top>
        <NavbarLogo />
      </Top>
      <Middle />
    </Main>
  );
}

export default Home;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Top = styled.div`
  position: absolute;
  height: 50%;
  top: 0;
`;
