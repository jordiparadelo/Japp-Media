export default function Features() {
	const features = [
		{
			title: "Respond after hours and instantly",
			description: "Our AI CSR works 24/7, ensuring you never miss a lead.",
		},
		{
			title: "Generate and convert new leads with ease",
			description: "Automate lead generation and conversion processes.",
		},
		// Add more features as needed
	];

	return (
		<section className='bg-gray-100 py-16'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-semibold mb-12'>Features</h2>
				{features.map((feature, index) => (
					<div
						key={index}
						className={`flex items-center mb-12 ${
							index % 2 === 0 ? "flex-row" : "flex-row-reverse"
						}`}
					>
						<div className='w-1/2 pr-8'>
							<h3 className='text-2xl font-semibold mb-4'>{feature.title}</h3>
							<p>{feature.description}</p>
						</div>
						<div className='w-1/2'>
							{/* Placeholder for feature image */}
							<div className='bg-gray-300 h-64 rounded-lg'></div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}