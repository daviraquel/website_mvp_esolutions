import { FaLinkedin } from "react-icons/fa";

import { TeamCardStyled } from "./SectionTeam.styled";

export const TeamCard = ({ img, url, name, position }) => {
  const path = img[Object.keys(img)[0]];
  return (
    <TeamCardStyled>
      <img src={path} alt={name} />
      <a href={url}>
        <FaLinkedin />
      </a>
      <h4>
        {name}
        <span>{position}</span>
      </h4>
    </TeamCardStyled>
  );
};
