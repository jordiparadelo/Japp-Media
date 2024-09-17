"use client";
import { SubmitHandler, useForm } from "react-hook-form";
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

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles["form"]}
		>
			<div className={styles["form_group"]}>
                <InputField label="Nombre Completo" placeholder="Nombre" type="text" required={true}/>
                <InputField label="Teléfono" placeholder="Nombre" type="phone" required={true}/>
			</div>

			<input
				{...register("phone", {
					required: true,
				})}
				type='phone'
				placeholder='+35 555 555 555'
			/>
			<input
				{...register("email", {
					required: true,
				})}
				type='email'
				placeholder='Nombre'
			/>
			<select>
				<option value='option1'>Option 1</option>
				<option value='option2'>Option 2</option>
				<option value='option3'>Option 3</option>
			</select>
			<input
				{...register("nameBusiness")}
				type='text'
				placeholder='Nombre del Negocio'
			/>
			<select>
				<option value='option1'>Option 1</option>
				<option value='option2'>Option 2</option>
				<option value='option3'>Option 3</option>
			</select>
			<textarea
				{...register("nameBusiness")}
				name=''
				id=''
			></textarea>

			<button type='submit'>Submit</button>
		</form>
	);
}

export default ContactForm;

type InputFieldProps = {
    label: string;
    type?: React.InputHTMLAttributes<HTMLElement>['type'];
    placeholder?: string;
    required?: boolean;
};

function InputField({label , placeholder, type, required }: InputFieldProps) {
    return (
	<label className={styles["form_field"]}>
		<span className={styles["form_label"]}>{label} <span className='text-red-500'>{required && '*'}</span></span>
		<input
			type={type}
			placeholder={placeholder}
            className={styles["form_input"]}
		/>
	</label>
    )
}
