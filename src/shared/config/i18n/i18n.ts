import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // .use(Backend)// дает возможность асинхронно чанками подгружать нужный язык
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
	lng: "en",
    fallbackLng: 'en',
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

	react: {
		useSuspense: false
	}
  });


export default i18n;