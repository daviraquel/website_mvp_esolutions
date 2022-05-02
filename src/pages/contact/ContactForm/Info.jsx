import { FaMap, FaAddressBook } from "react-icons/fa";
import { ImClock } from "react-icons/im";

import { InfoContainer } from "./ContactForm.styled";

import { footerAdress } from "../../../utils/utils";

export const Info = () => {
  return (
    <InfoContainer>
      <ul>
        <li>
          <h4>
            <FaMap />
            Endereço
          </h4>
          <p>{footerAdress["street"]}</p>
          <p>{footerAdress["city"]}</p>
          <p>{footerAdress["postalCode"]}</p>
        </li>
        <li>
          <h4>
            <ImClock />
            Horário
          </h4>
          <p>Seg - Sex: 8:00 à 18:00 </p>
        </li>
        <li>
          <h4>
            <FaAddressBook />
            Contato
          </h4>
          <p>Fone: {footerAdress["phone"]}</p>
          <p>Email: {footerAdress["email"]}</p>
        </li>
      </ul>
    </InfoContainer>
  );
};
