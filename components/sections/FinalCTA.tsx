import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/config/site";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-brand-navy pb-28 pt-20 sm:pb-32 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2">
          <div className="animate-drift h-full w-full rounded-full bg-brand-blue/20 blur-[130px]" />
        </div>
      </div>

      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Convirtamos la tecnología en una ventaja estratégica.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            Escríbenos y conversemos sobre los desafíos tecnológicos de tu
            organización.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex justify-center">
            <Button href={contactHref} size="lg">
              Conversemos
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
