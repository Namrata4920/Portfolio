<template>
  <!-- <div v-for="item in items" :key="item.id">
    <div
      class="bg-primary-500 dark:bg-secondary-500 text-white dark:text-secondary-200 px-4 py-2 text-lg"
    >
      {{ item.name }}
    </div>
  </div> -->
  <div class="grid grid-cols-4 divide-y divide-black dark:divide-secondary-400">
    <div
      v-for="item in items"
      :key="item.id"
      class="text-lg font-semibold dark:text-secondary-500 md:px-12 px-8 py-5 text-center"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array
  }
})
</script>
