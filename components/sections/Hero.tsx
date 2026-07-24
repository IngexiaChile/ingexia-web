import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/config/site";

// Deliberately a solid ground with no background diagram, grid or glow —
// see the creative brief's trust audit: a decorative graphic here explains
// nothing and reads as the default "AI landing" gesture. The one place the
// system graph earns its place is the Capabilities section.
export function Hero() {
  return (
    <section id="top" className="bg-ink pt-40 pb-24 sm:pb-28 lg:pt-52 lg:pb-32">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center border border-surface/15 bg-surface/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-surface/70">
              Ingeniería · Inteligencia Artificial · Transformación Digital
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-surface sm:text-5xl lg:text-6xl">
              Transformamos organizaciones mediante Ingeniería e Inteligencia
              Artificial.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-graphite-2 sm:text-xl">
              Diseñamos arquitecturas empresariales, integramos sistemas
              complejos y modernizamos plataformas críticas, aplicando el
              mismo rigor de ingeniería que exige la transformación digital a
              gran escala.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 border-t border-surface/10 pt-8">
              <Logo
                tone="dark"
                showTagline
                iconClassName="h-9"
                wordClassName="text-lg"
              />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={contactHref} variant="primaryOnDark" size="lg">
                Conversemos
              </Button>
              <Button
                href="#capacidades"
                variant="secondaryOnDark"
                size="lg"
              >
                Conocer nuestras capacidades
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
