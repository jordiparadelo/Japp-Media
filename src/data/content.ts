// Content for the whole website

export const PERSONAL_INFO = {
    name: 'Japp Media',
    description: 'Japp Media es una empresa de desarrollo de software y marketing digital',
    phone: '+34605163193',
    email: 'jappmedia@gmail.com',
    address: 'Calle 123, Ciudad de México, México',
    socialMedia: [
        {
            name: 'Facebook',
            icon: 'facebook',
            url: 'https://www.facebook.com/juanperez',
        },
        {
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://www.instagram.com/juanperez',
        },
        {
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://www.twitter.com/juanperez',
        }
    ]
}

export const SERVICES = [
    {
        id: 'sitio-web',
        name: 'Sitio web',
        description: 'Descripción del servicio 1',
    },
    {
        id: 'google-recomendaciones',
        name: 'Google recomendaciones',
        description: 'Descripción del servicio 2',
    },
    {
        id: 'respuestas-automaticas',
        name: 'Respuestas automáticas',
        description: 'Descripción del servicio 3',
    },
    {
        id: 'agenda-clientes',
        name: 'Agenda de clientes',
        description: 'Descripción del servicio 4',
    },

]

export const HOME = {
    hero: {
        title: 'Haz crecer tu negocio con mas clientes sin esfuerzo',
        description: 'Ayudamos a negocios locales a incrementar sus ventas mensuales, nos encargamos de encontrarte clientes y dejarte el resto a ti.',
        slides: [
            {
                id: '1',
                title: 'Autonomo trabajando en casa',
                imageUrl: '/images/image_hero-9.webp',
            },
            {
                id: '2',
                title: 'Client feliz con su nuevo negocio',
                imageUrl: '/images/image_hero-9.webp',
            },
            {
                id: '3',
                title: 'Gestionando su negocio',
                imageUrl: '/images/image_hero-9.webp',
            },
        ]
    },
    painPoints: {
        title: 'No dejes pasar mas clientes a manos de la suerte.',
        description: 'Nos enfocamos en negocios locales como el tuyo. Simplificamos la gestión de clientes y aumenta tu visibilidad.',
        items: [
            {
                id: '1',
                icon: '💻',
                service: SERVICES[0].name,
                title: 'No tienes tiempo para buscar clientes',
                description: 'Crea o mejora tu sitio web: aumenta tu presencia, cierra mas reservas y atrae más clientes potenciales.',
                image: '/images/image_hero-9.webp',
            },
            {
                id: '2',
                icon: '💻',
                service: SERVICES[1].name,
                title: 'No tienes tiempo para buscar clientes',
                description: 'Nosotros nos encargamos de buscar clientes para ti.',
                image: '/images/image_hero-9.webp',
            },
            {
                id: '3',
                icon: '💻',
                service: SERVICES[2].name,
                title: 'No tienes tiempo para buscar clientes',
                description: 'Nosotros nos encargamos de buscar clientes para ti.',
                image: '/images/image_hero-9.webp',
            },
            {
                id: '4',
                icon: '💻',
                service: SERVICES[3].name,
                title: 'No tienes tiempo para buscar clientes',
                description: 'Nosotros nos encargamos de buscar clientes para ti.',
                image: '/images/image_hero-9.webp',
            },
        ]
    },
    offer: {
        subtitle: 'Que ofrecemos',
        title: 'Un servicios que se ajusta a tu negocio y reduce complicaciones.',
        items: [
            {
                id: 'aumenta-tu-presencia',
                icon: '/images/icon_offer-01.webp',
                title: 'Aumenta tu presencia',
                description: 'Crea o mejora tu sitio web: aumenta tu presencia, cierra mas reservas y atrae más clientes potenciales.',
                image: '/images/service_card-01.webp',
            },
            {
                id: 'mejora-tu-reputacion',
                icon: '/images/icon_offer-02.webp',
                title: 'Mejora la reputación',
                description: 'Ayudamos a tu negocio a destacar mejor en Google, para que nuevos clientes contacten contigo..',
                image: '/images/service_card-02.webp',
            },
            {
                id: 'automatiza-tu-comunicacion',
                icon: '/images/icon_offer-03.webp',
                title: 'Automatiza tu comunicación',
                description: 'No pierdas mas clientes, gestionamos las respuestas y comunicación de manera automática.',
                image: '/images/service_card-03.webp',
            },
            {
                id: 'agenda-mas-trabajos',
                icon: '/images/icon_offer-04.webp',
                title: 'Agenda más trabajos',
                description: 'Gestiona tus agenda desde tu movil, crea recordatorios y mantente notificado.',
                image: '/images/service_card-04.webp',
            },

        ]
    }
}