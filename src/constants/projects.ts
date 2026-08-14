import type { Project } from "../types/project";

export const completedProjects: Project[] = [
  {
    title: "Hataw Balungao",
    slug: "hataw-balungao",
    desc: "A tourism management system developed to help manage tourism-related information and services.",
    status: "Completed",
    tech: ["JavaScript", "React", "Node.js"],
  },

  {
    title: "HRIS",
    slug: "hris",
    desc: "A human resources information system with modules for team management, settings, and notifications.",
    status: "Completed",
    tech: ["JavaScript", "React", "Node.js"],
  },
];

export const unfinishedProjects: Project[] = [
  {
    title: "Shoe Store E-Commerce",
    slug: "shoe-store",
    desc: "A full-stack e-commerce platform for managing and selling shoes. Currently under development.",
    status: "In Development",
    tech: [
      "JavaScript",
      "React",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT (Json Web Token)",
    ],
  },
];