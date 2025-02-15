import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        home: "HOME",
        feature: "FEATURES",
        resume: "RESUME",
        hello: "Hello, I'm",
        frontend: "Front-End Developer",
        intro: "I am a young developer whose point lies in the development of fluid and modern interface, but also comfortable on the back-end side. Serious, dynamic and autonomous, I am committed to providing intuitive solutions while constantly staying up to date with the latest technological trends.",
        downloadCv: "Download CV",
    },
    fr: {
        home: "ACCUEIL",
        feature: "SERVICES",
        resume: "PARCOURS",
        hello: "Bonjour, je suis",
        frontend: "Développeur Front-End",
        intro: "Je suis un jeune développeur dont mon point réside dans le développement d'interface fluide et moderne, mais également à l'aise du côté back-end. Sérieux, dynamique et autonome, je m'engage à fournir des solutions intuitives tout en restant constamment à jour avec les dernières tendances technologiques.",
        downloadCv: "Télécharger mon CV",
    }
};

const i18n = createI18n({
  legacy: false,
  locale: 'fr', 
  fallbackLocale: 'en',
  messages
});

export default i18n;
