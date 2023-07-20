import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../public/assets/locales/en.json'
import ru from '../../public/assets/locales/ru.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru} ,
    },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
