<template>
  <div :class="cardClasses" v-bind="$attrs">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-gray-200">
      <slot name="header" />
    </div>

    <div v-if="$slots.image" class="overflow-hidden">
      <slot name="image" />
    </div>

    <div :class="contentClasses">
      <slot />
    </div>

    <div v-if="$slots.footer" class="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  variant?: 'default' | 'bordered' | 'shadow'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  padding: 'md',
  hover: false,
})

const baseClasses = 'bg-white rounded-lg overflow-hidden'

const variantClasses = {
  default: '',
  bordered: 'border border-gray-200',
  shadow: 'shadow-md',
}

const hoverClasses = 'transition-shadow duration-300 hover:shadow-lg'

const cardClasses = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  {
    [hoverClasses]: props.hover,
  },
])

const paddingClasses = {
  none: '',
  sm: 'px-4 py-3',
  md: 'px-6 py-4',
  lg: 'px-8 py-6',
}

const contentClasses = computed(() => paddingClasses[props.padding])
</script>
