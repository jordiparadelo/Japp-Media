import { Button, ContactForm } from "@/components/ui";
import React from "react";

function Hero() {
	return (
		<section className='px-6 pt-24 pb-16 bg-primary'>
			<div className='container max-w-screen-xl mx-auto'>
				<div className='container mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-40'>
					<div className='flex flex-col gap-4'>
						<h1 className='  heading-h1'>Pongámonos en contacto</h1>
						<p className='text-xl max-w-screen-md mx-auto text-pretty'>
							Estaremos encantados de hablar contigo y poder ayudar a tu
							negocio.
						</p>

						<ul className='flex flex-col gap-2'>
							<li className='flex flex-row gap-2'>
								Learn how to increase team productivity
							</li>
							<li className='flex flex-row gap-2'>
								Learn how to increase team productivity
							</li>
							<li className='flex flex-row gap-2'>
								Learn how to increase team productivity
							</li>
						</ul>
						<div className='flex flex-col w-full max-w-[320px] sm:w-auto sm:max-w-none sm:grid sm:grid-cols-2 gap-4 pt-4'>
							<Button>Comienza Ya</Button>
							<Button variant='secondary'>Agenda una llamada</Button>
						</div>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default Hero;
