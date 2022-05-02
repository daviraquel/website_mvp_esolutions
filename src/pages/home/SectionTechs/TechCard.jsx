import { FaNewspaper } from "react-icons/fa";
import { TechCardStyled } from "./SectionTechs.styled";

export const TechCard = ({ name, description, img, url }) => {
  const path = img[Object.keys(img)[0]];
  return (
    <TechCardStyled>
      <img src={path} alt={name} />
      <h4>{name}</h4>
      <span>{description}</span>
      <a href={url}>
        <FaNewspaper />
        Saiba Mais
      </a>
    </TechCardStyled>
  );
};
