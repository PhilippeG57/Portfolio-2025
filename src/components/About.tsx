import { GraduationCap, Briefcase, Award } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">À propos de moi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <GraduationCap className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3 dark:text-white">Formation</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Chef de projet Logiciel et Réseau<br></br>Titre RNCP Niveau 6</li>
                            <li>• Formation Développeur web et web mobile<br></br>Titre RNCP Niveau 5</li>
                            <li>• Baccalauréat général</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Briefcase className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3 dark:text-white">Expérience</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• 5 ans d'expérience en développement web</li>
                            <li>• Développeur web en agence de communication de 2021 à 2022</li>
                            <li>• Freelance de 2022 à 2024</li>
                            <li>• Formateur en développement web</li>
                            <li>• Chef de Projet Système d'Informations depuis 2024</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Award className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3 dark:text-white">Objectifs</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Créer des solutions web innovantes</li>
                            <li>• Partager mes connaissances</li>
                            <li>• Rester à jour sur l'avancée technologique</li>
                            <li>• Évoluer constamment</li>
                        </ul>
                    </div>


                </div>

                <div className="flex justify-center gap-4 mb-8 pt-16">
                    <a href="https://philippe-garcia.fr/cv2.pdf" target="_blank">
                        <button className="px-4 py-2 rounded-lg bg-primary text-white">Mon CV</button>
                    </a>
                </div>
            </div>
        </section>
    );
}