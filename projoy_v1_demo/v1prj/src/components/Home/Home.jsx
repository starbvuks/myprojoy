import React from "react";
import styled from "styled-components";
import Middle from "./MiddleContent/Middle.jsx";
import NavbarLogo from "./NavLogo/NavbarLogo.jsx";

import rightArrow from "../../assets/images/iconpack-projoy/3.png";
import leftArrow from "../../assets/images/iconpack-projoy/4.png";

function Home() {
  return (
    <Main>
      <Top>
        <NavbarLogo />
      </Top>
      <Middle />
      <MiddleIcons>
        <ArrowLeft src={leftArrow} alt="left-arrow" />
        <ArrowRight src={rightArrow} alt="right-arrow" />
      </MiddleIcons>
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

const MiddleIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin: 370px 0 0 0;
`;

const ArrowRight = styled.img`
  width: 50px;
`;

const ArrowLeft = styled.img`
  width: 50px;
`;
