<template>
  <section class="w-full h-full flex items-center justify-center p-6 sm:p-8">
    <div class="text-center max-w-xl">
      <h2 class="text-4xl font-semibold mb-4">Skills</h2>
      <div class="flex flex-wrap justify-center gap-3 text-lg">
        <span
          v-for="skill in skills"
          :key="skill"
          class="px-4 py-2 border rounded-lg dark:border-gray-600"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const skills = [
  'Python',
  'Version Control',
  'CI/CD',
  'AI/ML',
  'Java',
  'C#',
  'Enterprise Integrations',
  'REST APIs',
  'Web Services',
  'Salesforce',
  'Mulesoft',
]
</script>
