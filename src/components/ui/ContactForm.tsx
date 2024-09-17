"use client";
import { SubmitHandler, useForm, FormProvider, useFormContext } from "react-hook-form";
import styles from "@/styles/form.module.css";

type FormFields = {
  name: string;
  phone: string;
  email: string;
  select: string;
  nameBusiness: string;
  selectBusiness: string;
  message: string;
};

// Validation rules for each field
const validationRules = {
  name: {
    required: "El nombre es requerido",
    minLength: {
      value: 2,
      message: `El nombre debe tener al menos 2 caracteres`
    }
  },
  phone: {
    required: "El teléfono es requerido",
    validate: (value: string) => {
      // Spanish phone number format: +34 or 0034, followed by 9 digits
      const phoneRegex = /^(\+34|0034|34)?[6789]\d{8}$/;
      return phoneRegex.test(value) || "Ingrese un número de teléfono español válido";
    }
  },
  email: {
    required: "El correo electrónico es requerido",
    validate: (value: string) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(value) || "Ingrese un correo electrónico válido";
    }
  },
  nameBusiness: {
    minLength: {
      value: 2,
      message: "El nombre del negocio debe tener al menos 2 caracteres"
    }
  }
};

function ContactForm() {
  const methods = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((r) => setTimeout(r, 2000));
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles["form"]}>
        <div className={styles["form_group"]}>
          <InputField
            label="Nombre Completo"
            placeholder="Nombre"
            type="text"
            required={true}
            registerType="name"
          />
          <InputField
            label="Teléfono"
            placeholder="Ejemplo: 612345678"
            type="tel"
            required={true}
            registerType="phone"
          />
        </div>
        <div className={styles["form_group"]}>
          <InputField
            label="Correo Electrónico"
            placeholder="correo@ejemplo.com"
            type="email"
            required={true}
            registerType="email"
          />
          <InputField
            label="Nombre del Negocio"
            placeholder="Mi Negocio S.A."
            type="text"
            registerType="nameBusiness"
          />
        </div>

        <button type="submit" disabled={methods.formState.isSubmitting}>
          {methods.formState.isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;

type InputFieldProps = {
  label: string;
  type?: React.InputHTMLAttributes<HTMLElement>["type"];
  placeholder?: string;
  required?: boolean;
  registerType: keyof FormFields;
};

function InputField({
  label,
  placeholder,
  type,
  required,
  registerType,
}: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormFields>();

  return (
    <label className={styles["form_field"]}>
      <span className={styles["form_label"]}>
        {label} <span className="text-red-500">{required && "*"}</span>
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className={styles["form_input"]}
        {...register(registerType, validationRules[registerType])}
      />
      {errors[registerType] && (
        <span className="text-red-500">{errors[registerType]?.message}</span>
      )}
    </label>
  );
}