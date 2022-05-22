import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 50%;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.white};
  transform: ${(props) =>
    props.menuOpen ? "translateX(0)" : "translateX(50px)"};
  opacity: ${(props) => (props.menuOpen ? "1" : "0")};
  transition: all 0.3s linear;
  position: absolute;
  top: 75%;
  right: 0;
  border-radius: 0.5em 0 0 0.5em;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
    display: ${(props) => (props.menuOpen ? "block" : "none")};
  }

  li:first-child {
    border-top: none;
  }
`;

export const DropDownLink = styled.li`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;

  a,
  button {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.colors.black};
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5em 5%;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  div {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const TechsButton = styled.button`
  position: absolute;
  height: 30px;
  top: 0;
  right: 0;
  background: transparent;
  padding: 0;
  margin: 5px 0;
  border: 0;
  color: ${(props) =>
    props.openTechs ? props.theme.colors.red : props.theme.colors.black};
  transition: all 0.1s linear;
  transform: ${(props) => (props.openTechs ? "rotate(45deg)" : "rotate(0)")};
  svg {
    height: 100%;
    width: 100%;
  }
`;

export const StyledSecondLevelMenu = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: ${(props) => props.theme.colors.white};
  transform: ${(props) =>
    props.openTechs ? "translateX(0)" : "translateX(50px)"};
  transition: all 0.2s linear;
`;

export const SecondLevelDropDownLink = styled.li`
  position: relative;
  display: ${(props) => (props.openTechs ? "block" : "none")};

  a {
    opacity: 0.75;
    font-size: ${(props) => props.theme.fontSize.small};
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5em 10%;
  }
`;
