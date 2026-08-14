export interface Project {
  title: string;
  slug: string;
  desc: string;
  status: "Completed" | "In Development";
  tech: string[];
}