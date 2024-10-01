import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/layout/default-layout.vue'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ArtCraftPage from '@/views/ArtCraftPage.vue'
import ContactPage from '@/views/ContactPage.vue'

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
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactPage,
          meta: {
            public: true,
            title: `Contact Me Page`
          }
        },
        {
          path: 'artandcraft',
          name: 'artandcraft',
          component: ArtCraftPage,
          meta: {
            public: true,
            title: `Art and Craft Page`
          }
        }
      ]
    }
  ]
})
export default router
