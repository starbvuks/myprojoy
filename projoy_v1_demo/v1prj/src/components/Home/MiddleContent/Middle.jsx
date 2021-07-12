import React from "react";

import {Main, Content, TopLine, MainLine} from "./stylesMiddle.js";

import "./Middle.css";

function Middle() {
  return (
    <Main>
      <Content className="main-content">
        <TopLine>GIVE YOU & YOUR FAMILY</TopLine>
        <MainLine>
          <span>Probiotic</span>
          <span>Happiness</span>
        </MainLine>
      </Content>
    </Main>
  );
}

export default Middle;
