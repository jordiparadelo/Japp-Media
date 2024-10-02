import { BookButton } from "@/components/ui";
import { SERVICES } from "@/data";

export default function Hero({ serviceId }: { serviceId: string }) {
    const service = SERVICES.find((service) => service.id === serviceId);
	return (
		<section >
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl font-bold mb-4'>
					{service?.title}
				</h1>
				<p className='text-xl mb-8'>
                {service?.description}
				</p>
				<BookButton text="Agendar ahora" />
			</div>
		</section>
	);
}