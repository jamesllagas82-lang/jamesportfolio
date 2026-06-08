import { useState } from "react";
import profileImage from "../assets/myprofile.jpg";
import cvFile from "../assets/Llagas, James Charles M.pdf";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900 px-6"
      >
        {/* PROFILE IMAGE */}
        <div className="mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Hi, I'm a Software Developer
        </h1>

        <p className="mt-4 text-gray-600 text-lg text-center max-w-md">
          I build modern, responsive web and mobile applications with clean UI
          and smooth user experience.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* VIEW PROJECTS */}
          {/* <button
            onClick={() => setOpen(true)}
            className="bg-gray-900 text-white px-7 py-3 rounded-full font-medium
            hover:bg-gray-800 transition shadow-md"
          >
            View Projects
          </button> */}
          <a
            href="#projects"
            className="bg-gray-900 text-white px-7 py-3 rounded-full font-medium
  hover:bg-gray-800 transition shadow-md"
          >
            View Projects
          </a>

          {/* DOWNLOAD CV */}
          <a
            href={cvFile}
            download
            className="bg-pink-600 text-white px-7 py-3 rounded-full font-medium
            hover:bg-pink-700 transition shadow-md text-center"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">My Projects</h2>

            <p className="text-gray-500 mt-2 mb-6">
              Download my latest mobile application APK
            </p>

            {/* APK BUTTON (MATCH MAGENTA THEME) */}
            <a
              href="https://expo.dev/artifacts/eas/cmFERrYWnSpR9aicbT2KT8.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white px-5 py-2 rounded-full
              hover:bg-pink-700 transition"
            >
              Download APK
            </a>

            <button
              onClick={() => setOpen(false)}
              className="block w-full mt-5 border border-gray-300 text-gray-700
              py-2 rounded-full hover:bg-gray-100 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
