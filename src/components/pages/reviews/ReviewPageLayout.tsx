// import { getBusinessData } from "@/services/reviews/getBusinessData";
import React from "react";
import { Hero, ReviewForm } from "@/components/pages/reviews";

async function ReviewPageLayout({ id }: { id: string }) {

	const businessData = {
		id: id,
		name: id,
		description: "Business Description",
		logo: "https://via.placeholder.com/150",
		reviews: [
			{
				review: "This is a review",
				rating: 4.5,
			},
		],
	};

	// if (!businessData) return null;
	return (
		<>
			<Hero businessData={businessData} />
			<ReviewForm />
			{/* <h1>ReviewPageLayout {id}</h1> */}
		</>
	);
}

export default ReviewPageLayout;
