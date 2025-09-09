<script setup lang="ts">
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import GitHubStatsSection from '@/components/sections/GitHubStatsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import CertificationsSection from '@/components/sections/CertificationsSection.vue'
</script>

<template>
  <DefaultLayout>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <GitHubStatsSection />
    <CertificationsSection />
    <ExperienceSection />
    <ProjectsSection />
  </DefaultLayout>
</template>
