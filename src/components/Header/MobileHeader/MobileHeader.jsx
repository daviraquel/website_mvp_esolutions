import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../../hooks";

import { Header, HeaderContainer } from "../Header.styled";
import { DropdownMenu } from "./DropdownMenu";
import { HeaderLink } from "../HeaderLink/HeaderLink";
import { HamburguerIcon } from "./HamburguerIcon/HamburguerIcon";

import logo from "../../../assets/img/logoHeader.png";

export const MobileHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    return window.scrollY >= 50 ? setScrolled(true) : setScrolled(false);
  };

  window.addEventListener("scroll", changeBackground);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTechs, setOpenTechs] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));

  return (
    <Header scrolled={scrolled}>
      <HeaderContainer ref={node}>
        <HeaderLink img={logo} link="/" />
        <HamburguerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <DropdownMenu
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          openTechs={openTechs}
          setOpenTechs={setOpenTechs}
        />
      </HeaderContainer>
    </Header>
  );
};
