import React from "react";
import {  CtaBanner } from "@/components/layouts";
import { Hero, Benefits, UseCases } from "@/components/pages/about";
import { WhyUs } from "@/components/pages/home";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig('about');

function AboutPage() {
	return (
		<>
			<Hero />
			<Benefits />
			<UseCases/>
			<WhyUs />
			<CtaBanner />
		</>
	);
}

export default AboutPage;
