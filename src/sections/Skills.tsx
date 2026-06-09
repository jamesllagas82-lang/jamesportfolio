import FadeInSection from "../components/ui/FadeInSection";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <FadeInSection direction="right">
      <section id="skills" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-12">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border rounded-xl hover:border-pink-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Backend Development
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border rounded-xl hover:border-pink-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Mobile Development
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.mobile.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border rounded-xl hover:border-pink-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Tools & Design
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border rounded-xl hover:border-pink-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </FadeInSection>
  );
}