import { educationData } from "../constants/education";
import FadeInSection from "../components/ui/FadeInSection";
import FadeInCard from "../components/ui/FadeInCard";

export default function Education() {
  return (
    <FadeInSection direction="right">
      <section
        id="education"
        className="max-w-5xl mx-auto px-6 py-10 scroll-mt-24"
      >
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Education</h2>

          <p className="text-gray-600 mt-2">
            My academic background and learning journey.
          </p>
        </div>

        <div className="relative border-l-2 border-pink-500 ml-4">
          {educationData.map((item) => (
            <div key={item.id} className="mb-10 ml-8 relative">
              <div className="absolute -left-[42px] w-5 h-5 bg-pink-500 rounded-full border-4 border-white shadow" />

              <FadeInCard direction="right">
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <span className="text-sm font-medium text-pink-600">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold mt-2">{item.program}</h3>

                  <p className="text-gray-700 mt-1">{item.school}</p>

                  <p className="text-sm text-gray-500 mt-1">{item.location}</p>

                  <p className="text-sm text-gray-500 mt-1">{item.level}</p>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInCard>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
