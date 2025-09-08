<template>
  <section class="py-16 bg-gray-50" aria-labelledby="certifications-heading">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="certifications-heading" class="text-2xl font-bold text-gray-900 mb-6">
        Certifications & Education
      </h2>
      <ul class="space-y-6">
        <li
          v-for="cert in certifications"
          :key="cert.title"
          class="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 class="text-lg font-semibold text-blue-700">{{ cert.title }}</h3>
            <p class="text-gray-700">{{ cert.institution }}</p>
            <p class="text-gray-500 text-sm">{{ cert.year }}</p>
            <p v-if="cert.description" class="mt-2 text-gray-600">{{ cert.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { certifications } from '../../utils/site'
</script>
