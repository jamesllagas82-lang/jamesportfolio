import FadeInSection from "../components/ui/FadeInSection";
import BlogProjectCard from "../components/ui/BlogProjectCard";
import { blogProjects } from "../constants/projects";

export default function BlogProjects() {
  return (
    <FadeInSection direction="down">
      <section id="blog-projects" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Blog & Website Showcase
          </h2>

          <p className="text-gray-600 text-center mb-10">
            Explore websites and blog layouts I've created.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogProjects.map((project) => (
              <BlogProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
