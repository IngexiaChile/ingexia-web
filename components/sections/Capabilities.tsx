import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { systemHub, systemNodes } from "@/data/content";

// The single place in the site where the isotype's node geometry becomes a
// diagram — a hub-and-spoke org chart, not a floating network graph. It
// documents a real relationship (Arquitectura Empresarial connects the other
// six disciplines) rather than decorating the page. Reveals with the same
// uniform fade used everywhere else; nothing here animates on its own.
export function Capabilities() {
  const HubIcon = systemHub.icon;

  return (
    <section
      id="capacidades"
      className="relative scroll-mt-24 bg-surface py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate to-transparent sm:h-24"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Capacidades"
            title="Un sistema conectado, no siete servicios sueltos."
            subtitle="La arquitectura empresarial es la disciplina que ordena y conecta el resto de nuestras capacidades — así estructuramos cada proyecto."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16">
            <div className="mx-auto flex max-w-sm flex-col items-center border border-blue/40 bg-ink px-7 py-7 text-center shadow-[0_20px_44px_-24px_rgba(37,84,214,0.5)]">
              <span className="inline-flex items-center justify-center rounded-sm bg-blue/15 p-2.5">
                <HubIcon
                  className="h-5 w-5 text-blue-light"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </span>
              <span className="mt-3 text-sm font-semibold text-surface">
                {systemHub.label}
              </span>
              <span className="mt-1.5 text-xs leading-relaxed text-graphite-2">
                {systemHub.note}
              </span>
            </div>

            <div className="mx-auto h-8 w-px bg-ink/20" aria-hidden="true" />
            <div className="h-px w-full bg-ink/20" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {systemNodes.map(({ icon: Icon, label, note }, index) => (
                <Reveal key={label} delay={index * 60}>
                  <div className="flex flex-col items-center pt-0 text-center">
                    <div className="h-6 w-px bg-ink/20" aria-hidden="true" />
                    <div className="group mt-0 w-full border border-ink/12 bg-surface-2 p-7 transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-blue/40 hover:bg-surface hover:shadow-[0_22px_44px_-24px_rgba(37,84,214,0.35)]">
                      <span className="mx-auto inline-flex items-center justify-center rounded-sm bg-blue-50 p-2.5">
                        <Icon
                          className="h-5 w-5 text-blue-dark"
                          aria-hidden="true"
                          strokeWidth={1.5}
                        />
                      </span>
                      <h3 className="mt-3 text-sm font-semibold text-ink">
                        {label}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-graphite">
                        {note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
