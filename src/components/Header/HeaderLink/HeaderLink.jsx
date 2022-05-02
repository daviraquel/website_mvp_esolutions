import { StyledHeaderLink } from "../Header.styled";

export const HeaderLink = ({ text, link, img, drop }) => {
  return drop ? (
    <StyledHeaderLink className="dropHover" href={link}>
      {text}
    </StyledHeaderLink>
  ) : img ? (
    <StyledHeaderLink href={link}>
      <img src={img} alt="LOGO MVP" />
    </StyledHeaderLink>
  ) : (
    <StyledHeaderLink className="headerLink headerText" href={link}>
      {text}
    </StyledHeaderLink>
  );
};
