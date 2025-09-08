<template>
  <DefaultLayout>
    <main class="min-h-screen" v-if="project">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center space-x-3 mb-4">
                <router-link
                  to="/projects"
                  class="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span>Back to Projects</span>
                </router-link>
                <span
                  v-if="project.featured"
                  class="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium"
                >
                  Featured
                </span>
              </div>

              <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {{ project.name }}
              </h1>

              <p class="text-xl text-gray-600 mb-8">
                {{ project.description }}
              </p>

              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-4">
                <BaseButton
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  external
                  variant="primary"
                  size="lg"
                >
                  View Live Demo
                </BaseButton>
                <BaseButton
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  external
                  variant="outline"
                  size="lg"
                >
                  View Source Code
                </BaseButton>
              </div>
            </div>

            <!-- Hero Image -->
            <div class="lg:order-first">
              <div class="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  :src="project.images[0] || 'https://placehold.co/600x400'"
                  :alt="`${project.name} main screenshot`"
                  class="w-full h-auto object-cover"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Details -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-2">
              <!-- Project Overview -->
              <div class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <div class="prose prose-lg max-w-none text-gray-600">
                  <p v-if="project.longDescription">{{ project.longDescription }}</p>
                  <p v-else>{{ project.description }}</p>
                </div>
              </div>

              <!-- Key Features -->
              <div v-if="project.features && project.features.length > 0" class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <ul class="space-y-3">
                  <li
                    v-for="feature in project.features"
                    :key="feature"
                    class="flex items-start space-x-3"
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Project Gallery -->
              <div v-if="project.images.length > 1" class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    v-for="(image, index) in project.images.slice(1)"
                    :key="index"
                    class="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    @click="openImageModal(image, index + 1)"
                  >
                    <img
                      :src="image"
                      :alt="`${project.name} screenshot ${index + 2}`"
                      class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      @error="handleImageError"
                    />
                  </div>
                </div>
              </div>

              <!-- Challenges & Solutions -->
              <div v-if="project.challenges" class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Challenges & Solutions</h3>
                <div class="prose prose-lg max-w-none text-gray-600">
                  <p>{{ project.challenges }}</p>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
              <div class="sticky top-8 space-y-8">
                <!-- Project Info -->
                <BaseCard variant="bordered" class="p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Project Info</h3>
                  <dl class="space-y-3">
                    <div v-if="project.category">
                      <dt class="text-sm font-medium text-gray-500">Category</dt>
                      <dd class="text-sm text-gray-900 capitalize">{{ project.category }}</dd>
                    </div>
                    <div v-if="project.year">
                      <dt class="text-sm font-medium text-gray-500">Year</dt>
                      <dd class="text-sm text-gray-900">{{ project.year }}</dd>
                    </div>
                    <div v-if="project.client">
                      <dt class="text-sm font-medium text-gray-500">Client</dt>
                      <dd class="text-sm text-gray-900">{{ project.client }}</dd>
                    </div>
                    <div v-if="project.duration">
                      <dt class="text-sm font-medium text-gray-500">Duration</dt>
                      <dd class="text-sm text-gray-900">{{ project.duration }}</dd>
                    </div>
                  </dl>
                </BaseCard>

                <!-- Technologies Used -->
                <BaseCard variant="bordered" class="p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </BaseCard>

                <!-- Project Links -->
                <BaseCard variant="bordered" class="p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Project Links</h3>
                  <div class="space-y-3">
                    <a
                      v-if="project.demoUrl"
                      :href="project.demoUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                    <a
                      v-if="project.githubUrl"
                      :href="project.githubUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors cursor-pointer"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Source Code</span>
                    </a>
                  </div>
                </BaseCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Projects -->
      <section v-if="relatedProjects.length > 0" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Related Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              v-for="relatedProject in relatedProjects"
              :key="relatedProject.id"
              class="group cursor-pointer"
              @click="navigateToProject(relatedProject.id)"
            >
              <BaseCard variant="shadow" hover padding="none" class="h-full overflow-hidden">
                <template #image>
                  <div class="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                      :src="relatedProject.images[0] || 'https://placehold.co/400x200'"
                      :alt="`${relatedProject.name} project screenshot`"
                      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      @error="handleImageError"
                    />
                  </div>
                </template>

                <div class="p-6">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
                  >
                    {{ relatedProject.name }}
                  </h3>
                  <p class="text-gray-600 text-sm line-clamp-2">
                    {{ relatedProject.description }}
                  </p>
                </div>
              </BaseCard>
            </article>
          </div>
        </div>
      </section>
    </main>

    <!-- 404 State -->
    <main v-else class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p class="text-gray-600 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <BaseButton to="/projects" variant="primary">
          View All Projects
        </BaseButton>
      </div>
    </main>

    <!-- Image Modal -->
    <teleport to="body">
      <transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showImageModal"
          class="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
          @click="closeImageModal"
        >
          <div class="relative max-w-4xl max-h-full">
            <img
              :src="modalImage"
              :alt="`${project?.name} screenshot`"
              class="max-w-full max-h-full object-contain"
            />
            <BaseButton
              @click="closeImageModal"
              variant="ghost"
              size="sm"
              class="absolute top-4 right-4 text-white hover:text-gray-300"
              aria-label="Close image modal"
            >
              <template #icon>
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </template>
            </BaseButton>
          </div>
        </div>
      </transition>
    </teleport>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { projects } from '@/utils/site'
import type { Project } from '@/types/site'

const route = useRoute()
const router = useRouter()

// Find the current project
const project = computed((): Project | undefined => {
  return projects.find((p) => p.id === route.params.id)
})

// Related projects (same category, excluding current project)
const relatedProjects = computed(() => {
  if (!project.value) return []

  return projects
    .filter((p) => p.id !== project.value!.id && p.category === project.value!.category)
    .slice(0, 3) // Limit to 3 related projects
})

// Image modal state
const showImageModal = ref(false)
const modalImage = ref('')

const openImageModal = (image: string, index: number) => {
  modalImage.value = image
  showImageModal.value = true
}

const closeImageModal = () => {
  showImageModal.value = false
  modalImage.value = ''
}

const navigateToProject = (projectId: string) => {
  router.push(`/projects/${projectId}`)
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'https://placehold.co/600x400/e5e7eb/6b7280?text=No+Image'
}

// Close modal on escape key
onMounted(() => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeImageModal()
    }
  }

  document.addEventListener('keydown', handleEscape)

  return () => {
    document.removeEventListener('keydown', handleEscape)
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
