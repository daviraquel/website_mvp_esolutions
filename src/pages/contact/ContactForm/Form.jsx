import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormContainer } from "./ContactForm.styled";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/5da9e750-c279-11ec-8a97-0352796ee266";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

export const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setSubmitted(true);
  };

  return (
    <FormContainer>
      <h2>Ficou interessado?</h2>
      <p>
        Ficou com dúvidas ou se interessou em trabalhar conosco? Preencha o
        formulário abaixo. Se desejar, você também pode entrar em contato
        através do e-mail ou telefone.
      </p>
      <form
        action={FORM_ENDPOINT}
        method="POST"
        target="_blank"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Nome"
          name="name"
          id="name"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
        />
        <input
          {...register("phone")}
          type="tel"
          placeholder="Telefone"
          name="phone"
          id="phone"
        />
        <input
          {...register("subject")}
          type="text"
          placeholder="Assunto"
          name="subject"
          id="subject"
        />
        <textarea
          {...register("message")}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Mensagem"
        />
        <input type="submit" value="Enviar" />
      </form>
      {submitted ? (
        <span>Mensagem enviada! Entraremos em contato em breve.</span>
      ) : null}
    </FormContainer>
  );
};
