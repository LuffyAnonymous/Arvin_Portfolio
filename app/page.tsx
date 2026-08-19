import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Technologies } from "@/components/sections/Technologies";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Projects />
      <Process />
      <BeforeAfter />
      <WhyWorkWithMe />
      <Technologies />
      <About />
      <Contact />
    </>
  );
}
