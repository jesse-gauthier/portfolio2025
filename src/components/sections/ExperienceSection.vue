<template>
  <section class="py-20 bg-white" aria-labelledby="experience-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          id="experience-heading"
          class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Experience
        </h2>
        <p
          class="text-lg text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          My professional journey in web development, building solutions for various clients and
          projects.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"
            data-aos="fade-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          ></div>

          <div class="space-y-8">
            <article
              v-for="(experience, index) in experiences"
              :key="experience.id"
              class="relative md:ml-16"
              data-aos="fade-left"
              :data-aos-delay="600 + index * 200"
              data-aos-duration="1000"
            >
              <!-- Timeline dot -->
              <div
                class="absolute -left-20 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"
                data-aos="zoom-in"
                :data-aos-delay="700 + index * 200"
                data-aos-duration="600"
              ></div>

              <BaseCard variant="bordered" hover class="transition-all duration-300">
                <template #header>
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 class="text-xl font-semibold text-gray-900">
                        {{ experience.position }}
                      </h3>
                      <p class="text-lg text-blue-600 font-medium">
                        {{ experience.company }}
                      </p>
                    </div>
                    <div class="text-sm text-gray-500 mt-2 sm:mt-0">
                      {{ experience.startDate }} - {{ experience.endDate || 'Present' }}
                    </div>
                  </div>
                </template>

                <div class="space-y-4">
                  <!-- Description -->
                  <div>
                    <ul class="space-y-2">
                      <li
                        v-for="item in experience.description"
                        :key="item"
                        class="flex items-start"
                      >
                        <svg
                          class="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
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
                        <span class="text-gray-700">{{ item }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Technologies -->
                  <div>
                    <h4 class="text-sm font-medium text-gray-900 mb-2">Technologies Used:</h4>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in experience.technologies"
                        :key="tech"
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </article>
          </div>
        </div>

        <!-- CTA -->
        <div
          class="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <BaseButton to="/projects" variant="primary"> View My Projects </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '@/utils/site'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
</script>
