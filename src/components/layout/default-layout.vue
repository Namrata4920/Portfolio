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
            <li class="dark:text-secondary-500"><router-link to="/">Web</router-link></li>
            <li class="dark:text-secondary-500"><router-link to="/about">About</router-link></li>
            <li class="dark:text-secondary-500">
              <router-link to="/artandcraft">Art & Craft</router-link>
            </li>
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
      <div class="md:flex md:justify-between items-center text-center">
        <div class="py-2">
          <ul
            class="flex space-x-6 text-lg justify-center font-playpen underline underline-offset-4"
          >
            <li class="dark:text-secondary-500">
              <router-link to="/">Web</router-link>
            </li>
            <li class="dark:text-secondary-500">
              <router-link to="/about">About</router-link>
            </li>
            <li class="dark:text-secondary-500">
              <router-link to="/artandcraft">Art & Craft</router-link>
            </li>
            <!-- <li class="dark:text-secondary-500">
              <router-link to="/contact">Let's Chat</router-link>
            </li> -->
          </ul>
        </div>
        <div class="py-2">
          <p class="text-md">
            Copyright © 2025 | <span class="font-playpen font-bold">Namrata Sapra</span>
          </p>
        </div>

        <div class="flex justify-center align-center space-x-2 py-2">
          <a href="https://www.linkedin.com/in/namrata-sapra-4a141b1a0/" target="_blank">
            <IconLinkedin class="text-2xl" />
          </a>
          <a href="https://www.instagram.com/naamy.art_?igsh=MXNsNmR0MGJlOTQ4cg==" target="_blank">
            <IconInstagram class="text-2xl" />
          </a>
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
