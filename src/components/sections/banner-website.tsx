import { Section, Container, Badge } from "@/components/ui";
// import ReactEmojis from "@souhaildev/reactemojis";
import { SectionProps } from "@/types";

function BannerWebsite({ id }: SectionProps) {
	return (
		<Section className='bkg-gradient rounded-3xl md:rounded-[80px]' id={id}>
			<Container>
				<div className='flex flex-col gap-4 place-items-center text-center'>
					<Badge
						label='🔥 Crea tu sitio Web'
					/>
					<h2 className='heading-h3'>Sitio Web Antiguo o Ineficaz</h2>
					<p className='text-lg md:text-xl leading-tight'>
						Un sitio lento y desactualizado dificulta retener clientes y ganar
						confianza.
					</p>
				</div>
			</Container>
		</Section>
	);
}

export  {BannerWebsite};
