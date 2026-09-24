<template>
  <section class="w-full h-full flex flex-col justify-center items-center p-6 sm:p-8">
    <h2 class="text-4xl font-semibold mb-4 sm:mb-6 text-center">Work</h2>

    <div
      ref="carousel"
      class="w-full max-w-md min-h-0 flex-1 md:flex-none overflow-x-auto snap-x snap-mandatory flex space-x-6 hide-scrollbar scroll-smooth"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="flex-shrink-0 w-full snap-center border rounded-xl shadow-sm p-5 sm:p-6 hover:shadow-md transition overflow-y-auto"
      >
        <h3 class="text-xl sm:text-2xl font-bold mb-2">{{ project.title }}</h3>
        <p class="opacity-70 mb-4 text-sm sm:text-base">{{ project.description }}</p>
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          class="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition inline-block"
        >
          View
        </a>
      </div>
    </div>

    <!-- Desktop navigation arrows -->
    <div class="hidden md:flex justify-center mt-4 space-x-4 flex-shrink-0">
      <button
        @click="scroll(-1)"
        class="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        ‹
      </button>
      <button
        @click="scroll(1)"
        class="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        ›
      </button>
    </div>

    <!-- Mobile swipe hint -->
    <p class="md:hidden mt-3 text-xs opacity-50 flex-shrink-0">Swipe for more →</p>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { projects } from "@/data/projects";

const carousel = ref<HTMLDivElement | null>(null);

// Scroll one card width at a time
const scroll = (direction: number) => {
  if (!carousel.value) return;
  const card = carousel.value.querySelector<HTMLElement>(".snap-center");
  if (!card) return;
  const cardWidth =
    card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
  carousel.value.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
};
</script>

<style scoped>
/* Hide horizontal scrollbar */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Optional: smooth momentum for swipe */
.scroll-smooth {
  scroll-behavior: smooth;
}
</style>
