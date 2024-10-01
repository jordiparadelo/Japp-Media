import React from "react";
import { ServicePageLayout } from "@/components/pages/Services";

function ServicesPage({ params }: { params: { serviciosId: string } }) {
	return (
		<ServicePageLayout id={params.serviciosId}/>
	);
}

export default ServicesPage;