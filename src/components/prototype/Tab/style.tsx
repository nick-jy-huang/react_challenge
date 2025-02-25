import styled from "styled-components";

export const TabButton = styled.button<{ $actived: boolean }>`
  all: unset;
  width: 205px;
  height: 30px;
  padding: 15px 0px;
  margin-right: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 24px;
  font-weight: 600;
  color: ${({ $actived }) => ($actived ? "#0091f6" : "black")};
  background: ${({ $actived }) => ($actived ? "white" : "#d6d6d6")};
  cursor: ${({ $actived }) => ($actived ? "default" : "pointer")};
  transition: 0.3s;
  &:hover {
    background: white;
  }
`;
