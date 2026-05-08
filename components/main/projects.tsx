"use client";

import { SolarSystem } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 relative"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        What We Build
      </h1>
      <p className="text-gray-500 text-sm mb-10 tracking-widest uppercase">
        Click a planet to explore
      </p>
      <SolarSystem projects={PROJECTS} />
    </section>
  );
};
