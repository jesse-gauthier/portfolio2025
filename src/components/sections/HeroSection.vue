<template>
  <section
    class="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
    aria-labelledby="hero-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <h1
            id="hero-heading"
            class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {{ heroSection.title }}
          </h1>
          <p 
            class="text-xl sm:text-2xl text-blue-600 font-medium mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {{ heroSection.subtitle }}
          </p>
          <p 
            class="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            {{ heroSection.content }}
          </p>

          <div 
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <BaseButton to="/projects" variant="primary" size="lg" class="animate-pulse-subtle">
              View My Projects
            </BaseButton>
            <BaseButton to="/contact" variant="outline" size="lg"> Get In Touch </BaseButton>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-end">
          <div 
            class="relative"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div
              class="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-2xl"
            >
              <img
                src="/images/profile.jpg"
                alt="Jesse Gauthier - Web Developer"
                class="w-full h-full rounded-full object-cover"
                loading="eager"
              />
            </div>
            <!-- Floating elements -->
            <div
              class="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"
              data-aos="fade-in"
              data-aos-delay="800"
              data-aos-duration="800"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-bounce-slow"
              style="animation-delay: 1s"
              data-aos="fade-in"
              data-aos-delay="1000"
              data-aos-duration="800"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="animate-bounce">
        <svg
          class="w-6 h-6 text-gray-400"
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
  </section>
</template>

<script setup lang="ts">
import { heroSection } from '@/utils/site'
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<style scoped>
@keyframes pulse-subtle {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 3s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>
