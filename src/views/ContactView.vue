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

          <!-- Quick Contact Options -->
          <div 
            class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
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
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <p class="text-sm text-gray-500 mb-2">Send me a message</p>
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

      <!-- Contact Section -->
      <section class="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <!-- Contact Information -->
            <div 
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <!-- Section Header -->
              <div class="mb-12">
                <div class="inline-flex items-center px-4 py-2 mb-6 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  Contact Information
                </div>
                
                <h2 class="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  Let's Start a 
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                    Conversation
                  </span>
                </h2>
                
                <p class="text-xl text-gray-600 leading-relaxed">
                  I'm always interested in hearing about new opportunities and exciting projects.
                  Whether you're looking for a developer, have questions about my work, or just want
                  to say hello, I'd love to hear from you.
                </p>
              </div>

              <!-- Contact Methods -->
              <div class="space-y-8 mb-12">
                <div
                  class="group flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="600"
                >
                  <div class="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                    <svg class="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Email Address</h3>
                    <a
                      href="mailto:jesse@jessegauthier.dev"
                      class="text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer font-medium text-lg"
                    >
                      jesse@jessegauthier.dev
                    </a>
                    <p class="text-gray-600 text-sm mt-1">Best way to reach me directly</p>
                  </div>
                </div>

                <div
                  class="group flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="600"
                >
                  <div class="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                    <svg class="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                    <span class="text-gray-700 font-medium text-lg">Ottawa, Canada</span>
                    <p class="text-gray-600 text-sm mt-1">Available for remote work worldwide</p>
                  </div>
                </div>

                <div
                  class="group flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="600"
                >
                  <div class="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                    <svg class="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Response Time</h3>
                    <span class="text-gray-700 font-medium text-lg">Within 24 hours</span>
                    <p class="text-gray-600 text-sm mt-1">Usually much faster during business hours</p>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div 
                class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="800"
              >
                <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  Connect on Social
                </h3>
                
                <div class="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/jessegauthier"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center p-4 rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200"
                    aria-label="Visit GitHub profile (opens in new tab)"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    data-aos-duration="400"
                  >
                    <svg class="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-200 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                    <span class="font-medium text-gray-700 group-hover:text-emerald-700 transition-colors duration-200">GitHub</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/jesse-gauthier-475a25168/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center p-4 rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200"
                    aria-label="Visit LinkedIn profile (opens in new tab)"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                    data-aos-duration="400"
                  >
                    <svg class="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-200 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span class="font-medium text-gray-700 group-hover:text-emerald-700 transition-colors duration-200">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div 
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10">
                <!-- Form Header -->
                <div class="mb-8">
                  <div class="inline-flex items-center px-4 py-2 mb-4 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
                    <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    Send Message
                  </div>
                  
                  <h2 class="text-3xl font-bold text-gray-900 mb-4">
                    Tell Me About Your 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                      Project
                    </span>
                  </h2>
                  
                  <p class="text-gray-600 leading-relaxed">
                    Fill out the form below and I'll get back to you as soon as possible. 
                    Let's create something amazing together!
                  </p>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name Field -->
                  <div 
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="600"
                  >
                    <label for="name" class="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.name }"
                      placeholder="Your full name"
                    />
                    <p v-if="errors.name" class="mt-2 text-sm text-red-600 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                      {{ errors.name }}
                    </p>
                  </div>

                  <!-- Email Field -->
                  <div
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="600"
                  >
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.email }"
                      placeholder="your.email@example.com"
                    />
                    <p v-if="errors.email" class="mt-2 text-sm text-red-600 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                      {{ errors.email }}
                    </p>
                  </div>

                  <!-- Subject Field -->
                  <div
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="600"
                  >
                    <label for="subject" class="block text-sm font-semibold text-gray-700 mb-3">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      required
                      class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                      :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.subject }"
                      placeholder="What's this about?"
                    />
                    <p v-if="errors.subject" class="mt-2 text-sm text-red-600 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                      {{ errors.subject }}
                    </p>
                  </div>

                  <!-- Message Field -->
                  <div
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="600"
                  >
                    <label for="message" class="block text-sm font-semibold text-gray-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      required
                      rows="6"
                      class="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                      :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.message }"
                      placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                    ></textarea>
                    <p v-if="errors.message" class="mt-2 text-sm text-red-600 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                      {{ errors.message }}
                    </p>
                  </div>

                  <!-- Submit Button -->
                  <div
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-duration="600"
                  >
                    <BaseButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      class="w-full group relative overflow-hidden shadow-lg hover:shadow-xl"
                      :disabled="isSubmitting"
                    >
                      <span v-if="!isSubmitting" class="relative z-10 flex items-center justify-center">
                        Send Message
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                      <span v-else class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    </BaseButton>
                  </div>
                </form>

                <!-- Success Message -->
                <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform translate-y-4 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform translate-y-0 opacity-100"
                  leave-to-class="transform translate-y-4 opacity-0"
                >
                  <div v-if="showSuccessMessage" class="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <h3 class="text-lg font-semibold text-emerald-800 mb-1">Message Sent!</h3>
                        <p class="text-emerald-700">
                          Thank you for reaching out! I'll get back to you within 24 hours. 
                          In the meantime, feel free to connect with me on social media.
                        </p>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
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
import BaseButton from '@/components/common/BaseButton.vue'

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

    // Hide success message after 8 seconds
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 8000)
  } catch (error) {
    console.error('Error submitting form:', error)
    // TODO: Show error message
  } finally {
    isSubmitting.value = false
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