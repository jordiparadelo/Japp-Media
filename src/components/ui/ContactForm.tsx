"use client";

import React from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import styles from "@/styles/ContactForm.module.scss";
import { FormFieldsType } from "@/types";
import { InputField, SelectField, TextareaField, CheckboxField } from "@/components/ui/FormFields";
import useFormSubmission from "@/hooks/useFormSubmission";

function ContactForm() {
	const methods = useForm<FormFieldsType>();
	const { submitStatus, submitForm, service } = useFormSubmission();

	const onSubmit: SubmitHandler<FormFieldsType> = async (data) => {
		await submitForm(data);
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
				<InputField
					label="Correo Electrónico"
					placeholder="correo@ejemplo.com"
					type="email"
					required={true}
					registerType="email"
				/>
				<div className={styles["form_group"]}>
					<InputField
						label="Nombre del Negocio"
						placeholder="Mi Negocio S.A."
						type="text"
						registerType="nameBusiness"
					/>
					<SelectField
						label="Tipo de Negocio"
						registerType="selectBusiness"
						// required={true}
						options={[
							{ value: "", label: "Seleccione un tipo de negocio" },
							{ value: "autonomous", label: "Autónomo" },
							{ value: "local-business", label: "Negocio Local" },
							{ value: "retail", label: "Proveedor" },
							{ value: "other", label: "Otro" },
						]}
					/>
				</div>
				<TextareaField
					label="Mensaje"
					placeholder="Escriba su mensaje aquí..."
					registerType="message"
					// required={true}
				/>
				{/* Send service id to the backend */}
				{service && (
					<InputField
						type="hidden"
						registerType="service"
						value={service}
					/>
				)}
				<CheckboxField
					label="Acepto los términos y condiciones proporcionados por la empresa. Al facilitar mi número de teléfono, acepto recibir mensajes de texto de la empresa."
					registerType="termsAccepted"
					required={true}
				/>
				<div className="form_actions">
					<button
						className="button button--primary"
						type="submit"
						disabled={submitStatus === "submitting"}
					>
						{submitStatus === "submitting" ? "Enviando..." : "Enviar Solicitud"}
					</button>
				</div>
				{submitStatus === "success" && (
					<p className="text-green-500 mt-4">¡Formulario enviado con éxito!</p>
				)}
				{submitStatus === "error" && (
					<p className="text-red-500 mt-4">Error al enviar el formulario. Por favor, inténtelo de nuevo.</p>
				)}
			</form>
		</FormProvider>
	);
}

export default ContactForm;