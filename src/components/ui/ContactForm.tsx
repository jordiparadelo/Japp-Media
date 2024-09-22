'use client';
import React from "react";
import {
	SubmitHandler,
	useForm,
	FormProvider,
	useFormContext,
	RegisterOptions,
	UseFormRegister,
} from "react-hook-form";
import styles from "@/styles/ContactForm.module.scss";

type FormFields = {
	name: string;
	phone: string;
	email: string;
	selectBusiness: string;
	nameBusiness: string;
	message: string;
	termsAccepted: boolean;
};

// Base validation rules
const baseValidationRules: Record<keyof FormFields, RegisterOptions> = {
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
};

// Custom hook for field registration and validation
function useFieldValidation() {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormFields>();

	const getValidationRules = (
		registerType: keyof FormFields,
		required: boolean
	): RegisterOptions => {
		const rules: RegisterOptions = { ...baseValidationRules[registerType] };

		if (required) {
			rules.required = "Este campo es requerido";
		}

		return rules;
	};

	const registerField = (
		registerType: keyof FormFields,
		required: boolean
	): ReturnType<UseFormRegister<FormFields>> => {
		return register(
			registerType,
			getValidationRules(registerType, required) as RegisterOptions<
				FormFields,
				keyof FormFields
			>
		);
	};

	return { registerField, errors };
}

function ContactForm() {
	const methods = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		await new Promise((r) => setTimeout(r, 2000));
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				className={styles["form"]}
			>
				<div className={styles["form_group"]}>
					<InputField
						label='Nombre Completo'
						placeholder='Nombre'
						type='text'
						required={true}
						registerType='name'
					/>
					<InputField
						label='Teléfono'
						placeholder='Ejemplo: 612345678'
						type='tel'
						// required={true}
						registerType='phone'
					/>
				</div>
				<InputField
					label='Correo Electrónico'
					placeholder='correo@ejemplo.com'
					type='email'
					// required={true}
					registerType='email'
				/>
				<div className={styles["form_group"]}>
					<InputField
						label='Nombre del Negocio'
						placeholder='Mi Negocio S.A.'
						type='text'
						registerType='nameBusiness'
					/>
					<SelectField
						label='Tipo de Negocio'
						registerType='selectBusiness'
						// required={true}
						options={[
							{ value: "", label: "Seleccione un tipo de negocio" },
							{ value: "retail", label: "Venta al por menor" },
							{ value: "service", label: "Servicios" },
							{ value: "manufacturing", label: "Fabricación" },
							{ value: "other", label: "Otro" },
						]}
					/>
				</div>
				<TextareaField
					label='Mensaje'
					placeholder='Escriba su mensaje aquí...'
					registerType='message'
					// required={true}
				/>
				<CheckboxField
					label='Acepto los términos y condiciones proporcionados por la empresa. Al facilitar mi número de teléfono, acepto recibir mensajes de texto de la empresa.'
					registerType='termsAccepted'
					required={true}
				/>
				<div className='form_actions'>
					<button
						className='button button--primary'
						type='submit'
						disabled={methods.formState.isSubmitting}
					>
						{methods.formState.isSubmitting
							? "Enviando..."
							: "Enviar Solicitud"}
					</button>
				</div>
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
	const { registerField, errors } = useFieldValidation();

	return (
		<label className={styles["form_field"]}>
			<span className={styles["form_label"]}>
				{label} <span className='text-red-500'>{required && "*"}</span>
			</span>
			<input
				type={type}
				placeholder={placeholder}
				className={styles["form_input"]}
				{...registerField(registerType, !!required)}
			/>
			{errors[registerType] && (
				<span className='text-red-500'>{errors[registerType]?.message}</span>
			)}
		</label>
	);
}

type SelectFieldProps = {
	label: string;
	registerType: keyof FormFields;
	required?: boolean;
	options: { value: string; label: string }[];
};

function SelectField({
	label,
	registerType,
	required,
	options,
}: SelectFieldProps) {
	const { registerField, errors } = useFieldValidation();

	return (
		<label className={styles["form_field"]}>
			<span className={styles["form_label"]}>
				{label} <span className='text-red-500'>{required && "*"}</span>
			</span>
			<select
				className={styles["form_input"]}
				{...registerField(registerType, !!required)}
			>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
			{errors[registerType] && (
				<span className='text-red-500'>{errors[registerType]?.message}</span>
			)}
		</label>
	);
}

type TextareaFieldProps = {
	label: string;
	placeholder?: string;
	required?: boolean;
	registerType: keyof FormFields;
};

function TextareaField({
	label,
	placeholder,
	required,
	registerType,
}: TextareaFieldProps) {
	const { registerField, errors } = useFieldValidation();

	return (
		<label className={styles["form_field"]}>
			<span className={styles["form_label"]}>
				{label} <span className='text-red-500'>{required && "*"}</span>
			</span>
			<textarea
				placeholder={placeholder}
				className={styles["form_textarea"]}
				{...registerField(registerType, !!required)}
			/>
			{errors[registerType] && (
				<span className='text-red-500'>{errors[registerType]?.message}</span>
			)}
		</label>
	);
}

type CheckboxFieldProps = {
	label: string;
	registerType: keyof FormFields;
	required?: boolean;
};

function CheckboxField({ label, registerType, required }: CheckboxFieldProps) {
	const { registerField, errors } = useFieldValidation();

	return (
		<label className={styles["form_field_checkbox"]}>
			<div className='flex flex-row gap-3 place-items-start'>
				<input
					type='checkbox'
					className={styles["form_checkbox"]}
					{...registerField(registerType, !!required)}
				/>
				<span className={styles["form_label_checkbox"]}>
					{label} <span className='text-red-500'>{required && "*"}</span>
				</span>
			</div>
			{errors[registerType] && (
				<span className='text-red-500'>{errors[registerType]?.message}</span>
			)}
		</label>
	);
}
