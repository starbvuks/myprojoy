import styled from "styled-components";

import {MenuOutlined} from "@ant-design/icons";
import {ShoppingCartOutlined} from "@ant-design/icons";

export const Container = styled.div`
  height: 10vh;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #e9ddea;
`;

export const StyledMenu = styled.img`
  width: 30px;
  padding: 12px 0 0 12px;
`;

export const StyledShoppingCart = styled.img`
  padding: 12px 12px 0 0;
  width: 30px;
`;
