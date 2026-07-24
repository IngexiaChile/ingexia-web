import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { HeroGraphic } from "@/components/sections/HeroGraphic";
import { contactHref } from "@/config/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-navy pt-40 pb-28 sm:pb-32 lg:pt-52 lg:pb-36"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2">
          <div className="animate-drift h-full w-full rounded-full bg-brand-blue/25 blur-[140px]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-brand-gray-50 sm:h-72" />
      </div>

      <Container className="relative grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:items-center lg:gap-x-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              Ingeniería · Inteligencia Artificial · Transformación Digital
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transformamos organizaciones mediante Ingeniería e Inteligencia
              Artificial.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              Diseñamos arquitecturas empresariales, integramos sistemas
              complejos y modernizamos plataformas críticas, aplicando el
              mismo rigor de ingeniería que exige la transformación digital a
              gran escala.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 border-t border-white/10 pt-8 text-white">
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
              <Button href={contactHref} size="lg">
                Conversemos
              </Button>
              <Button href="#servicios" variant="secondaryOnDark" size="lg">
                Conoce nuestros servicios
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <Reveal delay={200}>
            <HeroGraphic />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
