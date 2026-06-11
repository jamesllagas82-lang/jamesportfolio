import FadeInSection from "../components/ui/FadeInSection";

export default function About() {
  return (
    <FadeInSection direction="left">
      <section
        id="about"
        className="max-w-5xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Hello! I'm a passionate Full-Stack Web & Mobile Developer with a
            strong interest in creating modern, responsive, and user-friendly
            applications. I enjoy transforming ideas into real-world solutions
            through clean code, intuitive user interfaces, and efficient system
            design.
          </p>

          <p>
            My experience includes building web applications using React, Vite,
            TypeScript, JavaScript, HTML, CSS, and Tailwind CSS. I focus on
            developing fast, scalable, and maintainable applications that provide
            a seamless experience across different devices and screen sizes.
          </p>

          <p>
            In addition to web development, I also create mobile applications
            using React Native and Expo. I enjoy developing cross-platform
            applications that run smoothly on Android and iOS while maintaining a
            consistent and modern user experience.
          </p>

          <p>
            I continuously seek opportunities to learn new technologies, improve
            my development skills, and stay updated with industry best practices.
          </p>

          <p>
            Throughout my projects, I prioritize writing clean, reusable, and
            maintainable code. I enjoy working on both frontend and backend
            development, integrating APIs, managing databases, and creating
            complete solutions from concept to deployment.
          </p>

          <p>
            My goal is to grow as a software developer, contribute to innovative
            projects, and build applications that create real value for users and
            businesses.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
}