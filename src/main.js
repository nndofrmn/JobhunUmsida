import { createApp } from 'vue'
<<<<<<< HEAD
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
=======
import router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(router)
app.mount('#app')

>>>>>>> 96568f2... install vue router, learn component
