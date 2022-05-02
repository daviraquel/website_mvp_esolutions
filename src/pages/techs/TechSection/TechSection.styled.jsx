import styled from "styled-components";

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: ${(props) => props.theme.width.maxDesktop};
  margin: 0 auto;
  padding: 4em 2em;
  p {
    color: ${(props) => props.theme.colors.black};
  }
  span {
    color: ${(props) => props.theme.colors.red};
  }
  a {
    display: block;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.red};
    padding: 10px 20px;
    width: fit-content;
    margin-top: 1.5rem;
    text-decoration: none;
    box-sizing: border-box;
    border-radius: 50px;
    transition: 0.3s;
  }
  a:hover {
    color: ${(props) => props.theme.colors.red};
    background-color: ${(props) => props.theme.colors.black};
  }
  .techImg {
    padding: 50px 0;
  }
  img {
    max-width: 100%;
    max-height: 50vh;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    div {
      max-width: 50%;
    }
    img {
      max-height: 100%;
    }
  }
`;
