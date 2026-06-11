import FadeInSection from "../components/ui/FadeInSection";
import FadeInCard from "../components/ui/FadeInCard";

import { projects } from "../constants/projects";

export default function Projects() {
  return (
    <FadeInSection direction="down">
      <section id="projects" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <FadeInCard direction="up">
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="
              bg-white
              p-6
              rounded-2xl
              border
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
            "
                >
                  <h3 className="font-bold text-xl mb-3">{project.title}</h3>

                  <p className="text-gray-600">{project.desc}</p>
                </div>
              ))}
            </div>
          </FadeInCard>
        </div>
      </section>
    </FadeInSection>
  );
}
