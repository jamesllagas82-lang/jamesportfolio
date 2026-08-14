import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
        bg-white
        p-6
        rounded-2xl
        border
        hover:-translate-y-2
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Status */}
      <span
        className="
          inline-block
          mb-3
          px-3
          py-1
          text-xs
          font-semibold
          rounded-full
          bg-green-100
          text-green-700
        "
      >
        {project.status}
      </span>

      {/* Title */}
      <h3 className="font-bold text-xl mb-3">{project.title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{project.desc}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((technology) => (
          <span
            key={technology}
            className="
              px-2.5
              py-1
              text-xs
              font-medium
              bg-gray-100
              text-gray-700
              rounded-md
            "
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}
