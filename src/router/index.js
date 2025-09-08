import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { siteMeta } from '@/utils/site'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: siteMeta.title,
      description: siteMeta.description,
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
    meta: {
      title: 'Projects - Jesse Gauthier',
      description:
        'Portfolio projects showcasing web development expertise in Vue.js, React, and modern web technologies',
    },
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetailView,
    meta: {
      title: 'Project Details - Jesse Gauthier',
      description: 'Detailed project information and case study',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact - Jesse Gauthier',
      description:
        'Get in touch with Jesse Gauthier for web development projects and opportunities',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: 'Page Not Found - Jesse Gauthier',
      description: 'The page you are looking for could not be found.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// Navigation guards for SEO
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta?.title) {
    document.title = to.meta.title
  }

  // Update meta description
  if (to.meta?.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', to.meta.description)
  }

  next()
})

export default router