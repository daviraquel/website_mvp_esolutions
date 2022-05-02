import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  h3 {
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    font-weight: 500;
    position: relative;
    padding-bottom: 20px;
    margin: 0 0 1.25rem 0;
  }
  h3:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 2px;
    margin: 0;
  }
  ul,
  p {
    list-style: none;
    opacity: 0.7;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.white};
  }
  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.colors.red};
  }

  #footerContact li:nth-child(4) {
    margin: 10px 0;
  }

  #footerPages li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  #footerPages svg {
    color: ${(props) => props.theme.colors.red};
  }

  #acate {
    opacity: 1;
  }

  #acate a {
    padding: 16px 10px;
    display: block;
    width: 65%;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
  @media (min-width: 768px) {
    #acate a {
      max-width: 25vw;
    }
    h3 {
      font-size: 24px;
      padding-bottom: 20px;
    }
  }
`;

export const FlexFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 80px 15px;
  @media (min-width: 992px) {
    flex-direction: row;
    max-width: ${(props) => props.theme.width.maxDesktop};
    padding: 150px 30px;
    gap: 30px;
    margin: 0 auto;
    div {
      width: 25%;
    }
  }
`;

export const Copyrights = styled.div`
  border-top: 1px solid #232a35;
  div {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }
  p {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    color: ${(props) => props.theme.colors.white};
    margin: 0;
    opacity: 0.7;
    padding: 16px 0;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px 10px;
  }
  a {
    font-size: 16px;
    padding: 16px 10px;
    opacity: 0.7;
    box-sizing: border-box;
    font-weight: bold;
  }
  @media (min-width: 992px) {
    div {
      flex-direction: row;
      margin: 0 auto;
      justify-content: space-between;
      max-width: ${(props) => props.theme.width.maxDesktop};
    }
  }
`;
