<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'a' ? href : undefined"
    :to="tag === 'router-link' ? to : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :disabled="disabled || loading"
    :class="buttonClasses"
    :aria-label="ariaLabel"
    :aria-pressed="ariaPressed"
    :aria-expanded="ariaExpanded"
    :aria-controls="ariaControls"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <svg
      v-if="loading && showLoadingSpinner"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <!-- Icon Slot -->
    <slot name="icon" />

    <!-- Default Content -->
    <slot />

    <!-- Right Icon Slot -->
    <slot name="icon-right" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  // Appearance
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  // Functionality
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  showLoadingSpinner?: boolean

  // Navigation
  href?: string
  to?: string | object
  external?: boolean

  // Styling
  block?: boolean // Full width
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

  // Accessibility
  ariaLabel?: string
  ariaPressed?: boolean | string
  ariaExpanded?: boolean | string
  ariaControls?: string

  // Custom function
  onClick?: Function
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  showLoadingSpinner: true,
  external: false,
  block: false,
  rounded: 'md',
})

const emit = defineEmits(['click'])

// Determine the HTML tag to render
const tag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'router-link'
  return 'button'
})

// Base classes for all buttons
const baseClasses = computed(() => [
  'inline-flex items-center justify-center font-medium transition-all duration-200',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  'cursor-pointer',
  {
    'w-full': props.block,
    'pointer-events-none opacity-50 cursor-not-allowed': props.disabled || props.loading,
  },
])

// Variant-specific classes
const variantClasses = computed(() => {
  const variants = {
    primary:
      'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary:
      'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-md',
    outline:
      'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white focus:ring-emerald-500 bg-transparent',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 bg-transparent hover:text-gray-900',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md',
    success:
      'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-md',
    warning:
      'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500 shadow-sm hover:shadow-md',
    info: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500 shadow-sm hover:shadow-md',
    link: 'text-blue-600 hover:text-blue-700 underline hover:no-underline focus:ring-blue-500 bg-transparent p-0',
  }
  return variants[props.variant] || variants.primary
})

// Size-specific classes
const sizeClasses = computed(() => {
  if (props.variant === 'link') return '' // Links don't need padding

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }
  return sizes[props.size] || sizes.md
})

// Rounded corner classes
const roundedClasses = computed(() => {
  const rounded = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  }
  return rounded[props.rounded] || rounded.md
})

// Combine all classes
const buttonClasses = computed(() => [
  baseClasses.value,
  variantClasses.value,
  sizeClasses.value,
  roundedClasses.value,
])

// Handle click events
const handleClick = (event) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }

  if (props.onClick) {
    props.onClick(event)
  }

  emit('click', event)
}
</script>
