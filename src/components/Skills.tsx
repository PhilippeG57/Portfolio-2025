import React, { useEffect, useState } from 'react';
import { Code2, Palette, Terminal, Laptop } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Développement Front-end',
    description: 'Expert en React, TypeScript et frameworks CSS modernes',
  },
  {
    icon: Terminal,
    title: 'Développement Back-end',
    description: 'Maîtrise de Node.js, Express et de la gestion de bases de données',
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: "Création d'interfaces utilisateur intuitives et belles",
  },
  {
    icon: Laptop,
    title: 'Responsive Design',
    description: "Création d'applications qui fonctionnent sur n'importe quel appareil",
  },
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            setVisibleSkills((prev) => ({
              ...prev,
              [parseInt(target.dataset.index!, 10)]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.skill-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-index={index}
              className={`skill-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${visibleSkills[index]
                  ? index < 2
                    ? 'animate-slide-in-left'
                    : 'animate-slide-in-right'
                  : 'opacity-0'
                }`}
            >
              <skill.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
