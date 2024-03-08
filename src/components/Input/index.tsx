import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
} from "react";
import { InputContainer } from "./styles";
import { Field, FormikProps } from "formik";
import { ValidatorProps } from "@/helpers/validators";

interface InputProps {
  fieldName: string;
  currentForm: FormikProps<any>;
  validateFunction?: (props: ValidatorProps) => void;
  mask?: (e: string, key?: string) => string;
}

export const Input: React.FC<
  InputHTMLAttributes<HTMLInputElement> & InputProps
> = ({ fieldName, currentForm, validateFunction, mask, ...rest }) => {
  const fieldProps = currentForm.getFieldProps(fieldName);
  useEffect(() => {
    if (validateFunction && currentForm.touched[fieldProps.name]) {
      currentForm.validateField(fieldProps.name);
    }
  }, [fieldProps.value, currentForm.touched[fieldProps.name]]);

  const maskInput = useCallback(
    (e: string, key?: string) => {
      if (mask) {
        const formattedValue = mask(e, key);
        currentForm.setFieldValue(fieldProps.name, formattedValue);
      }
    },
    [mask]
  );

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
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          maskInput(e.currentTarget.value, e.key)
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          maskInput(e.target.value)
        }
        validate={() =>
          validateFunction && validateFunction({ value: fieldProps.value })
        }
      />
    </InputContainer>
  );
};
