import { MainTitleContainer } from "./LandingTitle.styled";
import background from "../../assets/img/background.png";
import { Link } from "react-router-dom";

export const LandingTitle = () => {
  return (
    <MainTitleContainer>
      <img src={background} alt="electric car and bike" />
      <h1>Acelerando a eletrificação de veículos no Brasil</h1>
      <Link id="arrowLink" to="#about">
        <svg>
          <polyline points="1.8,1.6 24,20.4 46.2,1.6 "></polyline>
        </svg>
      </Link>
    </MainTitleContainer>
  );
};
