import { useState } from 'react';
import vendezFacile from '../media/projets/vendezfacile.png';
import waysWater from '../media/projets/wwt.png';
import amongusImg from '../media/projets/amongus.jpg';
import arobase from '../media/projets/arobase.jpg';
import arobaseshop from '../media/projets/arobaseshop.jpg';
import azcomm from '../media/projets/azcomm.jpg';
import cocovoit from '../media/projets/cocovoit.jpg';
import demay from '../media/projets/demay.jpg';
import fmcbd from '../media/projets/fmcbd.png';
import lettreMotiv from '../media/projets/lettreMotiv.png';
import questionChampion from '../media/projets/questionchampion.jpg';
import sophiemare from '../media/projets/sophiemare.jpg';
import viedemome from '../media/projets/viedemome.png';

const projects = [
  {
    href: "https://vendezfacile.com/",
    title: 'Vendez Facile',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    image: vendezFacile,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://wwt.lu/",
    title: 'Ways Water Treatment',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    image: waysWater,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://sophiemare.fr/",
    title: 'Sophie Maré Photographe',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    image: sophiemare,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://azcommunication.com/",
    title: 'AZ Communication',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    image: azcomm,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://demay-sarl.com/",
    title: 'Demay',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    image: demay,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://viedemome.fr/",
    title: 'Vie De Môme',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    image: viedemome,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://fmcbd.fr/",
    title: 'FMCBD',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    image: fmcbd,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://github.com/Philippe57660/projet-covoiturage",
    title: 'Application de covoiturage',
    description: 'Une application crée avec le framework Symfony',
    image: cocovoit,
    tags: ['PHP', 'Symfony', 'TWIG'],
    category: 'personnel',
  },
  {
    href: "https://arobase-design.fr/shop57455/",
    title: 'Arobase Shop',
    description: 'Un site web crée avec le CMS PrestaShop.',
    image: arobaseshop,
    tags: ['PHP', 'Prestashop', 'Orienté Objet'],
    category: 'professionnel',
  },
  {
    href: "https://arobase-design.fr",
    title: 'Arobase Design',
    description: 'Un site web crée avec les langages natifs HTML, CSS et Javascript',
    image: arobase,
    tags: ['HTML', 'CSS', 'Javascript', 'PHP'],
    category: 'professionnel',
  },
  {
    href: "https://philippe-garcia.fr/lettreMotivation/",
    title: 'Générateur de lettre de motivation',
    description: 'Une application créée avec les langages natifs HTML, CSS et PHP',
    image: lettreMotiv,
    tags: ['HTML', 'CSS', 'PHP'],
    category: 'personnel',
  },
  {
    href: "https://philippe-garcia.fr/questionchampion/",
    title: 'Générateur de questions',
    description: 'Une application créée avec les langages natifs HTML, CSS, Javascript et PHP',
    image: questionChampion,
    tags: ['HTML', 'CSS', 'Javascript', 'PHP'],
    category: 'personnel',
  },


  {
    href: "https://philippe-garcia.fr/amongus/",
    title: 'Among Us',
    description: 'Une animation crée avec HTML, CSS et Javascript.',
    image: amongusImg,
    tags: ['HTML', 'CSS', 'Javascript'],
    category: 'personnel',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('tous');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'tous') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Mes projets</h2>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter('tous')}
            className={`px-4 py-2 rounded-lg ${filter === 'tous' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Tous les projets
          </button>

          <button
            onClick={() => setFilter('professionnel')}
            className={`px-4 py-2 rounded-lg ${filter === 'professionnel' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Professionnel
          </button>
          <button
            onClick={() => setFilter('personnel')}
            className={`px-4 py-2 rounded-lg ${filter === 'personnel' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Personnel
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a href={project.href} target="_blank">
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 border-primary border-solid border-[1px] text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section >
  );
}