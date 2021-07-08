import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 8% 0 0 0;
  width: 50%;
`;

export const ProductSection = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
`;

export const ProductImg = styled.img`
  width: 100%;
  z-index: 99;
  margin: 0 0 0 30%;
`;

export const BackEllipse = styled.img`
  position: absolute;
  width: 200px;
  bottom: 10px;
  z-index: -1;
`;

export const ProductDetails = styled.div`
  text-align: center;
  display: flex;
  z-index: 999;
`;

export const ProductName = styled.p`
  color: black;
`;
