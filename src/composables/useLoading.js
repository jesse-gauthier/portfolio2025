import { ref } from 'vue'

export function useLoading() {
  const isLoading = ref(false)
  const error = ref(null)

  const setLoading = (loading) => {
    isLoading.value = loading
    if (loading) {
      error.value = null
    }
  }

  const setError = (errorMessage) => {
    error.value = errorMessage
    isLoading.value = false
  }

  const clearError = () => {
    error.value = null
  }

  const withLoading = async (fn) => {
    try {
      setLoading(true)
      const result = await fn()
      setLoading(false)
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      return undefined
    }
  }

  return {
    isLoading,
    error,
    setLoading,
    setError,
    clearError,
    withLoading,
  }
}