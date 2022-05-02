import { AboutContainer } from "./SectionAbout.styled";
import aboutImage from "../../../assets/img/about.jpg";

import { aboutText } from "../../../utils/utils";

export const SectionAbout = () => {
  return (
    <section id="about">
      <AboutContainer>
        <div>
          <h6>About Us</h6>
          <h2>
            We are <span>Professional Teams</span> to Grow your Business
          </h2>
          <p>{aboutText}</p>
          <a href="/construction">Read More</a>
        </div>
        <div>
          <div className="aboutImageContainer">
            <img src={aboutImage} alt="about us" />
          </div>
        </div>
      </AboutContainer>
    </section>
  );
};
