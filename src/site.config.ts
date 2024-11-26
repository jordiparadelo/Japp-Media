import { RouteType, SitemapType, WebsiteInfoType } from "@/types";

import { icons } from "lucide-react";

export const BASE_URL = "https://api.whatsapp.com/send?phone=5215525662566";

export const WEBSITE_INFO: WebsiteInfoType = {
  name: "Japp Media",
  brief:
    "Japp Media es una empresa de desarrollo de software y marketing digital",
  description:
    "En Japp Media, ayudamos a negocios locales a establecer y mejorar su presencia digital con soluciones accesibles y efectivas. Nos especializamos en el diseño de sitios web personalizables, embudos de conversión y automatización de ventas, para que puedas atraer más clientes mientras ahorras tiempo. Lo que nos distingue es que ofrecemos un servicio adaptado a las necesidades específicas de cada negocio, utilizando herramientas diseñadas para cada caso particular. Con Japp Media, tu negocio tendrá las herramientas necesarias para crecer en el mundo digital y destacar frente a la competencia.",
  phone: "+34605163193",
  email: "japp.agencia@gmail.com",
  address: "Calle 123, Ciudad de México, México",
  socialMedia: [
    {
      name: "Facebook",
      icon: "Facebook" as keyof typeof icons,
      // icon: "Facebook",
      url: "https://www.facebook.com/juanperez",
    },
    {
      name: "Instagram",
      icon: "Instagram",
      // icon: "Instagram",
      url: "https://www.instagram.com/juanperez",
    },
    {
      name: "Twitter",
      icon: "Twitter",
      // icon: "Twitter",
      url: "https://www.twitter.com/juanperez",
    },
  ],
};

export const ROUTES: RouteType[] = [
  {
    path: "/",
    name: "Descripción General",
    changeFrequency: "yearly",
    priority: 1,
  },
  {
    path: "/servicios",
    name: "Servicios",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/precios",
    name: "Precios",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/contacto",
    name: "Contacto",
    changeFrequency: "yearly",
    priority: 1,
  },
];

export const SITEMAP_CONFIG: SitemapType[] = ROUTES.map((route) => ({
  id: route.path,
  url: BASE_URL + route.path,
  lastModified: new Date(),
  changeFrequency: route.changeFrequency,
  priority: route.priority,
}));
