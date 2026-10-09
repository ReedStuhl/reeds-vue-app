<template>
  <section class="w-full h-full flex flex-col justify-center items-center p-6 sm:p-8">
    <h2 class="text-4xl font-semibold mb-4 sm:mb-6 text-center">Projects</h2>

    <div
      ref="carousel"
      :class="[
        'w-full max-w-md min-h-0 flex-1 md:flex-none overflow-x-auto flex space-x-6 hide-scrollbar',
        isAnimating ? '' : 'snap-x snap-mandatory',
      ]"
    >
      <div
        v-for="(project, index) in loopProjects"
        :key="`${project.id}-${index}`"
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
import { nextTick, onMounted, ref } from "vue";
import { projects } from "@/data/projects";

const carousel = ref<HTMLDivElement | null>(null);
const isAnimating = ref(false);

// Pad the real list with a clone of the last card up front and a clone of
// the first card at the end, so the scroll can keep moving in the direction
// the user clicked instead of jumping backwards to loop.
const loopProjects = [
  projects[projects.length - 1],
  ...projects,
  projects[0],
];
const firstRealIndex = 1;
const lastRealIndex = projects.length;
let currentIndex = firstRealIndex;

const getCards = () =>
  Array.from(carousel.value?.querySelectorAll<HTMLElement>(".snap-center") ?? []);

// card.offsetLeft is relative to the nearest *positioned* ancestor, which
// isn't this scroll container, so it doesn't line up with scrollLeft.
// Measure each card's position within the scrollable content directly.
const cardLeft = (card: HTMLElement) => {
  const el = carousel.value;
  if (!el) return 0;
  const containerRect = el.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  return cardRect.left - containerRect.left + el.scrollLeft;
};

const jumpTo = (index: number) => {
  const card = getCards()[index];
  if (!card || !carousel.value) return;
  carousel.value.scrollLeft = cardLeft(card);
};

const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

// Animate scrollLeft ourselves rather than relying on scrollTo/scroll-behavior:
// with scroll-snap active, the browser's own snap-correction fights a native
// smooth scroll mid-flight and the carousel overshoots past the target card.
const animateScrollTo = (targetLeft: number, duration = 400) =>
  new Promise<void>((resolve) => {
    const el = carousel.value;
    if (!el) return resolve();
    const start = el.scrollLeft;
    const delta = targetLeft - start;
    if (delta === 0) return resolve();
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      el.scrollLeft = start + delta * easeInOutQuad(progress);
      if (progress < 1) requestAnimationFrame(step);
      else resolve();
    };
    requestAnimationFrame(step);
  });

// Resync in case the user swiped or trackpad-scrolled between button clicks,
// so the next animation starts from where the carousel actually is.
const nearestIndex = () => {
  const el = carousel.value;
  if (!el) return currentIndex;
  let closest = currentIndex;
  let closestDistance = Infinity;
  getCards().forEach((card, index) => {
    const distance = Math.abs(cardLeft(card) - el.scrollLeft);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = index;
    }
  });
  return closest;
};

const scroll = async (direction: number) => {
  if (isAnimating.value || !carousel.value) return;
  currentIndex = nearestIndex();
  const targetIndex = currentIndex + direction;
  const card = getCards()[targetIndex];
  if (!card) return;

  isAnimating.value = true;
  await animateScrollTo(cardLeft(card));

  if (targetIndex === 0) {
    currentIndex = lastRealIndex;
    jumpTo(currentIndex);
  } else if (targetIndex === loopProjects.length - 1) {
    currentIndex = firstRealIndex;
    jumpTo(currentIndex);
  } else {
    currentIndex = targetIndex;
  }
  isAnimating.value = false;
};

onMounted(() => {
  nextTick(() => jumpTo(firstRealIndex));
});
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
</style>
