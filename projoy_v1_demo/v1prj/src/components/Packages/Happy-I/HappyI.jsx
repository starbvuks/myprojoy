import React, {useState} from "react";
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
import blueEllipse from "../../../assets/images/iconpack-projoy/8.png";
import greenEllipse from "../../../assets/images/iconpack-projoy/9.png";
import orangeEllipse from "../../../assets/images/iconpack-projoy/10.png";

import vanilla from "../../../assets/images/products/vanilla-transparent.png";
import chocolate from "../../../assets/images/products/chocolate-transparent.png";
import zerosug from "../../../assets/images/products/zerosugar-transparent.png";

function HappyI() {
  const [products, setProducts] = useState([]);

  return (
    <Main>
      <Blue>
        <BlueBubble src={blueBubble} alt="blue" />
        <SpanTop>happy</SpanTop>
        <SpanBot> individual</SpanBot>
      </Blue>
      <Title>Probiotic Ready Mix</Title>
      <Sub>
        [ pick any <span style={{color: "#FFCC7A"}}>one</span> pack ]
      </Sub>
      <ProductCard
        vanilla="VANILLA"
        choc="CHOCOLATE"
        zerosug="ZERO SUGAR"
        bE={blueEllipse}
        oE={orangeEllipse}
        gE={greenEllipse}
        vanillaImg={vanilla}
        chocImg={chocolate}
        zerosugImg={zerosug}
      />
    </Main>
  );
}

export default HappyI;
