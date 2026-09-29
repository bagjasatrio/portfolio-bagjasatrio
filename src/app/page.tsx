import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Stats } from "@/components/sections/Stats";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Stats />
      <SelectedWork />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
