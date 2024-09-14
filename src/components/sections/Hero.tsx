import React from "react";
import { Button } from "../ui";

function Hero() {
	return (
		<section className="px-6 pt-24 pb-16">
			<div className='container max-w-3xl mx-auto'>
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="  text-5xl md:text-6xl lg:text-7xl ">Haz crecer tu negocio con mas clientes sin esfuerzo</h1>
          <p>Ayudamos a negocios locales a incrementar sus ventas mensuales, nos encargamos de encontrarte clientes y dejarte el resto a ti.</p>
          <div className="flex gap-4 flex-row pt-2">
            <Button variant="primary">Contáctenos</Button>
            <Button variant="secondary">Agenda una llamada</Button>
          </div>
        </div>
      </div>
		</section>
	);
}

export default Hero;
