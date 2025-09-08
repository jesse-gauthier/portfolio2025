<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full text-center">
      <!-- Error Icon -->
      <div class="mb-8">
        <div
          class="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4"
        >
          <svg class="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.349 16.5c-.77.833.192 2.5 1.732 2.5z"
            ></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
        <p class="text-gray-600 mb-8">
          {{ message || 'An unexpected error occurred. Please try again.' }}
        </p>
      </div>

      <!-- Error Details (Development only) -->
      <div
        v-if="showDetails && error"
        class="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left"
      >
        <h3 class="text-sm font-medium text-red-800 mb-2">Error Details:</h3>
        <pre class="text-xs text-red-700 whitespace-pre-wrap overflow-auto max-h-32">{{
          error
        }}</pre>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-4">
        <BaseButton @click="handleRetry" variant="primary" size="lg" class="w-full">
          <template #icon>
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
          </template>
          Try Again
        </BaseButton>

        <BaseButton to="/" variant="outline" size="lg" class="w-full">
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

        <BaseButton
          @click="reportError"
          variant="link"
          size="sm"
          class="text-gray-500 hover:text-gray-700"
        >
          Report this issue
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

interface Props {
  message?: string
  error?: string | Error
  showDetails?: boolean
  onRetry?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  showDetails: import.meta.env.DEV, // Show details only in development
})

const emit = defineEmits<{
  retry: []
}>()

const handleRetry = () => {
  if (props.onRetry) {
    props.onRetry()
  } else {
    emit('retry')
    // Fallback: reload the page
    window.location.reload()
  }
}

const reportError = () => {
  // In a real app, this would send error details to a logging service
  const errorDetails = {
    message: props.message,
    error: props.error?.toString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
  }

  console.error('Error reported:', errorDetails)

  // Show user feedback
  alert('Error report submitted. Thank you for helping us improve!')
}
</script>
