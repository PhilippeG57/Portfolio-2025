import React, { useEffect, useState } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export default function About() {
    const [isVisible, setIsVisible] = useState({
        formation: false,
        experience: false,
        objectifs: false,
    });

    useEffect(() => {
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
                threshold: 0.3, // Se déclenche lorsque 30% de l'élément est visible
            }
        );

        const elements = document.querySelectorAll('.about-block');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">À propos de moi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        id="formation"
                        className={`about-block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg ${isVisible.formation ? 'animate-slide-in-left' : 'opacity-0'
                            }`}
                    >
                        <GraduationCap className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3 dark:text-white">Formation</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Chef de projet Logiciel et Réseau<br />Titre RNCP Niveau 6</li>
                            <li>• Formation Développeur web et web mobile<br />Titre RNCP Niveau 5</li>
                            <li>• Baccalauréat général</li>
                        </ul>
                    </div>

                    <div
                        id="experience"
                        className={`about-block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg ${isVisible.experience ? 'animate-slide-in-up' : 'opacity-0'
                            }`}
                    >
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

                    <div
                        id="objectifs"
                        className={`about-block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg ${isVisible.objectifs ? 'animate-slide-in-right' : 'opacity-0'
                            }`}
                    >
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
