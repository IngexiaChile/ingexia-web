import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { engagementModel } from "@/data/content";

// Replaces the absence of publishable case studies with something honest:
// the operating principles that govern any engagement, not a fabricated
// success story. Laid out as a row list (spec-sheet composition) to break
// the title+card-grid rhythm repeated by the sections around it.
export function EngagementModel() {
  return (
    <section
      id="modelo-de-intervencion"
      className="relative scroll-mt-24 bg-slate py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-surface to-transparent sm:h-24"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Modelo de intervención"
            title="Así estructuramos un proyecto junto a su equipo de TI."
            subtitle="No reemplazamos a su equipo interno: operamos como una extensión de él, con reglas claras desde el primer día."
            tone="dark"
          />
        </Reveal>

        <div className="mt-16 border-t border-surface/15">
          {engagementModel.map((item, index) => (
            <Reveal key={item.step} delay={index * 80}>
              <div className="grid grid-cols-1 gap-3 border-b border-surface/15 py-8 sm:grid-cols-[5rem_1fr] sm:gap-8">
                <span className="font-mono text-2xl text-blue-light">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-surface">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-graphite-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
