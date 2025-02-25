import { useState } from "react";
import dotImage from "@/assets/dots.png";

import { MenuContainer, MenuList, MenuItem, CloseButton } from "./style";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuContainer onClick={() => setIsOpen(!isOpen)}>
        <img src={dotImage} alt="dot" width={"40px"} />
        <MenuList $isOpen={isOpen}>
          <MenuItem>Remove Student</MenuItem>
          <MenuItem>All +1</MenuItem>
        </MenuList>
      </MenuContainer>
      {isOpen && <CloseButton onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Menu;
