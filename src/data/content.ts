// Content for the whole website

export const PERSONAL_INFO = {
	name: "Japp Media",
	description:
		"Japp Media es una empresa de desarrollo de software y marketing digital",
	phone: "+34605163193",
	email: "japp.agencia@gmail.com",
	address: "Calle 123, Ciudad de México, México",
	socialMedia: [
		{
			name: "Facebook",
			icon: "facebook",
			url: "https://www.facebook.com/juanperez",
		},
		{
			name: "Instagram",
			icon: "instagram",
			url: "https://www.instagram.com/juanperez",
		},
		{
			name: "Twitter",
			icon: "twitter",
			url: "https://www.twitter.com/juanperez",
		},
	],
};

export const SERVICES = [
	{
		id: "sitio-web",
		name: "Sitio web",
		description: "Descripción del servicio 1",
	},
	{
		id: "google-recomendaciones",
		name: "Google recomendaciones",
		description: "Descripción del servicio 2",
	},
	{
		id: "respuestas-automaticas",
		name: "Respuestas automáticas",
		description: "Descripción del servicio 3",
	},
	{
		id: "agenda-clientes",
		name: "Agenda de clientes",
		description: "Descripción del servicio 4",
	},
];

export const HOME = {
	hero: {
		title: "Haz crecer tu negocio con mas clientes sin esfuerzo",
		description:
			"Ayudamos a negocios locales a incrementar sus ventas mensuales, nos encargamos de encontrarte clientes y dejarte el resto a ti.",
		slides: [
			{
				id: "1",
				title: "Autónomo trabajando en casa",
				imageUrl: "/images/image_hero-9.webp",
			},
			{
				id: "2",
				title: "Client feliz con su nuevo negocio",
				imageUrl: "/images/image_hero-9.webp",
			},
			{
				id: "3",
				title: "Gestionando su negocio",
				imageUrl: "/images/image_hero-9.webp",
			},
		],
	},
	painPoints: {
		title: "No dejes pasar mas clientes a manos de la suerte.",
		description:
			"Nos enfocamos en negocios locales como el tuyo. Simplificamos la gestión de clientes y aumenta tu visibilidad.",
		items: [
			{
				id: "1",
				icon: "💻",
				service: SERVICES[0].name,
				title: "No tienes tiempo para buscar clientes",
				description:
					"Crea o mejora tu sitio web: aumenta tu presencia, cierra mas reservas y atrae más clientes potenciales.",
				image: "/images/image_hero-9.webp",
			},
			{
				id: "2",
				icon: "💻",
				service: SERVICES[1].name,
				title: "No tienes tiempo para buscar clientes",
				description: "Nosotros nos encargamos de buscar clientes para ti.",
				image: "/images/image_hero-9.webp",
			},
			{
				id: "3",
				icon: "💻",
				service: SERVICES[2].name,
				title: "No tienes tiempo para buscar clientes",
				description: "Nosotros nos encargamos de buscar clientes para ti.",
				image: "/images/image_hero-9.webp",
			},
			{
				id: "4",
				icon: "💻",
				service: SERVICES[3].name,
				title: "No tienes tiempo para buscar clientes",
				description: "Nosotros nos encargamos de buscar clientes para ti.",
				image: "/images/image_hero-9.webp",
			},
		],
	},
	offer: {
		subtitle: "Que ofrecemos",
		title: "Un servicios que se ajusta a tu negocio y reduce complicaciones.",
		items: [
			{
				id: "aumenta-tu-presencia",
				icon: "/images/icon_offer-01.webp",
				title: "Aumenta tu presencia",
				description:
					"Crea o mejora tu sitio web: aumenta tu presencia, cierra mas reservas y atrae más clientes potenciales.",
				image: "/images/image_hero-8.webp",
			},
			{
				id: "mejora-tu-reputacion",
				icon: "/images/icon_offer-02.webp",
				title: "Mejora la reputación",
				description:
					"Ayudamos a tu negocio a destacar mejor en Google, para que nuevos clientes contacten contigo..",
				image: "/images/image_hero-7.webp",
			},
			{
				id: "automatiza-tu-comunicacion",
				icon: "/images/icon_offer-03.webp",
				title: "Automatiza tu comunicación",
				description:
					"No pierdas mas clientes, gestionamos las respuestas y comunicación de manera automática.",
				image: "/images/image_hero-6.webp",
			},
			{
				id: "agenda-mas-trabajos",
				icon: "/images/icon_offer-04.webp",
				title: "Agenda más trabajos",
				description:
					"Gestiona tus agenda desde tu móvil, crea recordatorios y mantente notificado.",
				image: "/images/image_hero-9.webp",
			},
		],
	},
	whyUs: {
		subtitle: "Por que elegirnos",
		title:
			"Nos enfocamos en negocios locales y nos adaptamos a sus necesidades.",
		description:
			"No todos los negocios necesitan un servicio integral. Quizás solo necesites facilita la comunicación, gestionar citas de clientes o mejorar reputación. ",
		benefits: [
			{
				id: "1",
				title: "No solo mejoras, sino resultados en clientes",
			},
			{
				id: "2",
				title: "Precios flexibles y escalables",
			},
			{
				id: "3",
				title: "Servicio automatizado para no perder oportunidades ",
			},
		],
	},
	howStart: {
		subtitle: "Como empezar",
		title:
			"Comencemos a mejorar tu negocio con un servicio personalizado en poco tiempo.",
		steps: [
			{
				id: "1",
				title: "Consulta Inicial",
				description:
					"Descubrimos que servicios pueden impulsar tu negocio a cerrar mas ventas. Focalizaremos en los clientes ya establecido y en los nuevos.",
				color: "#005A70",
			},
			{
				id: "2",
				title: "Plan personalizado",
				description:
					"Nos ponemos en marcha e implementamos todas las herramientas que nos ayuden a conectar tu negocio con los clientes.",
				color: "#0DDEAC",
			},
			{
				id: "3",
				title: "Seguimiento y resultados",
				description:
					"Tardara un tiempo, pero al cabo de unos días veremos resultados, analizaremos y ajustaremos para seguir creciendo.",
				color: "#3bb300",
			},
		],
	},
	testimonials: {
		images: ["/images/image_hero-9.webp", "/images/image_hero-9.webp"],
		title: "No eres el primero que lo prueba, sumate y crece como ellos.",
		description:
			"Comienza a experimentar los mismo resultados que obtuvieron estos negocios.",
		reviews: [
			{
				id: "1",
				name: "Juan Perez",
				description: "Excelente servicio, muy recomendable.",
				image: "/images/image_hero-9.webp",
			},
			{
				id: "2",
				name: "Juan Perez",
				description: "Excelente servicio, muy recomendable.",
				image: "/images/image_hero-9.webp",
			},
			{
				id: "2",
				name: "Juan Perez",
				description: "Excelente servicio, muy recomendable.",
				image: "/images/image_hero-9.webp",
			},
		],
	},
};
