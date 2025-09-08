<template>
  <DefaultLayout>
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of my web development projects, showcasing various
            technologies and approaches to solving real-world problems.
          </p>
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
                        class="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        Featured
                      </div>
                    </div>
                  </template>

                  <div class="p-6">
                    <h3
                      class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
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
                        class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium"
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
                        class="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors cursor-pointer"
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
