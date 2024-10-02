import React from "react";
import {  CtaBanner, WhyUs } from "@/components/layouts";
import { Hero } from "@/components/pages/contact";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig('contact');

function ContactPage() {
	return (
		<>
			<Hero />
			<WhyUs />
			<CtaBanner />
		</>
	);
}

export default ContactPage;
