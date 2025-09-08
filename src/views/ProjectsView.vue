<template>
  <DefaultLayout>
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section
        class="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
        aria-labelledby="projects-heading"
      >
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <!-- Large Background Shapes -->
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-100 to-green-200 rounded-full opacity-60 animate-float" style="animation-delay: 0s;"></div>
          <div class="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-teal-100 to-emerald-200 rounded-full opacity-40 animate-float" style="animation-delay: 2s;"></div>
          <div class="absolute bottom-0 right-1/3 w-48 h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-50 animate-float" style="animation-delay: 4s;"></div>
          
          <!-- Grid Pattern -->
          <div class="absolute inset-0 opacity-[0.02]">
            <div class="h-full w-full" style="background-image: radial-gradient(circle at 1px 1px, #059669 1px, transparent 0); background-size: 40px 40px;"></div>
          </div>
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <!-- Badge -->
          <div 
            class="inline-flex items-center px-4 py-2 mb-8 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium shadow-sm"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            Portfolio Showcase
          </div>

          <!-- Main Title -->
          <h1
            id="projects-heading"
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-none"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <span class="block">My</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
              Projects
            </span>
          </h1>

          <!-- Description -->
          <p 
            class="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            A comprehensive collection of my web development projects, showcasing various
            <span class="text-emerald-600 font-medium">technologies</span> and approaches to solving 
            <span class="text-emerald-600 font-medium">real-world problems</span>.
            Each project represents a unique challenge and creative solution.
          </p>

          <!-- Stats Row -->
          <div 
            class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div class="group">
              <div class="text-3xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">50+</div>
              <div class="text-sm text-gray-600 font-medium">Projects Built</div>
            </div>
            <div class="group">
              <div class="text-3xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">15+</div>
              <div class="text-sm text-gray-600 font-medium">Technologies</div>
            </div>
            <div class="group">
              <div class="text-3xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">5+</div>
              <div class="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div class="group">
              <div class="text-3xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">100%</div>
              <div class="text-sm text-gray-600 font-medium">Satisfied Clients</div>
            </div>
          </div>

          <!-- Scroll Indicator -->
          <div 
            class="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <p class="text-sm text-gray-500 mb-2">Explore my work</p>
            <div class="animate-bounce">
              <svg
                class="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Filter Section -->
      <section class="py-8 bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap gap-4 justify-center">
            <BaseButton
              v-for="category in projectCategories"
              :key="category"
              @click="setActiveFilter(category)"
              :variant="activeFilter === category ? 'primary' : 'ghost'"
              size="sm"
              rounded="full"
              :aria-pressed="activeFilter === category"
            >
              {{ category === 'all' ? 'All Projects' : category }}
            </BaseButton>
          </div>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TransitionGroup name="project" tag="div" class="contents" appear>
              <article
                v-for="project in filteredProjects"
                :key="project.id"
                class="project-card group"
              >
                <BaseCard
                  variant="shadow"
                  hover
                  padding="none"
                  class="h-full overflow-hidden cursor-pointer"
                  @click="navigateToProject(project.id)"
                >
                  <template #image>
                    <div class="relative h-48 bg-gray-200 overflow-hidden">
                      <img
                        :src="project.images[0] || 'https://placehold.co/400x200'"
                        :alt="`${project.name} project screenshot`"
                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        @error="handleImageError"
                      />
                      <div
                        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                      ></div>

                      <!-- Featured Badge -->
                      <div
                        v-if="project.featured"
                        class="absolute top-3 left-3 bg-emerald-400 text-emerald-900 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        Featured
                      </div>
                    </div>
                  </template>

                  <div class="p-6">
                    <h3
                      class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors"
                    >
                      {{ project.name }}
                    </h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                      {{ project.description }}
                    </p>

                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span
                        v-for="tech in project.technologies.slice(0, 3)"
                        :key="tech"
                        class="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-md font-medium"
                      >
                        {{ tech }}
                      </span>
                      <span
                        v-if="project.technologies.length > 3"
                        class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        +{{ project.technologies.length - 3 }} more
                      </span>
                    </div>

                    <!-- Project Links -->
                    <div class="flex space-x-3">
                      <a
                        v-if="project.demoUrl"
                        :href="project.demoUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors cursor-pointer"
                        @click.stop
                        :aria-label="`View live demo of ${project.name} (opens in new tab)`"
                      >
                        Live Demo
                      </a>
                      <a
                        v-if="project.githubUrl"
                        :href="project.githubUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors cursor-pointer"
                        @click.stop
                        :aria-label="`View source code of ${project.name} on GitHub (opens in new tab)`"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </BaseCard>
              </article>
            </TransitionGroup>
          </div>

          <!-- No Results Message -->
          <div v-if="filteredProjects.length === 0" class="text-center py-12">
            <div class="text-gray-400 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p class="text-gray-600">Try selecting a different category to see more projects.</p>
          </div>
        </div>
      </section>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { projects } from '@/utils/site'
import type { Project } from '@/types/site'

const router = useRouter()

// Filter state
const activeFilter = ref('all')

// Get unique categories from projects
const projectCategories = computed(() => {
  const categories = new Set(['all'])
  projects.forEach((project) => {
    if (project.category) {
      categories.add(project.category)
    }
  })
  return Array.from(categories)
})

// Filter projects based on active filter
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter((project) => project.category === activeFilter.value)
})

// Methods
const setActiveFilter = (category: string) => {
  activeFilter.value = category
}

const navigateToProject = (projectId: string) => {
  router.push(`/projects/${projectId}`)
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'https://placehold.co/400x200/e5e7eb/6b7280?text=No+Image'
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Float animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Transition animations */
.project-enter-active,
.project-leave-active {
  transition: all 0.3s ease;
}

.project-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.project-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.project-move {
  transition: transform 0.3s ease;
}
</style>
