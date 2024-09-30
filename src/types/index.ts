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
