// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
        blue_default: '#53A0FA',
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
        // grey_bg_second: '#F9F9F9',
        // grey_bg_file: '#F0F0F0',
        // grey_bg_tab: '#F6F6F6',
        // grey_second: '#E4E4E4',
        // grey_dark_1: '#A0A0A0',
        // grey_dark_2: '#909090',
        // yellow_default: '#FFC008',
        // red_default: '#FF4240',
        // red_light: '#FFE9E6',
        // back_mate: '#373737',
        // back_mate_second: '#454545',
        // grey_mate: '#767676'
        }
      },
    },
  }
})
