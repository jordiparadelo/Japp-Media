import { FormFieldsType } from "@/types";
import { baseValidationRules } from "@/libs/formValidation";

import { useFormContext, RegisterOptions, UseFormRegister } from "react-hook-form";

// Custom hook for field registration and validation
export default function useFieldValidation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormFieldsType>();

  const getValidationRules = (
    registerType: keyof FormFieldsType,
    required: boolean
  ): RegisterOptions => {
    const rules: RegisterOptions = { ...baseValidationRules[registerType] };

    if (required) {
      rules.required = "Este campo es requerido";
    }

    return rules;
  };

  const registerField = (
    registerType: keyof FormFieldsType,
    required: boolean
  ): ReturnType<UseFormRegister<FormFieldsType>> => {
    return register(
      registerType,
      getValidationRules(registerType, required) as RegisterOptions<
        FormFieldsType,
        keyof FormFieldsType
      >
    );
  };

  return { registerField, errors };
}