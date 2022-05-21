import styled from "styled-components";

export const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  div {
    position: relative;
    z-index: 1;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
  }
  .dropdown:hover .dropdown-content {
    display: block;
    z-index: 1;
  }
  ul {
    top: 100%;
    right: 0;
    list-style: none;
    margin: 0 auto;
    padding: 15px;
    background: ${(props) => props.theme.colors.white};
    border-radius: 8px;
  }
  li {
    width: 220px;
  }

  li .dropdownLink {
    transition: color 0.3s;
    color: black;
    font-size: ${(props) => props.theme.fontSize.small};
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 8px;
  }

  li .dropdownLink:hover {
    color: red;
  }
`;
