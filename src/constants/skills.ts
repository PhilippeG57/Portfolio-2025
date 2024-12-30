import { Code2, Palette, Terminal, Laptop } from 'lucide-react';

export const skillsList = [
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
    description: 'Création d\'interfaces utilisateur intuitives et belles',
  },
  {
    icon: Laptop,
    title: 'Responsive Design',
    description: 'Création d\'applications qui fonctionnent sur n\'importe quel appareil',
  },
] as const;