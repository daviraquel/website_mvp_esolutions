import { FaMapMarkerAlt } from "react-icons/fa";

import { TitleContainer } from "./Location.styled";
import { Map } from "./Map";

export const Location = () => {
  return (
    <section>
      <TitleContainer>
        <h2>
          <FaMapMarkerAlt />
          Nosso escritório
        </h2>
      </TitleContainer>
      <Map />
    </section>
  );
};
