const projects = [
  {
    title: "Hataw Balungao Multiplatform Tourism Management System",
    desc: "A web and mobile tourism management system developed for the Municipality of Balungao. The platform helps promote local tourist destinations, manage tourism-related information, and provide a better experience for visitors and administrators.",
  },
  {
    title: "Human Resource Information System (HRIS)",
    desc: "Contributed to the development of an HRIS during my internship at Easycom Japan Philippines Inc. Assisted in building and maintaining features related to employee management, records, and human resource processes.",
  },
  {
    title: "Personal Portfolio Website",
    desc: "A responsive portfolio website built with React, Vite, TypeScript, and Tailwind CSS to showcase my skills, projects, and experience as a Full-Stack Web & Mobile Developer.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects & Experience
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <h3 className="font-bold text-xl">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}