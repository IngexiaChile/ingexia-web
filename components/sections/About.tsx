import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-ink py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass-light">
            Nosotros
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-surface sm:text-4xl lg:text-5xl">
            Ingeniería con criterio, no con moda.
          </h2>
        </Reveal>

        <div className="mt-14 lg:max-w-3xl">
          <Reveal delay={80}>
            <div className="space-y-6 text-lg leading-relaxed text-graphite-2">
              <p>
                INGEXIA nace de la convicción de que la transformación digital
                solo es sostenible cuando se construye sobre una base de
                ingeniería sólida. Combinamos profundidad técnica y visión
                estratégica para ayudar a organizaciones medianas y grandes a
                modernizar sus plataformas, integrar sus sistemas y adoptar
                tecnologías emergentes con criterio.
              </p>
              <p>
                Creemos en soluciones bien diseñadas antes que en soluciones
                rápidas. Cada decisión técnica que tomamos considera el largo
                plazo: escalabilidad, mantenibilidad y seguridad desde el
                primer día.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 border-l-2 border-brass-ink pl-5 text-lg font-medium text-surface">
              Trabajamos como una extensión del equipo de tecnología de
              nuestros clientes, no como un proveedor externo más.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
