import React from "react";

import NavbarLogo from "./NavLogo/NavbarLogo.jsx";
import Middle from "./MiddleContent/Middle.jsx";
import Bottom from "./BottomContent/Bottom.jsx";

import {Main, Top, MiddleIcons, ArrowLeft, ArrowRight} from "./stylesHome.js";

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
      <Bottom bluePrice="₹ 449" orangePrice="₹ 100" greenPrice="₹ 209" />
    </Main>
  );
}

export default Home;
