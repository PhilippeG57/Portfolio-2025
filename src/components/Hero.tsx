export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bonjour, je suis Philippe GARCIA
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Développeur Web et formateur âgé de 29 ans. Mes passions sont le monde d'internet, les avancées technologiques et les jeux vidéo.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors"
            >
              Contactez-moi
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                src="./src/media/philippe.png"
                alt="Philippe Garcia image de profil"
                className="w-full h-full object-cover grayscale transition-all duration-300 ease-in-out hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}