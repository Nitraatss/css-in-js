import { Section } from '../helpers/section';
import { CardsList } from '../helpers/cards-list';
import { ServiceCard } from '../components/service-card';
import { useMockServices } from '../mocks/services';

function Services({ className }) {
  const services = useMockServices();

  return (
    <Section className={className} title='Услуги'>
      <CardsList>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </CardsList>
    </Section>
  );
}

export { Services };
