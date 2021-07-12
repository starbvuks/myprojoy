import styled from "styled-components";
import {ShoppingCartOutlined, ShoppingTwoTone} from "@ant-design/icons";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0;
  width: 100%;
`;

export const ProductSection = styled.div`
  position: relative;
  display: flex;
  padding: 0 0 20px 0;
`;

export const ProductImg = styled.img`
  width: 45%;
  z-index: 99;
  // background-color: #eef2ae;
  border-radius: 15px;
  margin-left: 10px;
`;

export const BackEllipse = styled.img`
  position: absolute;
  width: 50%;
  bottom: 25px;
  z-index: 1;
`;

export const ProductDetails = styled.div``;

export const ProductName = styled.p`
  font-family: more_sugarregular;
  font-size: 18pt;
  color: #5d98a6;
`;
export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
`;

export const AddText = styled.span`
  font-family: more_sugarregular;
  font-size: 12pt;
  color: #40736c;
`;

export const ShoppingTwoToneIcon = styled(ShoppingTwoTone)`
  font-size: 36px;
  padding-left: 10px;
`;
