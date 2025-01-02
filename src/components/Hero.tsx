import { useEffect, useState } from 'react';
import philippeWebp from '../media/philippe.webp';
import philippeImage from '../media/philippe.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState({
    leftBlock: false,
    rightBlock: false,
  });

  useEffect(() => {
    // Ajout du prefetch pour l'image
    const prefetchLink = document.createElement('link');
    prefetchLink.rel = 'prefetch';
    prefetchLink.href = philippeWebp;
    prefetchLink.as = 'image';
    document.head.appendChild(prefetchLink);

    // Intersection Observer pour les animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.3, // Déclenche lorsque 30% de l'élément est visible
      }
    );

    const elements = document.querySelectorAll('.hero-block');
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      document.head.removeChild(prefetchLink);
    };
  }, []);

  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bloc de gauche */}
          <div
            id="leftBlock"
            className={`hero-block ${isVisible.leftBlock ? 'animate-slide-in-left' : 'opacity-0'
              }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Bonjour, je suis Philippe GARCIA
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Développeur Web et formateur âgé de 29 ans. Mes passions sont le
              monde d'internet, les avancées technologiques et les jeux vidéo.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              Contactez-moi
            </a>
          </div>

          {/* Bloc de droite */}
          <div
            id="rightBlock"
            className={`relative hero-block ${isVisible.rightBlock ? 'animate-slide-in-right' : 'opacity-0'
              }`}
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-xl">
              <picture>
                <source srcSet={philippeWebp} type="image/webp" />
                <source srcSet={philippeImage} type="image/png" />
                <img
                  src={philippeImage}
                  alt="Philippe Garcia image de profil"
                  className="w-full h-full object-cover grayscale transition-all duration-300 ease-in-out hover:grayscale-0"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
