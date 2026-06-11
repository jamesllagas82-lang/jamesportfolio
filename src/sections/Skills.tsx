import FadeInSection from "../components/ui/FadeInSection";
import FadeInCard from "../components/ui/FadeInCard";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <FadeInSection direction="right">
      <section id="skills" className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Web Development */}
            <FadeInCard direction="right">
              <div>
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">
                    Languages
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.webDevelopment.languages.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-50 border rounded-xl hover:border-pink-500 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-3">
                    Frameworks
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.webDevelopment.frameworks.map((skill) => (
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
            </FadeInCard>

            {/* Mobile Development */}
            <FadeInCard direction="right">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Mobile Development
                </h3>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">
                    Languages
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.mobileDevelopment.languages.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-50 border rounded-xl hover:border-pink-500 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-3">
                    Frameworks
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.mobileDevelopment.frameworks.map((skill) => (
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
            </FadeInCard>

            {/* Backend + Tools (SAME ROW) */}
            <div className="md:col-span-2 grid md:grid-cols-2 gap-10">
              {/* Backend */}
              <FadeInCard direction="right">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Backend Development
                  </h3>

                  {/* Frameworks */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      Frameworks
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {skills.backend.frameworks.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gray-50 border rounded-xl hover:border-pink-500 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Databases */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      Databases
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {skills.backend.databases.map((skill) => (
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
              </FadeInCard>

              {/* Tools */}
              <FadeInCard direction="right">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Tools & Platforms
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
              </FadeInCard>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
