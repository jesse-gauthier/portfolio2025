<template>
  <header class="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300" role="banner">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-indigo-50/30"></div>
    <nav
      class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="flex justify-between items-center h-20">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <router-link
            to="/"
            class="group flex items-center space-x-3"
            aria-label="Jesse Gauthier - Go to homepage"
          >
            <div class="relative">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-all duration-200 group-hover:scale-110 group-hover:rotate-3">
                JG
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
            </div>
            <div class="hidden sm:block">
              <span class="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-indigo-600 transition-all duration-300">
                Jesse Gauthier
              </span>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-1">
            <router-link
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              :class="[
                'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden',
                $route.path === item.path
                  ? 'text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900',
              ]"
              :aria-current="$route.path === item.path ? 'page' : undefined"
            >
              <div 
                v-if="$route.path === item.path"
                class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg"
              ></div>
              <div 
                v-else
                class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-indigo-600/10 rounded-lg transition-all duration-300"
              ></div>
              <span class="relative z-10">{{ item.name }}</span>
              <div 
                v-if="$route.path !== item.path"
                class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
              ></div>
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="relative p-3 text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger icon -->
            <svg
              :class="{ hidden: isMobileMenuOpen }"
              class="block h-6 w-6 transform group-hover:scale-110 transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Close icon -->
            <svg
              :class="{ hidden: !isMobileMenuOpen }"
              class="block h-6 w-6 transform group-hover:scale-110 transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-4 opacity-0"
      >
        <div v-show="isMobileMenuOpen" class="md:hidden relative" id="mobile-menu">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-indigo-50/50 backdrop-blur-sm"></div>
          <div class="relative px-4 pt-4 pb-6 space-y-2 sm:px-6 bg-white/95 border-t border-gray-100 shadow-lg">
            <router-link
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              @click="closeMobileMenu"
              :class="[
                'relative block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 group overflow-hidden',
                $route.path === item.path
                  ? 'text-white shadow-md'
                  : 'text-gray-800 hover:text-gray-900',
              ]"
              :aria-current="$route.path === item.path ? 'page' : undefined"
            >
              <div 
                v-if="$route.path === item.path"
                class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl"
              ></div>
              <div 
                v-else
                class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-indigo-600/10 rounded-xl transition-all duration-200"
              ></div>
              <span class="relative z-10">{{ item.name }}</span>
            </router-link>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '@/utils/site'
import BaseButton from '@/components/common/BaseButton.vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  const mobileMenu = document.getElementById('mobile-menu')
  const menuButton = document.querySelector('[aria-controls="mobile-menu"]')

  if (
    isMobileMenuOpen.value &&
    mobileMenu &&
    menuButton &&
    !mobileMenu.contains(target) &&
    !menuButton.contains(target)
  ) {
    closeMobileMenu()
  }
}

// Close mobile menu on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>
