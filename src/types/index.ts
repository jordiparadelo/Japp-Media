import { StaticImageData } from "next/image";

export type ServiceCardType = {
	service: string;
	title: string;
	description: string;
	image: string;
};

export interface ImageType {
	src: string;
	alt: string;
}

export type BlocksCardProps = {
	id: string;
	title?: string;
	description?: string;
	details?: Array<{
		title: string;
		description: string;
	}> | string;
	image?: StaticImageData | string;
};

export interface TabType {
	id: number;
	title: string;
	content: string | BlocksCardProps;
}

export type StepGuidedProps = {
	id: string;
	title?: string;
	description?: string;
	details?: Array<{
		title: string;
		description: string;
	}>;
	image?: StaticImageData | string;
};

export type FormFieldsType = {
	name: string;
	phone: string;
	email: string;
	selectBusiness: string;
	nameBusiness: string;
	message: string;
	termsAccepted: boolean;
	service?: string;
};

export type InputFieldProps = {
	label?: string;
	type?: React.InputHTMLAttributes<HTMLElement>["type"];
	placeholder?: string;
	required?: boolean;
	registerType: keyof FormFieldsType;
	value?: string;
  };
  
export type SelectFieldProps = {
	label: string;
	registerType: keyof FormFieldsType;
	required?: boolean;
	options: { value: string; label: string }[];
  };
  
export type TextareaFieldProps = {
	label: string;
	placeholder?: string;
	required?: boolean;
	registerType: keyof FormFieldsType;
  };
  
export type CheckboxFieldProps = {
	label: string;
	registerType: keyof FormFieldsType;
	required?: boolean;
  };

  export interface BusinessData {
	name: string;
	logoUrl?: string;
	tagline?: string;
	welcomeMessage?: string;
	googleReviewUrl?: string;
	currentRating?: number;
	totalReviews?: number;
  }

export interface Business {
	id: string;
	name: string;
	googleReviewLink: string;
	// Add other business properties as needed
}

export interface Review {
	rating: number;
	comment: string;
	// Add other review properties as needed
}