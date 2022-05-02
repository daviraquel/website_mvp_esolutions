import { Header } from "../../components/Header/Header";
import { LandingTitle } from "../../components/LandingTitle/LandingTitle";
import { SectionAbout } from "./SectionAbout/SectionAbout";
import { SectionServices } from "./SectionServices/SectionServices";
import { SectionTeam } from "./SectionTeam/SectionTeam";
import { SectionTechs } from "./SectionTechs/SectionTechs";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <LandingTitle />
      <SectionAbout />
      <SectionServices />
      <SectionTeam />
      <SectionTechs />
      <Footer />
    </>
  );
};
