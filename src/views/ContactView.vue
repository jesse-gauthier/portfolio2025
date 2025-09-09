<template>
  <DefaultLayout>
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section
        class="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
        aria-labelledby="contact-heading"
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

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <!-- Badge -->
          <div 
            class="inline-flex items-center px-4 py-2 mb-8 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium shadow-sm"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            Let's Work Together
          </div>

          <!-- Main Title -->
          <h1
            id="contact-heading"
            class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-none"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <span class="block">Get In</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
              Touch
            </span>
          </h1>

          <!-- Description -->
          <p 
            class="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Ready to start your next project? Let's discuss how we can work together to bring your
            <span class="text-emerald-600 font-medium">ideas to life</span>. 
            I'm always excited to take on new challenges and create something amazing.
          </p>

          <!-- Email CTA -->
          <div 
            class="mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <p class="text-lg text-gray-600 mb-6">Drop me a line at:</p>
            <a
              href="mailto:jessegauthier2@gmail.com"
              class="group inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jessegauthier2@gmail.com
              <svg class="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <!-- Quick Contact Options -->
          <div 
            class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div class="group">
              <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <svg class="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Email Me</h3>
              <p class="text-gray-600 text-sm">Quick response time</p>
            </div>

            <div class="group">
              <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <svg class="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Let's Chat</h3>
              <p class="text-gray-600 text-sm">Schedule a call</p>
            </div>

            <div class="group">
              <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <svg class="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Connect</h3>
              <p class="text-gray-600 text-sm">Social networks</p>
            </div>
          </div>

          <!-- Scroll Indicator -->
          <div 
            class="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <p class="text-sm text-gray-500 mb-2">More ways to connect</p>
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

      <!-- Contact Information Section -->
      <section class="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center px-4 py-2 mb-6 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
              <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
              Contact Information
            </div>
            
            <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Let's Start a 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Conversation
              </span>
            </h2>
            
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects.
              Whether you're looking for a developer, have questions about my work, or just want
              to say hello, I'd love to hear from you.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <!-- Email Card -->
            <div
              class="group p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <div class="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                <svg class="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Email Address</h3>
              
              <a
                href="mailto:jessegauthier2@gmail.com"
                class="inline-block text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer font-semibold text-lg mb-4 break-all"
              >
                jessegauthier2@gmail.com
              </a>
              
              <p class="text-gray-600 text-sm">Best way to reach me directly</p>
              
              <!-- Copy Email Button -->
              <button
                @click="copyEmail"
                class="mt-4 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                {{ emailCopied ? 'Copied!' : 'Copy Email' }}
              </button>
            </div>

            <!-- Location Card -->
            <div
              class="group p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <div class="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                <svg class="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Location</h3>
              <p class="text-gray-700 font-semibold text-lg mb-2">Ottawa, Canada</p>
              <p class="text-gray-600 text-sm">Available for remote work worldwide</p>
            </div>

            <!-- Response Time Card -->
            <div
              class="group p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center md:col-span-2 lg:col-span-1"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <div class="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                <svg class="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Response Time</h3>
              <p class="text-gray-700 font-semibold text-lg mb-2">Within 24 hours</p>
              <p class="text-gray-600 text-sm">Usually much faster during business hours</p>
            </div>
          </div>

          <!-- Social Links Section -->
          <div 
            class="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            <div class="text-center mb-8">
              <h3 class="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <div class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                Connect on Social
              </h3>
              <p class="text-gray-600">Follow me on social media for updates and insights</p>
            </div>
            
            <div class="grid grid-cols-2 gap-6">
              <a
                href="https://github.com/jesse-gauthier"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center justify-center p-6 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200"
                aria-label="Visit GitHub profile (opens in new tab)"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="400"
              >
                <svg class="w-8 h-8 text-gray-600 group-hover:text-emerald-600 transition-colors duration-200 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                <span class="font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors duration-200">GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/jesse-gauthier-475a25168/"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center justify-center p-6 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200"
                aria-label="Visit LinkedIn profile (opens in new tab)"
                data-aos="zoom-in"
                data-aos-delay="700"
                data-aos-duration="400"
              >
                <svg class="w-8 h-8 text-gray-600 group-hover:text-emerald-600 transition-colors duration-200 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span class="font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors duration-200">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'

// Email copy functionality
const emailCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('jessegauthier2@gmail.com')
    emailCopied.value = true
    
    // Reset after 2 seconds
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}
</script>

<style scoped>
/* Float animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>