<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          GitHub <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">Activity</span>
        </h2>
        <p 
          class="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          A snapshot of my coding activity and contributions on GitHub
        </p>
      </div>

      <!-- GitHub Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div 
          v-for="(stat, index) in githubStats" 
          :key="stat.label"
          class="group text-center"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
          :data-aos-duration="600"
        >
          <BaseCard 
            variant="shadow" 
            hover 
            class="p-8 h-full bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-100 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
          >
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                <component :is="stat.icon" class="w-8 h-8 text-white" />
              </div>
              <div class="text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-600 font-medium text-center">
                {{ stat.label }}
              </div>
            </div>
          </BaseCard>
        </div>
      </div>

      <!-- GitHub Profile Links -->
      <div class="text-center">
        <div class="inline-flex items-center space-x-6">
          <a 
            href="https://github.com/jesse-gauthier" 
            class="group flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <div class="w-12 h-12 bg-gray-100 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div class="text-left">
              <div class="font-semibold">View Profile</div>
              <div class="text-sm text-gray-500">@jesse-gauthier</div>
            </div>
          </a>

          <div class="w-px h-16 bg-gray-200"></div>

          <div class="text-left" data-aos="fade-up" data-aos-delay="500" data-aos-duration="600">
            <div class="text-sm text-gray-500 mb-1">Active since</div>
            <div class="font-semibold text-gray-900">2020</div>
          </div>
        </div>
      </div>

      <!-- Programming Languages -->
      <div class="mt-20">
        <h3 
          class="text-3xl font-bold text-gray-900 mb-12 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Most Used Languages
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(lang, index) in topLanguages" 
            :key="lang.name"
            class="group"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            :data-aos-duration="600"
          >
            <BaseCard 
              variant="bordered" 
              hover 
              class="p-6 text-center h-full group-hover:border-emerald-300 transition-all duration-300"
            >
              <div class="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" :style="{ backgroundColor: lang.color + '20' }">
                <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: lang.color }"></div>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ lang.name }}</h4>
              <div class="text-2xl font-bold text-emerald-600 mb-1">{{ lang.percentage }}%</div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  class="h-2 rounded-full transition-all duration-1000 ease-out" 
                  :style="{ backgroundColor: lang.color, width: lang.percentage + '%' }"
                ></div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'

// GitHub Statistics (these would typically come from GitHub API)
const githubStats = computed(() => [
  {
    label: 'Public Repositories',
    value: '50+',
    icon: 'RepositoryIcon'
  },
  {
    label: 'Total Commits',
    value: '1.2k+',
    icon: 'CommitIcon'
  },
  {
    label: 'Contributions',
    value: '800+',
    icon: 'ContributionIcon'
  },
  {
    label: 'Stars Earned',
    value: '120+',
    icon: 'StarIcon'
  }
])

// Top Programming Languages
const topLanguages = computed(() => [
  { name: 'JavaScript', percentage: 35, color: '#f7df1e' },
  { name: 'Vue.js', percentage: 28, color: '#4fc08d' },
  { name: 'TypeScript', percentage: 20, color: '#3178c6' },
  { name: 'PHP', percentage: 17, color: '#777bb4' }
])

// Icon Components (inline for simplicity)
const RepositoryIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5S9.5 8.83 9.5 8zm5 7.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `
}

const CommitIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"/>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
    </svg>
  `
}

const ContributionIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  `
}

const StarIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  `
}
</script>

<style scoped>
/* Additional animations for progress bars */
@keyframes progressBar {
  from {
    width: 0%;
  }
}

.progress-bar {
  animation: progressBar 1.5s ease-out;
}
</style>