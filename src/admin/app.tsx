export default {
  config: {
    auth: {
      logo: "/indaga_icon.svg",
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "¡Welcome to Indaga!",
        "Auth.form.welcome.subtitle": "Login to your account",
        "app.components.LeftMenu.navbrand.title": "Indaga",
        "app.components.LeftMenu.navbrand.workplace": "Web Dashboard",
      },
    },
    theme: {
      colors: {
        // primary: '#000',
        // secondary: '#fff',
      },
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
