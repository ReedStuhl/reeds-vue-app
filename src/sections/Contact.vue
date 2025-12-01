<template>
  <section class="w-full h-full flex items-center justify-center p-8">
    <div class="max-w-xl text-center space-y-6">
      <h2 class="text-4xl font-semibold">Contact</h2>

      <p class="opacity-80 text-lg">Let's build something together.</p>

      <!-- Email link -->
      <a
        href="mailto:reedstuhlreyer@gmail.com"
        class="text-blue-400 text-xl font-semibold hover:underline"
      >
        Email Me
      </a>

      <!-- Social icons row -->
      <div class="flex items-center justify-center gap-6 pt-3 bg-black/90 px-6 py-4 rounded-xl">
        <a
          href="https://www.linkedin.com/in/reed-stuhlreyer"
          target="_blank"
          class="hover:scale-110 transition"
        >
          <img :src="linkedinIcon" class="w-10 h-10 opacity-90 hover:opacity-100" />
        </a>
        <a
          href="https://github.com/reedstuhl"
          target="_blank"
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
