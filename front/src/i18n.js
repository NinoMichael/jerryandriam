import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        home: "HOME",
        feature: "FEATURES",
        skills: "SKILLS",
        resume: "RESUME",
        hello: "Hello, I'm",
        frontend: "Fullstack Developer",
        intro: "I am a young developer whose point lies in the development of fluid and modern interface, but also comfortable on the back-end side. Serious, dynamic and autonomous, I am committed to providing intuitive solutions while constantly staying up to date with the latest technological trends.",
        downloadCv: "Download CV",
        tailorMade: "Tailor-made solutions for your digital needs",
        mockupDesign: "Mockup design",
        creationOfMockup: "Creation of intuitive and aesthetic user interfaces by implementing UI/UX design best practices",
        appDevelopment: "Website/App Development",
        creationOfApp: "Creation of high-performance and secure web sites/applications, following best development practices",
        maintenanceTxt: "Maintenance service, troubleshooting and performance monitoring to ensure your application is running smoothly",
        mySkills: "MY SKILLS",
    },
    fr: {
        home: "ACCUEIL",
        feature: "SERVICES",
        skills: "COMPÉTENCES",
        resume: "PARCOURS",
        hello: "Bonjour, je suis",
        frontend: "Développeur Fullstack",
        intro: "Je suis un jeune développeur dont mon point réside dans le développement d'interface fluide et moderne, mais également à l'aise du côté back-end. Sérieux, dynamique et autonome, je m'engage à fournir des solutions intuitives tout en restant constamment à jour avec les dernières tendances technologiques.",
        downloadCv: "Télécharger mon CV",
        tailorMade: "Des solutions sur mesure pour vos besoins numériques",
        mockupDesign: "Conception de maquette",
        creationOfMockup: "Création d'interfaces utilisateurs intuitives et esthétiques en mettant en œuvre les meilleures pratiques de design UI/UX",
        appDevelopment: "Développement de sites/application",
        creationOfApp: "Création de sites/applications web performants et sécurisés, suivant les meilleures pratiques de développement",
        maintenanceTxt: "Service de maintenance, résolution de problème et suivi de performance pour garantir le fonctionnement de votre application",
        mySkills: "MES COMPÉTENCES",
    }
};

const i18n = createI18n({
  legacy: false,
  locale: 'fr', 
  fallbackLocale: 'en',
  messages
});

export default i18n;
