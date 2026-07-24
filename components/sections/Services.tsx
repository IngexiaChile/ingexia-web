import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/content";

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-brand-gray-50 pb-28 pt-20 sm:pb-32 sm:pt-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Ingeniería especializada para cada capa de tu plataforma."
            subtitle="Combinamos profundidad técnica y visión estratégica en siete líneas de servicio diseñadas para organizaciones medianas y grandes."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 80}>
              <article className="group h-full rounded-2xl border border-brand-gray-light bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-navy/5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue">
                  <Icon
                    className="h-6 w-6"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-brand-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
