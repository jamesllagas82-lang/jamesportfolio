export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-4 sm:py-6 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 text-sm sm:text-base break-words">
          © {new Date().getFullYear()} My Portfolio. Built with React + Vite
        </p>
      </div>
    </footer>
  );
}