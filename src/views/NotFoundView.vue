<template>
  <DefaultLayout>
    <main class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div class="max-w-lg w-full text-center">
        <!-- 404 Illustration -->
        <div class="mb-8">
          <div class="text-9xl font-bold text-gray-300 mb-4">404</div>
          <div
            class="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6"
          >
            <svg
              class="w-16 h-16 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20a7.962 7.962 0 01-5-1.709M15 3H9a2 2 0 00-2 2v1.126a2 2 0 00.465 1.3l2.828 2.828A2 2 0 0012.121 11H15a2 2 0 002-2V5a2 2 0 00-2-2z"
              ></path>
            </svg>
          </div>
        </div>

        <!-- Content -->
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p class="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <!-- Navigation Options -->
        <div class="space-y-4">
          <BaseButton to="/" variant="primary" size="lg" class="w-full sm:w-auto">
            <template #icon>
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </template>
            Go Home
          </BaseButton>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton to="/projects" variant="outline" size="md">
              View Projects
            </BaseButton>

            <BaseButton to="/contact" variant="outline" size="md">
              Contact Me
            </BaseButton>
          </div>
        </div>

        <!-- Helpful Links -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <router-link
              to="/"
              class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 cursor-pointer"
            >
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h3 class="font-medium text-gray-900">About Me</h3>
                  <p class="text-sm text-gray-500">Learn about my background</p>
                </div>
              </div>
            </router-link>

            <router-link
              to="/projects"
              class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 cursor-pointer"
            >
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h3 class="font-medium text-gray-900">My Work</h3>
                  <p class="text-sm text-gray-500">Browse my portfolio</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useSEO } from '@/composables'
import { onMounted } from 'vue'

// SEO
const { updateMetaTags } = useSEO()

onMounted(() => {
  updateMetaTags({
    title: '404 - Page Not Found | Jesse Gauthier',
    description: 'The page you are looking for could not be found.',
  })
})
</script>
