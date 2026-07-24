import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { credibilityPoints } from "@/data/content";

// A dark "slate" ground bridges the ink Hero into the lighter sections
// below without a jarring dark-to-white cut. Content is qualitative and
// non-numeric on purpose — see data/content.ts for why.
export function Credibility() {
  return (
    <section className="relative bg-slate py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-ink to-transparent sm:h-16"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-blue-light">
            Cómo operamos
          </p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityPoints.map((point) => (
              <li key={point.label} className="border-t border-surface/15 pt-4">
                <p className="text-sm font-medium leading-relaxed text-surface/90">
                  {point.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
