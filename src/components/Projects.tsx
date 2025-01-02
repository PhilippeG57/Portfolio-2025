import React, { useEffect, useState } from 'react';
import chateauxRhenansWebp from '../media/projets/chateauxrhenans.webp';
import chateauxRhenans from '../media/projets/chateauxrhenans.jpg';
import vendezFacileWebp from '../media/projets/vendezfacile.webp';
import vendezFacile from '../media/projets/vendezfacile.png';
import waysWaterWebp from '../media/projets/wwt.webp';
import waysWater from '../media/projets/wwt.png';
import amongusImgWebp from '../media/projets/amongus.webp';
import amongusImg from '../media/projets/amongus.jpg';
import arobaseWebp from '../media/projets/arobase.webp';
import arobase from '../media/projets/arobase.jpg';
import arobaseshopWebp from '../media/projets/arobaseshop.webp';
import arobaseshop from '../media/projets/arobaseshop.jpg';
import azcommWebp from '../media/projets/azcomm.webp';
import azcomm from '../media/projets/azcomm.jpg';
import cocovoitWebp from '../media/projets/cocovoit.webp';
import cocovoit from '../media/projets/cocovoit.jpg';
import demayWebp from '../media/projets/demay.webp';
import demay from '../media/projets/demay.jpg';
import fmcbdWebp from '../media/projets/fmcbd.webp';
import fmcbd from '../media/projets/fmcbd.png';
import sophiemareWebp from '../media/projets/sophiemare.webp';
import sophiemare from '../media/projets/sophiemare.jpg';
import viedemomeWebp from '../media/projets/viedemome.webp';
import viedemome from '../media/projets/viedemome.png';

const projects = [
  {
    href: "https://www.chateaux-rhenans.eu/",
    title: 'Chateaux Rhénans',
    description: 'Un site web crée avec ASP.NET et le CMS Umbraco',
    webpImage: chateauxRhenansWebp,
    fallbackImage: chateauxRhenans,
    tags: ['ASP.NET', 'umbraco'],
    category: 'professionnel',
  },
  {
    href: "https://vendezfacile.com/",
    title: 'Vendez Facile',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    webpImage: vendezFacileWebp,
    fallbackImage: vendezFacile,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://wwt.lu/",
    title: 'Ways Water Treatment',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    webpImage: waysWaterWebp,
    fallbackImage: waysWater,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://sophiemare.fr/",
    title: 'Sophie Maré Photographe',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    webpImage: sophiemareWebp,
    fallbackImage: sophiemare,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://azcommunication.com/",
    title: 'AZ Communication',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    webpImage: azcommWebp,
    fallbackImage: azcomm,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://demay-sarl.com/",
    title: 'Demay',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    webpImage: demayWebp,
    fallbackImage: demay,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://viedemome.fr/",
    title: 'Vie De Môme',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    webpImage: viedemomeWebp,
    fallbackImage: viedemome,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://fmcbd.fr/",
    title: 'FMCBD',
    description: 'Un site web crée avec le CMS WordPress et le plugin Divi.',
    webpImage: fmcbdWebp,
    fallbackImage: fmcbd,
    tags: ['WordPress', 'Divi'],
    category: 'professionnel',
  },
  {
    href: "https://github.com/Philippe57660/projet-covoiturage",
    title: 'Application de covoiturage',
    description: 'Une application crée avec le framework Symfony',
    webpImage: cocovoitWebp,
    fallbackImage: cocovoit,
    tags: ['PHP', 'Symfony', 'TWIG'],
    category: 'personnel',
  },
  {
    href: "https://arobase-design.fr/shop57455/",
    title: 'Arobase Shop',
    description: 'Un site ecommerce crée avec le CMS PrestaShop.',
    webpImage: arobaseshopWebp,
    fallbackImage: arobaseshop,
    tags: ['PHP', 'Prestashop', 'Orienté Objet'],
    category: 'professionnel',
  },
  {
    href: "https://arobase-design.fr",
    title: 'Arobase Design',
    description: 'Un site web crée avec les langages natifs HTML, CSS et Javascript',
    webpImage: arobaseWebp,
    fallbackImage: arobase,
    tags: ['HTML', 'CSS', 'Javascript', 'PHP'],
    category: 'professionnel',
  },
  {
    href: "https://philippe-garcia.fr/amongus/",
    title: 'Among Us',
    description: 'Une animation crée avec HTML, CSS et Javascript.',
    webpImage: amongusImgWebp,
    fallbackImage: amongusImg,
    tags: ['HTML', 'CSS', 'Javascript'],
    category: 'personnel',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('tous');
  const [visibleProjects, setVisibleProjects] = useState<Record<number, boolean>>({});

  const filteredProjects = projects.filter((project) => {
    if (filter === 'tous') return true;
    return project.category === filter;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            setVisibleProjects((prev) => ({
              ...prev,
              [parseInt(target.dataset.index!, 10)]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Mes projets</h2>
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
            <a href={project.href} target="_blank" key={index}>
              <div
                className={`project-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${visibleProjects[index]
                  ? index % 3 === 0
                    ? 'animate-slide-in-left'
                    : index % 3 === 1
                      ? 'animate-slide-in-up'
                      : 'animate-slide-in-right'
                  : 'opacity-0'
                }`}
                data-index={index}
              >
                <picture>
                  <source srcSet={project.webpImage} type="image/webp" />
                  <source srcSet={project.fallbackImage} type="image/jpeg" />
                  <img
                    src={project.fallbackImage}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </picture>
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
    </section>
  );
}
