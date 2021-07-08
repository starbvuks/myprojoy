import React from "react";

import {
  Main,
  Content,
  BlueBubble,
  OrangeBubble,
  GreenBubble,
  Blue,
  Orange,
  Green,
  Span,
  Only,
  Price,
} from "./stylesBottom.js";

import blueBubble from "../../../assets/images/iconpack-projoy/5.png";
import orangeBubble from "../../../assets/images/iconpack-projoy/6.png";
import greenBubble from "../../../assets/images/iconpack-projoy/7.png";

function Bottom(props) {
  return (
    <Main>
      <Content>
        <Blue>
          <BlueBubble src={blueBubble} alt="blue" />
          <Span>happy individual</Span>
          <Only style={{color: "#C4E0E6"}}>ONLY</Only>
          <Price>{props.bluePrice}</Price>
        </Blue>
        <Orange>
          <OrangeBubble src={orangeBubble} alt="orange" />
          <Span>happy family</Span>
          <Only style={{color: "#FAE0BE"}}>SAVES</Only>
          <Price>{props.orangePrice}</Price>
        </Orange>
        <Green>
          <GreenBubble src={greenBubble} alt="green" />
          <Span>super family</Span>
          <Only style={{color: "#D6F3E8"}}>SAVES</Only>
          <Price>{props.greenPrice}</Price>
        </Green>
      </Content>
    </Main>
  );
}

export default Bottom;
