<template>
  <div class="w-screen h-screen overflow-y-scroll snap-y snap-mandatory relative">
    <DarkModeToggle class="fixed top-6 left-6 z-50" />
    <NavDots />
    <Section id="hero"><Hero /></Section>
    <Section id="about"><About /></Section>
    <Section id="work"><Work /></Section>
    <Section id="skills"><Skills /></Section>
    <Section id="contact"><Contact /></Section>
  </div>
</template>

<script lang="ts" setup>
import Section from './components/Section.vue'
import NavDots from './components/NavDots.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'
import Hero from './sections/Hero.vue'
import About from './sections/About.vue'
import Work from './sections/Work.vue'
import Skills from './sections/Skills.vue'
import Contact from './sections/Contact.vue'
</script>
