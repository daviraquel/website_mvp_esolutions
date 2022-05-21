import { StyledHeaderLink } from "../Header.styled";

export const HeaderLink = ({ text, link, img, drop }) => {
  return drop ? (
    <StyledHeaderLink className="dropHover" to={link}>
      {text}
    </StyledHeaderLink>
  ) : img ? (
    <StyledHeaderLink to={link}>
      <img src={img} alt="LOGO MVP" />
    </StyledHeaderLink>
  ) : (
    <StyledHeaderLink className="headerLink headerText" to={link}>
      {text}
    </StyledHeaderLink>
  );
};
