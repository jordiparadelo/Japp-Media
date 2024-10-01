import React from "react";
import styles from "@/styles/ContactForm.module.scss";
import { FormFieldsType } from "@/types";
import useFieldValidation from "@/hooks/useFieldValidation";

// InputField component
export function InputField({ label, placeholder, type, required, registerType, value }: InputFieldProps) {
  const { registerField, errors } = useFieldValidation();

  return (
    <label className={styles["form_field"]}>
      {label && (
        <span className={styles["form_label"]}>
          {label} <span className="text-red-500">{required && "*"}</span>
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={styles["form_input"]}
        {...registerField(registerType, !!required)}
        value={value}
      />
      {errors[registerType] && (
        <span className="text-red-500">{errors[registerType]?.message}</span>
      )}
    </label>
  );
}

// SelectField component
export function SelectField({ label, registerType, required, options }: SelectFieldProps) {
  const { registerField, errors } = useFieldValidation();

  return (
    <label className={styles["form_field"]}>
      <span className={styles["form_label"]}>
        {label} <span className="text-red-500">{required && "*"}</span>
      </span>
      <select
        className={styles["form_input"]}
        {...registerField(registerType, !!required)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[registerType] && (
        <span className="text-red-500">{errors[registerType]?.message}</span>
      )}
    </label>
  );
}

// TextareaField component
export function TextareaField({ label, placeholder, required, registerType }: TextareaFieldProps) {
  const { registerField, errors } = useFieldValidation();

  return (
    <label className={styles["form_field"]}>
      <span className={styles["form_label"]}>
        {label} <span className="text-red-500">{required && "*"}</span>
      </span>
      <textarea
        placeholder={placeholder}
        className={styles["form_textarea"]}
        {...registerField(registerType, !!required)}
      />
      {errors[registerType] && (
        <span className="text-red-500">{errors[registerType]?.message}</span>
      )}
    </label>
  );
}

// CheckboxField component
export function CheckboxField({ label, registerType, required }: CheckboxFieldProps) {
  const { registerField, errors } = useFieldValidation();

  return (
    <label className={styles["form_field_checkbox"]}>
      <div className="flex flex-row gap-3 place-items-start">
        <input
          type="checkbox"
          className={styles["form_checkbox"]}
          {...registerField(registerType, !!required)}
        />
        <span className={styles["form_label_checkbox"]}>
          {label} <span className="text-red-500">{required && "*"}</span>
        </span>
      </div>
      {errors[registerType] && (
        <span className="text-red-500">{errors[registerType]?.message}</span>
      )}
    </label>
  );
}

// Types
type InputFieldProps = {
  label?: string;
  type?: React.InputHTMLAttributes<HTMLElement>["type"];
  placeholder?: string;
  required?: boolean;
  registerType: keyof FormFieldsType;
  value?: string;
};

type SelectFieldProps = {
  label: string;
  registerType: keyof FormFieldsType;
  required?: boolean;
  options: { value: string; label: string }[];
};

type TextareaFieldProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  registerType: keyof FormFieldsType;
};

type CheckboxFieldProps = {
  label: string;
  registerType: keyof FormFieldsType;
  required?: boolean;
};