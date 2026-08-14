// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Education from "./sections/Education";
// import Skills from "./sections/Skills";
// import Projects from "./sections/Projects";
// import Contact from "./sections/Contact";
// import UnfinishedProjects from "./sections/UnfinishedProjects";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
//       <Navbar />

//       <main>
//         <Hero />
//         <About />
//         <Education />
//         <Skills />
//         <Projects />

//         <UnfinishedProjects />
//         <Contact />
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import UnfinishedProjects from "./sections/UnfinishedProjects";

import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <UnfinishedProjects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      <main>
        <Routes>
          {/* Portfolio Homepage */}
          <Route path="/" element={<Home />} />

          {/* Project Details */}
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
