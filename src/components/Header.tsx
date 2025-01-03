import { Menu, X, Code, Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a title="Philippe Garcia" href="/">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Philippe Garcia
              </span>
            </div>
          </a>

          <nav className="hidden md:flex space-x-8">
            <a title="About" href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              À propos
            </a>
            <a title="Skills" href="/#skills" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              Compétences
            </a>
            <a title="Projects" href="/#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              Projets
            </a>
            <a title="Contact" href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              aria-label="Github Philippe Garcia"
              href="https://github.com/PhilippeG57"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              aria-label="Linkedin Philippe Garcia"
              href="https://www.linkedin.com/in/philippe-garcia-245680195/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              aria-label="Email Philippe Garcia"
              href="mailto:philippe57660.garcia@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
            <ThemeToggle />
          </div>

          <button className="md:hidden" aria-label="Menu Mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-gray-900">
            <a title="About" href="/#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              À propos
            </a>
            <a title="Skills" href="/#skills" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              Compétences
            </a>
            <a title="Projects" href="/#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              Projets
            </a>
            <a title="Contact" href="/#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              Contact
            </a>
            <div className="flex items-center space-x-4 px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
