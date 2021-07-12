import React from "react";

import {
  Main,
  ProductSection,
  ProductImg,
  BackEllipse,
  ProductDetails,
  ProductName,
} from "./stylesProductCard.js";

function ProductCard(props) {
  return (
    <div>
      <Main>
        <ProductSection style={{backgroundColor: props.zerosugColor}}>
          <ProductImg src={props.zerosugImg} />
          <BackEllipse src={props.bE} />
          <ProductDetails>
            <ProductName>{props.zerosug}</ProductName>
          </ProductDetails>
        </ProductSection>
        <ProductSection style={{backgroundColor: props.vanColor}}>
          <ProductImg src={props.vanillaImg} />
          <BackEllipse src={props.gE} />
          <ProductDetails>
            <ProductName green>{props.vanilla}</ProductName>
          </ProductDetails>
        </ProductSection>
        <ProductSection style={{backgroundColor: props.chocColor}}>
          <ProductImg src={props.chocImg} />
          <BackEllipse src={props.oE} />
          <ProductDetails>
            <ProductName green>{props.choc}</ProductName>
          </ProductDetails>
        </ProductSection>
      </Main>
    </div>
  );
}

export default ProductCard;
