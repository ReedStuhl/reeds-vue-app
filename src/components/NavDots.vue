<template>
  <div
    class="fixed top-1/2 right-6 transform -translate-y-1/2 flex flex-col gap-4 z-50"
  >
    <button
      v-for="section in sections"
      :key="section.id"
      @click="scrollToSection(section.id)"
      :class="[
        'w-4 h-4 rounded-full border transition',
        currentSection === section.id ? 'bg-black' : 'bg-white',
      ]"
    ></button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

interface Section {
  id: string;
}

const sections: Section[] = [
  { id: "hero" },
  { id: "about" },
  { id: "work" },
  { id: "skills" },
  { id: "contact" },
];

const currentSection = ref("hero");

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

// Use Intersection Observer instead of manual scroll
let observer: IntersectionObserver;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of section is visible
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection.value = entry.target.id;
      }
    });
  }, options);

  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped></style>
