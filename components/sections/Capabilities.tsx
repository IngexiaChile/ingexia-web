import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/data/content";

export function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-brand-gray-50 py-12 sm:py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-brand-gray-light bg-brand-gray-light sm:grid-cols-3 lg:grid-cols-7">
            {capabilities.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group flex flex-col items-center justify-center gap-3 bg-white px-4 py-7 text-center transition-colors duration-300 hover:bg-brand-blue-50"
              >
                <Icon
                  className="h-5 w-5 text-brand-blue transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <span className="text-xs font-medium text-brand-navy">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
