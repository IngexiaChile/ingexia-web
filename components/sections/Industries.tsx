import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/content";

export function Industries() {
  return (
    <section
      id="industrias"
      className="scroll-mt-24 bg-brand-gray-50 pb-28 pt-20 sm:pb-32 sm:pt-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industrias"
            title="Experiencia técnica en sectores de alta exigencia operativa."
            align="center"
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ icon: Icon, label }, index) => (
            <Reveal key={label} delay={(index % 4) * 70}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-brand-gray-light bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-brand-blue-50 hover:shadow-lg hover:shadow-brand-navy/5">
                <Icon
                  className="h-6 w-6 text-brand-blue transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <span className="text-sm font-medium text-brand-navy">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
