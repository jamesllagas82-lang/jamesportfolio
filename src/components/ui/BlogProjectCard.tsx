import type { Project, BlogProject } from "../../types/project";

interface ProjectCardProps {
  project: Project | BlogProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isBlogProject = "github" in project && "demo" in project;

  return (
    <div className="bg-white p-6 rounded-2xl border hover:shadow-xl transition-all duration-300">
      <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
        {project.status}
      </span>

      <h3 className="font-bold text-xl mb-3">{project.title}</h3>

      <p className="text-gray-600 mb-4">{project.desc}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((technology) => (
          <span
            key={technology}
            className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
          >
            {technology}
          </span>
        ))}
      </div>

      {isBlogProject && (
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700"
          >
            GitHub Repository
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Live Website
          </a>
        </div>
      )}
    </div>
  );
}
