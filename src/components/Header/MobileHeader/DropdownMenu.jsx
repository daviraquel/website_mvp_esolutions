import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TechsMenu } from "./TechsMenu";
import { StyledMenu, DropDownLink, TechsButton } from "./MobileHeader.styled";

import { dropdownLinks } from "../../../utils/utils";

export const DropdownMenu = ({ menuOpen, openTechs, setOpenTechs }) => {
  const handletechs = () => {
    setOpenTechs(!openTechs);
  };

  return (
    <StyledMenu menuOpen={menuOpen}>
      <ul>
        {dropdownLinks.map((item, index) => (
          <DropDownLink key={index}>
            <Link to={item.link}>{item.text}</Link>
            {item.more ? (
              <TechsButton openTechs={openTechs} onClick={() => handletechs()}>
                <FaPlus />
              </TechsButton>
            ) : null}
            {item.more ? <TechsMenu openTechs={openTechs} /> : null}
          </DropDownLink>
        ))}
      </ul>
    </StyledMenu>
  );
};
