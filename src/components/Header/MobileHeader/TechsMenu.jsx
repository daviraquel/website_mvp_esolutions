import {
  StyledSecondLevelMenu,
  SecondLevelDropDownLink,
} from "./MobileHeader.styled";

import { techLinks } from "../../../utils/utils";

export const TechsMenu = ({ openTechs }) => {
  return (
    <StyledSecondLevelMenu openTechs={openTechs}>
      {techLinks.map((item, index) => (
        <SecondLevelDropDownLink key={index} openTechs={openTechs}>
          <a href={item.link}>{item.text}</a>
        </SecondLevelDropDownLink>
      ))}
    </StyledSecondLevelMenu>
  );
};
