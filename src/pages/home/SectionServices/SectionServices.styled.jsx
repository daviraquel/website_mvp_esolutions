import styled from "styled-components";

export const ServicesContainer = styled.div`
  text-align: center;
  flex-wrap: wrap;
  padding: 80px 1rem;
  max-width: 960px;
  margin: 0 auto;
  h2 {
    margin: 0 auto;
    text
  }

  @media (min-width: 1024px) {
  }
`;

export const ServiceCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .serviceCard {
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .serviceCard {
      max-width: 50%;
    }
  }
  @media (min-width: 992px) {
    .serviceCard {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  }
`;
