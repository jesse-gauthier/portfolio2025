<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <div class="text-center">
      <!-- Logo or Brand -->
      <div class="mb-8">
        <div
          class="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4"
        >
          <span class="text-2xl font-bold text-white">JG</span>
        </div>
        <h1 class="text-2xl font-semibold text-gray-900">Jesse Gauthier</h1>
      </div>

      <!-- Loading Spinner -->
      <div class="relative">
        <div class="w-12 h-12 mx-auto">
          <div class="spinner"></div>
        </div>
        <p class="mt-4 text-gray-600">{{ message }}</p>
      </div>

      <!-- Progress Bar (optional) -->
      <div v-if="showProgress" class="mt-6 w-64 mx-auto">
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
        <p class="text-sm text-gray-500 mt-2">{{ progress }}% complete</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string
  showProgress?: boolean
  progress?: number
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Loading...',
  showProgress: false,
  progress: 0,
})
</script>

<style scoped>
.spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #2563eb;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
