/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#333333', // Cinza Meio Escuro
          secondary: '#555555', // Cinza Meio Claro
          terciary: 'EABA0B', // Amarelo
          quartiary: '#F99605', // Laranja
          quintenary: '#26B328', // Verde
        },
      },
    },
  },
})
