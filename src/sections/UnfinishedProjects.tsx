import FadeInSection from "../components/ui/FadeInSection";
import FadeInCard from "../components/ui/FadeInCard";

import UnfinishedProjectCard from "../components/ui/UnfinishedProjectCard";

import { unfinishedProjects } from "../constants/projects";

export default function UnfinishedProjects() {
  return (
    <FadeInSection direction="down">
      <section
        id="unfinished-projects"
        className="bg-white py-20 px-6 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Projects in Development</h2>

            <p className="text-gray-600 mt-3">
              Projects that I am currently building and improving.
            </p>
          </div>

          <FadeInCard direction="up">
            <div className="grid md:grid-cols-3 gap-6">
              {unfinishedProjects.map((project) => (
                <UnfinishedProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </FadeInCard>
        </div>
      </section>
    </FadeInSection>
  );
}
