<template>
  <section class="relative w-full h-full flex items-center justify-center p-8">
    <div class="text-center space-y-4">
      <h1 class="text-5xl font-bold">Reed Stuhlreyer</h1>
      <p class="text-xl opacity-80">Ownership • Adaptability • Execution</p>
    </div>

    <svg
      class="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.scroll-cue {
  animation: scroll-cue-bounce 2s ease-in-out infinite;
}

@keyframes scroll-cue-bounce {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue {
    animation: none;
  }
}
</style>
