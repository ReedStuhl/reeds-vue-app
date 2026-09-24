<template>
  <section class="w-full h-full flex items-center justify-center p-6 sm:p-8">
    <div class="max-w-xl text-center space-y-6">
      <h2 class="text-4xl font-semibold">Always happy to connect</h2>

      <!-- Email link -->
      <a
        href="mailto:reedstuhlreyer@gmail.com"
        class="inline-block text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      >
        reedstuhlreyer@gmail.com
      </a>

      <!-- Social icons row -->
      <div
        class="flex items-center justify-center gap-6 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 px-6 py-4 rounded-xl"
      >
        <a
          href="https://www.linkedin.com/in/reed-stuhlreyer"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          class="hover:scale-110 transition"
        >
          <img :src="linkedinIcon" class="w-10 h-10 opacity-90 hover:opacity-100" />
        </a>
        <a
          href="https://github.com/ReedStuhl"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          class="hover:scale-110 transition"
        >
          <img :src="githubIcon" class="w-10 h-10 opacity-90 hover:opacity-100" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import githubIcon from "@/assets/icons/github-color-svgrepo-com.svg";
import linkedinIcon from "@/assets/icons/linkedin-color-svgrepo-com.svg";
</script>
