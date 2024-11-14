import { Section, Container, CustomImage, Badge } from "@/components/ui";

const solutions = [
	{
		id: "Diseño sitios web",
		title: "Un sitio Web profesional para alcanzar a más clientes.",
		description:
			"Alcanza a más persona con un sitio web profesional que este enfocado a captar clientes, gestionar citas y convetir mas ventas.",
		image: "/images/default.svg",
	},
	{
		id: "Gestión de Reputación",
		title: "Gestión de reputación en Perfil de Negocio de Google.",
		description:
			"Logra que las personas que te encuentren en la Búsqueda de Google y Google Maps para tu tienda física o área de servicio.",
		image: "/images/default.svg",
	},
	{
		id: "Comunicación automatizada",
		title: "Generación de nuevos clientes y automatización de comunicación.",
		description:
			"No pierdas tiempo en la comunicación con clientes, te ayudamos a atraer y gestionar nuevos clientes sin esfuerzo.",
		image: "/images/default.svg",
	},
];

function Solutions() {
	return (
		<Section>
			<Container className=' md:grid md:grid-cols-12 md:gap-6'>
				<div className='hidden md:block md:col-span-6'>
					<div className='sticky top-10'>
						<CustomImage
							src='/images/default.svg'
							alt='Soluciones'
							width={500}
							height={500}
						/>
					</div>
				</div>
				<div className='flex flex-col gap-14 md:gap-[300px] md:col-span-5 md:col-start-8'>
					{solutions.map((solution) => {
						return (
							<div
								key={solution.id}
								className='flex flex-col gap-4 md:py-10'
							>
								<Badge label={solution.id} />
								<div className='w-full aspect-[16/9] max-h-[350px] md:hidden'>
									<CustomImage
										src={solution.image}
										alt={solution.title}
										width={500}
										height={500}
										className='w-full h-full object-cover rounded-2xl'
									/>
								</div>
								<h3 className='heading-h4'>{solution.title}</h3>
								<p>{solution.description}</p>
							</div>
						);
					})}
				</div>
			</Container>
		</Section>
	);
}

export default Solutions;
