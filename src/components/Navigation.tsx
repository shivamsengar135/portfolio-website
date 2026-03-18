import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Publications', path: '#blog' },
    { name: 'Contact', path: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
            Shivam Sengar
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="hover:text-blue-400 transition duration-300 text-gray-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-blue-400"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="block px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
