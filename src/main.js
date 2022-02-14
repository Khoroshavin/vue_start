import { createApp } from 'vue'

// импорт компонента App
import App from './App'
// импорт компонентов глобально зарегистрированных
import components from '@/components/UI';
// импорт роутера
import router from '@/router/router';

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
});

// создание и монтирование приложения в #app
app.use(router).mount('#app')
