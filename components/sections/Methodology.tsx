import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { methodologySteps } from "@/data/content";

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden scroll-mt-24 bg-ink pb-24 pt-20 sm:pb-28 sm:pt-24"
    >
      <div className="bg-grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-surface to-transparent sm:h-24"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Metodología"
            title="Un proceso de ingeniería, no una promesa de marketing."
            subtitle="Cada proyecto avanza a través de cinco etapas disciplinadas que aseguran resultados sólidos y sostenibles en el tiempo."
            tone="dark"
          />
        </Reveal>

        <div className="relative mt-20">
          <div
            className="absolute inset-x-0 top-6 hidden h-px bg-surface/15 lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {methodologySteps.map(
              ({ icon: Icon, step, title, description }, index) => (
                <Reveal key={step} delay={index * 90}>
                  <div className="group relative flex flex-col gap-4">
                    <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-surface/20 bg-ink text-surface transition-colors duration-200 group-hover:border-blue-light/60">
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs tracking-[0.2em] text-blue-light">
                        {step}
                      </p>
                      <h3 className="mt-2 text-base font-semibold tracking-tight text-surface">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-graphite-2">
                        {description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
