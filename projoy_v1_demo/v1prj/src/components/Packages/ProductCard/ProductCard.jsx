import React, {useEffect, useState} from "react";

import {
  Main,
  ProductSection,
  ProductImg,
  BackEllipse,
  ProductDetails,
  ProductName,
  AddToCart,
  AddText,
  ShoppingTwoToneIcon,
} from "./stylesProductCard.js";

import cart from "../../../assets/images/iconpack-projoy/2.png";
import {ConsoleSqlOutlined} from "@ant-design/icons";

const DATA_API = `data.json`;

function ProductCard(props) {
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
        setInput(...data);
        console.log(input);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Main>
        <ProductSection>
          <ProductImg src={props.zerosugImg} />
          <BackEllipse src={props.bE} />
          <ProductDetails>
            <ProductName style={{color: props.zerosugColor}}>
              {props.zerosug}
            </ProductName>
            <AddToCart>
              <AddText>Add To Cart: </AddText>
              <ShoppingTwoToneIcon twoToneColor="#5d98a6" />
            </AddToCart>
          </ProductDetails>
        </ProductSection>
        <ProductSection>
          <ProductImg src={input.product_img} />
          <BackEllipse src={input.ellipse} />
          <ProductDetails>
            <ProductName style={{color: props.zerosugColor}}>
              {input.name}
            </ProductName>
            <AddToCart>
              <AddText>Add To Cart: </AddText>
              <ShoppingTwoToneIcon twoToneColor="#5d98a6" />
            </AddToCart>
          </ProductDetails>
        </ProductSection>
        {/* <ProductSection>
          <ProductImg src={props.vanillaImg} />
          <BackEllipse src={props.gE} />
          <ProductDetails>
            <ProductName style={{color: props.vanColor}}>
              {props.vanilla}
            </ProductName>
          </ProductDetails>
        </ProductSection>
        <ProductSection>
          <ProductImg src={props.chocImg} />
          <BackEllipse src={props.oE} />
          <ProductDetails>
            <ProductName style={{color: props.chocColor}}>
              {props.choc}
            </ProductName>
          </ProductDetails>
        </ProductSection> */}
      </Main>
    </div>
  );
}

export default ProductCard;
