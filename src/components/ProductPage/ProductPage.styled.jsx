import styled from "styled-components";

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${(props) => props.theme.width.maxDesktop};
  margin: 0 auto;
  padding: 4em 2em;
  img {
    padding: 50px 0 0;
    max-height: 30vh;
    max-width: 100%;
  }
  div {
    max-width: 100%;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    img {
      padding: 0 0 0 50px;
    }
    div {
      max-width: 50%;
    }
  }
`;
