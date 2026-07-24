import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/content";

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-surface pb-24 pt-20 sm:pb-28 sm:pt-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Ingeniería especializada para cada capa de tu plataforma."
            subtitle="Combinamos profundidad técnica y visión estratégica en siete líneas de servicio diseñadas para organizaciones medianas y grandes."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 80}>
              <article className="group h-full border border-ink/15 bg-surface transition-colors duration-200 hover:border-brass-ink">
                <div className="flex items-center justify-between border-b border-ink/15 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite">
                  <span>Servicio</span>
                  <span>
                    {String(index + 1).padStart(2, "0")}/{String(services.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <Icon
                    className="h-5 w-5 text-brass-ink"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
