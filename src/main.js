
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseCard from './ui/BaseCard.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseBadge from './ui/BaseBadge.vue'

const app = createApp(App)

// making the base-card
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.use(router)

app.mount('#app')
