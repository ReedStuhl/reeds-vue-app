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
        v-for="(project, index) in displayProjects"
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
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import { projects } from "@/data/projects";

const carousel = ref<HTMLDivElement | null>(null);
const isAnimating = ref(false);

// The looping arrows are desktop-only (see the `hidden md:flex` below), so
// only pad the list with edge clones there. On mobile the swipe gesture
// scrolls natively with no completion hook to correct a landing on a clone,
// so it just gets the plain list and hits a natural wall at each end.
const isDesktop = ref(false);
const loopProjects = [
  projects[projects.length - 1],
  ...projects,
  projects[0],
];
const displayProjects = computed(() => (isDesktop.value ? loopProjects : projects));
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

// If the landing index is a cloned edge card, jump instantly (no animation)
// to the matching real card so the next move can keep going the same way.
const resolveWrap = (index: number) => {
  if (index === 0) {
    currentIndex = lastRealIndex;
    jumpTo(currentIndex);
  } else if (index === loopProjects.length - 1) {
    currentIndex = firstRealIndex;
    jumpTo(currentIndex);
  } else {
    currentIndex = index;
  }
};

const scroll = async (direction: number) => {
  if (isAnimating.value || !carousel.value) return;
  currentIndex = nearestIndex();
  const targetIndex = currentIndex + direction;
  const card = getCards()[targetIndex];
  if (!card) return;

  isAnimating.value = true;
  await animateScrollTo(cardLeft(card));
  resolveWrap(targetIndex);
  isAnimating.value = false;
};

let mediaQuery: MediaQueryList | undefined;

const applyMode = () => {
  nextTick(() => {
    if (isDesktop.value) {
      currentIndex = firstRealIndex;
      jumpTo(firstRealIndex);
    } else if (carousel.value) {
      carousel.value.scrollLeft = 0;
    }
  });
};

const handleMediaChange = (e: MediaQueryListEvent) => {
  isDesktop.value = e.matches;
  applyMode();
};

onMounted(() => {
  mediaQuery = window.matchMedia("(min-width: 768px)");
  isDesktop.value = mediaQuery.matches;
  mediaQuery.addEventListener("change", handleMediaChange);
  applyMode();
});

onUnmounted(() => {
  mediaQuery?.removeEventListener("change", handleMediaChange);
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
