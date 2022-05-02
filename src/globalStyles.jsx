import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #b1b1b1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.red};
  }
  :root{
    --swiper-theme-color: ${(props) => props.theme.colors.red};
  }
  html {
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      height: 100%;
      scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: -apple-system, "Space Grotesk", BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    letter-spacing: 0.1px;
    line-height: 1.8;
    background-color: ${(props) => props.theme.colors.white};
    overflow-y: scroll;
  }
  section{
    background-color: ${(props) => props.theme.colors.white};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    line-height: 1.2;
  }

  h1{
      font-size: ${(props) => props.theme.fontSize.h1Mobile};
      font-weight: 500;
      line-height: 1.3;
      color: ${(props) => props.theme.colors.white};
      padding: 0 15px;
      width: 100%;
      max-width: 825px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
      box-sizing: border-box
  }

  h2{
      font-size: ${(props) => props.theme.fontSize.h1Mobile};
      margin:0;
      padding:0;
      font-weight: 600;
      max-width: 450px;
  }

  h3{
  font-size: ${(props) => props.theme.fontSize.h3Mobile};
  font-weight: 700;
  position:relative;
  margin:0;
  padding:0;
  }

  h3:after {
  position: absolute;
  content: '';
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 50px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.red};
  margin: 0 auto;
  }

  h4{
      font-size: ${(props) => props.theme.fontSize.h4Mobile};
  margin:0;
  padding:0;
  }

  h5{
      font-size: ${(props) => props.theme.fontSize.h5Mobile};
  margin:0;
  padding:0;
  color: ${(props) => props.theme.colors.black}
  }

  h6{
      font-size: ${(props) => props.theme.fontSize.h6Mobile};
      color: ${(props) => props.theme.colors.gray};
  margin:0;
  padding:0;
  font-weight: 500;
  margin-bottom: 8px;
  }

  p{
    color: ${(props) => props.theme.colors.gray};
    font-weight: 400;
    letter-spacing: 0.1px;
  line-height: 1.8;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: ${(props) => props.theme.fontSize.h1Desktop};
    }

    h2{
    font-size: ${(props) => props.theme.fontSize.h2Desktop};
    }

    h3{
    font-size: ${(props) => props.theme.fontSize.h3Desktop};
    }

    h4{
        font-size: ${(props) => props.theme.fontSize.h4Desktop};
    }
  }
`;
