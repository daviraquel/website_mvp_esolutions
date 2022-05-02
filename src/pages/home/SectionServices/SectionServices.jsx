import {
  ServicesContainer,
  ServiceCardsContainer,
} from "./SectionServices.styled";

import { ServiceCard } from "./ServiceCard";

import { servicesTitle, servicesCards } from "../../../utils/utils";

export const SectionServices = () => {
  return (
    <section>
      <ServicesContainer>
        <h6>Our Services</h6>
        <h2>{servicesTitle}</h2>
        <ServiceCardsContainer>
          {servicesCards.map((card, index) => (
            <ServiceCard key={index} text={card.text} img={card.img} />
          ))}
        </ServiceCardsContainer>
      </ServicesContainer>
    </section>
  );
};
