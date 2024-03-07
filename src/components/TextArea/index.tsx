import React, { TextareaHTMLAttributes, useEffect } from "react";
import { TextareaContainer } from "./styles";
import { Field, FormikProps } from "formik";
import { ValidatorProps } from "@/helpers/validators";

interface TextareaProps {
  fieldName: string;
  currentForm: FormikProps<any>;
  validateFunction?: (props: ValidatorProps) => void;
}

export const Textarea: React.FC<
  TextareaHTMLAttributes<HTMLTextAreaElement> & TextareaProps
> = ({ fieldName, currentForm, validateFunction, ...rest }) => {
  const fieldProps = currentForm.getFieldProps(fieldName);
  useEffect(() => {
    if (validateFunction && currentForm.touched[fieldProps.name]) {
      currentForm.validateField(fieldProps.name);
    }
  }, [fieldProps.value, currentForm.touched[fieldProps.name]]);
  return (
    <TextareaContainer
      error={
        !!currentForm.errors[fieldProps.name] &&
        !!currentForm.touched[fieldProps.name]
      }
    >
      <Field
        as="textarea"
        {...fieldProps}
        {...rest}
        validate={() =>
          validateFunction && validateFunction({ value: fieldProps.value })
        }
      />
    </TextareaContainer>
  );
};
