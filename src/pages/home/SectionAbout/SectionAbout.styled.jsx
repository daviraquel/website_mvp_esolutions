import styled from "styled-components";

export const AboutContainer = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  padding: 80px 0;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme.colors.red};
  }

  h2 {
    text-align: left;
    margin-bottom: 32px;
  }

  p {
    margin-bottom: 1.25rem;
  }

  a {
    display: inline-block;
    font-weight: 400;
    padding: 10px 28px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.red};
    border-color: ${(props) => props.theme.colors.red};
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    text-decoration: none;
  }
  a:hover {
    background-color: #b00000;
    -webkit-box-shadow: 0 4px 12px rgb(255 0 0 / 30%);
    box-shadow: 0 4px 12px rgb(255 0 0 / 30%);
  }

  div {
    padding: 1rem;
    box-sizing: border-box;
  }

  .aboutImageContainer {
    padding: 0;
    margin: 15px auto;
    width: auto;
    max-width: 500px;
    border-radius: 12px;
    overflow: hidden;
    -webkit-box-shadow: 0 8px 16px rgb(109 114 139 / 30%);
    box-shadow: 0 8px 16px rgb(109 114 139 / 30%);
  }

  img {
    width: 100%;
    vertical-align: middle;
    border-style: none;
  }

  @media (min-width: 1024px) {
    div {
      max-width: 50%;
    }
  }
`;
