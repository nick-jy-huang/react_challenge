import styled from "styled-components";

export const DragContainer = styled.div<{ $top: number; $left: number }>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
`;

export const CloseWrap = styled.div`
  position: absolute;
  top: 50px;
  right: 30px;
`;
