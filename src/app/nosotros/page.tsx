import React from "react";
import {  CtaBanner, WhyUs } from "@/components/sections";
import { Hero, WhoWeHelp } from "@/components/pages/about";

function AboutPage() {
	return (
		<>
			<Hero />
			<WhyUs />
			<WhoWeHelp />
			<CtaBanner />
		</>
	);
}

export default AboutPage;
