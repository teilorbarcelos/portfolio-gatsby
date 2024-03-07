export interface ValidatorProps {
  value: string;
  message?: string;
}

export const notEmpty = (value: string) => {
  if (!value) {
    return false;
  }
  return true;
};

export const isEmail = (value: string) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return false;
  }
  return true;
};

export const validator = {
  required: ({ value, message = "Campo obrigatório." }: ValidatorProps) => {
    if (!notEmpty(value)) {
      return message;
    }
    return undefined;
  },
  email: ({ value, message = "E-mail inválido." }: ValidatorProps) => {
    if (!isEmail(value)) {
      return message;
    }
    return undefined;
  },
};
