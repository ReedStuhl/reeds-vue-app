<template>
  <button @click="toggleDark" class="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
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
