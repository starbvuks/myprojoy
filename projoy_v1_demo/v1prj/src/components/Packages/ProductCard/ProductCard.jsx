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
            <ProductName>{props.zerosug}</ProductName>
          </ProductDetails>
        </ProductSection>
        <ProductSection green>
          <ProductImg src={props.vanillaImg} />
          <BackEllipse src={props.gE} />
          <ProductDetails>
            <ProductName green>{props.vanilla}</ProductName>
          </ProductDetails>
        </ProductSection>
      </Main>
    </div>
  );
}

export default ProductCard;
