import React from "react";
import {
  BlockTitle,
  BlockText,
} from "@/components/Header/components/BlockPieces";
import { AvatarBlock } from "../AvatarBlock";
import { SubmitButton } from "../SubmitButton";
import { Input } from "../Input";
import {
  ContactBlockFormContainer,
  ContactBlockFormInlineContainer,
} from "./styles";
import { Textarea } from "../TextArea";
import { Formik } from "formik";
import { validator } from "@/helpers/validators";

interface ContactBlockFormProps {
  name: string;
  email: string;
  text: string;
}

export const ContactBlock: React.FC = () => {
  const handleSubmit: (
    values: ContactBlockFormProps,
    {
      setSubmitting,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
    }
  ) => void = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log("🚀 ~ values:", values);
    setSubmitting(false);
  };

  return (
    <AvatarBlock>
      <BlockTitle>Entre em Contato</BlockTitle>
      <BlockText>Basta enviar aqui a sua mensagem com nome e e-mail.</BlockText>
      <Formik
        initialValues={{ name: "", email: "", text: "" }}
        onSubmit={handleSubmit}
      >
        {(form) => (
          <ContactBlockFormContainer onSubmit={form.handleSubmit}>
            <ContactBlockFormInlineContainer>
              <Input
                placeholder="Digite o Nome"
                maxLength={50}
                fieldName="name"
                currentForm={form}
                validateFunction={validator.required}
              />
              <Input
                placeholder="Digite o e-mail"
                maxLength={50}
                fieldName="email"
                currentForm={form}
                validateFunction={validator.email}
              />
            </ContactBlockFormInlineContainer>
            <Textarea
              placeholder="Digite sua mensagem"
              maxLength={2000}
              fieldName="text"
              currentForm={form}
              validateFunction={validator.required}
            />
            <SubmitButton type="submit" disabled={form.isSubmitting}>
              Enviar
            </SubmitButton>
          </ContactBlockFormContainer>
        )}
      </Formik>
    </AvatarBlock>
  );
};
