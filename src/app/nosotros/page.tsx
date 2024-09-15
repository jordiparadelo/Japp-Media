import React from "react";
import { Button, SectionTag } from "@/components/ui";
import Image from "next/image";
import { CtaBanner, StepGuidedSection } from "@/components/sections";
import { StepGuidedBlocks } from "@/components/sections/StepGuidedSection";
import { HOW_HELP } from "@/data";
import SwipeCarousel from "@/components/ui/SwipeCarrousel";

function AboutPage() {
	return (
		<>
			<section className='py-11 px-5 md:px-16 md:py-20'>
				<div className='container mx-auto flex max-w-screen-md flex-col place-items-center gap-8 text-center'>
					<div className='flex flex-col place-items-center gap-2'>
						<SectionTag rotation={-5}>Sobre nosotros</SectionTag>
						<h1 className='text-4xl md:text-5xl font-heading'>
							Ayudamos a los Negocios Locales a crecer en línea
						</h1>
					</div>
					<div className='flex flex-wrap flex-row md:grid md:grid-cols-2 gap-4'>
						<Button>Comienza Ya</Button>
						<Button variant='secondary'>Agenda una llamada</Button>
					</div>
					<Image
						src='/images/image_more-leads.webp'
						alt='image'
						width={500}
						height={500}
					/>
					<p className='text-lg font-thin'>
						En Japp Media, nuestra misión es ayudar a los negocios locales a
						expandirse más allá de sus límites inmediatos utilizando
						herramientas digitales poderosas. Nos especializamos en crear una
						presencia en línea sólida para las empresas, asegurándonos de atraer
						clientes potenciales de alta calidad y convertirlos en clientes
						fieles.
					</p>
					<SwipeCarousel dots={true}>
						<div key={'key-1'}>
							<div className='flex flex-col gap-4'>
								<h2 className='text-2xl font-heading'>title</h2>
								<p className='text-lg font-thin'>description</p>
							</div>
						</div>
						<div key={'key-2'}>
							<div className='flex flex-col gap-4'>
								<h2 className='text-2xl font-heading'>title</h2>
								<p className='text-lg font-thin'>description</p>
							</div>
						</div>
						<div key={'key-3'}>
							<div className='flex flex-col gap-4'>
								<h2 className='text-2xl font-heading'>title</h2>
								<p className='text-lg font-thin'>description</p>
							</div>
						</div>
					</SwipeCarousel>
				</div>
			</section>

			<section className='py-11 px-5 md:px-16 md:py-20'>
				<div className='container mx-auto flex max-w-2xl flex-col place-items-center gap-8 text-center'>
					<div className='flex flex-col place-items-center gap-2 '>
						<SectionTag rotation={5}>¿Por que elegirnos?</SectionTag>
						<h2 className='text-2xl md:text-4xl font-heading'>
							Buscamos en que te centres en lo tuyo mientras atraemos a nuevos
							clientes
						</h2>
					</div>
					<p className='text-lg font-thin'>
						Necesitas una presencia digital efectiva que atraiga nuevos clientes
						y mantenga a tus actuales. Japp Media ofrece una gama de servicios
						para ayudarte a alcanzar tus metas, que incluyen:
					</p>
				</div>
			</section>

			<StepGuidedSection>
				<StepGuidedSection.Header>
					<div className='container mx-auto flex max-w-screen-md flex-col place-items-center gap-8 text-center'>
						<div className='flex flex-col place-items-center gap-2'>
							<SectionTag rotation={-5}>A quien ayudamos</SectionTag>
							<h2 className='text-4xl md:text-5xl'>
								Negocios que quieran crecer sin complicaciones.
							</h2>
						</div>
						<p className='text-lg'>
							Si tienes un negocio local y estás buscando formas de hacerlo
							crecer sin complicarte con las herramientas digitales, en Japp
							Media estamos aquí para simplificarte el camino. Nuestro servicio
							está dirigido a quienes:
						</p>
					</div>
				</StepGuidedSection.Header>
				<StepGuidedBlocks blocks={HOW_HELP} />
			</StepGuidedSection>
			<CtaBanner />
		</>
	);
}

export default AboutPage;