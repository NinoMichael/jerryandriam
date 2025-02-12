import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        home: "HOME",
        feature: "FEATURES",
        resume: "RESUME",
    },
    fr: {
        home: "ACCUEIL",
        feature: "SERVICES",
        resume: "PARCOURS",
    }
};

const i18n = createI18n({
  legacy: false,
  locale: 'fr', 
  fallbackLocale: 'en',
  messages
});

export default i18n;
