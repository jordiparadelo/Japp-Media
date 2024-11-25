import { Section, Container, CustomImage } from "@/components/ui";


const services = [
    {
        id: 1,
        title: 'Stand out in the local pack',
        description: 'Enhance your visibility in local search results.',
        image: '/images/local-pack.jpg',
    },
    {
        id: 2,
        title: 'Get more reviews',
        description: 'Encourage customers to leave positive reviews.',
        image: '/images/reviews.jpg',
    },
    {
        id: 3,
        title: 'Boost client meetings & communication',
        description: 'Improve scheduling and communication with clients.',
        image: '/images/communication.jpg',
    },
];

const ServicesSection = () => {
    return (
        <Section className="bg-gray-100 text-gray-900">
            <Container className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map(service => (
                    <div key={service.id} className="flex flex-col md:flex-row items-center">
                        <CustomImage src={service.image} alt={service.title} className="w-full md:w-1/2 h-auto mb-4 md:mb-0" />
                        <div className="md:ml-8">
                            <h3 className="text-2xl font-bold">{service.title}</h3>
                            <p className="mt-2">{service.description}</p>
                        </div>
                    </div>
                ))}
            </Container>
        </Section>
    );
};

export  {ServicesSection}; 