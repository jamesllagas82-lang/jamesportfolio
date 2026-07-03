import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* -----------------------------
     SCROLL TO SECTION
  ------------------------------*/
  const handleNavClick = (id: string) => {
    setOpen(false);

    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 80;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActive(id);
  };

  /* -----------------------------
     ACTIVE SECTION TRACKER
  ------------------------------*/
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "projects",
      "contact",
    ];

    const observers = sections.map((id) => {
      const element = document.getElementById(id);

      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "-80px 0px -40% 0px",
        }
      );

      observer.observe(element);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  /* -----------------------------
     ACTIVE LINK STYLE
  ------------------------------*/
  const linkClass = (id: string) =>
    `cursor-pointer transition ${
      active === id
        ? "text-pink-600 font-semibold"
        : "text-gray-600 hover:text-pink-500"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-gray-900">James</span>
          <span className="text-pink-600">Dev</span>
        </h1>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 font-medium">
          <button onClick={() => handleNavClick("home")} className={linkClass("home")}>
            Home
          </button>

          <button onClick={() => handleNavClick("about")} className={linkClass("about")}>
            About
          </button>

          <button onClick={() => handleNavClick("education")} className={linkClass("education")}>
            Education
          </button>

          <button onClick={() => handleNavClick("skills")} className={linkClass("skills")}>
            Skills
          </button>

          <button onClick={() => handleNavClick("projects")} className={linkClass("projects")}>
            Projects
          </button>

          <button onClick={() => handleNavClick("contact")} className={linkClass("contact")}>
            Contact
          </button>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          open
            ? "max-h-80 opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4 font-medium">

          <button
            onClick={() => handleNavClick("home")}
            className={`text-left ${linkClass("home")}`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className={`text-left ${linkClass("about")}`}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick("education")}
            className={`text-left ${linkClass("education")}`}
          >
            Education
          </button>

          <button
            onClick={() => handleNavClick("skills")}
            className={`text-left ${linkClass("skills")}`}
          >
            Skills
          </button>

          <button
            onClick={() => handleNavClick("projects")}
            className={`text-left ${linkClass("projects")}`}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={`text-left ${linkClass("contact")}`}
          >
            Contact
          </button>

        </div>
      </div>
    </nav>
  );
}

// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("home");

//   const closeMenu = () => setOpen(false);

//   /* -----------------------------
//      SCROLL ACTIVE SECTION TRACKER
//   ------------------------------*/
//   useEffect(() => {
//     const sections = ["home", "about", "education", "skills", "projects", "contact"];

//     const observers = sections.map((id) => {
//       const el = document.getElementById(id);
//       if (!el) return null;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActive(id);
//           }
//         },
//         {
//           root: null,
//           threshold: 0.6, // 60% visible = active
//         }
//       );

//       observer.observe(el);
//       return observer;
//     });

//     return () => {
//       observers.forEach((obs) => obs?.disconnect());
//     };
//   }, []);

//   /* -----------------------------
//      ACTIVE LINK STYLE
//   ------------------------------*/
//   const linkClass = (id: string) =>
//     `transition ${
//       active === id
//         ? "text-pink-600 font-semibold"
//         : "text-gray-600 hover:text-pink-500"
//     }`;

//   return (
//     <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* BRAND */}
//         <h1 className="text-2xl font-extrabold tracking-tight">
//           <span className="text-gray-900">James</span>
//           <span className="text-pink-600">Dev</span>
//         </h1>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex gap-8 font-medium">
//           <a href="#home" className={linkClass("home")}>Home</a>
//           <a href="#about" className={linkClass("about")}>About</a>
//           <a href="#education" className={linkClass("education")}>Education</a>
//           <a href="#skills" className={linkClass("skills")}>Skills</a>
//           <a href="#projects" className={linkClass("projects")}>Projects</a>
//           <a href="#contact" className={linkClass("contact")}>Contact</a>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden flex flex-col gap-1"
//         >
//           <span className="w-6 h-0.5 bg-gray-800"></span>
//           <span className="w-6 h-0.5 bg-gray-800"></span>
//           <span className="w-6 h-0.5 bg-gray-800"></span>
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`md:hidden bg-white border-t border-gray-100 px-6 flex flex-col gap-4 font-medium overflow-hidden transition-all duration-300 ease-in-out
//         ${open ? "max-h-60 py-4 opacity-100 scale-100" : "max-h-0 py-0 opacity-0 scale-95"}`}
//       >
//         <a href="#home" onClick={closeMenu} className={linkClass("home")}>Home</a>
//         <a href="#about" onClick={closeMenu} className={linkClass("about")}>About</a>
//         <a href="#education" onClick={closeMenu} className={linkClass("education")}>Education</a>
//         <a href="#skills" onClick={closeMenu} className={linkClass("skills")}>Skills</a>
//         <a href="#projects" onClick={closeMenu} className={linkClass("projects")}>Projects</a>
//         <a href="#contact" onClick={closeMenu} className={linkClass("contact")}>Contact</a>
//       </div>
//     </nav>
//   );
// }