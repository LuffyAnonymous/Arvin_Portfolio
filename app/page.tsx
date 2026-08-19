import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatCanIAutomate } from "@/components/sections/WhatCanIAutomate";
import { Services } from "@/components/sections/Services";
import { WhoIHelp } from "@/components/sections/WhoIHelp";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Technologies } from "@/components/sections/Technologies";
import { About } from "@/components/sections/About";
import { ROI } from "@/components/sections/ROI";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatCanIAutomate />
      <Services />
      <WhoIHelp />
      <Projects />
      <Process />
      <BeforeAfter />
      <WhyWorkWithMe />
      <Technologies />
      <About />
      <ROI />
      <Contact />
    </>
  );
}
