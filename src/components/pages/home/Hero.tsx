import {
	Section,
	Container,
	CustomImage,
	Button,
	GridSpan,
} from "@/components/ui";

type HeroType = {
	title: string;
	subtitle: string;
	cta: string;
	image: string;
};

const heroData: HeroType = {
	title: "Haz crecer tu negocio con un Perfil Digital",
	subtitle:
		"Atrae más clientes y construye confianza en línea con nuestros servicios personalizados de web y reputación.",
	cta: "Obtén tu Consulta Gratis",
	image: "/images/hero.jpg",
};

export default function Hero({
	title = heroData.title,
	subtitle = heroData.subtitle,
	cta = heroData.cta,
	image = heroData.image,
}: HeroType) {
	return (
		<Section className='rounded-b-3xl sm:rounded-b-[60px] md:rounded-b-[120px] bg-gray-100 text-gray-900'>
			<Container
				className='text-center gap-4 grid-flow-row'
				grid={true}
			>
				{/* <Container className="flex flex-col place-items-center align-items-center text-center gap-4" grid={true}> */}
				<GridSpan className='col-start-2 col-end-12'>
					<h1 className='text-4xl sm:text-6xl md:text-8xl leading-tight font-heading'>
						{title}
					</h1>
				</GridSpan>
				<GridSpan className='col-start-2 col-end-12'>
					<p className='text-1xl md:text-3xl leading-tight'>{subtitle}</p>
				</GridSpan>
				<GridSpan className='grid grid-cols-12 gap-6 pt-6'>
					<div className='col-span-8 flex flex-col gap-6'>
						<div className='grid grid-cols-8 col-span-8 gap-6'>
							<div className='col-span-4'>
								<CustomImage
									src={image}
									alt={title}
									className='rounded-lg bg-gray-500 w-full h-full object-cover'
								/>
							</div>
							<div className='col-span-4 flex flex-col gap-6 pt-6'>
								<Button>{cta}</Button>
								<CustomImage
									src={image}
									alt={title}
									className='rounded-lg bg-gray-500 w-full h-full object-cover'
								/>
							</div>
						</div>
						<div className='grid grid-cols-8 col-span-8 gap-6'>
							<div className='col-span-3'>
								<CustomImage
									src={image}
									alt={title}
									className='rounded-lg bg-gray-500 w-full h-full object-cover'
								/>
							</div>
							<div className='col-span-5 flex flex-col gap-6'>
								<CustomImage
									src={image}
									alt={title}
									className='rounded-lg bg-gray-500 w-full object-cover'
								/>
							</div>
						</div>
					</div>
					<div className='col-span-4'>
						<CustomImage
							src={image}
							alt={title}
							className='rounded-lg bg-gray-500 w-full object-cover h-full'
						/>
					</div>
				</GridSpan>
			</Container>
		</Section>
	);
}
