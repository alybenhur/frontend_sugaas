import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import Notifications from '@kyvg/vue3-notification'
import store from './store';
// Create vue app
const app = createApp(App)
app.use(Notifications)
app.use(store)
// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
