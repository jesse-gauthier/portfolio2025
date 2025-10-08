<template>
  <div
    v-if="!isDismissed"
    class="alert-banner"
    role="alert"
    aria-live="polite"
  >
    <div class="alert-content">
      <div class="alert-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <p class="alert-message">
        Due to a data loss, some portfolio projects are not viewable. I am working to rebuild them.
        Please <a href="/contact" class="alert-link">contact me</a> for more information about these projects. Thank you.
      </p>
      <button
        @click="dismiss"
        class="alert-close"
        aria-label="Dismiss alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDismissed = ref(false)
const STORAGE_KEY = 'portfolio-alert-dismissed'

onMounted(() => {
  isDismissed.value = localStorage.getItem(STORAGE_KEY) === 'true'
})

const dismiss = () => {
  isDismissed.value = true
  localStorage.setItem(STORAGE_KEY, 'true')
}
</script>

<style scoped>
.alert-banner {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-bottom: 2px solid #d97706;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.alert-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.alert-icon {
  flex-shrink: 0;
  color: #78350f;
}

.alert-message {
  flex: 1;
  margin: 0;
  color: #1f2937;
  font-size: 0.95rem;
  line-height: 1.5;
}

.alert-link {
  color: #1e40af;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s;
}

.alert-link:hover {
  color: #1e3a8a;
}

.alert-close {
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: #78350f;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: all 0.2s;
}

.alert-close:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #451a03;
}

.alert-close:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
}

@media (max-width: 640px) {
  .alert-content {
    flex-wrap: wrap;
    padding: 0.875rem 1rem;
  }

  .alert-icon {
    display: none;
  }

  .alert-message {
    font-size: 0.875rem;
  }
}
</style>
