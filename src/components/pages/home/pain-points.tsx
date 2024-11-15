import { Section, Container, Badge } from "@/components/ui";
import React from "react";

function PainPoints() {
	return (
		<Section>
			<Container className='flex flex-col  md:grid grid-cols-12 gap-6'>
				<div className='flex flex-col gap-5 col-span-12 md:col-span-4'>
					<Badge label='Como ayudamos' />
					<h2 className='heading-h2'>
						Haz crecer tu negocio con un Perfil Digital
					</h2>
					<p>
						Atrae más clientes y construye confianza en línea con nuestros
						servicios personalizados de web y reputación.
					</p>
					<div className='card p-5 space-y-4'>
						<h3 className='heading-h5'>Baja o nula presencia en Línea</h3>
						<p className='text-sm'>
							Si tu negocio no tiene una presencia en línea, no puedes esperar
							que los clientes te encuentren. ¿Te cuesta aparecer en Google o en
							mapas cuando los clientes buscan tus servicios? Una presencia en
							línea débil está frenando tu negocio.
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-5 col-span-12 md:col-span-4 md:grid md:grid-rows-3'>
					<div className='card p-5 space-y-4 row-span-2 md:row-start-2'>
						<h3 className='heading-h5'>Reseñas Negativas o Inconsistentes</h3>
						<p className='text-sm'>
							Las reseñas son el nuevo boca a boca, pero una mala reseña o un
							perfil desactualizado puede alejar a los clientes potenciales.
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-5 col-span-12 md:col-span-4 md:grid md:grid-rows-3 md:pt-10'>
					<div className='card p-5 space-y-4 row-span-3 md:row-start-1'>
						<h3 className='heading-h5'>Comunicación porbre con el Cliente</h3>
						<p className='text-sm'>
							Los clientes potenciales encuentran primero a tus competidores. No
							dejes que las oportunidades se pierdan.
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

export default PainPoints;
