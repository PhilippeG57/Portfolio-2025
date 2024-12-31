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
                            <li>• Titre RNCP Niveau 5 - Développeur Web</li>
                            <li>• Formation continue en développement web</li>
                            <li>• Veille technologique quotidienne</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Briefcase className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3 dark:text-white">Expérience</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• 3 ans d'expérience en développement web</li>
                            <li>• Freelance depuis 2022</li>
                            <li>• Formateur en développement web</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Award className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3 dark:text-white">Objectifs</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Créer des solutions web innovantes</li>
                            <li>• Partager mes connaissances</li>
                            <li>• Évoluer constamment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}