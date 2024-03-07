import React, { InputHTMLAttributes, useEffect } from "react";
import { InputContainer } from "./styles";
import { Field, FieldInputProps, FormikProps } from "formik";
import { ValidatorProps } from "@/helpers/validators";

interface InputProps {
  fieldName: string;
  currentForm: FormikProps<any>;
  validateFunction?: (props: ValidatorProps) => void;
}

export const Input: React.FC<
  InputHTMLAttributes<HTMLInputElement> & InputProps
> = ({ fieldName, currentForm, validateFunction, ...rest }) => {
  const fieldProps = currentForm.getFieldProps(fieldName);
  useEffect(() => {
    if (validateFunction && currentForm.touched[fieldProps.name]) {
      currentForm.validateField(fieldProps.name);
    }
  }, [fieldProps.value, currentForm.touched[fieldProps.name]]);
  return (
    <InputContainer
      error={
        !!currentForm.errors[fieldProps.name] &&
        !!currentForm.touched[fieldProps.name]
      }
    >
      <Field
        {...fieldProps}
        {...rest}
        validate={() =>
          validateFunction && validateFunction({ value: fieldProps.value })
        }
      />
    </InputContainer>
  );
};
