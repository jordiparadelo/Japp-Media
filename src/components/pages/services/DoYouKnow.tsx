export default function DoYouKnow() {
	return (
		<section className=' py-16'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-semibold mb-8'>Did you know?</h2>
				<div className='flex justify-between'>
					<div className='text-center'>
						<p className='text-4xl font-bold'>1 min</p>
						<p>Average response time</p>
					</div>
					<div className='text-center'>
						<p className='text-4xl font-bold'>1000+</p>
						<p>Businesses using our service</p>
					</div>
					{/* Add more stats as needed */}
				</div>
			</div>
		</section>
	);
}