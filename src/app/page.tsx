import {
	Imaginary,
	Hero,
	Services,
	WhyUs,
	StepGuidedSection,
	CtaBanner,
} from "@/components/sections";
import { StepGuidedBlocks } from "@/components/sections/StepGuidedSection";
import { Button, SectionTag } from "@/components/ui";
import { FEATURES } from "@/data";

export default function Home() {
	return (
		<>
			<Hero />
			<Imaginary />
			<Services />
			<WhyUs />
			<StepGuidedSection>
				<StepGuidedSection.Header>
					<div className='container mx-auto flex max-w-screen-md flex-col place-items-center gap-8 text-center'>
						<div className='flex flex-col place-items-center gap-2'>
							<SectionTag rotation={-5}>Lo más importante</SectionTag>
							<h2 className='text-4xl md:text-5xl font-heading'>
								Mientras otros servicios ofrecén obtener mas clientes nosotros
								optimizamos en función de lo que genera más ventas.
							</h2>
						</div>
						<p className='text-lg'>
							Ayudamos a negocios locales a incrementar sus ventas mensuales,
							nos encargamos de encontrarte clientes y dejarte el resto a ti.
						</p>
						<Button>Agenda una llamada</Button>
					</div>
				</StepGuidedSection.Header>
				<StepGuidedBlocks blocks={FEATURES} />
			</StepGuidedSection>
			<CtaBanner />
		</>
	);
}
