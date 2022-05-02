import { Form } from "./Form";
import { Info } from "./Info";

import { SectionContainer } from "./ContactForm.styled";

export const ContactForm = () => {
  return (
    <section>
      <SectionContainer>
        <Form />
        <Info />
      </SectionContainer>
    </section>
  );
};
