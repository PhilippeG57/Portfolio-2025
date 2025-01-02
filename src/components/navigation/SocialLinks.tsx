import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a aria-label="Github" href="https://github.com" className="text-gray-700 hover:text-[#a43f49] transition-colors">
        <Github className="h-5 w-5" />
      </a>
      <a aria-label="Linkedin" href="https://linkedin.com" className="text-gray-700 hover:text-[#a43f49] transition-colors">
        <Linkedin className="h-5 w-5" />
      </a>
      <a aria-label="Email" href="mailto:contact@example.com" className="text-gray-700 hover:text-[#a43f49] transition-colors">
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}