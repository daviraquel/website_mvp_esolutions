import styled from "styled-components";

export const FlexCardSection = styled.div`
  max-width: ${(props) => props.theme.width.maxDesktop};
  margin: 0 auto;
  text-align: center;
  padding: 50px 0;
  h3 {
    padding: 0 0 15px;
    margin: 0 0 1.25rem;
  }
  p {
    max-width: 530px;
    display: block;
    margin: 0 auto;
  }
  span {
    color: ${(props) => props.theme.colors.red};
  }
`;

export const FlexCardContainer = styled.div`
  overflow: auto;
  display: flex;
  max-width: ${(props) => props.theme.width.maxDesktop};
  padding: 80px 15px 0;
  gap: 30px;
  div {
    width: 350px;
  }
  @media (min-width: 992px) {
    justify-content: space-between;
    div {
      max-width: 30%;
    }
  }
  @media (min-width: 1040px) {
    margin: 0 auto;
    justify-content: space-between;
    div {
      max-width: 350px;
      width: 350px;
    }
  }
`;
