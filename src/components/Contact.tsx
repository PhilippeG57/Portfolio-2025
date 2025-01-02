import { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState({ leftBlock: false, rightBlock: false });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error('Le formulaire est introuvable.');
      return;
    }

    emailjs
      .sendForm(
        'service_9jz4tya',
        'template_6pzieo8',
        form.current,
        '2dIB3_7ZSw4KwSHLK'
      )
      .then(
        (result) => {
          console.log('Message envoyé :', result.text);
          alert('Message envoyé avec succès !');
        },
        (error) => {
          console.log('Erreur :', error.text);
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      );
  };

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
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.contact-block');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Contactez-moi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            id="leftBlock"
            className={`contact-block ${isVisible.leftBlock ? 'animate-slide-in-left' : 'opacity-0'
              }`}
          >
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Informations de contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <span className="dark:text-white">philippe57660.garcia@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <span className="dark:text-white">+33770439150</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <span className="dark:text-white">57400 SARREBOURG</span>
              </div>
            </div>
          </div>
          <form
            id="rightBlock"
            ref={form}
            onSubmit={sendEmail}
            className={`contact-block ${isVisible.rightBlock ? 'animate-slide-in-right' : 'opacity-0'
              } space-y-6`}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              aria-label="Envoyer"
              type="submit"
              className="w-full bg-primary border-2 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary hover:border-primary hover:border-solid hover:border-2 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
