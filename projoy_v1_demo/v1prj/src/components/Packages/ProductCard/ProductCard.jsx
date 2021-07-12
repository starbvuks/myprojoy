import React, {useEffect, useState} from "react";

import {
  Main,
  ProductSection,
  ProductImg,
  BackEllipse,
  ProductDetails,
  ProductName,
  Price,
  AddToCart,
  AddText,
  PlusOutlinedIcon,
  ShoppingTwoToneIcon,
} from "./stylesProductCard.js";

function ProductCard({name, price, ellipse, product_img, color}) {
  return (
    <div>
      <Main>
        <ProductSection>
          <ProductImg src={product_img} />
          <BackEllipse src={ellipse} />
          <ProductDetails>
            <ProductName style={{color: color}}>{name}</ProductName>
            <Price style={{color: color}}>{price}</Price>
            <AddToCart>
              <AddText>Add To Cart: </AddText>
              <ShoppingTwoToneIcon twoToneColor="#5d98a6" />
            </AddToCart>
          </ProductDetails>
        </ProductSection>
        <ProductSection></ProductSection>
      </Main>
    </div>
  );
}

export default ProductCard;
