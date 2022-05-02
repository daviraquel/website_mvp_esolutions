import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 100px 15px;
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.width.maxDesktop};
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 150px 50px;
  }
`;

export const FormContainer = styled.div`
  h2 {
    margin: 0 0 1.25rem 0;
  }
  p {
    margin: 0 0 25px 0;
  }
  span {
    color: green;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input,
  textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid #cacaca;
    border-radius: 3px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    box-sizing: border-box;
  }
  input:focus,
  textarea:focus {
    outline: none !important;
    border: 2px solid red;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};
  }

  input[type="submit"] {
    width: fit-content;
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    border: none !important;
    cursor: pointer;
    padding: 15px 25px;
    border-radius: 3px;
    transition: 0.3s;
    border-radius: 50px !important;
  }
  input[type="submit"]:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.red};
  }
  @media only screen and (min-width: 768px) {
    form {
      flex-direction: row;
      flex-wrap: wrap;
    }

    input {
      max-width: 40%;
    }
  }
`;

export const InfoContainer = styled.div`
  padding: 45px 30px;

  h4 {
    position: relative;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    line-height: 1.8;
    opacity: 0.8;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding-left: 40px;
    margin-bottom: 30px;
  }

  svg {
    height: 24px;
    width: 24px;
    position: absolute;
    left: -20%;
    font-family: "Font Awesome";
    content: "\f101";
    font-size: 15px;
    color: red;
  }
`;
