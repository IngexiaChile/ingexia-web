import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/content";

// Deliberately a compact strip, not a full card grid — this is supporting
// information and should not compete in visual weight with Services or
// Methodology.
export function Industries() {
  return (
    <section id="industrias" className="relative scroll-mt-24 bg-surface py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-slate to-transparent sm:h-16"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-dark">
              Industrias
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {industries.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <Icon
                    className="h-4 w-4 text-graphite"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
