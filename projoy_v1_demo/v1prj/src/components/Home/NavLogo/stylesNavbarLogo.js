import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #85987d;
  border-radius: 25px;
  width: 50%;
  height: 100%;
  margin: 20px auto;
`;

export const Logo = styled.div``;

export const LogoImg = styled.img`
  width: 100%;
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForText = styled.span`
  font-family: "chewyregular";
  font-size: 12pt;
  margin-right: 4px;
  letter-spacing: 2px;
  color: #85987d; // #ffcc7a;
`;

export const HappyText = styled.span`
  font-family: "more_sugarregular";
  font-size: 18pt;
  color: #85987d; // #ffcc7a;
`;
