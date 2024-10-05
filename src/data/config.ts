export const BASE_URL = "https://japp.media/";

interface SitemapType {
	url: string;
	lastModified?: string | Date | undefined;
	changeFrequency?:
		| "yearly"
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "never"
		| undefined;
	priority?: number | undefined;
}

interface RouteType extends Omit<SitemapType, "url"> {
	path: string;
	name: string;
	url?: string; // Make url optional in RouteType
	changeFrequency:
		| "yearly"
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "never"
		| undefined;
	priority: number | undefined;
}

export const ROUTES: Record<string, RouteType> = {
	inicio: { 
		path: "/", 
		name: "Inicio", 
		changeFrequency: "yearly", 
		priority: 1 
	},
	nosotros: {
		path: "/nosotros",
		name: "Nosotros",
		changeFrequency: "yearly",
		priority: 0.5,
	},
	contacto: {
		path: "/contacto",
		name: "Contacto",
		changeFrequency: "yearly",
		priority: 1,
	},
	// servicios: { path: "/servicios", name: "Servicios", changeFrequency: "yearly", priority: 0.5 },
};

export const SITEMAP_CONFIG: SitemapType[] = Object.values(ROUTES).map(
	(route) => ({
		url: BASE_URL + route.path,
		lastModified: new Date(),
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	})
);
