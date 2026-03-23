import SectionWrapper from "./SectionWrapper";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <SectionWrapper>
      <section id="projects" className="py-32 px-10">
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 p-8 hover:border-cyan-400 transition-all"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}