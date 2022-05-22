import { RiArrowRightSLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import {
  footerAboutText,
  footerAdress,
  footerLinks,
  acateLinks,
} from "../../utils/utils";

import { FooterStyled, FlexFooter, Copyrights } from "./Footer.styled";

export const Footer = () => {
  const contactInfo = [];
  for (const key in footerAdress) {
    contactInfo.push(footerAdress[key]);
  }
  return (
    <FooterStyled>
      <FlexFooter>
        <div>
          <h3>Sobre</h3>
          <p>{footerAboutText}</p>
        </div>
        <div id="footerContact">
          <h3>Contato</h3>
          <ul>
            {contactInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="footerPages">
          <h3>Pages</h3>
          <ul>
            {footerLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  <RiArrowRightSLine />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul id="acate">
            {acateLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.img} alt={item.text} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FlexFooter>
      <Copyrights>
        <div>
          <p>
            Copyrights © 2022 - MVP e-solutions, All Rights Reserved.
            <a
              href="https://www.linkedin.com/in/daviraquel/"
              target="_blank"
              rel="noreferrer"
            >
              Desenvolvido por Davi Raquel
            </a>
          </p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/mvpesolutions/"
                target="_blank"
                rel="noreferrer"
              >
                <GrInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/mvpesolutions/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </Copyrights>
    </FooterStyled>
  );
};
