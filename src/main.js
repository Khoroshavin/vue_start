import { createApp } from 'vue'

// импорт компонента App
import App from './App'
// импорт компонентов глобально зарегистрированных
import components from '@/components/UI';

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
});

// создание и монтирование приложения в #app
app.mount('#app')
