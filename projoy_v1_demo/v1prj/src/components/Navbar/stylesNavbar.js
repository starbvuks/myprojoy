import styled from "styled-components";

import {MenuOutlined} from "@ant-design/icons";
import {ShoppingCartOutlined} from "@ant-design/icons";

export const Container = styled.div`
  background-color: #4a5e6e;
  height: 10vh;
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px 0 0;
  align-items: center;
  color: #e9ddea;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0 0 7px;
`;

export const LogoImg = styled.img`
  width: 55px;
`;

export const StyledMenuOutlined = styled(MenuOutlined)`
  font-size: 20px;
`;

export const StyledShoppingCartOutlined = styled(ShoppingCartOutlined)`
  font-size: 25px;
  margin: 0 15px 0 0;
`;
