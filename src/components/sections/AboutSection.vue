<template>
  <section class="py-20 bg-white" aria-labelledby="about-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="order-2 lg:order-1">
          <h2 
            id="about-heading" 
            class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {{ aboutSection.title }}
          </h2>
          <div class="prose prose-lg text-gray-600 mb-8">
            <p 
              class="mb-6"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {{ aboutSection.content }}
            </p>
            <p 
              class="mb-6"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              With years of experience in web development, I specialize in creating responsive,
              accessible, and performant web applications. I'm passionate about staying current with
              the latest technologies and best practices in the ever-evolving world of web
              development.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              When I'm not coding, you can find me exploring new frameworks, contributing to open
              source projects, or sharing my knowledge with the developer community.
            </p>
          </div>

          <div 
            class="flex flex-wrap gap-4"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            <BaseButton
              href="/Jesse_Gauthier_Resume.pdf"
              variant="primary"
              external
              aria-label="Download resume (PDF)"
            >
              Download Resume
            </BaseButton>
            <BaseButton to="/contact" variant="outline"> Let's Connect </BaseButton>
          </div>
        </div>

        <!-- Stats/Highlights -->
        <div class="order-1 lg:order-2">
          <div 
            class="grid grid-cols-2 gap-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              class="text-center p-6 bg-gray-50 rounded-lg"
              :data-aos="'zoom-in'"
              :data-aos-delay="100 + (index * 100)"
              data-aos-duration="800"
            >
              <div class="text-3xl font-bold text-blue-600 mb-2">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-600">
                {{ stat.label }}
              </div>
            </div>
          </div>

          <!-- Key strengths -->
          <div class="mt-8">
            <h3 
              class="text-xl font-semibold text-gray-900 mb-4"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Key Strengths
            </h3>
            <ul class="space-y-3">
              <li 
                v-for="(strength, index) in keyStrengths" 
                :key="strength" 
                class="flex items-center"
                data-aos="fade-left"
                :data-aos-delay="600 + (index * 100)"
                data-aos-duration="800"
              >
                <svg
                  class="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-700">{{ strength }}</span>
              </li>
            </ul>
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
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Client Satisfaction' },
]

const keyStrengths = [
  'Full-Stack Development',
  'Responsive Design',
  'Performance Optimization',
  'Accessibility (A11Y)',
  'Modern JavaScript Frameworks',
  'Database Design & Management',
]
</script>
