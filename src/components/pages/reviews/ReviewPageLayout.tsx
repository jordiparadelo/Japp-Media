// import { getBusinessData } from "@/services/reviews/getBusinessData";
import React from "react";
import { Hero, ReviewForm } from "@/components/pages/reviews";

async function ReviewPageLayout({ id }: { id: string }) {

	console.log(id);

	// if (!businessData) return null;
	return (
		<>
			<Hero />
			<ReviewForm />
			{/* <h1>ReviewPageLayout {id}</h1> */}
		</>
	);
}

export default ReviewPageLayout;
