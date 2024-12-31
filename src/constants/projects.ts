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

export const projectsList = [
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
] as const;