<template>
  <section class="w-full h-full flex items-center justify-center p-6 sm:p-8">
    <div class="text-center max-w-xl">
      <h2 class="text-4xl font-semibold mb-4">Skills</h2>
      <div class="flex flex-wrap justify-center gap-3 text-lg">
        <div
          v-for="(group, index) in skills"
          :key="group.category"
          class="relative"
          @mouseenter="openIndex = index"
          @mouseleave="openIndex = null"
        >
          <button
            type="button"
            class="px-4 py-2 border rounded-lg dark:border-gray-600 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            {{ group.category }}
          </button>

          <div
            v-show="openIndex === index"
            class="skill-popover absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 rounded-lg border bg-white p-3 text-left text-base shadow-lg dark:border-gray-600 dark:bg-gray-900"
          >
            <ul class="space-y-1">
              <li v-for="item in group.items" :key="item" class="opacity-80">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const skills = [
  {
    category: 'AI & Automation',
    items: ['AI Agents', 'MCP Servers', 'Context Engineering', 'LLM Workflows'],
  },
  {
    category: 'Solutions & Strategy',
    items: ['Systems Thinking', 'Integration Design', 'Technical Translation', 'Discovery & Scoping'],
  },
  {
    category: 'Data & Analytics',
    items: ['SQL', 'Python', 'Data Modeling', 'BI Tools'],
  },
  {
    category: 'Engineering & Delivery',
    items: ['Object Oriented Design', 'Functional Programming', 'Agile', 'SDLC'],
  },
]

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

function handleClickOutside(event: MouseEvent) {
  if (!(event.target as HTMLElement).closest('.relative')) {
    openIndex.value = null
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
.skill-popover {
  animation: skill-pop-in 0.15s ease-out;
}

@keyframes skill-pop-in {
  from {
    opacity: 0;
    transform: translate(-50%, -4px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-popover {
    animation: none;
  }
}
</style>
