import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

interface UnfinishedProjectCardProps {
  project: Project;
}

export default function UnfinishedProjectCard({
  project,
}: UnfinishedProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="
        group
        block
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
          bg-yellow-100
          text-yellow-700
        "
      >
        {project.status}
      </span>

      {/* Title */}
      <h3
        className="
          font-bold
          text-xl
          mb-3
          group-hover:text-gray-600
          transition-colors
        "
      >
        {project.title}
      </h3>

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

      {/* View Project */}
      <div className="mt-5 text-sm font-semibold">View Project →</div>
    </Link>
  );
}
