import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8% 0 0 0;
  width: 100%;
`;

export const ProductSection = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  padding: 20px 0 20px 0;
  background-color: ${(props) => (props.green ? "#98E577" : "#A0E2F2")};
`;

export const ProductImg = styled.img`
  width: 50%;
  left: 0;
  z-index: 99;
`;

export const BackEllipse = styled.img`
  position: absolute;
  width: 50%;
  left: 15px;
  top: 0;
  z-index: 1;
`;

export const ProductDetails = styled.div`
  text-align: center;
  display: flex;
  z-index: 999;
`;

export const ProductName = styled.p`
  font-family: more_sugarregular;
  font-size: 18pt;
  color: #5d98a6;
  color: ${(props) => (props.green ? "#58907F" : "#5d98a6")};
`;
