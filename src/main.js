import { createApp } from 'vue'

// импорт компонента App
import App from './App'
import components from '@/components/UI';

// создание и монтирование приложения в #app
const app = createApp(App)
components.forEach(component => {
  app.component(component.name, component)
});
app.mount('#app')
