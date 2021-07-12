import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8% 0 0 0;
  width: 100%;
`;

export const ProductSection = styled.div`
  position: relative;
  display: flex;
  padding: 20px 0 20px 0;
  background-color: ${(props) => (props.green = "#D5EEFF")};
  background-color: ${(props) => (props.green = "#B6DBD0")};
  background-color: ${(props) => (props.orange = "black")};
`;

export const ProductImg = styled.img`
  width: 50%;
  z-index: 99;
`;

export const BackEllipse = styled.img`
  position: absolute;
  width: 50%;
  left: 5px;
  top: 0;
  z-index: 1;
`;

export const ProductDetails = styled.div``;

export const ProductName = styled.p`
  font-family: more_sugarregular;
  font-size: 18pt;
  color: #5d98a6;
  color: ${(props) => (props.green ? "#58907F" : "#5d98a6")};
`;
