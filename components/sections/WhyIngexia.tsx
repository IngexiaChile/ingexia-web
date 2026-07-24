import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { valueProps } from "@/data/content";

export function WhyIngexia() {
  return (
    <section className="bg-brand-gray-50 py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Por qué INGEXIA"
            title="Ingeniería aplicada al valor que tu organización necesita."
            subtitle="Cada proyecto se mide por el problema de negocio que resuelve, no por la tecnología que utiliza."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-brand-gray-light bg-brand-gray-light sm:grid-cols-2 lg:grid-cols-5">
          {valueProps.map(({ icon: Icon, title }, index) => (
            <Reveal key={title} delay={index * 60} className="h-full">
              <div className="group flex h-full flex-col gap-4 bg-white p-7 transition-colors duration-300 hover:bg-brand-blue-50">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-50 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    className="h-5 w-5 text-brand-blue"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </span>
                <p className="text-sm font-medium leading-relaxed text-brand-navy">
                  {title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
