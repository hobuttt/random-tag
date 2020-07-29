import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

Vue.use(VueI18n)

export default new VueI18n({
  // locale: navigator.language.slice(0, 2) || 'en',
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: { ru, en }
})
