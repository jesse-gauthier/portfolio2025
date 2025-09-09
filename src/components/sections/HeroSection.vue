<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
    aria-labelledby="hero-heading"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Large Background Shapes -->
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-100 to-green-200 rounded-full opacity-60 animate-float" style="animation-delay: 0s;"></div>
      <div class="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-teal-100 to-emerald-200 rounded-full opacity-40 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-0 right-1/3 w-48 h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-50 animate-float" style="animation-delay: 4s;"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div class="h-full w-full" style="background-image: radial-gradient(circle at 1px 1px, #059669 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Content Side -->
        <div class="lg:col-span-7 text-center lg:text-left">
          <!-- Badge -->
          <div 
            class="inline-flex items-center px-4 py-2 mb-8 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium shadow-sm"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            Available for new projects
          </div>

          <!-- Main Title -->
          <h1
            id="hero-heading"
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-none"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <span class="block">Jesse</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
              Gauthier
            </span>
          </h1>

          <!-- Subtitle -->
          <div class="mb-8">
            <p 
              class="text-2xl sm:text-3xl text-gray-600 font-light mb-2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Web Developer
            </p>
            <div class="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto lg:mx-0"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="600"
            ></div>
          </div>

          <!-- Description -->
          <p 
            class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            I craft modern, performant web applications with <span class="text-emerald-600 font-medium">Vue.js</span>, 
            <span class="text-emerald-600 font-medium">React</span>, and cutting-edge technologies. 
            Let's build something amazing together.
          </p>

          <!-- CTA Buttons -->
          <div 
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            <BaseButton 
              to="/projects" 
              variant="primary" 
              size="lg" 
              class="group relative overflow-hidden shadow-lg hover:shadow-xl"
            >
              <span class="relative z-10 flex items-center">
                Explore Projects
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </BaseButton>
            
            <BaseButton 
              to="/contact" 
              variant="outline" 
              size="lg"
              class="group relative overflow-hidden"
            >
              <span class="flex items-center">
                Get In Touch
                <svg class="w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </BaseButton>
          </div>

          <!-- Social Links -->
          <div 
            class="flex items-center justify-center lg:justify-start space-x-6"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            <a 
              href="https://github.com/jesse-gauthier" 
              class="group flex items-center text-gray-500 hover:text-emerald-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="group-hover:underline">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/jesse-gauthier-475a25168/" 
              class="group flex items-center text-gray-500 hover:text-emerald-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span class="group-hover:underline">LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Visual Side -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div 
            class="relative"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <!-- Main Profile Container -->
            <div class="relative">
              <!-- Decorative rings -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-200 to-green-200 animate-spin-slow opacity-20" style="animation-duration: 20s;"></div>
              <div class="absolute inset-2 rounded-full bg-gradient-to-r from-teal-200 to-emerald-200 animate-spin-slow opacity-30" style="animation-duration: 15s; animation-direction: reverse;"></div>
              
              <!-- Profile Image Container -->
              <div class="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 shadow-2xl">
                <div class="w-full h-full rounded-full bg-white p-2">
                  <img
                    src="/images/profile.jpg"
                    alt="Jesse Gauthier - Web Developer"
                    class="w-full h-full rounded-full object-cover shadow-lg"
                    loading="eager"
                  />
                </div>
              </div>

              <!-- Floating Skills -->
              <div 
                class="absolute -top-4 -right-8 bg-white rounded-2xl px-4 py-3 shadow-lg border border-emerald-100 animate-float"
                style="animation-delay: 1s;"
                data-aos="fade-in"
                data-aos-delay="800"
                data-aos-duration="600"
              >
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span class="text-sm font-medium text-gray-800">Vue.js</span>
                </div>
              </div>

              <div 
                class="absolute -bottom-6 -left-8 bg-white rounded-2xl px-4 py-3 shadow-lg border border-emerald-100 animate-float"
                style="animation-delay: 2s;"
                data-aos="fade-in"
                data-aos-delay="1000"
                data-aos-duration="600"
              >
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm font-medium text-gray-800">React</span>
                </div>
              </div>

              <div 
                class="absolute top-1/2 -right-12 bg-white rounded-2xl px-4 py-3 shadow-lg border border-emerald-100 animate-float"
                style="animation-delay: 3s;"
                data-aos="fade-in"
                data-aos-delay="1200"
                data-aos-duration="600"
              >
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span class="text-sm font-medium text-gray-800">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div 
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="600"
      >
        <p class="text-sm text-gray-500 mb-2">Scroll to explore</p>
        <div class="animate-bounce">
          <svg
            class="w-6 h-6 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { heroSection } from '@/utils/site'
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow linear infinite;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #059669;
}
</style>