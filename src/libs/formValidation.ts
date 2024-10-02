import { FormFieldsType } from "@/types";

import { RegisterOptions } from "react-hook-form";

export const baseValidationRules: Record<keyof FormFieldsType, RegisterOptions> = {
  name: {
    minLength: {
      value: 2,
      message: "El nombre debe tener al menos 2 caracteres",
    },
  },
  phone: {
    validate: (value: string) => {
      const phoneRegex = /^(\+34|0034|34)?[6789]\d{8}$/;
      return (
        !value ||
        phoneRegex.test(value) ||
        "Ingrese un número de teléfono español válido"
      );
    },
  },
  email: {
    validate: (value: string) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return (
        !value ||
        emailRegex.test(value) ||
        "Ingrese un correo electrónico válido"
      );
    },
  },
  nameBusiness: {
    minLength: {
      value: 2,
      message: "El nombre del negocio debe tener al menos 2 caracteres",
    },
  },
  selectBusiness: {},
  message: {
    minLength: {
      value: 10,
      message: "El mensaje debe tener al menos 10 caracteres",
    },
    maxLength: {
      value: 500,
      message: "El mensaje no debe exceder los 500 caracteres",
    },
  },
  termsAccepted: {},
  service: {},
};