import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: ${(props) => (props.scrolled ? "fixed" : "absolute")};
  background-color: ${(props) =>
    props.scrolled ? props.theme.colors.black : "transparent"};
  width: 100%;
  padding: ${(props) => (props.scrolled ? "0" : "25px 0")};
  box-sizing: border-box;
  transition: all 0.3s;
  z-index: 99;
`;

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  max-width: 1110px;
  align-items: center;
`;

export const StyledHeaderLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSize.small};
  padding: 15px;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s;
  display: block;
  color: ${(props) => props.theme.colors.white};

  :hover {
    color: ${(props) => props.theme.colors.red};
  }

  img {
    height: 25px;
  }
`;
