import styled from "styled-components";

export const CarouselContainer = styled.div`
  max-width: ${(props) => props.theme.width.maxDesktop};
  h2 {
    text-align: center;
    padding: 1em 0;
    margin: 0 auto;
  }
  p {
    text-align: center;
    margin-bottom: 50px;
  }
  img {
    display: block;
    max-width: 80%;
    max-height: 30vh;
    margin: 0 auto;
  }
  @media (min-width: ${(props) => props.theme.width.maxDesktop}) {
    margin: 0 auto;
  }
`;
