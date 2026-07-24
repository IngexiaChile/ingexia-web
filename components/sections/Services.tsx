import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/content";

export function Services() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 bg-surface pb-24 pt-20 sm:pb-28 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink to-transparent sm:h-24"
        aria-hidden="true"
      />
      <Container className="relative">
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
              <article className="group h-full border border-ink/12 bg-surface transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_22px_44px_-24px_rgba(37,84,214,0.35)]">
                <div className="flex items-center justify-between border-b border-ink/12 px-7 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite">
                  <span>Servicio</span>
                  <span>
                    {String(index + 1).padStart(2, "0")}/{String(services.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center justify-center rounded-sm bg-blue-50 p-2.5">
                    <Icon
                      className="h-5 w-5 text-blue-dark"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </span>
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
