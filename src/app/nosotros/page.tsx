import React from "react";
import {  CtaBanner, WhyUs } from "@/components/layouts";
import { Hero, WhoWeHelp } from "@/components/pages/About";

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
