import styled from "styled-components";

export const Main = styled.div``;

export const Blue = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #f2f2f2;
  width: 100%;
  margin-top: -50px;
`;

export const SpanTop = styled.span`
  position: absolute;
  font-family: more_sugarregular;
  font-size: 120%;
  top: 50px;
`;

export const SpanBot = styled.span`
  position: absolute;
  font-family: more_sugarregular;
  font-size: 120%;
  top: 75px;
`;

export const BlueBubble = styled.img`
  width: 40%;
  position: absolute;
`;

export const Title = styled.p`
  font-family: "Balsamiq Sans", cursive;
  font-weight: 700;
  text-align: center;
  font-size: 24pt;
  color: #5d98a6;
  margin: 40% 0 0 0;
`;

export const Sub = styled.p`
  font-family: "Balsamiq Sans", cursive;
  font-weight: 400;
  text-align: center;
  font-size: 18pt;
  color: #f2a285;
  margin: 2% 0 0 0;
`;
