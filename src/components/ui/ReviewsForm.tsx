"use client";

import React from "react";
import styles from "@/styles/ReviewsForm.module.scss";
import { InputField } from "@/components/ui/FormFields";
import { FormFieldsType } from "@/types";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import useFormSubmission from "@/hooks/useFormSubmission";
// import styles from "@/styles/ContactForm.module.scss";

function ReviewsForm() {
	const methods = useForm<FormFieldsType>();
	const { submitStatus, submitForm } = useFormSubmission();

	const onSubmit: SubmitHandler<FormFieldsType> = async (data) => {
		await submitForm(data);
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
						required={true}
						registerType='phone'
					/>
				</div>
				<InputField
					label='Correo Electrónico'
					placeholder='correo@ejemplo.com'
					type='email'
					required={true}
					registerType='email'
				/>
				{submitStatus === "success" && (
					<p className='text-green-500 mt-4'>¡Formulario enviado con éxito!</p>
				)}
				{submitStatus === "error" && (
					<p className='text-red-500 mt-4'>
						Error al enviar el formulario. Por favor, inténtelo de nuevo.
					</p>
				)}
			</form>
		</FormProvider>
	);
}

export default ReviewsForm;
