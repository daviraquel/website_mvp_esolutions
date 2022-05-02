import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { TopTitle } from "../../components/TopTitle/TopTitle";
import { TechSection } from "./TechSection/TechSection";

import { TechsPageContainer } from "./Techs.styled";

import { titles, techContent } from "../../utils/utils";

export const Techs = () => {
  document.title = "Tecnologia";
  return (
    <TechsPageContainer>
      <Header />
      <TopTitle
        text={titles.techsPage.text}
        spanText={titles.techsPage.spanText}
      />
      <TechSection
        img={techContent.motor.img}
        alt={techContent.motor.alt}
        title={techContent.motor.title}
        spanText={techContent.motor.spanText}
        contentText={techContent.motor.contentText}
        link={techContent.motor.link}
      />
      <TechSection
        img={techContent.inverter.img}
        alt={techContent.inverter.alt}
        title={techContent.inverter.title}
        spanText={techContent.inverter.spanText}
        contentText={techContent.inverter.contentText}
        link={techContent.inverter.link}
      />
      <TechSection
        img={techContent.vcu.img}
        alt={techContent.vcu.alt}
        title={techContent.vcu.title}
        spanText={techContent.vcu.spanText}
        contentText={techContent.vcu.contentText}
        link={techContent.vcu.link}
      />
      <Footer />
    </TechsPageContainer>
  );
};
