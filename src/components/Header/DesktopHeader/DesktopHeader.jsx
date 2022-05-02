import { useState } from "react";

import { HeaderLink } from "../HeaderLink/HeaderLink";
import { HeaderLinkGroup } from "./DesktopHeader.styled";

import { Header, HeaderContainer } from "../Header.styled";
import logo from "../../../assets/img/logoHeader.png";
import { techLinks } from "../../../utils/utils";

export const DesktopHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    return window.scrollY >= 50 ? setScrolled(true) : setScrolled(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Header scrolled={scrolled}>
      <HeaderContainer>
        <HeaderLink img={logo} link="/" />
        <HeaderLinkGroup>
          <HeaderLink id="linkHome" text="Home" link="/" />
          <HeaderLink id="linkAbout" text="Sobre" link="/#about" />
          <div className="dropdown">
            <HeaderLink
              id="linkTech"
              text="Tecnologia"
              link="/techs"
              drop={true}
            />
            <ul className="dropdown-content">
              {techLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </HeaderLinkGroup>
        <HeaderLink id="linkContact" text="Contato" link="/contact" />
      </HeaderContainer>
    </Header>
  );
};
