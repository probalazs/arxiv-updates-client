import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

createApp(App)
  .use(
    createVuetify({
      icons: {
        defaultSet: 'mdi'
      },
      components,
      directives
    })
  )
  .use(createPinia())
  .mount('#app')
