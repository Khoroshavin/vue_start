import { createApp } from 'vue'

// импорт компонента App
import App from './App'

// импорт компонентов глобально зарегистрированных
import components from '@/components/UI';

// импорт роутера
import router from '@/router/router';

// импорт всех директив
import directives from "@/directives"

const app = createApp(App)

// перебираем и регистрируем компоненты
components.forEach(component => {
  app.component(component.name, component)
});

// перебираем и регистрируем директивы
directives.forEach(directive => {
  app.directive('directive.name', directive) 
})


// создание и монтирование приложения в #app с использованием router
app.use(router).mount('#app')
