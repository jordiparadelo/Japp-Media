import React from "react";
import { ServicePageLayout } from "@/components/pages/services";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig('services');

function ServicesPage({ params }: { params: { serviciosId: string } }) {
	return (
		<ServicePageLayout id={params.serviciosId}/>
	);
}

export default ServicesPage;