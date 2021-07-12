import React, {useState, useEffect} from "react";
import {
  Main,
  Blue,
  BlueBubble,
  SpanTop,
  SpanBot,
  TextContent,
  Title,
  Sub,
  ProductSection,
} from "./stylesHappyI.js";

import ProductCard from "../ProductCard/ProductCard.jsx";

import blueBubble from "../../../assets/images/iconpack-projoy/5.png";
import blueEllipse from "../../../assets/images/iconpack-projoy/8.png";
import greenEllipse from "../../../assets/images/iconpack-projoy/9.png";
import orangeEllipse from "../../../assets/images/iconpack-projoy/10.png";

import vanilla from "../../../assets/images/products/vanilla-transparent.png";
import chocolate from "../../../assets/images/products/chocolate-transparent.png";
import zerosug from "../../../assets/images/products/zerosugar-transparent.png";

const DATA_API = `data.json`;

function HappyI() {
  const [input, setInput] = useState([]);

  useEffect(() => {
    fetch(DATA_API, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInput(data);
        console.log(input);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Main>
      <Blue>
        <BlueBubble src={blueBubble} alt="blue" />
        <SpanTop>happy</SpanTop>
        <SpanBot> individual</SpanBot>
      </Blue>
      <TextContent>
        <Title>Probiotic Ready Mix</Title>
        <Sub>
          [ pick any <span style={{color: "#F2DADA"}}>one</span> pack ]
        </Sub>
      </TextContent>
      {input &&
        input.length > 0 &&
        input.map((item, index) => <ProductCard key={index} {...item} />)}
    </Main>
  );
}

export default HappyI;

/* vanilla="VANILLA"
choc="CHOCOLATE"
zerosug="ZERO SUGAR"
bE={blueEllipse}
oE={orangeEllipse}
gE={greenEllipse}
vanillaImg={vanilla}
chocImg={chocolate}
zerosugImg={zerosug}
zerosugColor="#5D98A6"
vanColor="#58907F"
chocColor="#F2A285" */
