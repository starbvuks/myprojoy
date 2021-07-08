import React from "react";
import {Main, Blue, BlueBubble, SpanTop, SpanBot} from "./stylesHappyI.js";

import blueBubble from "../../../assets/images/iconpack-projoy/5.png";

function HappyI() {
  return (
    <Main>
      <Blue>
        <BlueBubble src={blueBubble} alt="blue" />
        <SpanTop>happy</SpanTop>
        <SpanBot> individual</SpanBot>
      </Blue>
    </Main>
  );
}

export default HappyI;
