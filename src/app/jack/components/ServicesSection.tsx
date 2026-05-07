'use client';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Backend Development',
    description:
      'Building scalable, high-performance server-side applications using Spring Boot, Java, and microservices architecture tailored to your business needs.',
  },
  {
    number: '02',
    name: 'Frontend Development',
    description:
      'Crafting modern, responsive UIs with React and Next.js, focused on performance, accessibility, and pixel-perfect execution.',
  },
  {
    number: '03',
    name: 'API Design',
    description:
      'Designing clean RESTful and GraphQL APIs, integrating third-party services, and building the data layer that powers seamless digital experiences.',
  },
  {
    number: '04',
    name: 'Mobile Development',
    description:
      'Building cross-platform iOS and Android apps with React Native that deliver native-quality performance and user experience.',
  },
  {
    number: '05',
    name: 'DevOps & Cloud',
    description:
      'Containerizing applications with Docker, orchestrating deployments, and managing cloud infrastructure on AWS for reliable, scalable releases.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
