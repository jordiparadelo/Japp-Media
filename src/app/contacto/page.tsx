import React, { Suspense } from "react";
import {  CtaBanner, WhyUs } from "@/components/layouts";
import { Hero } from "@/components/pages/contact";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig('contact');

function ContactPage() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Hero />
			</Suspense>
			<WhyUs />
			<CtaBanner />
		</>
	);
}

export default ContactPage;
