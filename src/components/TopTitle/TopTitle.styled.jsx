import styled from "styled-components";

export const TopTitleContainer = styled.section`
  height: 50vh;
  position: relative;
  background-color: transparent;
  img {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  h1 {
    font-weight: 900;
    top: 60%;
  }
  span {
    color: ${(props) => props.theme.colors.red};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 7px;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    margin: 0 0 1.25rem 0;
    display: block;
  }
`;
