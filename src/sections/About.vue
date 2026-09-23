<template>
  <section class="w-full h-full flex items-center justify-center p-6 sm:p-8">
    <button
      type="button"
      class="flip-card w-full max-w-2xl text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-2xl"
      :class="{ 'is-flipped': flipped }"
      :aria-pressed="flipped"
      aria-label="Flip between About and Background"
      @click="flipped = !flipped"
    >
      <span class="flip-card-inner">
        <!-- Front: About -->
        <span class="flip-card-face flex flex-col items-center text-center">
          <h2 class="text-4xl font-semibold mb-4">About Me</h2>
          <p class="opacity-80 text-lg">
            I build clean, reliable, and scalable software with a strong focus on
            user experience and efficient engineering.
          </p>
          <span class="mt-6 text-sm opacity-50">Tap to see my background →</span>
        </span>

        <!-- Back: Background -->
        <span class="flip-card-face flip-card-back flex flex-col items-center text-center">
          <h2 class="text-4xl font-semibold mb-4">Background</h2>
          <p class="opacity-80 text-lg">
            B.S. in Computer Science, minor in Data Science, from John Carroll
            University — a private Jesuit university in Cleveland. The past
            three years have gone into building a career in software
            development, specializing in enterprise integrations at SaaS
            companies and focusing on efficient, scalable solutions that help
            businesses connect and grow.
          </p>
          <p class="opacity-80 text-lg mt-4">
            Before that: four years as a student-athlete playing lacrosse at
            JCU — discipline, resilience, and teamwork that still shape how I
            lead, collaborate under pressure, and push through hard problems.
          </p>
          <span class="mt-6 text-sm opacity-50">← Tap to go back</span>
        </span>
      </span>
    </button>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const flipped = ref(false)
</script>

<style scoped>
.flip-card {
  perspective: 1600px;
  display: block;
}

.flip-card-inner {
  display: grid;
  width: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-card.is-flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-face {
  grid-area: 1 / 1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  padding: 1.5rem;
}

.flip-card-back {
  transform: rotateY(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .flip-card-inner {
    transition: none;
  }
}
</style>
