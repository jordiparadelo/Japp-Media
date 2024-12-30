import { Section, Container } from "@/components/ui";


const WhatToExpect = () => {
    return (
        <Section className="bg-white text-gray-900">
            <Container className="py-16">
                <h2 className="text-3xl font-bold mb-4">What You Should Expect</h2>
                <p>Our services are designed to provide measurable results and a significant return on investment.</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Increased online visibility</li>
                    <li>Improved customer engagement</li>
                    <li>Streamlined business operations</li>
                </ul>
            </Container>
        </Section>
    );
};

export {WhatToExpect}; 