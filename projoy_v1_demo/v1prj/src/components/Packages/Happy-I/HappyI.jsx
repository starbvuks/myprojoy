import React from "react";
import {
  Main,
  Blue,
  BlueBubble,
  SpanTop,
  SpanBot,
  Title,
  Sub,
} from "./stylesHappyI.js";

import ProductCard from "../ProductCard/ProductCard.jsx";

import blueBubble from "../../../assets/images/iconpack-projoy/5.png";

function HappyI() {
  return (
    <Main>
      <Blue>
        <BlueBubble src={blueBubble} alt="blue" />
        <SpanTop>happy</SpanTop>
        <SpanBot> individual</SpanBot>
      </Blue>
      <Title>Probiotic Ready Mix</Title>
      <Sub>
        pick any <span style={{color: "#FFCC7A"}}>one</span> pack
      </Sub>
      <ProductCard />
    </Main>
  );
}

export default HappyI;
