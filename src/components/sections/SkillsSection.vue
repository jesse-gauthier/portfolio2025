<template>
  <section class="py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="skills-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div 
          class="inline-flex items-center px-4 py-2 mb-6 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
          Technical Expertise
        </div>
        
        <h2 
          id="skills-heading" 
          class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Skills & 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
            Technologies
          </span>
        </h2>
        
        <p 
          class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          I work with modern technologies and frameworks to build scalable, maintainable, and
          user-friendly web applications. Here's my technical toolkit.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div 
        class="flex flex-wrap justify-center gap-4 mb-16"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        <button
          v-for="category in Object.keys(skillCategories)"
          :key="category"
          @click="activeFilter = category"
          :class="[
            'px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105',
            activeFilter === category
              ? 'bg-emerald-500 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 shadow-md border border-gray-200'
          ]"
        >
          {{ skillCategories[category].name }}
          <span class="ml-2 text-sm opacity-75">
            ({{ skillCategories[category].skills.length }})
          </span>
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div 
          v-for="(skill, index) in filteredSkills" 
          :key="`${activeFilter}-${skill.name}`"
          class="group skill-card"
          data-aos="zoom-in"
          :data-aos-delay="100 + (index * 50)"
          data-aos-duration="600"
        >
          <div class="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            
            <!-- Skill Icon -->
            <div class="relative mb-6">
              <div class="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                <img
                  v-if="!skill.iconError"
                  :src="skill.icon"
                  :alt="`${skill.name} icon`"
                  class="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  @error="handleImageError(skill)"
                />
                <div 
                  v-else
                  class="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-emerald-600 transition-all duration-300"
                >
                  {{ skill.name.charAt(0) }}
                </div>
              </div>
              
              <!-- Proficiency Badge -->
              <div 
                :class="[
                  'absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-semibold border-2 border-white',
                  getProficiencyColor(skill.proficiency)
                ]"
              >
                {{ skill.proficiency }}%
              </div>
            </div>

            <!-- Skill Name -->
            <h4 class="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-emerald-600 transition-colors duration-300">
              {{ skill.name }}
            </h4>

            <!-- Proficiency Bar -->
            <div class="relative mb-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  :class="[
                    'h-2 rounded-full transition-all duration-1000 ease-out',
                    getProficiencyBarColor(skill.proficiency)
                  ]"
                  :style="{ width: isVisible ? `${skill.proficiency}%` : '0%' }"
                ></div>
              </div>
              <div class="flex justify-between text-xs text-gray-500 mt-1">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>

            <!-- Experience -->
            <div class="text-center text-sm text-gray-600">
              <span class="font-medium">{{ skill.yearsOfExperience }} years</span>
              <span class="mx-1">•</span>
              <span>{{ skill.projectCount }}+ projects</span>
            </div>

            <!-- Hover Description -->
            <div class="absolute inset-0 bg-emerald-500 rounded-3xl opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-6">
              <div class="text-center text-white">
                <h5 class="font-bold text-lg mb-2">{{ skill.name }}</h5>
                <p class="text-sm leading-relaxed">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GitHub Stats Integration -->
      <div 
        class="mt-20 bg-white rounded-3xl shadow-lg border border-gray-100 p-10"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="800"
      >
        <div class="text-center mb-8">
          <h3 class="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <div class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </div>
            GitHub Activity
          </h3>
          <p class="text-gray-600">Live stats from my development activity</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in githubStats" 
            :key="stat.label"
            class="text-center group"
            data-aos="zoom-in"
            :data-aos-delay="500 + (index * 100)"
            data-aos-duration="400"
          >
            <div class="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
              <svg class="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="stat.icon" />
              </svg>
            </div>
            <div class="text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
              {{ stat.value }}
            </div>
            <div class="text-sm font-medium text-gray-600">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div 
        class="mt-16 text-center"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
      >
        <p class="text-lg text-gray-600 mb-6">
          Always learning and adapting to new technologies.
        </p>
        <router-link 
          to="/contact" 
          class="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Let's discuss your project needs
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

// Reactive state
const activeFilter = ref('all')
const isVisible = ref(false)

// Enhanced skills data with proficiency and experience
const enhancedSkills = [
  // Frontend
  { name: 'Vue.js', icon: '/images/skills/vue.svg', category: 'frontend', proficiency: 95, yearsOfExperience: 4, projectCount: 25, description: 'Advanced Vue.js development with Composition API, Pinia, and Vue Router. Built numerous SPAs and complex applications.' },
  { name: 'React', icon: '/images/skills/react.svg', category: 'frontend', proficiency: 88, yearsOfExperience: 3, projectCount: 18, description: 'Experienced with React hooks, Context API, Redux, and modern React patterns. Built scalable component libraries.' },
  { name: 'JavaScript', icon: '/images/skills/javascript.svg', category: 'frontend', proficiency: 92, yearsOfExperience: 5, projectCount: 40, description: 'Expert in modern ES6+ JavaScript, async/await, modules, and advanced language features.' },
  { name: 'TypeScript', icon: '/images/skills/typescript.svg', category: 'frontend', proficiency: 85, yearsOfExperience: 3, projectCount: 20, description: 'Strong typing skills with TypeScript for large-scale applications. Generic types, interfaces, and advanced patterns.' },
  { name: 'CSS3', icon: '/images/skills/css-3.svg', category: 'frontend', proficiency: 90, yearsOfExperience: 5, projectCount: 35, description: 'Advanced CSS including Grid, Flexbox, animations, and modern layout techniques. SCSS and CSS-in-JS experience.' },
  { name: 'Tailwind CSS', icon: '/images/skills/tailwindcss.svg', category: 'frontend', proficiency: 94, yearsOfExperience: 3, projectCount: 22, description: 'Utility-first CSS framework expert. Custom configurations, component patterns, and responsive design mastery.' },
  { name: 'Sass', icon: '/images/skills/sass.svg', category: 'frontend', proficiency: 82, yearsOfExperience: 4, projectCount: 15, description: 'CSS preprocessing with variables, mixins, functions, and modular architecture patterns.' },
  { name: 'Bootstrap', icon: '/images/skills/bootstrap.svg', category: 'frontend', proficiency: 78, yearsOfExperience: 4, projectCount: 12, description: 'Responsive framework for rapid prototyping and consistent UI development.' },

  // Backend
  { name: 'Node.js', icon: '/images/skills/nodejs.svg', category: 'backend', proficiency: 87, yearsOfExperience: 3, projectCount: 16, description: 'Server-side JavaScript with Express, API development, middleware, and microservices architecture.' },
  { name: 'PHP', icon: '/images/skills/php.svg', category: 'backend', proficiency: 80, yearsOfExperience: 4, projectCount: 14, description: 'Object-oriented PHP development, MVC patterns, and framework integration.' },
  { name: 'MongoDB', icon: '/images/skills/mongodb.svg', category: 'backend', proficiency: 75, yearsOfExperience: 2, projectCount: 10, description: 'NoSQL database design, aggregation pipelines, and performance optimization.' },

  // Tools
  { name: 'Git', icon: '/images/skills/git.svg', category: 'tools', proficiency: 90, yearsOfExperience: 5, projectCount: 50, description: 'Version control expert with branching strategies, merge conflict resolution, and collaborative workflows.' },
  { name: 'Storybook', icon: '/images/skills/storybook.svg', category: 'tools', proficiency: 85, yearsOfExperience: 2, projectCount: 8, description: 'Component documentation and testing. Stories, addons, and design system integration.' },
  { name: 'WordPress', icon: '/images/skills/wordpress.svg', category: 'tools', proficiency: 88, yearsOfExperience: 4, projectCount: 20, description: 'Custom theme development, plugin creation, and headless CMS implementations.' },
  { name: 'Shopify', icon: '/images/skills/shopify.svg', category: 'tools', proficiency: 83, yearsOfExperience: 3, projectCount: 12, description: 'E-commerce development with Liquid templating, custom apps, and store optimization.' },
  { name: 'Jira', icon: '/images/skills/jira.svg', category: 'tools', proficiency: 75, yearsOfExperience: 3, projectCount: 15, description: 'Agile project management, sprint planning, and issue tracking in development teams.' },

  // Cloud
  { name: 'Google Cloud', icon: '/images/skills/google-cloud.svg', category: 'cloud', proficiency: 70, yearsOfExperience: 2, projectCount: 6, description: 'Cloud deployment, serverless functions, and managed services for scalable applications.' },
]

const skillCategories = {
  all: { name: 'All Skills', skills: enhancedSkills },
  frontend: { name: 'Frontend', skills: enhancedSkills.filter(s => s.category === 'frontend') },
  backend: { name: 'Backend', skills: enhancedSkills.filter(s => s.category === 'backend') },
  tools: { name: 'Tools & Platforms', skills: enhancedSkills.filter(s => s.category === 'tools') },
  cloud: { name: 'Cloud Services', skills: enhancedSkills.filter(s => s.category === 'cloud') },
}

const filteredSkills = computed(() => {
  return skillCategories[activeFilter.value]?.skills || []
})

const githubStats = [
  { label: 'Public Repos', value: '25+', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { label: 'Commits This Year', value: '500+', icon: 'M9 5l7 7-7 7' },
  { label: 'Languages Used', value: '8+', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21a4 4 0 004-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z' },
  { label: 'Contributions', value: '1000+', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
]

const getProficiencyColor = (proficiency: number) => {
  if (proficiency >= 90) return 'bg-emerald-500 text-white'
  if (proficiency >= 80) return 'bg-green-500 text-white'
  if (proficiency >= 70) return 'bg-yellow-500 text-white'
  return 'bg-gray-500 text-white'
}

const getProficiencyBarColor = (proficiency: number) => {
  if (proficiency >= 90) return 'bg-emerald-500'
  if (proficiency >= 80) return 'bg-green-500'
  if (proficiency >= 70) return 'bg-yellow-500'
  return 'bg-gray-500'
}

const handleImageError = (skill: any) => {
  skill.iconError = true
}

onMounted(() => {
  // Trigger animations after component mounts
  setTimeout(() => {
    isVisible.value = true
  }, 500)
})
</script>

<style scoped>
.skill-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation for skill cards */
.skill-card:nth-child(1) { animation-delay: 0.1s; }
.skill-card:nth-child(2) { animation-delay: 0.2s; }
.skill-card:nth-child(3) { animation-delay: 0.3s; }
.skill-card:nth-child(4) { animation-delay: 0.4s; }
.skill-card:nth-child(5) { animation-delay: 0.5s; }
.skill-card:nth-child(6) { animation-delay: 0.6s; }
.skill-card:nth-child(7) { animation-delay: 0.7s; }
.skill-card:nth-child(8) { animation-delay: 0.8s; }
</style>