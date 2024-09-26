export default function Benefits() {
	const benefits = [
		{
			title: "Instant Response",
			description:
				"Respond to customer inquiries immediately, any time of day.",
		},
		{
			title: "Increased Conversions",
			description:
				"Convert more leads into customers with AI-powered assistance.",
		},
		{
			title: "Cost Effective",
			description: "Reduce operational costs while improving customer service.",
		},
		// Add more benefits as needed
	];

	return (
		<section className=' py-16'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-semibold mb-12'>Benefits</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{benefits.map((benefit, index) => (
						<div
							key={index}
							className='text-center'
						>
							<h3 className='text-xl font-semibold mb-4'>{benefit.title}</h3>
							<p>{benefit.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}