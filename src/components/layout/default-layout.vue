<template>
  <div :class="themeClass">
    <header
      class="bg-primary-100 font-playpen dark:bg-secondary-100 border-b border-black dark:border-secondary-400 pr-4"
    >
      <div class="mx-auto flex justify-between items-center">
        <div>
          <ul class="flex space-x-6 text-lg items-center">
            <div
              class="border-r bg-primary-500 text-white dark:bg-secondary-500 dark:text-secondary-100 h-14 w-14 flex items-center justify-center"
            >
              NS
            </div>
            <li class="dark:text-secondary-500">Web</li>
            <li class="dark:text-secondary-500">About</li>
            <li class="dark:text-secondary-500">Art & Craft</li>
          </ul>
        </div>

        <div class="flex space-x-2 items-center">
          <IconThemeLightDark class="text-xl" />
          <button
            @click="toggleTheme"
            class="dark:text-secondary-500 hover:underline underline-offset-4"
          >
            Theme
          </button>
        </div>
      </div>
    </header>
    <div class="h-1 bg-primary-200 dark:bg-secondary-600"></div>
    <router-view></router-view>

    <footer
      class="bg-primary-100 dark:bg-secondary-100 dark:text-secondary-500 border-t border-black dark:border-secondary-400 p-6"
    >
      <div class="flex justify-between items-center">
        <div>
          <ul class="flex space-x-6 text-lg items-center font-playpen underline underline-offset-4">
            <li class="dark:text-secondary-500">Web</li>
            <li class="dark:text-secondary-500">About</li>
            <li class="dark:text-secondary-500">Art & Craft</li>
            <li class="dark:text-secondary-500">Let's Chat</li>
          </ul>
        </div>
        <div>
          <p class="text-md">
            Copyright © 2024 | <span class="font-playpen font-bold">Namrata Sapra</span>
          </p>
        </div>

        <div class="flex justify-center align-center space-x-2">
          <router-link to="https://www.linkedin.com/in/namrata-sapra-4a141b1a0/">
            <IconLinkedin class="text-2xl" />
          </router-link>
          <router-link>
            <IconInstagram class="text-2xl" />
          </router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const themeState = ref('light')

const toggleTheme = () => {
  themeState.value = themeState.value === 'light' ? 'dark' : 'light'
}

const themeClass = computed(() => {
  // Add the 'dark' class if dark mode is active
  return themeState.value === 'light' ? '' : 'dark'
})
</script>
