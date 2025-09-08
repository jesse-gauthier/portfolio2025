<template>
  <header class="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300" role="banner">
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-50/30 via-green-50/20 to-teal-50/30"></div>
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
              <div class="w-10 h-10 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-all duration-200 group-hover:scale-110 group-hover:rotate-3">
                JG
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
            </div>
            <div class="hidden sm:block">
              <span class="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:via-green-600 group-hover:to-teal-600 transition-all duration-300">
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
                class="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-lg"
              ></div>
              <div 
                v-else
                class="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-green-600/0 to-teal-600/0 group-hover:from-emerald-600/10 group-hover:via-green-600/10 group-hover:to-teal-600/10 rounded-lg transition-all duration-300"
              ></div>
              <span class="relative z-10">{{ item.name }}</span>
              <div 
                v-if="$route.path !== item.path"
                class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
              ></div>
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="relative p-3 text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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

      <!-- Full-Screen Mobile Navigation Drawer -->
      <teleport to="body">
        <transition
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-show="isMobileMenuOpen" class="fixed inset-0 z-[100] md:hidden">
            <!-- Backdrop -->
            <div 
              class="absolute inset-0 bg-black/50 backdrop-blur-sm"
              @click="closeMobileMenu"
            ></div>
            
            <!-- Drawer -->
            <transition
              enter-active-class="transition-transform duration-500 ease-out"
              enter-from-class="translate-x-full"
              enter-to-class="translate-x-0"
              leave-active-class="transition-transform duration-300 ease-in"
              leave-from-class="translate-x-0"
              leave-to-class="translate-x-full"
            >
              <div v-show="isMobileMenuOpen" class="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl">
                <!-- Header -->
                <div class="flex items-center justify-between p-6 border-b border-gray-100">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      JG
                    </div>
                    <span class="text-lg font-semibold text-gray-900">Menu</span>
                  </div>
                  <button
                    @click="closeMobileMenu"
                    class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <!-- Navigation Links -->
                <div class="px-6 py-8 space-y-2">
                  <router-link
                    v-for="(item, index) in navItems"
                    :key="item.name"
                    :to="item.path"
                    @click="closeMobileMenu"
                    :class="[
                      'relative flex items-center px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 group overflow-hidden transform hover:scale-[1.02]',
                      $route.path === item.path
                        ? 'text-white shadow-lg scale-[1.02]'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                    ]"
                    :style="{ animationDelay: `${index * 100}ms` }"
                    class="animate-fade-in-right"
                  >
                    <div 
                      v-if="$route.path === item.path"
                      class="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl shadow-lg"
                    ></div>
                    <div 
                      v-else
                      class="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-green-600/0 to-teal-600/0 group-hover:from-emerald-600/5 group-hover:via-green-600/5 group-hover:to-teal-600/5 rounded-2xl transition-all duration-300"
                    ></div>
                    
                    <!-- Icon -->
                    <div class="relative z-10 mr-4">
                      <div class="w-2 h-2 bg-current rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <!-- Text -->
                    <span class="relative z-10">{{ item.name }}</span>
                    
                    <!-- Arrow -->
                    <div class="relative z-10 ml-auto transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </router-link>
                </div>

                <!-- Footer Info -->
                <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
                  <div class="text-center">
                    <p class="text-sm text-gray-600 mb-2">Jesse Gauthier</p>
                    <p class="text-xs text-gray-500">Web Developer</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </transition>
      </teleport>
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

<style scoped>
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-right {
  animation: fade-in-right 0.4s ease-out forwards;
}
</style>
