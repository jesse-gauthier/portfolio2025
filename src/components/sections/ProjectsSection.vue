<template>
  <section class="py-20 bg-gray-50" aria-labelledby="projects-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 
          id="projects-heading" 
          class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Featured Projects
        </h2>
        <p 
          class="text-lg text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          A showcase of my recent work, demonstrating expertise in modern web development
          technologies and best practices.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="(project, index) in featuredProjects" 
          :key="project.id" 
          class="project-card group"
          data-aos="fade-up"
          :data-aos-delay="400 + (index * 150)"
          data-aos-duration="800"
        >
          <BaseCard variant="shadow" hover padding="none" class="h-full overflow-hidden">
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
              </div>
            </template>

            <div class="p-6 flex flex-col h-full">
              <h3
                class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200"
              >
                {{ project.name }}
              </h3>

              <p class="text-gray-600 mb-4 flex-grow">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies.slice(0, 3)"
                    :key="tech"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {{ tech }}
                  </span>
                  <span
                    v-if="project.technologies.length > 3"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                  >
                    +{{ project.technologies.length - 3 }} more
                  </span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-3 mt-auto">
                <BaseButton
                  :to="`/projects/${project.id}`"
                  variant="primary"
                  size="sm"
                  class="flex-1"
                >
                  View Details
                </BaseButton>
                <BaseButton
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  variant="outline"
                  size="sm"
                  external
                  aria-label="View live project (opens in new tab)"
                >
                  <template #icon>
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </template>
                </BaseButton>
              </div>
            </div>
          </BaseCard>
        </article>
      </div>

      <!-- View All Projects CTA -->
      <div 
        class="text-center mt-12"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <BaseButton to="/projects" variant="outline" size="lg">
          View All Projects
          <template #icon-right>
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </template>
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/utils/site'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const featuredProjects = computed(() => projects.filter((project) => project.featured).slice(0, 6))

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'https://placehold.co/400x200'
}
</script>

<style scoped>
.project-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.project-card:nth-child(1) {
  animation-delay: 0.1s;
}
.project-card:nth-child(2) {
  animation-delay: 0.2s;
}
.project-card:nth-child(3) {
  animation-delay: 0.3s;
}
.project-card:nth-child(4) {
  animation-delay: 0.4s;
}
.project-card:nth-child(5) {
  animation-delay: 0.5s;
}
.project-card:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
