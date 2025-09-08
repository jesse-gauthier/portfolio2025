<template>
  <DefaultLayout>
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get In Touch
          </h1>
          <p 
            class="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Ready to start your next project? Let's discuss how we can work together to bring your
            ideas to life.
          </p>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Contact Information -->
            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
              <p class="text-lg text-gray-600 mb-8">
                I'm always interested in hearing about new opportunities and exciting projects.
                Whether you're looking for a developer, have questions about my work, or just want
                to say hello, I'd love to hear from you.
              </p>

              <!-- Contact Methods -->
              <div class="space-y-6">
                <div
                  v-for="(field, index) in contactFields"
                  :key="field.type"
                  class="flex items-center space-x-4"
                  data-aos="fade-right"
                  :data-aos-delay="200 + (index * 100)"
                  data-aos-duration="800"
                >
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                  >
                    <!-- Email Icon -->
                    <svg
                      v-if="field.icon === 'email'"
                      class="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <!-- Phone Icon -->
                    <svg
                      v-else-if="field.icon === 'phone'"
                      class="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <!-- Location Icon -->
                    <svg
                      v-else-if="field.icon === 'location'"
                      class="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900">{{ field.label }}</h3>
                    <a
                      v-if="field.type === 'email'"
                      :href="`mailto:${field.value}`"
                      class="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {{ field.value }}
                    </a>
                    <a
                      v-else-if="field.type === 'phone'"
                      :href="`tel:${field.value}`"
                      class="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {{ field.value }}
                    </a>
                    <span v-else class="text-gray-600">{{ field.value }}</span>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div 
                class="mt-12"
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Connect on Social</h3>
                <div class="flex space-x-4">
                  <a
                    v-for="(link, index) in socialLinks"
                    :key="link.name"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
                    :aria-label="`Visit ${link.name} (opens in new tab)`"
                    data-aos="zoom-in"
                    :data-aos-delay="700 + (index * 100)"
                    data-aos-duration="600"
                  >
                    <!-- GitHub Icon -->
                    <svg
                      v-if="link.icon === 'github'"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <!-- LinkedIn Icon -->
                    <svg
                      v-else-if="link.icon === 'linkedin'"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div 
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <BaseCard variant="shadow" class="p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name Field -->
                  <div 
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="800"
                  >
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      :class="{ 'border-red-500': errors.name }"
                      placeholder="Your full name"
                    />
                    <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                  </div>

                  <!-- Email Field -->
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      :class="{ 'border-red-500': errors.email }"
                      placeholder="your.email@example.com"
                    />
                    <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                  </div>

                  <!-- Subject Field -->
                  <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      :class="{ 'border-red-500': errors.subject }"
                      placeholder="What's this about?"
                    />
                    <p v-if="errors.subject" class="mt-1 text-sm text-red-600">
                      {{ errors.subject }}
                    </p>
                  </div>

                  <!-- Message Field -->
                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      required
                      rows="5"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      :class="{ 'border-red-500': errors.message }"
                      placeholder="Tell me about your project or question..."
                    ></textarea>
                    <p v-if="errors.message" class="mt-1 text-sm text-red-600">
                      {{ errors.message }}
                    </p>
                  </div>

                  <!-- Submit Button -->
                  <BaseButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    class="w-full"
                    :disabled="isSubmitting"
                  >
                    <span v-if="!isSubmitting">Send Message</span>
                    <span v-else class="flex items-center justify-center">
                      <svg
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  </BaseButton>
                </form>

                <!-- Success Message -->
                <div
                  v-if="showSuccessMessage"
                  class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div class="flex">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div class="ml-3">
                      <p class="text-sm text-green-700">
                        Thank you for your message! I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { contactFields, footerLinks } from '@/utils/site'

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const showSuccessMessage = ref(false)

// Social links (filter from footer links)
const socialLinks = footerLinks.filter((link) => link.external)

// Form validation
const validateForm = (): boolean => {
  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = ''
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
    isValid = false
  }

  return isValid
}

// Form submission
const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // TODO: Implement actual form submission
    // For now, just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    Object.keys(form).forEach((key) => {
      form[key as keyof typeof form] = ''
    })

    showSuccessMessage.value = true

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
    // TODO: Show error message
  } finally {
    isSubmitting.value = false
  }
}
</script>
