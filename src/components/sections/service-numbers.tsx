import { Section, Container } from "@/components/ui";


const ServiceNumbers = () => {
    return (
        <Section className="bg-white text-gray-900">
            <Container className="py-16">
                <h2 className="text-3xl font-bold mb-4">Attract More Customers</h2>
                <p className="mb-8">Our services have helped businesses increase their customer base by up to 50%.</p>
                <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold">50%</h3>
                        <p>Increase in Customer Base</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold">30%</h3>
                        <p>Boost in Online Engagement</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold">20%</h3>
                        <p>Growth in Revenue</p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export {ServiceNumbers}; 