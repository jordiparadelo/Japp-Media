import { Section, Container, SectionPill } from "@/components/ui";

function BannerWebsite() {
	return (
		<Section>
			<Container>
				<div className='flex flex-col gap-4 place-items-center text-center'>
					<SectionPill label='Crea tu Sitio Web' />
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

export default BannerWebsite;
