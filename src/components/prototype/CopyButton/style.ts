import styled from "styled-components";

export const Copy = styled.button`
  all: unset;
  display: flex;
  width: 24px;
  height: 24px;
  padding: 10px;
  background: #0091f6;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    filter: brightness(1.1);
  }
`;
