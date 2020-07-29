import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ru from 'vuetify/es5/locale/ru'
import en from 'vuetify/es5/locale/en'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#07141d',
        secondary: '#305578',
        accent: '#93a0b6',
        error: '#F36055',
        warning: '#ff9800',
        info: '#5f77f3',
        success: '#4CAF50'
      },
      dark: {
        primary: '#51658B',
        secondary: '#00BCD4',
        accent: '#93a0b6',
        error: '#F36055',
        warning: '#ff9800',
        info: '#5f77f3',
        success: '#4CAF50'
      }
    }
  },
  icons: {
    iconfont: 'md'
  },
  lang: {
    locales: { ru, en },
    current: 'ru'
  }
})
