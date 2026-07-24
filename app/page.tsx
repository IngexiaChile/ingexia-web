import { Hero } from "@/components/sections/Hero";
import { Credibility } from "@/components/sections/Credibility";
import { Capabilities } from "@/components/sections/Capabilities";
import { Methodology } from "@/components/sections/Methodology";
import { Services } from "@/components/sections/Services";
import { EngagementModel } from "@/components/sections/EngagementModel";
import { Industries } from "@/components/sections/Industries";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <Capabilities />
      <Methodology />
      <Services />
      <EngagementModel />
      <Industries />
      <About />
      <FinalCTA />
    </>
  );
}
