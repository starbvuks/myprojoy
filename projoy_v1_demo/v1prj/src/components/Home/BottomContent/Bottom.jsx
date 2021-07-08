import React from "react";

import {
  Main,
  Content,
  BlueBubble,
  OrangeBubble,
  GreenBubble,
} from "./stylesBottom.js";

import blueBubble from "../../../assets/images/iconpack-projoy/5.png";
import orangeBubble from "../../../assets/images/iconpack-projoy/6.png";
import greenBubble from "../../../assets/images/iconpack-projoy/7.png";

function Bottom() {
  return (
    <Main>
      <Content>
        <BlueBubble src={blueBubble} alt="blue" />
        <OrangeBubble src={orangeBubble} alt="orange" />
        <GreenBubble src={greenBubble} alt="green" />
      </Content>
    </Main>
  );
}

export default Bottom;
