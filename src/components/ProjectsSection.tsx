"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolioContent";

export function ProjectsSection() {
  return (
    <section
      className="relative overflow-hidden bg-background pb-24 pt-36 sm:pb-28 sm:pt-40"
      id="projects"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(212,175,55,0.07),transparent_28%)]" />
      <div className="loading-divider pointer-events-none absolute inset-x-0 top-0" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="SELECTED WORK"
          index="03"
          status="3 case studies loaded"
          title="Academic software projects"
          description="A focused set of academic software projects demonstrating full-stack development, systems programming, web security, concurrency, and applied data structures."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              key={project.title}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectCard index={index} project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
