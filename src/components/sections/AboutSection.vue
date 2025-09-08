<template>
  <section class="py-24 bg-gradient-to-b from-white to-gray-50/50" aria-labelledby="about-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div 
          class="inline-flex items-center px-4 py-2 mb-6 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
          About Me
        </div>
        <h2 
          id="about-heading" 
          class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Crafting Digital 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
            Experiences
          </span>
        </h2>
        <p 
          class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          I'm passionate about creating web applications that combine beautiful design with exceptional functionality. 
          Every project is an opportunity to solve problems and deliver value.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <!-- Content -->
        <div class="order-2 lg:order-1">
          <div class="prose prose-lg text-gray-600 mb-12">
            <p 
              class="mb-6 text-lg leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              With over <strong class="text-emerald-600">5 years of experience</strong> in web development, 
              I specialize in creating responsive, accessible, and performant web applications using modern 
              technologies like <strong class="text-emerald-600">Vue.js</strong>, <strong class="text-emerald-600">React</strong>, 
              and <strong class="text-emerald-600">TypeScript</strong>.
            </p>
            <p 
              class="mb-6 text-lg leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              My approach combines technical expertise with creative problem-solving, ensuring every project 
              not only meets requirements but exceeds expectations. I believe in writing clean, maintainable 
              code and staying current with industry best practices.
            </p>
            <p
              class="text-lg leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              When I'm not coding, you'll find me exploring new frameworks, contributing to open source projects, 
              or mentoring other developers in the community.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div 
            class="flex flex-col sm:flex-row gap-4"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            <BaseButton
              href="/Jesse_Gauthier_Resume.pdf"
              variant="primary"
              external
              size="lg"
              class="group relative overflow-hidden shadow-lg hover:shadow-xl"
              aria-label="Download resume (PDF)"
            >
              <span class="relative z-10 flex items-center">
                Download Resume
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </BaseButton>
            
            <BaseButton 
              to="/contact" 
              variant="outline" 
              size="lg"
              class="group"
            >
              <span class="flex items-center">
                Let's Connect
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </BaseButton>
          </div>
        </div>

        <!-- Stats & Skills -->
        <div class="order-1 lg:order-2">
          
          <!-- Stats Grid -->
          <div 
            class="grid grid-cols-2 gap-6 mb-12"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              class="group relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              :data-aos="'zoom-in'"
              :data-aos-delay="400 + (index * 100)"
              data-aos-duration="600"
            >
              <!-- Gradient background on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="relative z-10 text-center">
                <div class="text-4xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {{ stat.value }}
                </div>
                <div class="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {{ stat.label }}
                </div>
              </div>
              
              <!-- Decorative element -->
              <div class="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Key Strengths -->
          <div 
            class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
            data-aos="fade-left"
            data-aos-delay="700"
            data-aos-duration="800"
          >
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              Core Expertise
            </h3>
            
            <div class="grid grid-cols-1 gap-4">
              <div 
                v-for="(strength, index) in keyStrengths" 
                :key="strength" 
                class="group flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                data-aos="fade-left"
                :data-aos-delay="800 + (index * 50)"
                data-aos-duration="400"
              >
                <div class="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-emerald-500 transition-colors duration-200">
                  <svg class="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {{ strength }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aboutSection } from '@/utils/site'
import BaseButton from '@/components/common/BaseButton.vue'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
  { value: '100%', label: 'Client Satisfaction' },
]

const keyStrengths = [
  'Full-Stack Development',
  'Modern JavaScript Frameworks',
  'Responsive & Mobile Design',
  'Performance Optimization',
  'Web Accessibility (A11Y)',
  'Database Design & Management',
  'Version Control & Deployment',
  'UI/UX Implementation'
]
</script>