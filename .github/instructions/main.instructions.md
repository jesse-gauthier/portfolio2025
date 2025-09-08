---
applyTo: '**'
---

Coding standards, domain knowledge, and preferences that AI should follow.

# Portfolio Website Development Instructions

## Project Overview

Build a professional portfolio website using Vue 3 with TypeScript, focusing on performance, accessibility, and user experience.

## Tech Stack Requirements

- **Framework**: Vue 3 with Composition API
- **Language**: TypeScript (strict mode)
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest for unit tests, Vue Test Utils
- **Animations**: Vue Transition API + CSS animations/transitions

## Code Standards & Architecture

### File Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── layout/          # Header, Footer, Navigation
│   └── sections/        # Page-specific sections
├── composables/         # Reusable composition functions
├── stores/             # Pinia stores
├── router/             # Vue Router configuration
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
├── assets/             # Static assets
└── views/              # Page components
```

### TypeScript Requirements

- Use strict TypeScript configuration
- Define interfaces for all data structures
- Implement proper type checking for props, emits, and reactive data
- Use generic types where appropriate
- No `any` types unless absolutely necessary

### Component Standards

- Use `<script setup>` syntax with TypeScript
- Implement proper prop validation with TypeScript interfaces
- Use composition API consistently
- Follow single responsibility principle
- Implement proper error boundaries

### State Management (Pinia)

- Create typed stores for application state
- Use composition API syntax in stores
- Implement proper getters and actions
- Handle loading and error states appropriately

## Styling & Design Guidelines

### Tailwind CSS

- Use Tailwind utility classes primarily
- Create custom CSS only when Tailwind is insufficient
- Implement responsive design (mobile-first approach)
- Use Tailwind's dark mode utilities if implementing theme switching
- Maintain consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64px)

### Design Principles

- Clean, modern, and professional aesthetic
- Consistent typography hierarchy
- Proper color contrast ratios (WCAG AA compliance)
- Smooth micro-interactions and transitions
- Grid-based layouts for content organization

## Animation Requirements

### Performance-First Animations

- Use CSS transforms and opacity for smooth 60fps animations
- Implement `will-change` property judiciously
- Prefer CSS transitions over JavaScript animations for simple effects
- Use Vue Transition components for route changes and conditional rendering

### Animation Types to Implement

- Page transition animations (fade, slide)
- Hover effects on interactive elements
- Scroll-triggered animations (use Intersection Observer)
- Loading states and skeleton screens
- Staggered animations for lists/grids

### Animation Code Examples

```vue
<!-- Page transitions -->
<router-view v-slot="{ Component }">
  <transition name="page" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>

<!-- List animations -->
<transition-group name="list" tag="div">
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</transition-group>
```

## Accessibility (A11Y) Requirements

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Implement landmark roles (main, nav, aside, footer)
- Use semantic HTML elements (article, section, header)

### ARIA Implementation

- Add ARIA labels for interactive elements
- Implement proper focus management
- Use ARIA live regions for dynamic content
- Provide alternative text for images

### Keyboard Navigation

- Ensure all interactive elements are keyboard accessible
- Implement proper tab order
- Add visible focus indicators
- Support keyboard shortcuts where appropriate

### Accessibility Checklist

- [ ] Color contrast ratios meet WCAG AA standards
- [ ] All images have alt text
- [ ] Forms have proper labels and error messages
- [ ] Skip links for navigation
- [ ] Screen reader friendly content structure

## SEO Optimization

### Meta Tags & Structure

- Implement proper meta descriptions and titles
- Use Open Graph tags for social sharing
- Add structured data (JSON-LD) for rich snippets
- Create XML sitemap
- Implement canonical URLs

### Performance for SEO

- Optimize Core Web Vitals (LCP, FID, CLS)
- Implement lazy loading for images
- Use semantic HTML for better crawling
- Optimize font loading (font-display: swap)

### Vue Router SEO

```typescript
// Add meta information to routes
{
  path: '/about',
  component: About,
  meta: {
    title: 'About - Your Name',
    description: 'Learn more about my background and experience',
    keywords: 'developer, portfolio, about'
  }
}
```

## Image and Content Guidelines

### Image Handling Rules

- **NEVER** add placeholder images with non-functional links
- **ALWAYS** check the `/src/assets/images/` folder first for available images
- If no suitable image exists, use `https://placehold.co/350x400` as placeholder
- All images must have proper alt text for accessibility
- Implement lazy loading for images below the fold

### Content Standards

- All links must be functional or use `href="#"` with appropriate JavaScript handling
- No dead links or placeholder content in production
- Use Lorem ipsum only for initial layout, replace with meaningful content
- Implement proper error states for missing content

### Image Implementation Example

```vue
<template>
  <img
    :src="imageUrl || 'https://placehold.co/350x400'"
    :alt="imageAlt"
    loading="lazy"
    class="w-full h-auto rounded-lg"
  />
</template>

<script setup lang="ts">
interface Props {
  imageUrl?: string
  imageAlt: string
}

const props = defineProps<Props>()
</script>
```

## Testing Requirements

### Unit Testing with Vitest

- Test all composables thoroughly
- Test component props and emits
- Test user interactions and state changes
- Mock external dependencies appropriately

### Test Structure

```typescript
// Component test example
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent, {
      props: { title: 'Test Title' },
    })
    expect(wrapper.text()).toContain('Test Title')
  })
})
```

## Performance Optimization

### Bundle Optimization

- Implement code splitting for routes
- Use dynamic imports for heavy components
- Optimize asset loading (images, fonts)
- Implement service worker for caching

### Runtime Performance

- Use `v-memo` for expensive list renders
- Implement virtual scrolling for long lists
- Optimize reactive dependencies
- Use `shallowRef` when deep reactivity isn't needed

## Browser Support & Progressive Enhancement

- Support modern browsers (ES2020+)
- Implement graceful degradation for older browsers
- Test across different devices and screen sizes
- Ensure functionality without JavaScript for critical content

## Deployment Considerations

- Configure proper build optimizations
- Set up environment variables correctly
- Implement proper error handling and logging
- Configure CSP headers for security

## Quality Checklist

Before considering any component or page complete:

- [ ] TypeScript compilation without errors
- [ ] All tests passing
- [ ] Accessibility audit passed
- [ ] Performance metrics within acceptable ranges
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] No console errors or warnings
- [ ] SEO meta tags implemented
- [ ] All images have proper alt text and loading strategies

## Development Workflow

1. Write TypeScript interfaces first
2. Create component structure with proper typing
3. Implement styling with Tailwind
4. Add animations and interactions
5. Write unit tests
6. Perform accessibility audit
7. Test across devices and browsers
8. Optimize performance metrics

Remember: Quality over speed. Each component should be production-ready with proper error handling, accessibility, and performance optimization.
