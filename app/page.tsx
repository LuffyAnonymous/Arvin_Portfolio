import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Projects } from "@/components/sections/Projects";
import { AutomationDemo } from "@/components/sections/AutomationDemo";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Marquee tone="light" />
      <AutomationDemo />
      <Process />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
