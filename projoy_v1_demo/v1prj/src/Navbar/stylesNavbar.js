import styled from "styled-components";

import {MenuOutlined} from "@ant-design/icons";

export const Container = styled.div`
  background-color: #5d98a6;
  height: 10vh;
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  padding: 7px;
`;

export const LogoImg = styled.img`
  width: 50px;
`;

export const Content = styled.div``;

export const StyledMenuOutlined = styled(MenuOutlined)`
  background-color: #fae0be;
  width: 20px;
  color: #5d98a6;
  font-size: 20px;
  margin: 0 20px 5px 0;
  padding: 6px;
  border-radius: 10px;
`;
