import FadeInSection from "../components/ui/FadeInSection";
import FadeInCard from "../components/ui/FadeInCard";

import ProjectCard from "../components/ui/ProjectCard";

import { completedProjects } from "../constants/projects";

export default function Projects() {
  return (
    <FadeInSection direction="down">
      <section id="projects" className="bg-gray-50 py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <FadeInCard direction="up">
            <div className="grid md:grid-cols-3 gap-6">
              {completedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </FadeInCard>
        </div>
      </section>
    </FadeInSection>
  );
}
