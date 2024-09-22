import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/layout/default-layout.vue'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
          meta: {
            public: true,
            title: `Home Page`
          }
        },
        {
          path: 'about',
          name: 'about',
          component: AboutPage,
          meta: {
            public: true,
            title: `About Us Page`
          }
        }
      ]
    }
  ]
})
export default router
