export default function Footer() {
  return (
    <footer className="text-center p-6 bg-white border-t mt-10">
      <p className="text-gray-600">
        © {new Date().getFullYear()} My Portfolio. Built with React + Vite
      </p>
    </footer>
  )
}