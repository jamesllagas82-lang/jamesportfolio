import { motion } from "framer-motion";
import FadeInCard from "../components/ui/FadeInCard";

const paragraphs = [
  "Hello! I'm a passionate Full-Stack Web & Mobile Developer with a strong interest in creating modern, responsive, and user-friendly applications. I enjoy transforming ideas into real-world solutions through clean code, intuitive user interfaces, and efficient system design.",

  "My experience includes building web applications using React, Vite, TypeScript, JavaScript, HTML, CSS, and Tailwind CSS. I focus on developing fast, scalable, and maintainable applications that provide a seamless experience across different devices and screen sizes.",

  "In addition to web development, I also create mobile applications using React Native and Expo. I enjoy developing cross-platform applications that run smoothly on Android and iOS while maintaining a consistent and modern user experience.",

  "I continuously seek opportunities to learn new technologies, improve my development skills, and stay updated with industry best practices.",

  "Throughout my projects, I prioritize writing clean, reusable, and maintainable code. I enjoy working on both frontend and backend development, integrating APIs, managing databases, and creating complete solutions from concept to deployment.",

  "My goal is to grow as a software developer, contribute to innovative projects, and build applications that create real value for users and businesses.",
];

export default function About() {
  return (
    <FadeInCard direction="up">
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          {paragraphs.map((text, index) => (
            <motion.p
              className="text-gray-700"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>
    </FadeInCard>
  );
}
