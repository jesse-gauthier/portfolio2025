<template>
  <section class="py-20 bg-gray-50" aria-labelledby="skills-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 
          id="skills-heading" 
          class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Skills & Technologies
        </h2>
        <p 
          class="text-lg text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          I work with modern technologies and frameworks to build scalable, maintainable, and
          user-friendly web applications.
        </p>
      </div>

      <!-- Skills by Category -->
      <div class="space-y-12">
        <div 
          v-for="(category, categoryIndex) in skillCategories" 
          :key="category.name" 
          class="skill-category"
          data-aos="fade-up"
          :data-aos-delay="300 + (categoryIndex * 200)"
          data-aos-duration="1000"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
            {{ category.name }}
          </h3>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div 
              v-for="(skill, skillIndex) in category.skills" 
              :key="skill.name" 
              class="skill-item group"
              data-aos="zoom-in"
              :data-aos-delay="400 + (categoryIndex * 200) + (skillIndex * 50)"
              data-aos-duration="600"
            >
              <div
                class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <div class="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <img
                    :src="skill.icon"
                    :alt="`${skill.name} icon`"
                    class="w-full h-full object-contain"
                    loading="lazy"
                    @error="handleImageError"
                  />
                </div>
                <h4
                  class="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
                >
                  {{ skill.name }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills Note -->
      <div 
        class="mt-16 text-center"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <p class="text-gray-600">
          Always learning and adapting to new technologies.
          <router-link to="/contact" class="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
            Let's discuss your project needs!
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { skills } from '@/utils/site'

const skillCategories = computed(() => {
  const categories = {
    frontend: { name: 'Frontend Technologies', skills: [] as typeof skills },
    backend: { name: 'Backend Technologies', skills: [] as typeof skills },
    tools: { name: 'Tools & Platforms', skills: [] as typeof skills },
    cloud: { name: 'Cloud Services', skills: [] as typeof skills },
  }

  skills.forEach((skill) => {
    if (categories[skill.category]) {
      categories[skill.category].skills.push(skill)
    }
  })

  return Object.values(categories).filter((category) => category.skills.length > 0)
})

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Fallback to a placeholder or hide the image
  img.style.display = 'none'
  console.warn(`Failed to load skill icon: ${img.src}`)
}
</script>

<style scoped>
.skill-category {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.skill-category:nth-child(2) {
  animation-delay: 0.1s;
}

.skill-category:nth-child(3) {
  animation-delay: 0.2s;
}

.skill-category:nth-child(4) {
  animation-delay: 0.3s;
}

.skill-category:nth-child(5) {
  animation-delay: 0.4s;
}

.skill-item {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.4s ease-out forwards;
}

.skill-item:nth-child(1) {
  animation-delay: 0.1s;
}
.skill-item:nth-child(2) {
  animation-delay: 0.2s;
}
.skill-item:nth-child(3) {
  animation-delay: 0.3s;
}
.skill-item:nth-child(4) {
  animation-delay: 0.4s;
}
.skill-item:nth-child(5) {
  animation-delay: 0.5s;
}
.skill-item:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
