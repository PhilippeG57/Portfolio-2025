import { Menu, X, Code, Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">Philippe Garcia</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary">À propos</a>
            <a href="#skills" className="text-gray-700 hover:text-primary">Compétences</a>
            <a href="#projects" className="text-gray-700 hover:text-primary">Projets</a>
            <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/PhilippeG57" target="_blank" className="text-gray-700 hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/philippe-garcia-245680195/" target="_blank" className="text-gray-700 hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:philippe57660.garcia@gmail.com" className="text-gray-700 hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary">À propos</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-primary">Compétences</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-primary">Projets</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}