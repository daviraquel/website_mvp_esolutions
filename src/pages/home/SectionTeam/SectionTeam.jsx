import {
  FlexCardSection,
  FlexCardContainer,
} from "../FlexCardContainer/FlexCardContainer.styled";

import { TeamCard } from "./TeamCard";

import { teamText, teamInfo } from "../../../utils/utils";

export const SectionTeam = () => {
  return (
    <section>
      <FlexCardSection>
        <h3>
          Our <span>Team</span>
        </h3>
        <p>{teamText}</p>
        <FlexCardContainer>
          {teamInfo.map((card, index) => (
            <TeamCard
              key={index}
              img={card.img}
              url={card.url}
              name={card.name}
              position={card.position}
            />
          ))}
        </FlexCardContainer>
      </FlexCardSection>
    </section>
  );
};
