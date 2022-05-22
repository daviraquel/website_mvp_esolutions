import { Link } from "react-router-dom";

import { MainTitleContainer } from "./LandingTitle.styled";
import background from "../../assets/img/background.png";

export const LandingTitle = () => {
  const handleClick = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <MainTitleContainer>
      <img src={background} alt="electric car and bike" />
      <h1>Acelerando a eletrificação de veículos no Brasil</h1>
      <Link
        id="arrowLink"
        onClick={() => {
          handleClick();
        }}
      >
        <svg>
          <polyline points="1.8,1.6 24,20.4 46.2,1.6 "></polyline>
        </svg>
      </Link>
    </MainTitleContainer>
  );
};
