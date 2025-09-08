import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(
  target,
  callback,
  options = {},
) {
  const isIntersecting = ref(false)
  let observer = null

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    ...options,
  }

  const wrappedCallback = (entries, observer) => {
    entries.forEach((entry) => {
      isIntersecting.value = entry.isIntersecting
    })
    callback(entries, observer)
  }

  onMounted(() => {
    if (target.value && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(wrappedCallback, defaultOptions)
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return {
    isIntersecting,
  }
}

// Composable for scroll animations
export function useScrollAnimation(
  target,
  animationClass = 'animate-in',
  options = {},
) {
  const isVisible = ref(false)

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        entry.target.classList.add(animationClass)
        // Optionally unobserve after animation triggers
        if (observer) {
          observer.unobserve(entry.target)
        }
      }
    })
  }

  let observer = null

  onMounted(() => {
    if (target.value && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(callback, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
        ...options,
      })
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return {
    isVisible,
  }
}