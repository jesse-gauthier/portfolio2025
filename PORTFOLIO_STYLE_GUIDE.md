# Portfolio Style Guide

## Overview
This style guide defines the design system and aesthetic principles for a modern, professional Vue.js portfolio website. The current implementation uses Vue 3, TypeScript, Tailwind CSS, and AOS (Animate On Scroll) library.

---

## Design Philosophy

### Core Principles
- **Clean & Minimal**: Focus on content with plenty of whitespace
- **Modern & Professional**: Contemporary design patterns that convey expertise
- **Accessible**: WCAG compliant with proper focus management and semantic HTML
- **Responsive**: Mobile-first approach with seamless cross-device experience
- **Performance-Oriented**: Optimized animations and efficient CSS

---

## Color Palette

### Primary Colors
- **Primary Emerald**: `#059669` (Tailwind: `emerald-600`)
- **Primary Dark**: `#047857` (Tailwind: `emerald-700`)
- **Light Primary**: `#10b981` (Dark mode variant - Tailwind: `emerald-500`)

### Secondary Colors
- **Secondary Gray**: `#64748b` (Tailwind: `slate-500`)
- **Accent Green**: `#10b981` (Tailwind: `emerald-500`)
- **Tertiary Green**: `#34d399` (Tailwind: `emerald-400`)
- **Light Emerald**: `#6ee7b7` (Tailwind: `emerald-300`)

### Background Colors
- **Light Backgrounds**: Custom green gradient (`bg-gradient-green-light`) from `emerald-50` to `green-100`
- **Hero Gradient**: Custom emerald gradient (`bg-gradient-green`) with multiple stops
- **Card Backgrounds**: White with emerald-tinted shadows
- **Dark Mode**: Automatic adaptation with `prefers-color-scheme`

### Semantic Colors
- **Success**: Green variants (`green-400`, `green-500`)
- **Warning**: Yellow variants (`yellow-400`, `amber-500`)
- **Error**: Red variants (not currently defined, suggest `red-500`)

---

## Typography

### Font Strategy
- **System Fonts**: Use system font stack for performance and native feel
- **Font Weights**: 
  - Normal (400) for body text
  - Medium (500) for subtle emphasis
  - Bold (600-700) for headings and strong emphasis

### Hierarchy
- **H1 (Hero)**: `text-4xl sm:text-5xl lg:text-6xl font-bold` 
- **H2 (Section)**: `text-3xl sm:text-4xl font-bold`
- **H3 (Subsection)**: `text-2xl font-semibold`
- **Body Large**: `text-xl sm:text-2xl`
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)

### Text Colors
- **Primary Text**: `text-gray-900` (light mode)
- **Secondary Text**: `text-gray-600`
- **Accent Text**: `text-emerald-600`
- **Gradient Text**: Custom `.text-gradient` utility using primary-to-accent gradient

---

## Spacing & Layout

### Container Strategy
- **Max Width**: `max-w-7xl` (1280px)
- **Padding**: `px-4 sm:px-6 lg:px-8` (responsive horizontal padding)
- **Vertical Spacing**: `py-12` to `py-24` for sections

### Grid Systems
- **Hero Layout**: `grid-cols-1 lg:grid-cols-2` with `gap-12`
- **Cards**: Responsive grid with `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Content**: Single column with max-width constraints

### Component Spacing
- **Section Margins**: `mb-6` to `mb-12` between elements
- **Card Padding**: `p-6` to `p-8` internal spacing
- **Button Spacing**: `gap-4` between button groups

---

## Components

### Buttons
```css
/* Primary Button */
- Background: Primary blue with hover darkening
- Padding: size="lg" for hero CTAs, size="md" for standard
- Border Radius: Rounded corners (standard Tailwind)
- Transitions: Smooth hover/focus states

/* Outline Button */
- Border: Primary color border
- Background: Transparent with hover fill
- Same sizing and spacing as primary
```

### Cards
```css
/* Base Card */
- Background: White
- Shadow: Subtle elevation (`shadow-md` to `shadow-lg`)
- Border Radius: Standard rounded corners
- Hover Effects: Slight shadow/scale increase
- Padding: Generous internal spacing
```

### Images
```css
/* Profile Images */
- Shape: Circular with gradient border ring
- Ring: `from-blue-400 to-purple-500` gradient
- Shadow: `shadow-2xl` for dramatic depth
- Aspect Ratio: 1:1 (square cropped to circle)
```

---

## Animation & Interactions

### Animation Library
- **AOS (Animate On Scroll)**: Primary animation system
- **Custom CSS**: Supplement for specific effects

### Animation Patterns
```css
/* Fade Animations */
- fade-up: Standard content reveal
- fade-in: Simple opacity transition
- zoom-in: Scale from 90% to 100%

/* Durations */
- Standard: 800ms-1000ms
- Quick: 300ms (hover states)
- Slow: 1200ms+ (hero elements)

/* Delays */
- Stagger: 200ms increments for sequential reveals
- Hero sequence: 0ms, 200ms, 400ms, 600ms pattern
```

### Hover Effects
- **Scale**: `hover:scale-105` for interactive elements
- **Shadow**: Increase elevation on hover
- **Color**: Subtle darkening/lightening of backgrounds
- **Smooth Transitions**: All hover states use `transition-all duration-300`

### Micro-Animations
- **Pulse**: Subtle breathing effect for primary CTAs
- **Bounce**: Gentle floating for decorative elements
- **Float**: 3-second cycle for background elements

---

## Accessibility Standards

### Focus Management
- **Visible Focus**: 2px solid primary color outline
- **Skip Links**: Hidden until focused, positioned absolutely
- **Keyboard Navigation**: All interactive elements accessible via Tab

### Color Contrast
- **Text on Light**: Ensure 4.5:1 minimum ratio
- **Text on Dark**: Maintain contrast in dark mode
- **Interactive States**: Clear visual feedback

### Motion Preferences
- **Reduced Motion**: Respect `prefers-reduced-motion` setting
- **Alternative Content**: Provide non-animated alternatives

---

## Responsive Design

### Breakpoints (Tailwind Standard)
- **sm**: 640px+ (tablets portrait)
- **md**: 768px+ (tablets landscape)
- **lg**: 1024px+ (small desktops)
- **xl**: 1280px+ (large desktops)

### Mobile-First Patterns
- Stack vertically on mobile, grid on larger screens
- Hide complex animations on smaller viewports
- Simplified navigation for mobile (hamburger if needed)
- Touch-friendly hit targets (44px minimum)

---

## Performance Guidelines

### CSS Optimization
- **Tailwind Purge**: Only include used classes in production
- **Custom Properties**: Use CSS variables for dynamic theming
- **Critical CSS**: Inline above-the-fold styles

### Animation Performance
- **Transform-Only**: Prefer transform/opacity for animations
- **GPU Acceleration**: Use `will-change` sparingly
- **Reduced Motion**: Disable animations when requested

---

## File Organization

### CSS Structure
```
src/assets/main.css
├── @tailwind base/components/utilities
├── CSS Custom Properties (:root variables)
├── Custom Utility Classes
├── Keyframe Animations
├── Component-Specific Styles
└── Accessibility & Print Styles
```

### Component Architecture
- **Layout Components**: Header, Footer, DefaultLayout
- **Section Components**: Hero, About, Skills, etc.
- **Common Components**: BaseButton, BaseCard, LoadingSpinner
- **Single File Components**: Vue SFC with scoped styles

---

## Implementation Notes

### Current Tech Stack
- **Vue 3** with Composition API and `<script setup>`
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **AOS Library** for scroll-triggered animations
- **Vite** for development and building

### Custom CSS Classes
```css
.glass - Glassmorphism effect with backdrop blur
.text-gradient - Emerald to accent color gradient text
.bg-gradient-green - Multi-stop emerald gradient background
.bg-gradient-green-light - Light emerald gradient for hero sections
.emerald-glow - Glowing shadow effect with emerald colors
.animate-in - Scroll-triggered fade and translate
.hover-scale - Scale on hover with smooth transition
.pulse-slow - Gentle 4-second pulse animation
```

### Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Progressive enhancement for older browsers
- Graceful degradation for CSS features

---

## Usage Instructions for AI

When updating or expanding this portfolio:

1. **Follow the established green color palette** - use emerald, green, and teal variants; don't introduce new colors without extending the CSS custom properties
2. **Maintain animation consistency** - use AOS for scroll animations, CSS for hover/focus states
3. **Respect the component architecture** - keep layout, sections, and common components separate
4. **Preserve accessibility features** - maintain ARIA labels, focus management, and semantic HTML
5. **Use Tailwind utilities first** - only add custom CSS when Tailwind classes aren't sufficient
6. **Test responsive behavior** - ensure all changes work across mobile, tablet, and desktop
7. **Keep performance in mind** - avoid heavy animations or large assets that slow load times

### Design Priorities (In Order)
1. **Accessibility & Usability**
2. **Performance & Load Speed** 
3. **Visual Appeal & Modern Aesthetics**
4. **Responsive Design**
5. **Interactive Enhancements**

This guide should be referenced for any design decisions, new component creation, or styling updates to maintain consistency across the portfolio.