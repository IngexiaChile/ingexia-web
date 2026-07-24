import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-24 bg-brand-gray-50 pb-28 pt-20 sm:pb-32 sm:pt-24"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Nosotros"
                title="Ingeniería con criterio, no con moda."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="space-y-6 text-lg leading-relaxed text-brand-gray">
                <p>
                  INGEXIA nace de la convicción de que la transformación
                  digital solo es sostenible cuando se construye sobre una
                  base de ingeniería sólida. Combinamos profundidad técnica y
                  visión estratégica para ayudar a organizaciones medianas y
                  grandes a modernizar sus plataformas, integrar sus sistemas
                  y adoptar tecnologías emergentes con criterio.
                </p>
                <p>
                  Creemos en soluciones bien diseñadas antes que en
                  soluciones rápidas. Cada decisión técnica que tomamos
                  considera el largo plazo: escalabilidad, mantenibilidad y
                  seguridad desde el primer día.
                </p>
                <p className="font-medium text-brand-navy">
                  Trabajamos como una extensión del equipo de tecnología de
                  nuestros clientes, no como un proveedor externo más.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
