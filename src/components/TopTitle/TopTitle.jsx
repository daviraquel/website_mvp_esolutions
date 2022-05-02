import { TopTitleContainer } from "./TopTitle.styled";
import background from "../../assets/img/background.png";

export const TopTitle = ({ spanText, text }) => {
  return (
    <TopTitleContainer>
      <img src={background} alt="electric car and bike" />
      <h1>
        <span>{spanText}</span>
        {text}
      </h1>
    </TopTitleContainer>
  );
};
