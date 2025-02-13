import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend'

export default i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    backend:{
      loadPath:'/locales/{{lng}}/{{ns}}.json',
      ajax: function (url: string, options: Record<string, any>, callback: (err: Error | null, data?: any) => void, data?: any) {
        console.log(`Loading file: ${url}`);
        fetch(url)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return {};
            }
          })
          .then((data) => callback(null, data))
          .catch((err) => {
            console.error(err); 
            callback(null, {});
          });
      },
    }
})