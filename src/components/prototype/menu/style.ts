import styled from "styled-components";

export const MenuContainer = styled.div`
  top: 20px;
  right: 20px;
  color: white;
  cursor: pointer;
  img:hover {
    filter: invert(0.5);
  }
`;

export const MenuList = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  background: white;
  color: black;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  padding: 8px;
  position: absolute;
  right: 20px;
  width: 140px;
  z-index: 1;
`;

export const MenuItem = styled.a`
  display: block;
  padding: 8px;
  color: black;
  font-size: 16px;
  text-align: right;
  &:hover {
    background: #f0f0f0;
    border-radius: 5px;
  }
`;

export const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
