import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-70deg, #3f4590 50%, #4dcccf 50%);
`;

export const DemoButton = styled.button`
  all: unset;
  padding: 16px;
  margin-top: 24px;
  cursor: pointer;
  background: white;
  margin-right: 24px;
  border-radius: 24px;
  &:hover {
    background: #ebebeb;
  }
`;
