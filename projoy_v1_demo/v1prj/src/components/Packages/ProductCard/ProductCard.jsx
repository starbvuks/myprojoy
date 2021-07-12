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
        <ProductSection>
          <ProductImg src={props.zerosugImg} />
          <BackEllipse src={props.bE} />
          <ProductDetails>
            <ProductName style={{color: props.zerosugColor}}>
              {props.zerosug}
            </ProductName>
          </ProductDetails>
        </ProductSection>
        <ProductSection>
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
        </ProductSection>
      </Main>
    </div>
  );
}

export default ProductCard;
