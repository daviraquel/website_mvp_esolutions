import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    red: "#ff0000",
    white: "#fafafa",
    gray: "#707070",
    lightGray: "#cacaca",
    black: "#232323",
    navyBlue: "#0c1923",
  },
  fonts: {
    poppins: "Poppins, sans-serif",
    space: "Space Grotesk, sans-serif",
  },
  fontSize: {
    small: "14px",
    medium: "2em",
    large: "3em",

    h1Mobile: "2rem",
    h2Mobile: "2rem",
    h3Mobile: "25px",
    h4Mobile: "20px",
    h5Mobile: "1.25rem",
    h6Mobile: "1rem",

    h1Desktop: "50px",
    h2Desktop: "3rem",
    h3Desktop: "40px",
    h4Desktop: "20px",
  },
  width: {
    maxDesktop: "1140px",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
