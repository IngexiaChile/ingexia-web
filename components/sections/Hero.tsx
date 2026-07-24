import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/config/site";

// A shorter hero than v0.3: content should land sooner. Depth comes from a
// restrained radial glow + a faint technical grid — both static, no
// animated diagram or particles. The one place brand blue shows up at any
// real scale, on purpose: it's the first thing a visitor sees.
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pt-28 pb-16 sm:pb-20 lg:pt-36 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid-faint absolute inset-0" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue/25 blur-[140px]" />
        <div className="absolute left-0 top-[58%] h-72 w-72 -translate-y-1/2 rounded-full bg-blue/20 blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center border border-surface/15 bg-surface/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-surface/70">
              Ingeniería · Inteligencia Artificial · Transformación Digital
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-surface sm:text-5xl lg:text-6xl xl:text-7xl">
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

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={contactHref} size="lg">
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

          <Reveal delay={300}>
            <div className="mt-10 border-t border-surface/10 pt-7">
              <Logo
                tone="dark"
                showTagline
                iconClassName="h-8"
                wordClassName="text-base"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
