import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    messages: {
      en: require('@/assets/locales/en.json'),
      zh: require('@/assets/locales/zh.json'),
    },
  });

};
