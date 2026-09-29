<template>
  <button
    @click="toggleDark"
    class="flex items-center justify-center rounded-full p-2 sm:rounded-lg sm:px-4 sm:py-2 border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Mobile: icon only -->
    <svg
      v-if="isDark"
      class="w-5 h-5 sm:hidden"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
      />
    </svg>
    <svg
      v-else
      class="w-5 h-5 sm:hidden"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>

    <!-- Desktop: text label -->
    <span class="hidden sm:inline">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Initialize dark mode based on saved preference
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>
