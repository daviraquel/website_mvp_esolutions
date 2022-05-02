import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ContactForm } from "./ContactForm/ContactForm";
import { Location } from "./Location/Location";
import { TopTitle } from "../../components/TopTitle/TopTitle";

import { ContactPageContainer } from "./Contact.styled";

import { titles } from "../../utils/utils";

export const Contact = () => {
  document.title = "Contato";
  return (
    <ContactPageContainer>
      <Header />
      <TopTitle
        text={titles.contactPage.text}
        spanText={titles.contactPage.spanText}
      />
      <ContactForm />
      <Location />
      <Footer />
    </ContactPageContainer>
  );
};
