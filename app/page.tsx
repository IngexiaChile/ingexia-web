import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { WhyIngexia } from "@/components/sections/WhyIngexia";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { Industries } from "@/components/sections/Industries";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <WhyIngexia />
      <Services />
      <Methodology />
      <Industries />
      <About />
      <FinalCTA />
    </>
  );
}
