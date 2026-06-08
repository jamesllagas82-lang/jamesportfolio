import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* BRAND */}
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-gray-900">James</span>
          <span className="text-pink-500">Dev</span>
        </h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#home" className="hover:text-pink-500 transition">Home</a>
          <a href="#about" className="hover:text-pink-500 transition">About</a>
          <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
          <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>

      </div>

      {/* MOBILE MENU (SMOOTH ANIMATION) */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 px-6 flex flex-col gap-4 text-gray-700 font-medium overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-60 py-4 opacity-100 scale-100" : "max-h-0 py-0 opacity-0 scale-95"}`}
      >

        <a href="#home" onClick={closeMenu} className="hover:text-pink-500 transition">
          Home
        </a>

        <a href="#about" onClick={closeMenu} className="hover:text-pink-500 transition">
          About
        </a>

        <a href="#projects" onClick={closeMenu} className="hover:text-pink-500 transition">
          Projects
        </a>

        <a href="#contact" onClick={closeMenu} className="hover:text-pink-500 transition">
          Contact
        </a>

      </div>
    </nav>
  )
}