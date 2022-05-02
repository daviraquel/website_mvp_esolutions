import {
  FlexCardSection,
  FlexCardContainer,
} from "../FlexCardContainer/FlexCardContainer.styled";

import { TechCard } from "./TechCard";

import { techsText, techsInfo } from "../../../utils/utils";

export const SectionTechs = () => {
  return (
    <section>
      <FlexCardSection>
        <h3>
          <span>Nossa</span> Tecnologia
        </h3>
        <p>{techsText}</p>
        <FlexCardContainer>
          {techsInfo.map((card, index) => (
            <TechCard
              key={index}
              name={card.name}
              description={card.description}
              img={card.img}
              url={card.url}
            />
          ))}
        </FlexCardContainer>
      </FlexCardSection>
    </section>
  );
};
